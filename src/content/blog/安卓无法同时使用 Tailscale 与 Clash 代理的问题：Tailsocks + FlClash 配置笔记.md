---
title: 安卓无法同时使用 Tailscale 与 Clash 代理的问题：Tailsocks + FlClash 配置笔记
uid: "20261006212342"
datetime: 2026-10-06 21:23:42
slug: tailscale-clash-android
aliases: []
tags:
  - 安卓
  - 代理
  - tailscale
  - 工具
source:
link:
description: 安卓无法同时使用 Tailscale 与 Clash 代理的问题：Tailsocks + FlClash 配置笔记
date: 2026-10-06 21:23:42
category: 笔记
---
由于需要经常通过tailscale连接部署的服务或管理一些机器，奈何安卓与ios都是同时只能开启一个VPN服务。

连了tailscale就无法科学上网，科学上网了就无法tailscale。

经过一番搜索，发现一个软件解决了痛点：`TailSocks`

核心原理是让 FlClash 独占 Android 的 VPN/TUN 通道，Tailsocks 以本地 SOCKS5 服务提供 Tailnet 连接，再由 FlClash 将 Tailnet 流量转发给该 SOCKS5 服务。

## 工作原理

```text
手机应用
  └─ FlClash TUN
       ├─ 普通互联网流量 → 代理
       └─ Tailscale 流量 → Tailsocks SOCKS5 → Tailnet
```

Android 通常只能让一个 VPNService 同时接管系统流量，因此不能同时开启 FlClash 和 Tailsocks 的 TUN/VPN 模式。

## Tailsocks 设置

1. 登录并连接 Tailnet。
2. 不开启 TUN VPN 模式，使用 SOCKS5 模式。
3. SOCKS5 监听端口设为 `1055`。
4. 本机访问地址使用 `127.0.0.1:1055。

默认没有配置用户名和密码，因此 Clash 节点不需要认证字段。

## FlClash 脚本覆写

机场订阅本身不需要修改。FlClash 的脚本覆写可以在配置加载时追加 Tailsocks 节点、策略组和分流规则。

在tabbar的 `工具` -> `进阶配置` -> `脚本`，添加一个脚本，名称为 `tailsocks`：

```javascript

function main(config) {
  const tailsocksProxy = {
    name: "Tailsocks",
    type: "socks5",
    server: "127.0.0.1",
    port: 1055,
    udp: true
  };

  if (!Array.isArray(config.proxies)) {
    config.proxies = [];
  }

  config.proxies = config.proxies.filter(function (proxy) {
    return proxy.name !== tailsocksProxy.name;
  });

  config.proxies.push(tailsocksProxy);

  if (!Array.isArray(config["proxy-groups"])) {
    config["proxy-groups"] = [];
  }

  config["proxy-groups"] = config["proxy-groups"].filter(function (group) {
    return group.name !== "Tailscale";
  });

  config["proxy-groups"].push({
    name: "Tailscale",
    type: "select",
    proxies: ["Tailsocks"]
  });

  const tailscaleRules = [
    "DOMAIN,debian,Tailscale",

    "IP-CIDR,100.64.0.0/10,Tailscale,no-resolve",
    "IP-CIDR,fd7a:115c:a1e0::/48,Tailscale,no-resolve",
    "DOMAIN-SUFFIX,ts.net,Tailscale"
  ];

  

  if (!Array.isArray(config.rules)) {
    config.rules = [];
  }

  config.rules = config.rules.filter(function (rule) {
    return tailscaleRules.indexOf(rule) === -1;
  });

  config.rules = tailscaleRules.concat(config.rules);

  return config;
}
```

脚本中的 `DOMAIN,debian,Tailscale` 用于让短名称 `debian` 走 Tailsocks；后面的规则分别覆盖 Tailscale IPv4 地址、IPv6 地址和完整的 `ts.net` 域名。将自定义子网路由到 Tailnet 时，也要把对应网段加到 `tailscaleRules`，例如：

```javascript
"IP-CIDR,192.168.50.0/24,Tailscale,no-resolve"
```
保存脚本后，还需要记得在订阅的配置中，三个点 -> `更多` -> `覆写` -> `脚本` 中勾选`tailsocks`，然后都对应的代理池列表中，就应该有 `Tailsocks` 了。

## FlClash 设置与启动顺序

1. FlClash 开启 TUN/VPN，由它接管 Android 网络流量。
2. Tailsocks 保持 SOCKS5 模式，不开启自身 TUN/VPN。
3. 先启动 Tailsocks 并确认已连接 Tailnet，再启动 FlClash。
4. 允许两个应用后台运行；必要时关闭系统对它们的电池优化。

## 访问与验证

访问 Tailnet 设备时，可使用其 Tailscale IP，例如 `100.x.y.z`，也可以使用完整 MagicDNS 名称，例如：

```text
debian.taild888.ts.net
```

如果希望使用短名称：

```text
debian
```

需要通过 `DOMAIN,debian,Tailscale` 将该精确主机名路由给 Tailsocks。短名称依赖 Tailnet DNS/MagicDNS 的解析能力；若完整域名能解析、短名称不能解析，可能是 DNS 搜索域没有自动补全，而不一定是 Tailscale 路由故障。

建议依次测试：
1. 使用 `100.x.y.z` 访问 Tailnet 设备。
2. 使用完整 `*.ts.net` 名称访问。
3. 使用 `debian` 短名称访问。
4. 访问普通网站，确认普通互联网流量仍按机场规则代理。

## 常见问题

### Tailscale 与 Clash 不能同时启动

检查是否两个应用都启用了 TUN/VPN。保留 FlClash 的 TUN，Tailsocks 使用 SOCKS5。

### IP 和完整域名能访问，短名称不能访问

在脚本的规则列表前部加入精确规则，例如 `DOMAIN,debian,Tailscale`。如仍无法解析，检查 MagicDNS 和 DNS 搜索域；也可继续使用完整 `ts.net` 名称。

### Tailscale 子网设备不能访问

把该子网 CIDR 加入规则列表，并确认 Tailnet 已启用相应子网路由。例如 `192.168.50.0/24` 只是示例，必须替换成实际网段。