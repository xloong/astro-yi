---
title: LinuxDeepin 10.06 正式版下载
description: post/LinuxDeepin-10.06-Final.html">LinuxDeepin10.06正式版已经发布了，不过这都7月底了，这个post/LinuxDeepin-10.06-Final.html">LinuxDeepin10.06是不是也该改个名了。post/LinuxDeepin-10.06-Final.html">
date: 2010-07-24 09:44:03
category: 操作系统
tags: ['LinuxDeepin', 'Linux']
post_id: 1193
alias: LinuxDeepin-10.06-Final
ViewNums: 2513
---

[LinuxDeepin 10.06 正式版](/blog/linuxdeepin-1006-final)已经发布了，不过这都7月底了，这个[LinuxDeepin 10.06](/blog/linuxdeepin-1006-final)是不是也该改个名了。

[![LinuxDeepin 10.06 正式版下载](http://linux.deepin.org/sites/default/files/10.06_Screenshot-01.png)](/blog/linuxdeepin-1006-final)

**版本特性**：
- 基于 [Ubuntu 10.04 LTS](/blog/ubuntu-1004-lts-final)
- 启动速度大幅提高
- 采用 ibus-sunpinyin（目前 Linux 下最好的整句输入法）
- [Linux](/tags/Linux) 最新内核 2.6.32-23
- Flash 播放器为最新的 10.1.53.64 版本
- XFCE Desktop 采用了最新的 4.6.2 版本
- BT 工具 Transmission 为最新的 1.93 (10621) 版本
- Firefox 浏览器，为最新版本 3.6.6
- Firefox 的所有插件，均升级到了最新版本

* 去掉了不常用的搜索引擎，只保留 Google、Baidu、Yahoo、Bing
* 提供 DownThemAll 扩展，用于多线程下载（断点续传）
* 提供 ScreenGrab! 网页截图工具，方便截取超过屏幕尺寸的网
* 提供 TabMixPlus 标签管理工具，提高上网体验
* 提供“搜狗云输入法”插件，体验语句流畅输入
* 提供 Adobe Flash Player 10 最新版本

- OpenOffice.org 3.2.0
- 安装仅需两个步骤(分区、创建用户)，其它皆自动完成
- 网络相关：

* 图形化 ADSL 配置(PPPoE)
* 图形化移动宽带配置(移动、联通、电信，GSM(GPRS/EDEG/HSPA) 和 CDMA(EDVO))
* 图形化 VPN 配置
* 可配置vpnc (Cisco 兼容 VPN)，与多种 Cisco、Juniper、Netscreen 以及 Sonicwall 的基于 IPSec 的 VPN 网关兼容
* 可配置 PPTP (点对点隧道协议)，与微软及其他 PPTP VPN 服务器兼容
* 可配置 OpenVPN (因软件包过大，首次使用时，会自动安装)

**已知问题**：
- 尚不支持 wubi 安装
- 因上游 bug，移除了 xfce4-volstatus-icon（屏幕右下角卸载 U 盘的图标），卸载 U 盘等移动设备，请直接在桌面上右击该设备，选“卸载”

**下载**：
[镜像一](http://ubuntu.srt.cn/Deepin) [镜像二](http://ftp.osuosl.org/pub/deepin/)
下载后，请先检查 MD5 值。

**从 9.12 升级**:
由于改动的软件包非常多，而且有的可能会冲突；经测试，从 9.12 升级到 10.06 的话，对新手来说，可能比较麻烦。因此，建议备份数据后，全新安装 10.06。

**用 USB 设备（移动硬盘、U盘）安装**:
如果您有空闲 U 盘或者移动硬盘，不必刻录光盘，可以[用 USB 设备安装 LinuxDeepin](http://linux.deepin.org/help/9.12/install/usb)。

