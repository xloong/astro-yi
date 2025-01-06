---
title: 解决 Windows 、Mac 和 Ubuntu 时间不一致的问题
description: 最近帮朋友装了Windows7、Mac还有Ubuntu。朋友在切换操作系统的时候就发现了一个问题，Windows、Mac和Ubuntu的时间出现了不一致的情况。在Windows中把时间设置正确了过后，在Ubuntu和Mac中的时间又不一样了，在Ubuntu和Mac中把时间设置正确后进入Windows后，时间又不一致了。出现这种情况的原因是Windows、Mac 和Ubuntu 它们在默认情况下看待硬件时间（主板上的BOIS显示的时间）的方式不一样。 知道了问题存在的原因，我们就来解决这个问题。
date: 2009-11-04 11:16:04
category: 技术文章
tags: ['技术类', '技巧', 'Windows', 'Mac', 'Ubuntu', 'Linux']
post_id: 1016
alias: Windows-Mac-Ubuntu-UTC-GMT-time
ViewNums: 6839
---

最近帮朋友装了 [Windows 7](/blog/windows-7-rtm-build-760016385) 、[Mac](/tags/Mac) 还有 [Ubuntu](/blog/ubuntu-910-final)。朋友在切换操作系统的时候就发现了一个问题，[Windows](/blog/deepin-litexp-windows-xp-sp3-v62) 、[Mac](/tags/Mac) 和 [Ubuntu](/tags/Ubuntu) 的时间出现了不一致的情况。在 [Windows](/tags/Windows) 中把时间设置正确了过后，在 Ubuntu 和 Mac 中的时间又不一样了，在 Ubuntu 和 Mac 中把时间设置正确后进入 [Windows](/blog/windows-server-2008-x86-dvd-chs) 后，时间又不一致了。出现这种情况的原因是 [Windows](/blog/deepin-ghost-xp-sp3-v90-iso) 、 Mac 和 Ubuntu 它们在默认情况下看待硬件时间（主板上的BOIS显示的时间）的方式不一样。 知道了问题存在的原因，我们就来解决这个问题。

这个是一个关于时间的问题，我们就先来了解一下关于时间的概念

**UTC**即Universal Time Coordinated，协调世界时
**GMT**即Greenwich Mean Time，格林尼治平时

Windows 与 Mac/Linux 缺省看待系统硬件时间的方式是不一样的：
* Windows把系统硬件时间当作本地时间(local time)，即操作系统中显示的时间跟BIOS中显示的时间是一样的。
* [Linux](/tags/Linux)/Unix/Mac把硬件时间当作 UTC，操作系统中显示的时间是硬件时间经过换算得来的，比如说北京时间是GMT+8，则系统中显示时间是硬件时间+8。

这样，当PC中同时有多系统共存时，就出现了问题。假如你的mac和[Windows XP](/blog/deepin-litexp-windows-xp-sp3-v62)中设置的时区都为北京时间东八区，而你在mac中把当前系统时间更改为9：00AM。则此时硬件中存储的实际是UTC时间1:00AM。这时你重启进入Windows后，你会发现windows系统中显示的时间是1:00AM，比mac中慢了八个小时。同理，你在Windows中更改或用网络同步了系统时间后，再到Ubuntu中去看，系统就会快了8小时。在实行夏令时的地区，情况可能会更复杂些。

解决这个问题的方法也有几种，可让 Mac 和 Ubuntu 不使用 UTC 时间与 [Windows](/blog/windows-server-2008-r2-rtm) 保持一致。但这样改就相对复杂，而且要修改 Mac 和 Ubuntu 两个系统（Linux/Unix/Mac都是把硬件时间当作 UTC）。建议修改 Windows 对硬件时间的对待方式，这样只在 [Windows](/blog/windows-server-2008-r2-rtm) 上修改后就无需在 Mac 和 Ubuntu 上设置了。

解决方法：

让 Windows 把硬件时间当作 UTC
开始->运行->CMD，打开命令行程序(Vista则要以管理员方式打开命令行程序方可有权限访问注册表)，在命令行中输入下面命令并回车

Reg add HKLMSYSTEMCurrentControlSetControlTimeZoneInformation /v RealTimeIsUniversal /t REG_DWORD /d 1

修改 Mac 和 Ubuntu 不使用UTC的时间也比较简单只需要输入几条命令，若要通过修改 Mac 和 Ubuntu 的时间来与 [Windows](/blog/windows-server-2008-data-ent-sta-x64-chs) 保持一致相对复杂，这里就不细谈。

via [OwnLinux](http://www.ownlinux.cn/)

