---
title: 阻止网页挂马的若干工具收藏
description: 上个blog中提到国内网站被挂马的常见原因是SQL注入攻击。那么，除了在Web开发的时候注意以外，有什么有效的工具可以对抗SQL注入攻击？今天，微软和惠普的安全部门合作发布了三个工具，分别是：
date: 2008-06-30 10:52:28
category: 安全工具
tags: ['木马', '安全', '工具共享']
post_id: 536
alias: MSCASI-Scrawlr-URLScan-3.0-Beta
ViewNums: 3484
---

上个[blog](/blog/)中提到国内网站被挂马的常见原因是SQL[注入](/tags/%E6%B3%A8%E5%85%A5)攻击。

那么，除了在Web开发的时候注意以外，有什么有效的工具可以对抗SQL注入攻击？

今天，微软和惠普的[安全](/tags/%E5%AE%89%E5%85%A8)部门合作发布了三个工具，分别是：

微软SQL注入攻击源码扫描器：**Microsoft Source Code Analyzer for SQL Injection (MSCASI)**。这个工具给网站开发人员使用。是一个静态扫描ASP代码的工具，可以查找发现第一类和第二类的SQL注入攻击漏洞。

工具下载地址：[http://support.microsoft.com/kb/954476](http://support.microsoft.com/kb/954476 "http://support.microsoft.com/kb/954476")

惠普的 **Scrawlr**工具。这个工具可以被网站的维护人员使用，是一个黑箱扫描[工具](/tags/%E5%B7%A5%E5%85%B7%E5%85%B1%E4%BA%AB)，不需要[源代码](/tags/%E6%BA%90%E7%A0%81)。指定起始URL开始扫描。确定是不能准确定位代码的漏洞（因为是黑箱测试）。

工具下载地址：[http://www.communities.hp.com/securitysoftware/blogs/spilabs/archive/2008/06/23/finding-sql-injection-with-scrawlr.aspx](http://www.communities.hp.com/securitysoftware/blogs/spilabs/archive/2008/06/23/finding-sql-injection-with-scrawlr.aspx "http://www.communities.hp.com/securitysoftware/blogs/spilabs/archive/2008/06/23/finding-sql-injection-with-scrawlr.aspx")

微软的**URLScan 3.0 Beta**。这个工具可以被网站的维护人员使用。它是一个输入过滤工具。如果你发现网站被SQL注入工具，你可以在一边修补代码[漏洞](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF)的同时，使用这个攻击在过滤掉恶意的输入。当然，修补代码中的漏洞是完全避免SQL注入攻击的真正解决方案。

工具下载地址：[http://blogs.iis.net/wadeh/archive/2008/06/05/urlscan-v3-0-beta-release.aspx](http://blogs.iis.net/wadeh/archive/2008/06/05/urlscan-v3-0-beta-release.aspx "http://blogs.iis.net/wadeh/archive/2008/06/05/urlscan-v3-0-beta-release.aspx")

SWI的博客上有更进一步的描述。[http://blogs.technet.com/swi/archive/2008/06/24/new-tools-to-block-and-eradicate-sql-injection.aspx](http://blogs.technet.com/swi/archive/2008/06/24/new-tools-to-block-and-eradicate-sql-injection.aspx "http://blogs.technet.com/swi/archive/2008/06/24/new-tools-to-block-and-eradicate-sql-injection.aspx")

那么，这三个工具是如何配合使用的？下面给出一个例子。

步骤一：网站的维护人员使用Scrawlr扫描网站，检查是否存在SQL注入漏洞

步骤二：发现存在漏洞后，通知开发人员。开发人员使用MSCASI对ASP源码静态扫描来确定代码中什么地方导致的SQL注入攻击漏洞。

步骤三：在开发人员修补漏洞的同时，维护人员可以使用URLScan来过滤可能的恶意输入，以确保网站的安全。

这三个工具的配合使用可以很大程度上减少网站被挂马的可能。说实话，现在被挂马的网站实在是太多了！

from：褚诚云blog

