---
title: PJBlog 3.0.6.170 Action.asp页面跨站脚本攻击漏洞
description: PJBlog3.0.6.170Action.asp页面跨站脚本攻击漏洞影响版本:PJBlog3.0.6.170程序介绍:PJBlog一套开源免费的中文个人博客系统程序，采用asp+Access的技术，具有相当高的运作效能以及更新率，也支持目前Blog所使用的新技术。漏洞分析:在文件Action.asp中：
date: 2009-05-10 09:11:44
category: 漏洞信息
tags: ['PJblog', 'XSS', '漏洞信息']
post_id: 859
alias: PJBlog-3.0.6.170-Action.asp-XSS
ViewNums: 2517
---

[PJBlog 3.0.6.170 Action.asp页面跨站脚本攻击漏洞](/blog/pjblog-306170-actionasp-xss)

影响版本:[PJBlog 3.0.6.170](/blog/pjblog-306170-actionasp-xss)

**程序介绍:**
[PJBlog](/tags/PJblog)一套开源免费的中文个人博客系统程序，采用asp+Access的技术，具有相当高的运作效能以及更新率，也支持目前[Blog](/blog/)所使用的新技术。

**漏洞分析:**
在文件[Action.asp](/blog/pjblog-306170-actionasp-xss)中：

elseif request("action")="type1" then //第23行
dim  mainurl,main,mainstr
mainurl=request("mainurl")
main=trim(checkstr(request("main")))
response.clear()
mainstr=""
If  Len(memName)>0 Then mainstr=mainstr&"<img  src=""images/download.gif"" alt=""下载文件"" style=""margin:0px 2px -4px 0px""/> <a href="""&mainurl&"""  target=""_blank"">"&main&"</a>"

程序对于输出变量mainurl和main没有过滤导致xss漏洞的产生。在同文件42行代码类似

**漏洞利用:**[http://www.target.com/Action.asp?action=type1&mainurl=xxx">[XSS]](/blog/pjblog-306170-actionasp-xss)

**解决方案:**
厂商补丁：
PJblog
-------
目前厂商已经发布了升级补丁以修复这个安全问题，请到厂商的主页下载：
<http://bbs.pjhome.net/thread-52214-1-1.html>

**信息来源:**
<*来源: Bug.Center.Team [http://www.cnbct.org](http://www.cnbct.org/)
链接: <http://wavdb.com/vuln/1408> *>

相关：
[PJBlog 3.0.6.170 cls_logAction.asp SQL注入漏洞](/blog/pjblog-306170-cls_logactionasp-sqlinjection)
[PJBlog 3.0.6.170 Getarticle.asp页面跨站脚本攻击XSS漏洞](/blog/pjblog-306170-getarticleasp-xss)
[PJblog V3.0 0day Vbs版漏洞利用工具exploit](/blog/pjblog-v30-0day-vbs-exploit)

