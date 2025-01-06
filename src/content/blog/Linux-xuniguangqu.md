---
title: Linux下的“虚拟光驱”
description: 在骨头那看到的这篇文章，转来扫扫盲。每当有人问我“你的post/Linux-xuniguangqu.html">linux下有没有类似‘虚拟光驱’的软件呢？”的时候，我就会轻轻一笑，自豪地说“别把事情想得太复杂，linux下根本就不用什么另外的软件，就能虚拟光驱了。”，然后那人一般就会似懂非懂地说一句：“哦。。这样啊~”
date: 2010-04-05 10:37:05
category: 技术文章
tags: ['Linux', '技术类']
post_id: 1101
alias: Linux-xuniguangqu
ViewNums: 8947
---

在[骨头](http://li2z.cn/)那看到的这篇文章，转来扫扫盲。

每当有人问我“你的[linux下有没有类似‘虚拟光驱’的软件](/blog/linux-xuniguangqu)呢？”的时候，我就会轻轻一笑，自豪地说“别把事情想得太复杂，linux下根本就不用什么另外的软件，就能虚拟光驱了。”，然后那人一般就会似懂非懂地说一句：“哦。。这样啊~”

下面，就来介绍几个虚拟光驱相关的命令：
把物理光盘做成iso镜像，下面几个命令几乎等效，假设设备是/dev/cdrom：

```
cp /dev/cdrom xxx.iso
```
```
dd if=/dev/cdrom of=xxx.iso
```
```
mkisofs -r -o xxx.iso /dev/cdrom
```
```
readcd -v dev=/dev/cdrom -f xxx.iso
```

其中，用mkisofs还可以把一个文件夹模拟成iso：

```
mkisofs -o xxx.iso /path/to/tree
```

如果要使用iso文件的话，就更简单了，可以[mount](/blog/linux-xuniguangqu)到任意目录下：

```
mount -o loop xxx.iso /path
```

注意以上某些命令可能需要root权限。

