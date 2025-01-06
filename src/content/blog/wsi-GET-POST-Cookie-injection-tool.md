---
title: wsi - 支持GET、POST、Cookie注入扫描和注入工具
description: wsi是注入工具，支持自定义数据包，可自定义提交数据包格式，程序自动替换“***”为注入的SQL语句，只支持Accesshwis.exe为扫描工具，扫描一个网站的注入点，深度扫描网站两层，可扫描get,post,cookie注入点
date: 2008-05-19 11:05:58
category: 安全工具
tags: ['注入', '数据库', '工具共享']
post_id: 487
alias: wsi-GET-POST-Cookie-injection-tool
ViewNums: 8223
---

**wsi**是[注入](/tags/%E6%B3%A8%E5%85%A5)工具，支持自定义数据包，可自定义提交数据包格式，程序自动替换“***”为注入的SQL语句，只支持Access
hwis.exe为扫描[工具](/tags/%E5%B7%A5%E5%85%B7%E5%85%B1%E4%BA%AB)，扫描一个网站的注入点，深度扫描网站两层，可扫描get,post,cookie注入点
Usage: hwsi <Page> <MaxThread>
如:
hwis www.lyhero.com 10
hwis www.shangdu.com

如果扫描网址为www.abc.com
那么扫描的外部链接为只包含abc.com的链接
先对网站进行爬行，然后提取出带参数提交的链接，然后进行GET，POST，Cookie三种方式的注入分析
存在注入点的，显示成红色

程序会自动过滤台下链接
news.asp?id=13
news.asp?id=3
news.asp?id=4
只提取出一个，为了更快速

行动-》 wsi
usage: wsi <-v> <-h Host> <-p Port> <-d DataFile> | <-i Injection>
         <-m Match> <-t MaxThread> <-c RecordIndex>
         <Table Dict File> <Field Dict File>
   -v  is be verbose
   -h  is host to injection
   -p  is port to connect
   -d  is datafile to send
   -i  is injection url to exploit
   -m  is string to match when normal response
   -t  is max threads to create
   -c  is the record index in table to crack
Use *** Replace SQL to Fixed :
   wsi /i http://www.abc.com/index.asp?id=1*** /m cpp
   wsi /h www.abc.com /d data.txt /m cpp /c 1

**下载地址：**[scan.rar](/blog/download.asp?id=82

作者：CoolDiyer
来源：[红狼](http://www.wolfexp.net)

