---
title: Clickjacking - 点击劫持漏洞技术内幕
description: Clickjacking-点击劫持漏洞技术内幕Clickjacking是OWASP_NYC_AppSec_2008_Conference的一个保密的议题，以下是一些攻击的描叙：　　当你访问一个恶意网站的时候，攻击者可以控制你的浏览器对一些链接的访问，这个漏洞影响到几乎所有浏览器以及所有版本的Flash等浏览器相关的第三方软件，除非你使用lynx一类的字符浏览器。
date: 2008-10-18 09:22:28
category: 技术文章
tags: ['Clickjacking', '技术类']
post_id: 647
alias: Clickjacking-neimu
ViewNums: 2997
---

**[Clickjacking - 点击劫持漏洞技术内幕](/blog/clickjacking-neimu)**

[Clickjacking](/blog/clickjacking-neimu)是OWASP_NYC_AppSec_2008_Conference的一个保密的议题，以下是一些攻击的描叙：

当你访问一个恶意网站的时候，攻击者可以控制你的[浏览器](/tags/%E6%B5%8F%E8%A7%88%E5%99%A8)对一些链接的访问，这个[漏洞](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF)影响到几乎所有浏览器以及所有版本的Flash等浏览器相关的第三方软件，除非你使用lynx一类的字符浏览器。

这个漏洞与JavaScript无关，即使你关闭浏览器的JavaScript功能也无能为力。事实上这是浏览器工作原理中的一个缺陷。一个恶意网站能让你在毫不知情的情况下点击任意链接，任意按钮或网站上的任意东西。

该漏洞用到DHTML，使用防frame代码可以保护你不受跨站点攻击，但攻击者仍可以强迫你点击任何链接。你所做的任何点击都被引导到恶意链接上，所以，那些Flash游戏将首当其冲。

最近国外的安全研究人员已经放出了该漏洞的攻击例子，以及部分细节，这种攻击是利用的CSS样式表的网页渲染功能配合IFRAME帧框架页进行的一种钓鱼网页攻击。这个攻击涉及网页设计相关的技巧，步骤是：

1. 在第三方站点的网页先用IFRAME引入一个需要攻击的页面,将这个引入的框架页长宽设置成整个浏览窗口的大小。
2. 在网页中使用一个CSS滤镜，将整个网页用白色滤镜遮蔽。
3. 使用span或div设计一个层伪造一个表单提交按钮、输入框或者链接，然后利用CSS样式表设置层在网页中的位置，遮蔽住需要劫持的网页按钮、输入框或者链接。

攻击者使用这种方法可以制作钓鱼网页，诱导用户在不察觉的情况下，完成一些受攻击WEB程序的敏感操作。

漏洞危害：

攻击者可以制作一个精美的钓鱼网页，让用户在不知不觉中被控制摄像头，或完成密码修改、网银转帐等的恶意操作，给用户造成巨大的损失。

利用录像：[http://www.youtube.com/v/gxyLbpldmuU&hl=zh_CN&fs=1](http://www.youtube.com/v/gxyLbpldmuU%26hl%3Dzh_CN%26fs%3D1 "http://www.youtube.com/v/gxyLbpldmuU&hl=zh_CN&fs=1")

From:IT专家网

