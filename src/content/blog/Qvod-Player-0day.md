---
title: Qvod Player播放器0day漏洞曝光
description:
date: 2008-01-14 09:42:12
category: 漏洞信息
tags: ['0day', '漏洞信息']
post_id: 332
alias: Qvod-Player-0day
ViewNums: 4867
---

一、事件分析：

　　今日，超级巡警团队接到网友举报，称Qvod Player播放器存在[漏洞](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF)，并发来测试文件。经分析该漏洞发生在Qvod Player的一个activex控件上，当安装了Qvod Player的用户在浏览到[黑客](http://www.15897.com/)精心构造的包含恶意代码的网页后，会下载任意程序在用户系统上以当前用户上下文权限运行。

影响版本：Qvod Player 2.0

构造的漏洞利用网页截图：

![](http://img.itdigger.com/upload/2008/01/11/163103906.jpg "点击在新窗口打开")

二、解决方案
　　     1、将下面内容保存为.reg文件，双击导入注册表：
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINESOFTWAREMicrosoftInternet ExplorerActiveX Compatibility{F3D0D36F-23F8-4682-A195-74C92B03D4AF}]
"Compatibility Flags"=dword:00000400
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
　　     2、超级巡警稍后将升级第三方漏洞补丁库，添加此漏洞并提供解决方案。

特别感谢：Greysign提交此漏洞

关于Qvod Player播放器：目前最流行的BT播放器

