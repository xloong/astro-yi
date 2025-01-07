---
title: 挖出土豆网土豆视频FLV文件实际地址
description: from：独来读网功能：挖出土豆网土豆视频FLV文件实际地址演示：http://www.51du.cn/tudou.phpPHP源码：................................
date: 2007-11-16 20:51:21
category: 网络资源
tags: ['工具共享', '视频']
post_id: 251
alias: tudou-FLV
ViewNums: 5617
---
from：独来读网

功能：挖出土豆网土豆视频FLV文件实际地址
演示：[http://www.51du.cn/tudou.php](http://www.51du.cn/tudou.php "http://www.51du.cn/tudou.php")
PHP源码：
```php
<?
/*
e.g http://www.51du.cn/tudou.php
*/
ini_set("display_errors",0);
?>
<title>挖土豆-独来读网</title>
<form method="get" action="">土豆播放页地址:<input type="text" value="<? echo $q;?>" name="q" /><input type="submit" value="挖土豆喽!" /></form>
<?php
$q=urldecode($_GET['q']);
 if(!emptyempty($_GET['q'])) {
 htmlentities($_GET['q']);
 $html = file_get_contents($q);
 preg_match('/<TITLE>(.*?)- 视频/i',$html,$t);
 preg_match('/iid=(d+)/',$html,$m);
 $html=file_get_contents('http://www.tudou.com/player/v.php?id='.$m[1]);
 preg_match('/http:(.*?).flv/i',$html,$m);

 //$flv = $m[1];
 if (emptyempty($m[1])) {
 echo "挖不出来,如果输入的地址正确,请再挖挖!";
 }
 else {
 echo "<b>".$t[1]."</b>"."挖出来了,FLV地址是:<br />".$m[0];
 }
 }
 else {
 echo '请输入观看页面的网址:例如"http://www.tudou.com/programs/view/vZriVsqk-xc/"';
 }
?>
```