---
title: 远程组网(tailscale、zerotier)与远控（rustdesk）
uid: 20230315211524
datetime: 2023-02-08 21:15
slug: 2023-02-08
aliases: []
tags: [工具]
source: 
link: 

description: 远程组网(tailscale、zerotier)与远控（rustdesk）
date: 2023-02-08 21:15:00
category: 笔记
---

<aside>
💡 远程组网主要是通过vpn或frp等技术，将远程内网的电脑，与当前电脑组成一张内网（类似局域网），可以互相访问，实现内网穿透，远程办公。

</aside>

春节刚过没多久，看到有人讨论远程组网与远程控制方案，整理了一波。

## 远程组网

    OpenVPN -> wireguard -> [tailscale](https://tailscale.com/download)

    headscale（tailscale的开源实现，需自建）

    wg-easy

    [zerotier](https://www.zerotier.com/download/)

    frp  需自搭服务器

## 远程控制

    ssh

    rdp（mstsc）

    realvnc

    [rustdesk](https://rustdesk.com/zh/)  todesk

    anyview  anydesk

    parsec 收费 10刀月

    向日葵 免费的限流

    splashtop  收费 35月 最多2设备

## 亲测部分

以上并没有全部尝试，仅试了网评比较好的几个，组网方案选的是 zerotier 与 tailscale ，经常看到网上有人提到这2个，但是并没研究过，这次试了下，都很好用；远控方案只选了rustdesk。

zerotier 与 tailscale 都是商业软件，不过免费额度足够我们个人使用，能商业化运行，也足以说明其优秀。

网上介绍的都很多，基本操作就不说了，网上搜下到处都是，官方的文档也说的很明白，需要注意的地方大概说下。

### zerotier

下载安装后，按照[文档](https://docs.zerotier.com/getting-started/getting-started/)，先建立网络，设备加入后，需要在管理后台，Members 设置，勾选对应设备前面的勾（Auth），对应的设备才被允许接入网络。

### tailscale

下载安装后，需要按[文档](https://tailscale.com/kb/1019/subnets/) 步骤2，进行设置子网路由，带下面这行命令的部分

```powershell
tailscale up --advertise-routes=10.0.0.0/24,10.0.1.0/24
```

设置好之后，还要在 tailscale 后台启用子网路由，才可以使用，后续更复杂的功能我没有去试，到这里就已经可以使用了。

### rustdesk

远控没什么好说的，就那些功能，不过连接速度和稳定性，rustdesk 确实没的说，还不收费，好用。

### 智能插座

对了，我还加了一个 gosund (电小酷)智能插座，拼多多30块搞定，可以接入米家，家里电脑主板bios设置好来电启动，电脑没开也不用怕了，小爱语音关掉插座，过个十来秒，确认主板掉电之后，再让小爱打开插座，家里电脑就能起起来了（电脑没完全掉电，再通电的话，电脑不会启动，可以多等一会）

zreotier tailscale rustdesk 都随系统启动，电脑启动好，就可以远程操作了。以前在家加班忘上传代码，上着班还跑回家上传代码，太傻了，这下就省心了，远程操作下就有了。

智能插座只是远程开机方案之一，还有wol等开机方案，可以尝试

## 总结

zerotier 与 tailscale 我浅浅的试用下来，感觉相差并不大，要说稳定和官网后台的加载速度，我偏向tailscale一些。

很多网友都是安装多个组网软件，多个远控软件，一个挂了还有另外的可用，互为备份，比较稳妥。

远控组网不组网区别都不大，没有组网需求的，只上 rustdesk 进行远控也可以。

不过组网之后可以互相访问内网的一些服务，不用担心不能外网访问内网了。出门在外，笔记本性能不够，完全可以操作家里的机器。相当于多了一个内网自用的服务器。

## 参考

[https://www.v2ex.com/t/910028?p=1](https://www.v2ex.com/t/910028?p=1)

[https://zhuanlan.zhihu.com/p/467997929](https://zhuanlan.zhihu.com/p/467997929)