---
title: MaxHijack 1.4 - No Arp欺骗的会话劫持工具
description: MaxHijack1.4-NoArp欺骗的会话劫持工具，支持上行，下行双向劫持。
date: 2008-09-14 09:07:30
category: 安全工具
tags: ['Hijack', 'ARP', '工具共享']
post_id: 604
alias: MaxHijack-1.4
ViewNums: 4200
---

[MaxHijack 1.4](/blog/maxhijack-14) - No [Arp](/blog/arp-concept-attack-defend)欺骗的会话劫持工具，支持上行，下行双向劫持。

发布时间： 2008年9月12日

更新：
整合Httphijack 的功能并大大提高效率；
增加上行劫持方式 即可用于服务器网络；
更新引擎库；

截图：
[![MaxHijack 1.4](http://pic.yupoo.com/sunlei/7440462f07fe/wpqoi0vx.jpg)](/blog/maxhijack-14)

使用说明：

1. 设置网卡，网关IP，本地IP
2. 下行劫持： 例如本机为192.168.3.3 目标为同一个子网的192.168.3.4 那么192.168.3.4 访问任何网页都会被插入代码
3. 上行劫持：本机为220.223.222.221 目标为同一个子网的220.223.222.225 那么任何访问220.223.222.225的客户端都会被插入代码
4. 代理： 用于CAM欺骗的数据包的目的MAC地址
5. 被动恢复CAM ：等待交换机自行恢复CAM表（不建议使用）
6. HTTP注入：开启代码注入功能
7. 右侧控制条为劫持包的发包频率
8. 底部状态栏分别为： 状态 代理IP/MAC 目标IP 发包频率 网卡负载

注意：请自行安装winpcap和.net 2.0
解压后运行！！！
不可将本软件用于非法用途！否则后果自负，与CCTEAM无关。

Bug to cncert.net@gmail.com

[进入下载页面](/blog/download.asp?id=150

