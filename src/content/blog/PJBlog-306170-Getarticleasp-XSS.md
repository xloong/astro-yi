---
title: PJBlog 3.0.6.170 Getarticle.asp页面跨站脚本攻击XSS漏洞
description: PJBlog3.0.6.170Getarticle.asp页面跨站脚本攻击XSS漏洞影响版本:PJBlog3.0.6.170程序介绍:PJBlog是一套开源免费的中文个人博客系统程序，采用asp+Access的技术，具有相当高的运作效能以及更新率，也支持目前Blog所使用的新技术。漏洞分析:在文件Getarticle.asp中：……
date: 2009-05-10 09:27:17
category: 漏洞信息
tags: ['PJblog', 'XSS', '漏洞信息']
post_id: 860
alias: PJBlog-3.0.6.170-Getarticle.asp-XSS
ViewNums: 2547
---

[PJBlog 3.0.6.170 Getarticle.asp页面跨站脚本攻击XSS漏洞](/blog/pjblog-306170-getarticleasp-xss)

影响版本:[PJBlog 3.0.6.170](/blog/pjblog-306170-getarticleasp-xss)

**程序介绍:**
[PJBlog](/tags/PJblog)是一套开源免费的中文个人博客系统程序，采用asp+Access的技术，具有相当高的运作效能以及更新率，也支持目前Blog所使用的新技术。

**漏洞分析:**
在文件[Getarticle.asp](/blog/pjblog-306170-getarticleasp-xss)中：

blog_postFile = request("blog_postFile")  //第14行
......
If Ifmore or thispage<>1 then  //第100行
OutPut=OutPut&"<br/><strong>模式:</strong> <a  style='cursor:pointer'  onclick=check('Getarticle.asp?id="&id&"&act=more&blog_postFile="&blog_postFile&"','wbc_tag','wbc_tag')  >全部显示[共"&total_rela&"个相关文章]</a></div>"

程序没有对输出变量blog_postFile做过滤导致[XSS漏洞](/tags/XSS)的产生。

**漏洞利用:**
[http://www.target.com/Getarticle.asp?id=1&blog_postFile=xxxx%22%20)></a>[XSS]&page=2](/blog/pjblog-306170-getarticleasp-xss)

**解决方案:**
厂商补丁：
PJblog
-------
目前厂商已经发布了升级补丁以修复这个安全问题，请到厂商的主页下载：
<http://bbs.pjhome.net/thread-52214-1-1.html>

**信息来源:**
<*来源: Bug.Center.Team [http://www.cnbct.org](http://www.cnbct.org/)
链接: <http://wavdb.com/vuln/1409> *>

相关：
[PJBlog 3.0.6.170 cls_logAction.asp SQL注入漏洞](/blog/pjblog-306170-cls_logactionasp-sqlinjection)
[PJBlog 3.0.6.170 Action.asp页面跨站脚本攻击漏洞](/blog/pjblog-306170-actionasp-xss)
[PJblog V3.0 0day Vbs版漏洞利用工具exploit](/blog/pjblog-v30-0day-vbs-exploit)

