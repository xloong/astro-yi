---
title: VirtualBox 的命令行用法
description: 夜火以前发过VirtualBoxv2.0.6多国语言版，和VirtualBox3.0.0r49315正式版下载，不过一直都不知道VirtualBox还有命令行的用法，从linuxtoy那里看到，转之。作为一款功能强大的开源虚拟机软件，VirtualBox不仅提供有图形化的用户界面，而且也包含命令行界面。VirtualBox的命令行界面程序为VBoxManage，通过它你可以完成从命令行创建虚拟机、修改虚拟机的选项设置、对虚拟机进行控制等几乎所有的操作。如果在HeadlessServer上，你将发现VirtualBox的命令行界面非常有用。
date: 2009-09-06 11:23:50
category: 应用软件
tags: ['VirtualBox', '技巧']
post_id: 966
alias: VirtualBox-command
ViewNums: 2816
---

[夜火](/blog/)以前发过[VirtualBox v2.0.6 多国语言版](/blog/virtualbox-v206)，和[VirtualBox 3.0.0 r49315 正式版下载](/blog/virtualbox-300-r49315)，不过一直都不知道[VirtualBox还有命令行的用法](/blog/virtualbox-command)，从[linuxtoy](http://linuxtoy.org)那里看到，转之。

作为一款功能强大的开源虚拟机软件，[VirtualBox](/tags/VirtualBox) 不仅提供有图形化的用户界面，而且也包含命令行界面。VirtualBox 的命令行界面程序为 [VBoxManage](/blog/virtualbox-command)，通过它你可以完成从命令行创建虚拟机、修改虚拟机的选项设置、对虚拟机进行控制等几乎所有的操作。如果在 Headless Server 上，你将发现 VirtualBox 的命令行界面非常有用。

通过执行 `VBoxManage --help` 命令，你可以获得 [VBoxManage](/blog/virtualbox-command) 的完整用法。本文并不打算解释其中的每一个选项，仅给出创建一个虚拟机的必要步骤。如果你感兴趣，不妨亲自去探索 VBoxManage 的其他用法。

要从命令行创建虚拟机，你可以执行以下三步，我们以 [Ubuntu 9.10](/blog/ubuntu-910-karmic-koala) 为例：

1. 创建一个新的虚拟机，虚拟机的名称通过 `--name` 选项指定：

   VBoxManage createvm --name "Ubuntu 9.10" --register
2. 创建该虚拟机所用的虚拟硬盘，用 `--filename` 指定虚拟硬盘的名称，`--size` 选项指定虚拟硬盘的大小，本例为 5 GB：

   VBoxManage createhd --filename "Ubuntu910.vdi" --size 5000 --remember
3. 修改虚拟机的选项设置：

   VBoxManage modifyvm "Ubuntu 9.10" --memory "512MB" --hda "Ubuntu910.vdi" --dvd /home/linuxtoy/karmic-desktop-i386.iso --acpi on --accelerate3d on --boot1 dvd --nic1 nat

其中，

* `--memory` 指定内存的大小
* `--hda` 指定所用的虚拟硬盘
* `--dvd` 指定所用的 ISO 映像
* `--acpi on` 启用 ACPI
* `--accelerate3d on` 启用 3D 加速
* `--boot1` 引导次序
* `--nic1` 网络设置

如果你愿意，那么现在便可以通过 `VBoxManage startvm "Ubuntu 9.10"` 来启动虚拟机。

