---
title: 本blog程序升级至1.8beta2，主题没更换成功
description:        今日凌晨0点左右，本blog进行了程序升级，将原来的z-blog1.7升级到了z-blog1.8（beta2），升级过程比较顺利。       本想顺便换下主题的，老是这个default3主题也挺闷人的，于是到ZBlogger.BBS社区看了下1.8的主题，看新鲜人的Reborn三栏版for1.8蛮不错，淘来装之，但是装好之后问题来了，首先是导航条的问题，默认只显示一个“关于”，连接是“#”，修改了下THEMESReborn3default.html的第40行左右的<divid="menu">和<divclass="search">之间修改原来的代码，如下：...
date: 2008-01-02 09:15:32
category: 心情随笔
tags: ['本站历程', '心情随笔']
post_id: 316
alias: 15897.com-blog-update-to-zblog1.8beta2
ViewNums: 4114
---

今日凌晨0点左右，[本blog](/blog/)进行了程序升级，将原来的z-blog1.7升级到了z-blog1.8（beta2），升级过程比较顺利。

本想顺便换下主题的，老是这个[default3主题](http://www.yupoo.com/photos/zoom?id=ff80808117143a8a01173137654b75a1)也挺闷人的，于是到[ZBlogger.BBS社区](http://bbs.rainbowsoft.org/)看了下1.8的主题，看[新鲜人](http://www.htmlit.com.cn)的[Reborn三栏版for1.8](http://bbs.rainbowsoft.org/thread-18847-1-1.html)蛮不错，淘来装之，但是装好之后问题来了，首先是导航条的问题，默认只显示一个“关于”，连接是“#”，修改了下

THEMESReborn3default.html 的第40行左右的 <div id="menu"> 和 <div class="search"> 之间修改原来的代码，如下：

<div id="menu">
<ul>
<#CACHE_INCLUDE_NAVBAR#>
</ul>
<div class="search">

这样就能直接调用 INCLUDE
avbar.asp 了，在后台也可以实时修改。

这都比较简单，后面的就让我傻眼了，新鲜人做的这个reborn3不支持ZWidget插件，我又不知道怎么设置才能修改侧栏什么的，老多在default3里的设置扩展不能用出来，太郁闷了，后来联系到了新鲜人，也没什么很好解决ZWidget插件的办法，除非每次要修改模板的时候修改模板代码，或者inclund外部的文件，感觉都不如ZWidget处理的好。而且不仅仅是不能使用ZWidget的问题，还有其他老多的问题需要修改。

转眼到了凌晨4点，眼皮打架，撑不住了，临时修改了下default3，使其能支持1.8的程序，文件重建，睡觉~

早上，额。。。。应该是上午10点多睁眼，打算再摆弄摆弄那个主题的，blog打不开了，看了下统计，从凌晨5点多就不能访问了，汗~，服务器又出问题了，一直到11点多才恢复，搞的什么心情都没了。（貌似变成流水账了~汗~）

回到主题，其实这个default3看着还是蛮舒服的，主要这个主题是固定的1024宽，无论你显示器的分辨率如何都是这样1024的显示，看着非常的次，我看中reborn3的原因之一就是他的文章栏能根据浏览器宽度改变显示宽度，修改reborn3感觉还不如实现default3改变显示大小来的方便，最近几天看看能不能实现default3的根据浏览器宽度改变显示宽度。

