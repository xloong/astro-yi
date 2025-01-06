---
title: Ubuntu 8.04 LTS 曝DoS攻击漏洞
description: 在昨天Ubuntu8.04LTS的Linuxkernel中发现了一个安全漏洞。受该漏洞影响的不仅是Ubuntu8.04LTS，其衍生版Kubuntu8.04、Edubuntu8.04以及Xubuntu8.04也会受到此漏洞的影响。这个内核的漏洞可能被攻击者利用造成系统崩溃，从而导致在DoS（DenialofService：拒绝服务）。更新以下的软件包可以修正这个漏洞：
date: 2008-06-05 09:54:20
category: 操作系统
tags: ['Ubuntu', 'Linux', '漏洞信息']
post_id: 513
alias: Ubuntu-8.04-LTS-DoS-attacks-loopholes
ViewNums: 4392
---

在昨天 [Ubuntu](/tags/Ubuntu) 8.04 LTS 的 [Linux](/tags/Linux) kernel 中发现了一个[安全](/tags/%E5%AE%89%E5%85%A8)漏洞。受该[漏洞](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF)影响的不仅是 Ubuntu8.04 LTS，其衍生版 Kubuntu 8.04、Edubuntu 8.04 以及 Xubuntu 8.04 也会受到此漏洞的影响。这个内核的漏洞可能被攻击者利用造成系统崩溃，从而导致在DoS （Denial of Service：拒绝服务） 。更新以下的软件包可以修正这个漏洞：

• linux-image-2.6.24-18-386 2.6.24-18.32
• linux-image-2.6.24-18-generic 2.6.24-18.32
• linux-image-2.6.24-18-hppa32 2.6.24-18.32
• linux-image-2.6.24-18-hppa64 2.6.24-18.32
• linux-image-2.6.24-18-itanium 2.6.24-18.32
• linux-image-2.6.24-18-lpia 2.6.24-18.32
• linux-image-2.6.24-18-lpiacompat 2.6.24-18.32
• linux-image-2.6.24-18-mckinley 2.6.24-18.32
• linux-image-2.6.24-18-openvz 2.6.24-18.32
• linux-image-2.6.24-18-powerpc 2.6.24-18.32
• linux-image-2.6.24-18-powerpc-smp 2.6.24-18.32
• linux-image-2.6.24-18-powerpc64-smp 2.6.24-18.32
• linux-image-2.6.24-18-rt 2.6.24-18.32
• linux-image-2.6.24-18-server 2.6.24-18.32
• linux-image-2.6.24-18-sparc64 2.6.24-18.32
• linux-image-2.6.24-18-sparc64-smp 2.6.24-18.32
• linux-image-2.6.24-18-virtual 2.6.24-18.32
• linux-image-2.6.24-18-xen 2.6.24-18.32

**注意：**Ubuntu8.04 LTS桌面用户大可不必惊慌，该漏洞主要是针对服务器，但建议立即升级你的系统。在升级系统后别忘记重启你的计算机！

From：[OwnLinux](http://www.ownlinux.cn/)

[Ubuntu 8.10 Intrepid Ibex 正式版已经发布](/blog/ubuntu-810-intrepid-ibex "ubuntu 8.10 intrepid ibex 正式版下载"

