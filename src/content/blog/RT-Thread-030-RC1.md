---
title: RT-Thread 0.3.0 RC1 - 国产开源实时线程操作系统
description: post/RT-Thread-0.3.0-RC1.html">RT-Thread-post/RT-Thread-0.3.0-RC1.html">实时线程操作系统，第一次听说这么个玩意，世界之大无奇不有，下面就来看看bernard撰写的这篇文章吧。post/RT-Thread-0.3.0-RC1.html">实时线程操作系统（RT-Thread）是国内post/RT-Thread-0.3.0-RC1.html">RT-Thread工作室精心打造的post/RT-Thread-0.3.0-RC1.html">开源实时操作系统，历时4年的呕心沥血开发，力图突破国内没有小型开源实时操作系统的局面，它不仅仅是一款开源意义的实时操作系统，也是一款产品级别的实时操作系统，它已经被国内十多所企业所采用，被证明是一款能够长时间稳定持续运行的操作系统。
date: 2009-12-30 11:26:04
category: 操作系统
tags: ['RT-Thread', '开源', '实时线程操作系统']
post_id: 1040
alias: RT-Thread-0.3.0-RC1
ViewNums: 3084
---

[RT-Thread](/blog/rt-thread-030-rc1)-[实时线程操作系统](/blog/rt-thread-030-rc1)，第一次听说这么个玩意，世界之大无奇不有，下面就来看看 bernard 撰写的这篇文章吧。

[实时线程操作系统](/blog/rt-thread-030-rc1)（[RT-Thread](http://www.rt-thread.org/)）是国内[RT-Thread](/blog/rt-thread-030-rc1)工作室精心打造的[开源实时操作系统](/blog/rt-thread-030-rc1)，历时4年的呕心沥血开发，力图突破国内没有小型开源实时操作系统的局面，它不仅仅是一款开源意义的实时操作系统，也是一款产品级别的实时操作系统，它已经被国内十多所企业所采用，被证明是一款能够长时间稳定持续运行的操作系统。

[实时线程](/blog/rt-thread-030-rc1)操作系统从0.2.4正式版发布以来，目前已经一年多了，0.3.0开发分支在稳步进行中，亦收到来自国内十数个缺陷反馈、补丁修正，从针对 STM32的beta1版本、beta2版本到LM3S的beta1版本，它总是力求发布一个稳定的版本，向着 0.3.0正式版、稳定版迈进，而现在，就是RT-Thread开发工作室献上的0.3.0第一候选版，面向ST STM32微控制器（ARM公司的最新Cortex-M3构架处理器）。

这个版本自0.3.0 beta2版本以来的更新记录：

*内核:*

* 添加rt_memory_info函数用于获得系统内存信息情况;
* 添加rt_calloc函数声明;
* 添加minilibc小型C库，仅用于GCC编译环境;
* 添加GCC编译支持，采用scons构建系统;
* 添加software timer的实现;
* 更改semaphore和mutex值为无符号值;
* 更改邮箱、消息队列超时值为0，当再次计算出下一超时点为负数时;
* 更改内存池钩子函数参数;
* 移除不存在的钩子函数，添加缺少的对象钩子函数声明;
* 从IPC中移除fast_event;
* 修正event clear的bug;
* 修正memory重新分配的bug;
* 修正串口初始化的问题;
* 修正mutex_release bug;
* 修正周期性定时器在超时时停止自身的bug;
* 修正内存池初始化的bug;
* 修正设备初始化函数中激活参数的bug;
* 修正RT_IPC_FLAG_PRIO处理的bug;

*LwIP轻型TCP/IP协议栈：*

* 升级LwIP到1.3.1版本;
* 在LwIP中添加list_if，set_if，set_dns命令;
* 更改DHCP休眠时间为微秒;
* 修正LwIP DHCP选项问题;
* 修正lwip_select函数返回值问题;

*文件系统：*

* 添加ELM FatFs文件系统;
* 修正EFSL的编译警告;
* 修正closedir中不释放fd的bug;
* 修正lseek中SEEK_END处理的bug;

*FinSH shell:*

* finsh添加退格键的支持;
* finsh添加历史记录、符号自动完成的支持;
* 修正finsh不能使用USART2的问题;

*STM32相关:*

* 升级ST固件库到3.1.2;
* STM32添加LD、MD、HD、CL设备的支持;
* STM32上添加DM9000A、STM32F107以太网驱动;
* 修正rt_serial_getc函数的bug;
* 修正CM3上下文切换时被高优先级中断抢占的问题;
* 修正rt_realloc函数中关于内存使用统计的bug;
* 修正当缓冲中不存在数据时rt_serial_read的bug;
* 修正serial发送中断的bug;
* 修正Keil MDK 3.5以下版本编译错误的问题;

RT-Thread的netutils组件（包含了ping, tftp client, ftp server, http server等应用程序）将不独立发布，可以直接到svn中获得。RTGUI组件不久将做一次独立的发布（基于STM32平台），下面链接是一个采用RTGUI组件的开源STM32网络收音机项目UI：

[![RT-Thread 0.3.0 RC1 - 国产开源实时线程操作系统](http://www.rt-thread.org/web/images/radio.jpg)](/blog/rt-thread-030-rc1)

