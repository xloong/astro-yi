---
title: 如何释放系统盘空间-清理系统盘，解决C盘空间不够的问题
description: 现在依然有很多朋友在使用post/Deepin-LiteXP-Windows-XP-SP3-V6.2.html">windowsxp，相信大家一定会遇到这样的情况，post/qingli-xitongpan.html">系统盘空间越来越小了，那么如何post/qingli-xitongpan.html">释放系统盘空间呢？下面就来看看这个post/qingli-xitongpan.html">清理系统盘空间教程。...
date: 2010-08-02 07:46:09
category: 技术文章
tags: ['Windows', '技巧']
post_id: 1198
alias: qingli-xitongpan
ViewNums: 23827
---

现在依然有很多朋友在使用[windows xp](/blog/deepin-litexp-windows-xp-sp3-v62)，相信大家一定会遇到这样的情况，[系统盘空间](/blog/qingli-xitongpan)越来越小了，那么如何[释放系统盘空间](/blog/qingli-xitongpan)呢？下面就来看看这个[清理系统盘空间教程](/blog/qingli-xitongpan)。

一般情况下我们的[Windows](/blog/deepin-ghost-xp-sp3-v90-iso)系统都是在C 盘，在该[系统盘空间不足](/blog/qingli-xitongpan)的情况下，我们可以通过下面这些具体手段来增加C盘空间。

夜火友情提醒：在执行下列操作之前，记得先备份。

1.打开“我的电脑”-“工具”-“文件夹选项”-“查看”-在“显示所有文件和文件夹”选项前打勾-“确定”
2.删除以下文件夹中的内容:
x:/Documents and Settings/用户名/Cookies/下的所有文件(保留index文件)
x:/Documents and Settings/用户名/Local Settings/Temp/下的所有文件(用户临时文件)
x:/Documents and Settings/用户名/LocalSettings/TemporaryInternet Files/下的所有文件(页面文件)
x:/Documents and Settings/用户名/Local Settings/History/下的所有文件(历史纪录)
x:/Documents and Settings/用户名/Recent/下的所有文件(最近浏览文件的快捷方式)
x:/[WINDOWS](/blog/windows-server-2008-r2-rtm)/Temp/下的所有文件(临时文件)
x:/[WINDOWS](/blog/windows-server-2008-x86-dvd-chs)/ServicePackFiles(升级sp1或sp2后的备份文件)
x:/[WINDOWS](/blog/windows-7-rtm-build-760016385)/Driver Cache/i386下的压缩文件(驱动程序的备份文件)
x:/WINDOWS/SoftwareDistribution/download下的所有文件
3.如果对系统进行过windoes updade升级，则删除以下文件:x:/windows/下以 $u… 开头的隐藏文件
4.然后对磁盘进行碎片整理，整理过程中请退出一切正在运行的程序
5.碎片整理后打开“开始”-“程序”-“附件”-“系统工具”-“系统还原”-“创建一个还原点”(最好以当时的日期作为还原点的名字)
6.打开“我的电脑”-右键点系统盘-“属性”-“磁盘清理”-“其他选项”-单击系统还原一栏里的“清理”-选择“是”-ok了
7、在各种软硬件安装妥当之后，其实XP需要更新文件的时候就很少了。删除系统备份文件吧:开始→运行→sfc.exe /purgecache近3xxM。(该命令的作用是立即清除“Windows 文件保护“文件高速缓存，释放出其所占据的空间)
8、删掉/windows/system32/dllcache下dll档(减去200——300mb),这是备用的dll档， 只要你已拷贝了安装文件，完全可以这样做。
9、XP会自动备份硬件的驱动程序，但在硬件的驱动安装正确后，一般变动硬件的可能性不大，所以也可以考虑将这个备份删除，文件位于/windows/driver cache/i386目录下，名称为driver.cab，你直接将它删除就可以了，通常这个文件是74M。
10、删除不用的输入法:对很多网友来说，Windows XPt系统自带的输入法并不全部都合适自己的使用，比如IMJP8_1 日文输入法、IMKR6_1 韩文输入法这些输入法，如果用不着，我们可以将其删除。输入法位于/windows/ime/文件夹中，全部占用了88M的空间。
11、升级完成发现windows/多了许多类似$NtUninstallQ311889$这些目录，都干掉吧，1x-3xM
12、另外，保留着/windows/help目录下的东西对我来说是一种伤害，呵呵。。。都干掉!
13、关闭系统还原:系统还原功能使用的时间一长，就会占用大量的硬盘空间。因此有必要对其进行手工设置，以减少硬盘占用量。打开“系统属性“对话框，选择“系统还原“选项，选择“在所有驱动器上关闭系统还原“复选框以关闭系统还原。也可仅对系统所在的磁盘或分区设置还原。先选择系统所在的分区，单击“配置“按钮，在弹出的对话框中取消“关闭这个驱动器的系统还原“选项，并可设置用于系统还原的磁盘空间大小。
14、休眠功能会占用不少的硬盘空间，如果使用得少不妨将共关闭，关闭的方法是的:打开“控制面板“，双击“电源选项“，在弹出的“电源选项属性“对话框中选择“休眠“选项卡，取消“启用休眠“复选框。
15、卸载不常用组件:XP默认给吃作系统安装了一些系统组件，而这些组件有很大一部分是你根本不可能用到的，可以在“添加/删除Windows组件“中将它们卸载。但其中有一些组件XP默认是隐藏的，在“添加/删除Windows 组件“中找不到它们，这时可以这样吃作:用记事本打开/windows/inf/sysoc.inf这个文件，用查找/替换功能把文件中的“hide“字符全部替换为空。这样，就把所有组件的隐藏属性都去掉了，存盘退出后再运行“添加-删除程序“，就会看见多出不少你原来看不见的选项，把其中那些你用不到的组件删掉(记住存盘的时候要保存为sysoc.inf，而不是默认的sysoc.txt)，如Internat信使服务、传真服务、Windows messenger，码表等，大约可腾出近50MB的空间。

相信有了这个[清理系统盘空间教程](/blog/qingli-xitongpan)，广大网友们应该不会再为[如何释放系统盘空间](/blog/qingli-xitongpan)这样的小问题所烦恼了。

