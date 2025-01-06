---
title: 命令行手工备份Ubuntu系统的方法 还原Ubuntu系统备份的方法
description: 以前发过备份、还原、克隆Ubuntu系统的工具：post/Ucloner.html"target="_blank">Ucloner(原ubuntu-cloner)-系统备份、恢复、克隆、批量部署，不过有的人肯定想geek到底，要post/minglinghang-beifen-huanyuan-ubuntu.html">全手工命令行进行ubuntu备份和恢复，想知道post/minglinghang-beifen-huanyuan-ubuntu.html">怎么命令行手工备份Ubuntu系统的方法post/minglinghang-beifen-huanyuan-ubuntu.html">还原Ubuntu系统备份的方法，往下看：
date: 2010-04-08 09:58:13
category: 技术文章
tags: ['Ubuntu']
post_id: 1103
alias: minglinghang-beifen-huanyuan-ubuntu
ViewNums: 11986
---

以前发过备份、还原、克隆Ubuntu系统的工具：[Ucloner(原 ubuntu-cloner) - 系统备份、恢复、克隆、批量部署](/blog/ucloner) ，不过有的人肯定想geek到底，要[全手工命令行进行ubuntu备份和恢复](/blog/minglinghang-beifen-huanyuan-ubuntu)，想知道[怎么命令行手工备份Ubuntu系统的方法](/blog/minglinghang-beifen-huanyuan-ubuntu) [还原Ubuntu系统备份的方法](/blog/minglinghang-beifen-huanyuan-ubuntu)，往下看：

**下面是[备份Ubuntu系统的方法](/blog/minglinghang-beifen-huanyuan-ubuntu)：**

然后打开终端，输入以下命令：

1、成为根用户：sudo su
2、转到根目录：cd /

然後，下面就是我用来备份我的系统的完整的命令：

tar -cvpzf /media/sda7/backup.tgz --exclude=/proc --exclude=/lost+found --exclude=/mnt --exclude=/sys --exclude=/media /

接着，让我们稍微解释一下：
tar 是用来备份的程序
c - 新建一个备份文档
v - 详细模式， tar程序将在屏幕上实时输出所有信息。
p - 保存许可，并应用到所有文件。
z - 采用‘gzip’压缩备份文件，以减小备份文件体积。
f - 说明备份文件存放的路径， /media/sda7/backup.tgz 是本例子中备份文件名。这个备份文件备份的位置是其它分区，也就是原来的WIN分区中。因为我的根目录的空间不足，所以只有备份在其它的地方了。

来看看我们想要包含的目录。我们不想备份所有的东西，因为有些目录是没有多大用处的。确认你不想包含的文件，否则您会得到一个很奇怪的结果。 您也不必备份 /mnt 目录下的东西，除非您有其他分区挂在它下面或者你坚持要备份。您还必须确保没有任何资源挂在 /media 目录下(比如，任何CD或者移动存储介质).否则，剔除/media。

最後一个参数是我们想要保存的目录. 我们想要保存所有的东西，使用 / 作为根目录。

**然后就是将来[还原Ubuntu系统备份](/blog/minglinghang-beifen-huanyuan-ubuntu)了：**

警告: 求您了，看在上帝的份上，千万小心这儿。如果您不明白您正在干什么，那很有可能复盖掉您重要的数据，所以请特别小心！

好了，继续我们前面所讲的例子，我们在其它分区（sda7）目录下创建了一个名为backup.tgz的备份文件。

Linux 中美妙的事情之一就是在系统正在运行的情况下可以进行还原操作，而不需要启动光盘或者其他任何乱七八糟的东西。当然，如果您的系统已经崩溃，那您必须选择 使用live CD，但是结果还是一样。你甚至可以在Linux系统正在运行的时候，移除它里面所有文件。可是我不告诉你那个命令！

好了，言归正传。这是我要用的命令，如果你的备份不是在和我一样的位置的位置的话，那请相应地修改/media/sda7这一点：

tar -xvpzf /media/disk/backup.tgz -C /

如果您使用的是bz2压缩的：

tar -xvpjf /media/disk/backup.tar.bz2 -C /

