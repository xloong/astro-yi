---
title: 伪装成Google Bot 访问需要登陆才能看的页面
description: 为什么有的网站能够被Google搜索到，点击链接进去以后却显示“未注册”、“还不是会员”呢？这是一种网站专门针对对搜索引擎优化的技术。 那么我们也可以伪装成搜索引擎来进入这些页面。我们需要的是修改浏览器的User-Agent值。下面以Internet Explorer为例说明： 把下列代码保存为 ua.reg，双击导入到注册表中： 程序代码：........................................................................
date: 2008-01-28 11:56:13
category: 技术文章
tags: ['代理', '技巧']
post_id: 348
alias: camouflage-Google-Bot
ViewNums: 4412
---
为什么有的网站能够被Google搜索到，点击链接进去以后却显示“未注册”、“还不是会员”呢？这是一种网站专门针对对搜索引擎优化的技术。

那么我们也可以伪装成搜索引擎来进入这些页面。我们需要的是修改浏览器的User-Agent值。下面以Internet Explorer为例说明：

把下列代码保存为 ua.reg，双击导入到注册表中：
  程序代码：
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindowsCurrentVersionInternet Settings5.0User Agent]
@="Googlebot/2.1"
"Compatible"="+<http://www.googlebot.com/bot.html>"

这样我们就可以突破一些被封锁的收费内容页面了。Firefox用户可以去下载一个名字为 Agent-Switcher的插件，把User-Agent修改成 Googlebot/2.1 (<http://www.googlebot.com/bot.html>) 就行了。

From：[www.bincker.cn](http://www.bincker.cn)

