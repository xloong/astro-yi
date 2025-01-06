---
title: 黑色技术 Spider 1.0 爬行蜘蛛
description: 能够快速的爬行出网站的所有文件..页面..或者指定的文件..扫描关键字.象搜索引擎一样去爬行指定网站所有文件。寻找注射点,寻找后台,寻找资料的好帮手。MD5：D18CF5A7A6F49D1C878165410562454A
date: 2008-03-27 08:38:02
category: 安全工具
tags: ['spider', '下载Download', '工具共享']
post_id: 425
alias: heisejishu-Spider-1.0
ViewNums: 5865
---

来源：[红狼](http://www.wolfexp.net/2008/)

能够快速的爬行出网站的所有文件..页面..或者指定的文件..扫描关键字.
象搜索引擎一样去爬行指定网站所有文件。寻找注射点,寻找后台,寻找资料的好帮手。
MD5：D18CF5A7A6F49D1C878165410562454A

使用语法:
例:
Spider -x -i www.rootkit.com.cn
注:命令参数区分大小写

Usage: spider [Arguments]
Arguments:
-I 从网页内容或者数据库里检索出包含关键字的Url.
or
-O [hostname (optional)] 如果指定一个主机名,就显示拥有引索内容的页面.
or
-i [start url] (*) -i [start url] (*) (输入要爬行的网址Url,域名,或者IP)
-t [修改默认线程] (默认: 20)
-s (单一域名(主机)模式)
-m [限制爬行最深目录或者网页数量] [默认: 0 (无限制)]
-l (限制每个站点被扫描的最大数) [默认: 0 (无限制)]
-c (限制每秒爬行的最大数) [默认: 0 (无限制)]
-b (限制每个站点下载宽带消耗.以 bytes 为单位) [默认: 0 (无限制)]
-E (限制下载页面时最大的错误代码数量) [默认: 0 (无限制)]
-e (不扫描外部主机或网站)
-F (使用自由引索模式)
-x (保存所有页面结果 (会影响速度)
-z (压缩保存所有页面和结果 (会影响速度)
-X 设置蜘蛛程序所爬行的更大范围 (eg. -X pdf,swf,doc)
-u (仅仅爬行最新更新的网页)
-T (测试模式)
-r [0-1-2](保存页面之间的关系 (Default: 1))
0:不保存页面之间的关系
1: 仅仅保存和主机有关系的页面
2: 保存所有页面的联系(包括非外部连接)
-n 不扫描默认主页.如index.asp
-d [0-999000 ms (延迟模式)] (Default: 0)
-S [TCP PORT] (使用所有服务器支持的命令行来爬行)
-o [spider Own Index] (显示所有引索页面关系)
--
-p [path] (使用某个配置文件来扫描 (eg.: "/etc/spider/spider.conf"))

(*) Arguments needed

下载地址：[spider.rar](/blog/download.asp?id=64

