---
title: p0f - 新的远程OS指纹被动判别工具
description: p0f是继Nmap和Xprobe2之后又一款远程操作系统被动判别工具。它支持：反连SYN模式正连SYN+ACK模式空连RST+模式碎片ACK模式
date: 2008-10-16 09:07:19
category: 安全工具
tags: ['p0f', '安全', '工具共享']
post_id: 643
alias: p0f
ViewNums: 4670
---

**[p0f](/blog/p0f)** 是继Nmap和Xprobe2之后又一款远程操作系统被动判别[工具](/tags/%E5%B7%A5%E5%85%B7%E5%85%B1%E4%BA%AB)。它支持：

1. 反连SYN 模式
2. 正连SYN+ACK 模式
3. 空连RST+ 模式
4. 碎片ACK模式

p0f比较有特色的是它还可以探测：

1. 是否运行于[防火墙](/tags/%E9%98%B2%E7%81%AB%E5%A2%99)之后
2. 是否运行于NAT模式
3. 是否运行于负载均衡模式
4. 远程系统已启动时间
5. 远程系统的DSL和ISP信息等

输出类似的报表：

192.165.38.73:20908 - OpenBSD 3.0-3.4 (up: 836 hrs)
-> 217.8.32.51:80 (distance 6, link: GPRS or FreeS/WAN)
192.165.38.73:21154 - Linux 2.4/2.6 (NAT!) (up: 173 hrs)
-> 217.8.32.51:80 (distance 6, link: GPRS or FreeS/WAN)
192.165.38.73:22003 - Windows XP Pro SP1, 2000 SP3 (NAT!)
-> 217.8.32.51:80 (distance 6, link: GPRS or FreeS/WAN)

[p0f  下载地址](/blog/download.asp?id=181

From:[3w417](http://hi.baidu.com/3w417/blog/item/b7d5bd36a5baa6370a55a9c2.html)

