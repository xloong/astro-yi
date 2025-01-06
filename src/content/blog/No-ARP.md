---
title: 无ARP欺骗的嗅探技术
description: ARP欺骗的攻击和防御技术都比较成熟了，这里也不再阐述。此次重点讲解如何不用ARP欺骗进行嗅探以及会话劫持的技术原理，实际的攻击方法是进行MAC欺骗。 一、原理：
date: 2008-08-07 10:04:42
category: 技术文章
tags: ['ARP', '技术类']
post_id: 565
alias: No-ARP
ViewNums: 3245
---

//本文以发表于20083期黑客防线 版权归《黑客防线》杂志社所有
//转载请表明版权

**无ARP欺骗的嗅探技术** [ARP](/blog/arp-concept-attack-defend)欺骗的攻击和防御技术都比较成熟了，这里也不再阐述。此次重点讲解如何不用ARP欺骗进行嗅探以及会话劫持的技术原理，实际的攻击方法是进行MAC欺骗。 一、原理：在开始之前我们先简单了解一下交换机转发过程：交换机的一个端口收到一个数据帧时，首先检查改数据帧的目的MAC地址在MAC地址表(CAM)对应的端口，如果目的端口与源端口不为同一个端口，则把帧从目的端口转发出去，同时更新MAC地址表中源端口与源MAC的对应关系；如果目的端口与源端口相同，则丢弃该帧。有如下的工作场景：一个4口的switch,端口分别为Port.A、Port.B、Port.C、Port.D对应主机 A,B,C,D，其中D为网关。当主机A向B发送数据时，A主机按照OSI往下封装数据帧，过程中，会根据IP地址查找到B主机的MAC地址，填充到数据帧中的目的MAC地址。发送之前网卡的MAC层协议控制电路也会先做个判断，如果目的MAC相同于本网卡的MAC，则不会发送，反之网卡将这份数据发送出去。Port.A接收到数据帧，交换机按照上述的检查过程，在MAC地址表发现B的MAC地址(数据帧目的MAC)所在端口号为Port.B，而数据来源的端口号为Port.A，则交换机将数据帧从端口Port.B转发出去。B主机就收到这个数据帧了。 ![无ARP欺骗的嗅探技术](http://www.cncert.net/up_files/image/noarp1.jpg)图1这个寻址过程也可以概括为IP->MAC->PORT,[ARP欺骗](/blog/40a)是欺骗了IP/MAC的应关系，而MAC欺骗则是欺骗了MAC/PORT的对应关系。比较早的攻击方法是泛洪交换机的MAC地址，这样确实会使交换机以广播模式工作从而达到嗅探的目的，但是会造成交换机负载过大，网络缓慢和丢包甚至瘫痪，我们不采用这种方法。 二、实战工作环境为上述的4口swith，软件以cncert的httphijack 为例，应用为A主机劫持C主机的数据。以下是劫持过程(da为目的MAC,sa为源MAC)1.       A发送任意da=网关.mac、sa=B.mac的数据包到网关。这样就表明b.mac 对应的是port.a，在一段时间内，交换机会把发往b.mac 的数据帧全部发到a主机。这个时间一直持续到b主机发送一个数据包，或者另外一个da=网关.mac、sa=b.mac的数据包产生前。  ![无ARP欺骗的嗅探技术](http://www.cncert.net/up_files/image/noarp2.jpg)图22． A 主机收到网关发给B的数据，记录或修改之后要转发给B，在转发前要                            发送一个请求B.MAC的广播，这个包是正常的MAC信息为：da=FFFFFFFFFF、sa=a.mac。这个数据帧表明了a.mac对应port.a，同时会激发b主机响应一个应答包MAC信息为：da=a.mac、sa=b.mac这个数据帧表明了 b.mac对应port.b至此，对应关系已经恢复，A主机将劫持到的数据可顺利转发至B  ![无ARP欺骗的嗅探技术](http://www.cncert.net/up_files/image/noarp3.jpg)图33. 转发劫持到的数据到B，完成一次劫持 三、攻击特点

1. 由于这种攻击方法具有时间分段特性，所以对方的流量越大，劫持频率也越低，网络越稳定。
2. 隐蔽性强，基于1的特殊性和工作本质，可以在[ARP防火墙](/blog/crantiarp42)和双向绑定的环境中工作。

四、如何防护高级的交换机可以采用ip+mac+port 绑定，控制CAM表的自动学习。目前尚无软件可以防护此类攻击。 五、利用工具

1. httphijack beta 2 说明：http会话劫持
2. [SSClone](/blog/switch-session-clone-sniffer) 说明：交换环境下的会话复制软件(gmail,qqmail,sohumail…..)
3. [skiller](/blog/skller-v3-xiazai-download) 说明：流量控制

