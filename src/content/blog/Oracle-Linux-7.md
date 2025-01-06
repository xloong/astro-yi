---
title: Oracle Linux 7 下载地址
description: Oracle已经发布了OracleLinux7.0操作系统，新系统带来了大量的新特性，比如“第三代坚不可摧的内核UEK”（UnbreakableEnterpriseKernelRelease3）和一个新的默认文件系统。为了这次新的发行版的发布，Oracle的开发者们已经放出过两个预览版，现在最终版终于来了。果然，它有着大量的改进，其中包括使用新的XFS
date: 2014-07-27 12:06:40
category: 操作系统
tags: ['Oracle', 'Linux']
post_id: 1531
alias: Oracle-Linux-7
ViewNums: 3475
---

Oracle已经发布了[Oracle Linux 7.0](/blog/oracle-linux-7)操作系统，新系统带来了大量的新特性，比如“第三代坚不可摧的内核 UEK”（Unbreakable Enterprise Kernel Release 3）和一个新的默认文件系统。为了这次新的发行版的发布，[Oracle](/tags/Oracle)的开发者们已经放出过两个预览版，现在最终版终于来了。

果然，它有着大量的改进，其中包括使用新的XFS作为默认的文件系统[注：原文为操作系统，应该是笔误]，可选的Btrfs文件系统，Linux Containers (LXC)， DTrace，Ksplice，加强版Xen和UEK R3。

作为广泛流行的文件系统EXT4的对抗者，XFS有一个显著优势。它所允许用户的文件系统的大小达到了500TB，这比你在EXT4文件系统中所能达到最大值的十倍还多。唯一的缺点是单个文件的大小最大仅为16TB。

这个发行版的一大特色是它支持两种内核。一个是红帽兼容性内核(RHCK)，基于Linux内核版本3.10，第二个是Oracle自己的内核版本“第三代坚不可摧的内核”（UEK R3），版本号从3.8.13开始，因为它基于3.8的[Linux](/tags/Linux)内核。你或许还记得Linux内核3.8.x已经寿终正寝，但是看来Oracle一直在维护着自己的分支。

“已经能够从Oracle软件发布云上下载了，Oracle Linux 7可以免费下载和部署。所有的bug修复和安全勘误会被发布到Oracle的公共yum服务器上，不管有没有付费，用户都能安装同样的代码，并且从免费到付费的迁移十分简单，无需重新安装。”

“当发布最新的Linux更新，工具以及推送给客户和参与者新功能的时候，需要为现代化的数据中心提供企业级的解决方案。为此最新的发行版是构建在Oracle对OpenStack这样的新兴技术提供支持的基础上，”从官方声明可以看出。

通过变更记录来看，Ksplice已经为了实现零宕机的内核完成了安全更新和bug修复，systemd也成了新的系统管理工具，Grub2现在是默认的启动引导程序，并且支持新的固件类型（比如UEFI），还有一个加强版Anaconda安装器，一个新的Apache Web服务器，支持GPT，和大量的安全特性被添加进来。

【[**Oracle Linux 7 下载地址**](/blog/oracle-linux-7)】

* [Oracle Enterprise Linux 6.5 (ISO) 64-bit](http://mirrors.dotsrc.org/oracle-linux/OL6/U5/i386/OracleLinux-R6-U5-Server-i386-dvd.iso)[iso] [3 GB]
* [Oracle Enterprise Linux 6.5 (ISO) 32-bit](http://mirrors.dotsrc.org/oracle-linux/OL6/U5/x86_64/OracleLinux-R6-U5-Server-x86_64-dvd.iso)[iso] [3.60 GB]
* [Oracle Enterprise Linux 7.0 (ISO) 64-bit](https://edelivery.oracle.com/linux/)[iso] [4.50 GB]

