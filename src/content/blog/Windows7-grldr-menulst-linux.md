---
title: Windows7 中使用grldr + menu.lst 引导linux系统和win7
description: 由于windows7系统启动的引导方式与xp系统不同，通过反复试验于网上搜索的多种方法，总算找到了下述办法
date: 2010-02-23 11:05:28
category: 技术文章
tags: ['Windows', 'Linux']
post_id: 1076
alias: Windows7-grldr-menu.lst-linux
ViewNums: 12192
---

由于[windows 7](/blog/windows-7-rtm-build-760016385)系统启动的引导方式与[xp](/blog/deepin-litexp-windows-xp-sp3-v62)系统不同，通过反复试验于网上搜索的多种方法，总算找到了下述办法：

[在Windows7 中使用grldr + menu.lst 引导linux系统和win7](/blog/windows7-grldr-menulst-linux)

首选备份bcd(为此付出了多次重裝[win7](/blog/windows-7-rtm-build-760016385)的惨痛代价...):

/createstore 创建一个新的空白启动配置数据文件。
bcdedit /createstore C:DataBCD 创建BCD启动配置数据文件储存到“C:DATA”文件夹。
/export 备份启动配置数据文件。
bcdedit /export "C:DataBCD Backup" 备份BCD启动配置文件到“C:Data”文件夹，并以“BCD Backup”命名。
/import 还原启动配置数据文件。
bcdedit /import "C:DataBCD Backup" 从“C:Data”文件夹恢复BCD启动配置文件。

然后拷贝准备好的 [grldr](/blog/windows7-grldr-menulst-linux) 和 menu.lst 到C 盘根目录下.

重启电脑...见到了久违的[menu.lst](/blog/windows7-grldr-menulst-linux)菜单...

注: 附上自己的menu.lst菜单样本：

******************************************************************

default 17
timeout 3

title Zenwalk Linux
root (hd0,0)
kernel /boot/vmlinuz root=/dev/sda8
initrd /boot/initrd.splash

title [Puppy Linux puppy431](/blog/puppy-linux-431) copy
root (hd0,0)
kernel /puppy431/vmlinuz PSUBDIR=puppy431 pfix=noram
initrd /puppy431/initrd.gz

title [Puppy Linux puppy431](/blog/puppy-linux-431) ram
root (hd0,0)
kernel /puppy431/vmlinuz PSUBDIR=[puppy431](/blog/puppy-linux-431) pfix=ram
initrd /puppy431/initrd.gz

title Zenwalk install
root (hd0,7)
kernel /zenwalk/kernels/ata/bzImage load_ramdisk=1 prompt_ramdisk=0 rw root=/dev/null SLACK_KERNEL=ata vga=788
initrd /zenwalk/isolinux/initrd.img

title Puppy Linux puppy412ide copy
root (hd0,0)
kernel /puppy412ide/vmlinuz PMEDIA=idehd PSUBDIR=puppy412ide pfix=noram
initrd /puppy412ide/initrd.gz

title Puppy Linux puppy412ide ram
root (hd0,0)
kernel /puppy412ide/vmlinuz PMEDIA=idehd PSUBDIR=puppy412ide pfix=ram
initrd /puppy412ide/initrd.gz

title LXDE Puppy411 copy
root (hd0,7)
kernel /lxdepuppy411/vmlinuz PMEDIA=idehd PSUBDIR=lxdepuppy411 pfix=noram
initrd /lxdepuppy411/initrd.gz

title LXDE Puppy411 ram
root (hd0,6)
kernel /lxdepuppy411/vmlinuz PMEDIA=idehd PSUBDIR=lxdepuppy411 pfix=ram
initrd /lxdepuppy411/initrd.gz

title Slitaz 2.0 RAM
root (hd0,7)
#kernel /Slitaz/boot/bzImage root=/dev/null vga=normal autologin
kernel /Slitaz/boot/bzImage root=/dev/nul
initrd /Slitaz/boot/rootfs.gz

title SliTaz GNU/Linux (IDE) (Kernel vmlinuz-2.6.25.5-slitaz)
root (hd0,8)
kernel /boot/vmlinuz-2.6.25.5-slitaz root=/dev/hda9

title [Slax](/blog/slax-v610) Copy
root (hd0,0)
# kernel /boot/vmlinuz root=/dev/ram0 rw max_loop=255 init=linuxrc load_ramdisk=1 ramdisk_size=6666 slax changes=/mnt/hda2/slax/copy/xfs.dat vga=normal autoexec=startx
# kernel /boot/vmlinuz root=/dev/ram0 rw copy2ram max_loop=255 ramdisk_size=6666 autoexec=xconf;telinit~4 changes=/mnt/hda2/slax/copy/xfs.dat
kernel /boot/vmlinuz root=/dev/ram0 rw max_loop=255 ramdisk_size=6666 autoexec=xconf;telinit~4 changes=/mnt/hda1/slax/copy/65M-1-xfs.dat
initrd /boot/initrd.gz

title Slax RAM
root (hd0,0)
# kernel /boot/vmlinuz root=/dev/ram0 rw max_loop=255 init=linuxrc load_ramdisk=1 ramdisk_size=6666 slax vga=normal autoexec=startx
kernel /boot/vmlinuz root=/dev/ram0 rw max_loop=255 ramdisk_size=6666 autoexec=xconf;telinit~4
initrd /boot/initrd.gz

title [CDlinux](/blog/cdlinux-093)
root (hd0,0)
# kernel /IDECDlinux/CDlinux/bzImage quiet CDL_LANG=zh_CN.UTF-8 CDL_DEV=/dev/sda1
kernel /CDlinux/bzImage quiet CDL_LANG=zh_CN.UTF-8
initrd /[CDlinux](/tags/CDlinux)/initrd

title [MandrivaLINUX](/blog/mandriva-linux-20100)
root (hd0,1)
kernel /Mandriva/boot/vmlinuz root=/dev/nul vga=788
initrd /[Mandriva](/tags/Mandriva)/boot/cdrom/initrd.gz

title WinPE-net
root (hd0,0)
kernel /ldntldr
initrd /setupldr.bin
#initrd /ntldr

title FreeDOS
root (hd0,0)
kernel /memdisk
initrd /balder.img

title WINDOWS NT/2003/[XP](/blog/deepin-ghost-xp-sp3-v90-iso)
map (hd0) (hd0)
map (hd0) (hd1)
root (hd0,0)
chainloader (hd0,0)+1
boot
rootnoverify (hd0,0)
chainloader +1
clear

title VISTA
find --set-root /bootmgr
chainloader /bootmgr
clear

title setup otehr IDE
fallback 6
root (hd0,1)
chainloader +1

title setup cdrom
cdrom --init
map --hook
chainloader (cd0)
boot

title reoot
reboot
clear

title halt
halt

******************************************************************

via [中文Puppy Linux开发者之家](http://puppy.cnbits.com/ "首页")

