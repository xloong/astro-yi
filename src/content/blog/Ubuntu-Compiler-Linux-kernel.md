---
title: Ubuntu下编译Linux内核
description: 文章写的很不错，菜鸟想在ubuntu下编译Linux内核，只需步步来就好了，只是夜火想看的地方没有提到。作者：系统框人via：OwnLinux.cn最初用Linux，我们需要满足的可能很小，后来，我们发现，我们也需要属于自己的Linux，我们想方设法优化自己的Linux，最后，到了要编译内核的地步  1.下载内核源代码和编译将要用的软件……
date: 2009-08-10 09:49:14
category: 技术文章
tags: ['技术类', 'Linux', '内核']
post_id: 936
alias: Ubuntu-Compiler-Linux-kernel
ViewNums: 4327
---

文章写的很不错，菜鸟想[在ubuntu下编译Linux内核](/blog/ubuntu-compiler-linux-kernel)，只需步步来就好了，只是[夜火](/blog/)想看的地方没有提到。

作者：系统框人 via：[OwnLinux.cn](http://OwnLinux.cn)

最初用Linux，我们需要满足的可能很小，后来，我们发现，我们也需要属于自己的Linux，我们想方设法优化自己的[Linux](/tags/Linux)，最后，到了要编译内核的地步

## 1.下载内核源代码和编译将要用的软件

下载内核源代码：<http://www.kernel.org/> 注意选择F版，即完整版，下载到哪里，用什么工具都无所谓。

安装必要的软件：

sudo apt-get install build-essential kernel-package libncurses5-dev fakeroot

sudo aptitude install libqt3-headers libqt3-mt-dev libqt3-compat-headers libqt3-mt

## 2.解压源代码

sudo tar xvfj linux-X.tar.bz2 -C /usr/src(之所以解压到这里，是为了以后安装驱动，X为版本号)

有人说要为源代码打上补丁，但据我所知，不用，因为不影响编译。

下面，进入目录，开始编译：cd /usr/src/linux-X

## 3.开始配置内核

sudo make xconfig

[![Ubuntu下编译Linux内核](http://www.ownlinux.cn/wp-content/uploads/2009/07/%E5%9B%BE%E7%89%8711.jpg "图片1")](/blog/ubuntu-compiler-linux-kernel)

然后就显示这个配置窗口了，是不是有点相[Windows](/blog/deepin-litexp-windows-xp-sp3-v62)的注册表编辑器？

打钩的选项表示编译进内核（简称Y），空的选项表示不选择（简称N），圆点则表示编译成动态加载的模块（简称M）。Option菜单下的选项最好全选，以后会有用的。

具体配置请参考金步国先生翻译的资料：内核编译配置选项。
网址：<http://lamp.linux.gov.cn/Linux/kernel_options.html>

对于硬件驱动部分，最好先

sudo aptitude install hardinfo

然后

sudo lshw，显示你的硬件以及所需的模块（模块表示为,有的时候没有显示模块，那就要注意），Ctrl+F在配置窗口里打开搜索，搜索你module=或driver=的值，选成Y。

注意下列选项：

1、在“General setup”里面，有几项普通用户可以放心的去掉，
分别是：POSIX Message Queues 、Cpuset Support、Create deprecated sysfs files、Kernel->user space relay support (formerly relayfs)

2、在“Block layer”里，假如没有2TB的硬盘，就去掉：Support for Large Block Devices 。

3、在“ Timer frequency ”里，默认是250Hz，最好选择1000Hz以提高gui响应

4、下列选项请慎重选择：
Bus options (PCI, PCMCIA, EISA, MCA, ISA)
PCI support
PCI Express support 老式机器没有PCI-E设备的可以选N
ISA support 较新的新机器没有ISA设备，可以选N
MCA support 一般选N
NatSemi SCx200 support 一般选N
PCI Hotplug Support
Support for PCI Hotplug (EXPERIMENTAL) 如果没有PCI热插拔设备，选N

ATA/ATAPI/MFM/RLL support
Include IDE/ATA-2 DISK support 如果你的/boot是放在IDE硬盘上，那么这里一定要选Y，选M都不行。否则启动时会出现“waiting for root file system”的提示而停滞不前。
SCSI device support 如果有SATA硬盘，就选Y
SCSI disk support 如果你的/boot放在SATA硬盘上，一定要选Y。
Character devices
I2C support 一般可以选Y或者M
Graphics support 不建议把显卡驱动编译进内核。,选M,编译成模块方便日后升级驱动。
VESA VGA graphics support 我的机器显卡是ati 3d lt,linux里面的型号定为mach64，我发现除了自己的显卡选项，一定要选择这项,编译进内核，如果不选，显示出现问题。如果你不确定的话，选上吧。
File systems
CD-ROM/DVD Filesystems
ISO 9660 CDROM file system support 一般选Y
DOS/FAT/NT Filesystems
VFAT (Windows-95) fs support 有FAT32分区就选Y吧
NTFS file system support 有NTFS分区就选Y吧
NTFS write support 如果想对 NTFS分区进行写操作，选Y

一切配置好后，点击保存（软盘图标，这个不说都知道），退出

## 4. 开始编译内核

命令：

sudo make-kpkg clean fakeroot make-kpkg –initrd –append-to-version=xxx kernel_image

上条命令的xxx可以自己选择，但不能是大写。

下面的工作就是等待编译完成，时间长短要看你的配置和你的机器，如果配置有问题，可能要编译一天一夜……

编译获得的软件包应该小于10 MB，大一点也没什么关系，如果超过20 MB，那就有问题了

## 5.安装内核

编译得到的安装包在上级目录，所以，我们应该是/usr/src

鼠标点击包并且安装它

安装完成后和老内核比较一下大小：ls -l /boot/

此时千万不要删除老内核，因为出了问题还要找他呢

## 6.重新启动验证它

建议这个时候把显卡驱动下载下来改成简单文件名以便于一会安装

## 7.真出问题了

据我的经验，第一次编译肯定要失败的，此时就再GRUB里选择老内核，在“新立得软件包管理器”里删除刚刚安装的内核，干掉它，然后重复上述操作（7以前的）

## 8.安装显卡驱动

如果英特尔显卡或者ATI显卡的驱动你已经编译进内核了，恭喜你，下面的内容无视

重启之后如果你的内核成功启动，但是不能启动图形界面，那就该安装显卡驱动了

在恢复模式（即GRUB里新内核的第二个选现）里选择root，执行下列内容

cd /刚才下载的驱动程序的目录

sh  驱动程序文件名.run

如果显示没有找到源代码就

sh 驱动程序文件名.run –kernel-source-path=你编译内核的目录

我们应该是：sh 驱动程序文件名.run –kernel-source-path=/usr/src/linux-X

## 最后

如果对某些选项很迷茫，可以看看HX大牛的配置

使用方法：cp /下载的目录/config ./.config

config文件：[config](http://www.ownlinux.cn/wp-content/uploads/2009/07/config1.txt)

参考<http://forum.ubuntu.org.cn/viewtopic.php?f=97&t=110461>写成

由于作者是第一次写作，如有错误的地方，还请多多见谅并指正，谢谢！

