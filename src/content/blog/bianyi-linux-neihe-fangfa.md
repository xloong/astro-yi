---
title: 编译Linux内核的方法
description: 夜火我玩/tags/Linux">Linux时也更新过内核，但是从来没自己编译过Linux内核，总感觉是很高深，很神秘的技术，今天转载一篇OwnLinux那看到的文章，让我们一起窥探下post/bianyi-linux-neihe-fangfa.html">编译Linux内核的方法。……
date: 2010-02-22 11:28:30
category: 技术文章
tags: ['Linux', '内核']
post_id: 1075
alias: bianyi-linux-neihe-fangfa
ViewNums: 7294
---

[夜火](http://www.15897.com)我玩[Linux](/tags/Linux)时也更新过内核，但是从来没自己编译过Linux内核，总感觉是很高深，很神秘的技术，今天转载一篇[OwnLinux](http://www.ownlinux.cn/)那看到的文章，让我们一起窥探下[编译Linux内核的方法](/blog/bianyi-linux-neihe-fangfa)。

**1．需要先安装编译环境**

进入 root 帐户：

> su

输入密码

安装必要的工具：

> apt-get install build-essential

(安装 gcc, make 等)

> apt-get install libncurses-dev

(安装 make menuconfig 时必须的库文件)

> apt-get install kernel-package, fakeroot

(Debian 系统里生成 kernel-image 的一些配置文件和工具)

> apt-get install initramfs-tools, module-init-tools

**2.安装 [kernel](/blog/bianyi-linux-neihe-fangfa)-source：**

可以从 [Ubuntu](/tags/Ubuntu) 的源安装，这样的好处是简单，而且安装的内核是Debian 化了的，缺点是内核不是最新的内核。

> apt-get install linux-source

也可以从 www.kernel.org 下载内核安装。kernel.org 的境象应该很多，选一个最快的来下载，因为要下载的文件很大。我这里介绍的是安装 2.6.24 的内核，加上了 ck 的补丁。

下载 linux-2.6.24.tar.bz2 和 patch-2.6.24.bz2 ，并且把它们都存放在 /usr/src 目录下。

> tar xvjf linux-2.6.24.tar.bz2

> ln -s linux-2.6.24 linux

(如果已经有了 linux 目录，则要先将其删除)

> cd linux

> bzcat ../patch-2.6.24.bz2 | patch -p1

至此，内核源文件以及补丁就都安装好了。

**3.[编译内核](/blog/bianyi-linux-neihe-fangfa)**

把源码包解压到 /usr/src/linux-2.6.24，然后在/usr/src/下创建一个名为linux的指向/usr/src/linux-2.6.24的链接(link)。

在shell中输入

root@FE2000:~# cd ..

root@FE2000:/# cd /usr/src/linux

root@FE2000:/usr/src/linux# make mrproper

root@FE2000:/usr/src/linux# make menuconfig

或者make gconfig

此时qconf已经读取了默认配置，你也可以这样做：

在qconf中点File->Load 去读取其他的设置文件。

比如 /boot/config-2.6.18-23-686

下面在qconf中配置.config文件。选“Y”（打勾）就是把它编译到内核中，选“M”（打点）把它编译成模块，供内核动态调用。选“N”就是不安装。也可以保持默认选项……

下面只是简单提几项：

General setup

Optimize for size (Look out for broken compilers!) 发烧友可以选Y以获得更小的内核。

Processor type and features

Symmetric multi-processing support 如果你没有多线程处理器这个可以选N

Processor family 根据你的CPU来选择。

High Memory Support 1G以上内存的选“4GB”, 1G以下的，将来也不打算升级到1G的，选“off”.

Bus options (PCI, PCMCIA, EISA, MCA, ISA)

PCI support

PCI Express support 老式机器没有PCI-E设备的可以选N

ISA support 较新的新机器没有ISA设备，可以选N

MCA support 一般选N

NatSemi SCx200 support 一般选N

PCI Hotplug Support

Support for PCI Hotplug (EXPERIMENTAL) 如果没有PCI热插拔设备，选N

Device Drivers

Block devices

Packet writing on CD/DVD media

Enable write caching (EXPERIMENTAL) 如果你有刻录机，想启用写缓存功能，选Y

ATA/ATAPI/MFM/RLL support

Include IDE/ATA-2 DISK support 如果你的/boot是放在IDE硬盘上，那么这里一定要选Y，选M都不行。否则启动时会出现“waiting for root file system”的提示而停滞不前。

SCSI device support 如果有SATA硬盘，就选Y

SCSI disk support 如果你的/boot放在SATA硬盘上，一定要选Y。

Character devices

I2C support 一般可以选Y或者M

Graphics support 不建议把显卡驱动编译进内核。,选M,编译成模块方便日后升级驱动。

Support for frame buffer devices

VESA VGA graphics support 可以选Y

Logo configuration

Bootup logo 如果想看到Linux启动logo，选Y

Sound

Sound card support 选Y， 除非你没有声卡

其他的驱动，酌情添加删除，根据机器配置删除不需要的驱动可以缩短编译时间。你可以在命令行下输如lspci或者dmesg查看硬件信息。

File systems

CD-ROM/DVD Filesystems

ISO 9660 CDROM file system support 一般选Y

DOS/FAT/NT Filesystems

VFAT (Windows-95) fs support 有FAT32分区就选Y吧

NTFS file system support 有NTFS分区就选Y吧

NTFS write support 如果想对 NTFS分区进行写操作，选Y

Native Language Support

Simplified Chinese charset (CP936, GB2312) 选Y或者M使读取FAT分区不会遇到中文乱码现象

设置完毕后，按一下保存按钮,无论原先载入的是哪个配置文件，qconfig都将设置保存到 /usr/src/linux/.config 这个隐含文件。

下面输入make开始编译，这一过程大约需要40－100分钟，具体的要看你的机器速度啦……

root@FE2000:/usr/src/linux# make

安装内核

root@FE2000:/usr/src/linux# make install

编译模块

root@FE2000:/usr/src/linux# make modules

安装模块

root@FE2000:/usr/src/linux# make modules_install

然后

root@FE2000:/usr/src/linux# cd /

root@FE2000:/usr/src/linux# /usr/sbin/mkinitramfs -o /boot/initrd.img-2.6.24 2.6.24

如果有出错提示，可能是因为 initramfs－tools 没有装，先把它装上吧。

如果没有这一步骤，那么开机就会出现提示

……

initrd /initrd.img-2.6.24

Error 15: File not found

**4.修改内核启动选项**

最后打开 /boot/grub/menu.lst

在 ## ## End Default Options ## 下面添加类似下面的两段

title Ubuntu, kernel 2.6.24

root (hd0,4)

kernel /vmlinuz-2.6.24 root=/dev/hdd6

initrd /initrd.img-2.6.24

savedefault

boot

title Ubuntu, kernel 2.6.24 (recovery mode)

root (hd0,4)

kernel /vmlinuz-2.6.24 root=/dev/hdd6 ro single

initrd /initrd.img-2.6.24

boot

注意 root和kernel字段要模仿menu.lst下面已有的内容写。

下面是 (hd0,4)，那么你也写(hd0,4)，下面写root=/dev/hdd6，你也写root=/dev/hdd6，只是内核的版本号改为现在编译的版本号。

然后把下面重复的savedefault删除。

重新启动计算机，在GRUB中选择新内核启动。

(仅供参考,实际应用中还有很多不同之处欢迎讨论)

