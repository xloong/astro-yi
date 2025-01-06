---
title: Ucloner(原 ubuntu-cloner) - 系统备份、恢复、克隆、批量部署
description: Ucloner(原ubuntu-cloner)是针对UbuntuLinux系统编写的一个系统备份、恢复、克隆及批量部署工具。图形界面，鼠标操作，简单易用。该工具为绿色软件，解压即可使用。已在Ubuntu8.04、Ubuntu8.10、Ubuntu9.04等版本中测试通过。使用方法一……
date: 2009-10-18 11:29:38
category: 应用软件
tags: ['Ubuntu', '软件']
post_id: 1003
alias: Ucloner
ViewNums: 6139
---

[Ucloner](/blog/ucloner)(原 [ubuntu-cloner](/blog/ucloner)) 是针对 [Ubuntu Linux](/tags/Ubuntu) 系统编写的一个系统备份、恢复、克隆及批量部署工具。图形界面，鼠标操作，简单易用。
该工具为绿色软件，解压即可使用。已在 [Ubuntu 8.04](/blog/ubuntu-804-lts-download-xiazai) 、[Ubuntu 8.10](/blog/ubuntu-810-intrepid-ibex) 、[Ubuntu 9.04](/blog/ubuntu-904-final) 等版本中测试通过。

使用方法一
猛击 “双击运行”。若弹出对话框，选“运行”。

使用方法二
打开终端，进入脚本所在目录，运行：sudo sh main.sh

应用举例
1.将 ubuntu 装在移动硬盘中，配置好。拿到目标机上，从usb启动，然后运行 ubuntu-cloner ，选择“克隆当前系统”，按提示进行，即可将移动硬盘中的系统克隆到目标机中。
2. 在一个安装、配置好的 ubuntu 系统中运行 [ubuntu-cloner](/blog/ucloner) ，选择“备份当前系统”，可将系统备份为 tar 或 squashfs 。将备份文件拷到u盘或移动硬盘。在目标机上通过光盘或usb盘启动 ubuntu live cd ，接上存有系统备份文件的u盘或移动硬盘，运行 ubuntu-cloner ，选择“恢复系统”，按提示进行，即可将备份的系统恢复到目标机中。
3. （待续）

说明
在 ubuntu 8.04 、8.10 、9.04 中测试通过。
程序依赖的包（如 python-gtk2 、zenity 等）ubuntu 官方版都已预装，某些精简版、定制版可能没有，需手动安装。kubuntu 也没有。xubuntu、edubuntu 未测。
克 隆或备份时会自动跳过 /mnt/* 、/media/* 、 /proc 、/sys 、/tmp 以及缓存 /var/cache/apt/archives/*.deb 、 /var/cache/apt/archives/partial/* 。如果有其它挂载点如 /windows/* 、 /home/*/win_c 之类，可手动指定排除之。
克隆或恢复系统后会自动生成新的 fstab 。
可自动安装 GRUB，前提条件是被克隆或被恢复的系统中装有 GRUB 。
克 隆或恢复时会自动更改主机名以避免出现重名。如果您不喜欢自动更改的主机名，可用 change_hostname.sh 修改，使用方法：sudo sh change_hostname.sh 新主机名 ，或 sudo sh change_hostname.sh 后按提示操作。

已知问题

1. 在 8.04 中恢复 9.04 时，如果文件系统选择 ext3，则恢复的系统会出现奇怪的权限问题，没有声音，不能获得root权限。或许是新版与旧版的 etx3 不同导致。
解决方法：恢复系统时，建议用相同版本的 Ubuntu Live CD，以避免不同版本系统内部差异导致一些莫名其妙的问题。若手头只有旧版 Live CD，那么目标分区不要用 ext3，建议 reiserfs 。

2. 未格式化的分区不会出现在分区选择列表中。这是因为目前使用的 parted 不太容易处理未格式化分区的容量。用 fidsk 较容易处理，却不支持 gpt 。待以后改进。
临 时解决方法：运行 [ubuntu-cloner](/blog/ucloner) 之前，先将目标分区分好并格式化。此时的格式化，只是为了保证分区能够出现在选择列表中，因此，用哪种格式并不重要，fat、ntfs、ext2/3/4 等随便选一种即可。真正克隆或恢复时，还可以重新选择文件系统、格式化。

3. 关于第三方分区工具
某些第三方分区工具不够“好 ”，比如，不给分区分配 UUID、创建的文件系统与 ubuntu 所用的版本不同，等等。如果是用第三方工具分的区，那么，到“选择用于...的文件系统”步骤时，最好选择“格式化为...” ；如果是用 [ubuntu](/tags/Ubuntu) 自带的 gparted 分的区，则可以选择“不格式化，使用现有文件系统”。

4.关于9.10使用 reiserfs
安装到硬盘的 ubuntu 9.10 没有 reiserfsprog，因此克隆时无法创建 reiserfs 文件系统。
解决方法：手动安装 reiserfsprog 。

【下载地址】
[Ucloner 3.5.0 测试版1 下载](http://ubuntu:ubuntuftp@ftp.ubuntu.org.cn/home/ptptptptptpt/ucloner/ucloner-3.5.0-beta1.tar.gz)
更多相关信息请关注：<http://forum.ubuntu.org.cn/viewtopic.php?f=77&t=176612>

