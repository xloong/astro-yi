---
title: Zeal 0.11 - 瞬间完成的文件分割与合并工具
description: 记得以前没有移动硬盘，只有容量可怜的U盘时，经常碰到一些大的文件，需要带到另外一台没有联网的机器上，这时就需要文件分割了，但是文件一般都很大，用RAR分卷压缩时间太久，有时候太浪费时间了，干脆就懒得带了。网上的一些分割软件又懒得用，而且速度也不是太好。今天看到一个命令行下的分割工具——Zeal0.11，可执行文件只有24K，开源，据小众测试，700M的文件分割成5份只需要844毫秒，相当恐怖的速度。另：小众说要分割的文件必须放在根目录，Zeal0.11版里好像不存在这个问题了。目前的Zeal0.11好像还不支持NTFS，只支持FAT32。Zeal0.11的使用方法......
date: 2009-03-02 10:46:35
category: 应用软件
tags: ['Zeal', '工具共享']
post_id: 801
alias: Zeal-0.11
ViewNums: 3055
---

记得以前没有[移动硬盘](/blog/hd-speed-v15469-green)，只有容量可怜的U盘时，经常碰到一些大的文件，需要带到另外一台没有联网的机器上，这时就需要文件分割了，但是文件一般都很大，用RAR分卷压缩时间太久，有时候太浪费时间了，干脆就懒得带了。网上的一些分割软件又懒得用，而且速度也不是太好。

今天看到一个命令行下的分割工具 —— **[Zeal 0.11](/blog/zeal-011)**，可执行文件只有24K，开源，据[小众测试](http://www.appinn.com/zeal/)，700M的文件分割成5份只需要844毫秒，相当恐怖的速度。另：小众说要分割的文件必须放在根目录，Zeal 0.11版里好像不存在这个问题了。目前的Zeal 0.11好像还不支持NTFS，只支持FAT32。

**Zeal 0.11的使用方法**

分割：

Zeal.exe X:XXXXX.exe 5
X:XXXXX.exe为文件所在路径，5为需要分割的份数

合并：

（1）

[Zeal](/blog/zeal-011).exe X:XXXXX.exe.part1-5.zeal
参数可以是任意一个分割出来的文件，所有的文件必须在同一个文件夹里。

（2）

如果你不希望用Zeal来合并，也可以使用控制台命令copy：
    例如 test.rar.part1-3.zeal
            test.rar.part2-3.zeal
            test.rar.part3-3.zeal 要恢复成 test.rar，可以用命令
    copy /B test.rar.part1-3.zeal+test.rar.part2-3.zeal+test.rar.part3-3.zeal test.rar
    注意顺序，以及/B参数

**下面是程序作者Roger的测试截图**

[![Zeal 0.11](http://rogerfd.cn/wp-content/uploads/2009/02/zeal_1_1.jpg)](/blog/zeal-011)

[![zeal 0.11](http://rogerfd.cn/wp-content/uploads/2009/02/zeal_1_2.jpg)](/blog/zeal-011)

【下载地址】[Zeal 0.11](/blog/download.asp?id=295（带源码下载地址）

via [小众](http://www.appinn.com/zeal/) [Roger](http://rogerfd.cn/?p=179)

