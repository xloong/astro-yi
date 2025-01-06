---
title: 你到底遭受了多大的SYN Flood攻击？
description: Team:http://www.ph4nt0m.orgAuthor:云舒（http://www.icylife.net）Date:2007-12-07这是一篇好玩的文章，它并不是讲SYNFlood的攻击原理的，也不描述防御攻击的解决方案。在这里，我会随便说说几个通常被设备厂商或无意，或有意隐藏的几个细节。如果你在考虑买防御攻击的设备，希望这个文章能够给你一些帮助——至少在和厂商谈判的时候，知道问哪些问题，不会轻易被人忽悠了。
date: 2007-12-09 06:11:47
category: 技术文章
tags: ['DDOS', '洪水flood', '协议']
post_id: 285
alias: SYN-flood-attack
ViewNums: 4288
---

Team:    [http://www.ph4nt0m.org](http://www.ph4nt0m.org/)
Author:  云舒（[http://www.icylife.net](http://www.icylife.net/)）
Date:     2007-12-07

这是一篇好玩的文章，它并不是讲**SYN Flood**的攻击原理的，也不描述防御攻击的解决方案。在这里，我会随便说说几个通常被设备厂商或无意，或有意隐藏的几个细节。如果你在考虑买防御攻击的设备，希望这个文章能够给你一些帮助——至少在和厂商谈判的时候，知道问哪些问题，不会轻易被人忽悠了。

一. 以太网填充

目前的**SYN Flood**程序，为了提高发送效率，填充包头的时候，没有填充可选的字段，因此IP头长度恰好是20字节(Byte)，图示如下：
typedef struct ip_hdr
{
    unsigned char       h_verlen;
    unsigned char       tos;
    unsigned short      total_len;
    unsigned short      ident;
    unsigned short      frag_and_flags;
    unsigned char       ttl;
    unsigned char       proto;
    unsigned short      checksum;
    unsigned int        sourceIP;
    unsigned int        destIP;
}IP_HEADER;

同样的，对于**TCP**头部，长度也是20字节，图示如下：
typedef struct tcp_hdr
{
    unsigned short      th_sport;
    unsigned short      th_dport;
    unsigned int          th_seq;
    unsigned int          th_ack;
    unsigned char       th_lenres;
    unsigned char       th_flag;
    unsigned short      th_win;
    unsigned short      th_sum;
    unsigned short      th_urp;
}TCP_HEADER;

也就是说，攻击程序填充了一个40字节的数据包，开始发送。但是对于以太网来说，最小的包长度数据段必须达到46字节，而我们的包只有40字节，因此，网卡在发送的时候，会作一些处理。我们40字节的IP头加TCP头包的末尾，会被网卡填充6个0来满足最小包的长度要求。这个时候，整个数据包的长度为14字节的以太网头，20字节的IP头，20字节的TCP头，再加上因为最小包长度要求而填充的6个字节的0，一共是60字节。但是这并还没有完，因为以太网在传输的时候，还有CRC检验的要求，发送数据之前，网卡会对数据包进行CRC检验，将4字节的CRC值附加到包头的最后面。这个时候，我们的数据包长度已经不再是40字节，而是变成了64字节了。这时数据包的结构如下：
|              14字节以太网头                           | 20字节IP头 |  20字节TCP头 |    6字节填充      |   4字节检验  |
| 目的MAC地址 | 源MAC地址 | 上层协议类型 |       IP头     |         TCP头    |     以太网填充   |    CRC检验   |

这些工作都做完了，网卡就开始发送数据包了。但是遗憾的是，你在攻击发起端使用一般的抓包工具，比如TcpDump，WireShark这些，是没法看到这个过程的，这个过程只能由受攻击的主机上抓包进行一些简单的验证。但是在被攻击端使用类工具进行抓包，则可以明显的看到，发送的只有IP头和TCP头的SYN数据包，到达被攻击的机器的时候，后面会多了6个字节的0填充，这就是刚才所说的以太网最小包长度填充了。比较遗憾的是，4字节的CRC检验在网卡接受到数据包完成检验之后，就丢掉了，在被攻击端也没法使用常见的工具捕获到。

也就是说，你填充的40字节的报文在到达被攻击机器网卡的时候，已经不是40字节，而是64字节了。

二. 以太网传输

刚才我们说了在发送时候网卡对数据包的填充等操作，但是还没完，我们来看看攻击数据包在网络上的传输过程。因为攻击数据包很小，远远不够最大传输单元（MTU）的1500字节，因此不会被分片。难道这些数据包就像生产流水线上的罐头一样，一个包连着一个包紧密的挤在一起传输的吗？事实上不是这样的。

以太网在传输的时候，还有前导码（preamble）和帧间距（inter-frame gap）。其中前导码占8字节（byte），64比特位。前导码前面的7字节都是10101010，1和0间隔而成。但是第八个字节就变成了10101011，当主机监测到连续的两个1的时候，就知道后面开始是数据了，首先是目的MAC地址等等，依次解析。也就是说，前导码是告诉主机做好接收数据准备的。帧间距是以太网数据包之间的间隙，帧间距的大小是12字节（byte），96比特位。因此，在网络传输的时候，数据的结构如下：

| 8字节前导码 | 6字节目的MAC地址 | 6字节源MAC地址 | 2字节上层协议类型 | 20字节IP头  | 20字节TCP头 | 6字节以太网填充 | 4字节CRC检验 | 12字节帧间距 |

也就是说，一个SYN包，在网络上传输的时候占得带宽，其实是84字节。

三. 百兆线速或者千兆线速

有了上面的基础，现在可以开始讨论网络安全设备的线速问题了，这里的安全设备可以是Anti-DDOS设备，也可以是IDS，或者IPS等设备。当只填充IP头和TCP头的最小SYN包跑在以太网络上的时候，100Mbit的网络，能支持的最大PPS是100*10^6 / (8 * (64 + 8 + 12)) = 148809 pps，1000Mbit的网络，能支持的最大PPS是1488090 pps。

当厂商来宣传他们的安全设备的时候，他们的数据是否和这些符合呢？他们的IDS支持的最大流量是怎么计算的？包含了哪些内容？他们的Anti-DDOS设备宣传的线速是符合实际情况的吗？是否真的能够防御相应的PPS的攻击？当你和别人讲，你们的IDS显示你们遭受了N Gbit SYN Flood攻击，PPS达到N百万的时候，你真的遭受了大的攻击吗？

四. 总结以及参考

这是去年作**DDOS**防御方面的项目时的一些心得笔记，今天周五没太多事情，就整理一下发出来，或许对一些朋友有帮助。

1. <http://www.ietf.org/rfc/rfc894.txt>，关于最小包长度和最大包长度的描述。
2. <http://www.ietf.org/rfc/rfc2544.txt>，关于前导码，帧间距，PPS等的描述。
3. 《TCP/IP详解》

