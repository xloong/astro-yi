---
title: win11 wsl 安装linux子系统 提示 0x800701bc的问题
uid: 202311011445
datetime: 2023-11-01 14:45
slug: win11-wsl-linux-0x800701bc
aliases: 
tags: 
source: 
link:

description: win11 wsl 安装linux子系统 提示 0x800701bc的问题
date: 2023-11-01 14:45:00
category: 笔记
---
错误信息提示如下

```shell
Installing， this may take a few minutes…

WslRegisterDistribution failed with error： 0x800701bc

Error： 0x800701bc WSL 2 ？？？https://aka.ms/wsl2kernel

Press any key to continue…
```

**解决方法：**

首先下载Windows Subsystem for Linux Update setup 官方版将WSL1升级到WSL2。

然后再次尝试即可。

如果还没有解决问题，就需要用管理权限打开cmd或者powershell，分别输入下面代码。

用管理权限打开cmd或者powershell，分别输入下面代码：

bcdedit /set hypervisorlaunchtype Auto

Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All

Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform

Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux

到这里就应该都没有问题了。