---
title: Herdr 中 Pi 输入光标不可见问题
uid: "20261001195736"
datetime: 2026-10-01 19:57:36
slug: herdr-pi-cursor
aliases: []
tags:
  - AI
  - agent
source:
link:
description: Herdr 中 Pi 输入光标不可见问题
date: 2026-10-01 19:57:36
category: 笔记
---
在 Herdr 中运行 Pi 时，输入框的光标看起来没有闪烁或不可见。

进一步观察发现，Pi 输入框本身可以正常输入。聚焦当前 Pi 的 pane 时，输入光标是黑色或几乎不可见。 当前 pane 失去焦点后，光标会显示为白色。 更换 Herdr 主题不能解决问题。 在普通终端中直接运行 Pi 时，光标显示正常。

## 环境

- Herdr 0.9.3
- Pi 0.99.2
- Debian WSL2
- TERM=xterm-256color
- TERM_PROGRAM=herdr
- Pi 配置中的 `showHardwareCursor` 为 `true`

## 原因

Herdr 的终端渲染器默认可能使用绘制型光标模式。该模式由 Herdr 自己在 pane 内容中绘制光标，并可能在聚焦状态下使用错误的颜色或隐藏宿主终端的硬件光标。

Pi 同时启用了硬件光标：

```json
{
  "showHardwareCursor": true
}
```

这会导致 Pi 期待宿主终端提供真实的硬件光标，而 Herdr 又接管或隐藏了该光标。最终表现为聚焦时光标为黑色或不可见，失去焦点后才显示白色光标。

问题与 Herdr 主题无关，也不是 Pi 输入逻辑或光标闪烁定时器的问题。
## 解决方法

编辑 Herdr 配置文件：

```text
~/.config/herdr/config.toml
```

加入以下配置：

```toml
[ui]
host_cursor = "native"
```

`native` 模式让 Herdr 使用宿主终端的真实硬件光标，与 Pi 的 `showHardwareCursor=true` 配置保持一致。

完整配置片段示例：

```toml
onboarding = false

[ui]
host_cursor = "native"

[ui.toast]
delivery = "terminal"
```

## 重启 Herdr

修改配置后，需要重启 Herdr server，使终端渲染器重新初始化：

```bash
herdr server stop
herdr
```

不需要重启 WSL，也不需要重新安装 Pi。只关闭并重新打开 Pi pane 可能不会重新加载该配置。
## 验证

重启后，在 Herdr 中启动 Pi 并聚焦输入框。光标应当：

- 在聚焦状态下可见；
- 使用正常的亮色显示；
- 按宿主终端的设置正常闪烁。

## 备用方案

如果某些其他 TUI 在 `native` 模式下的光标显示异常，可以关闭 Pi 的硬件光标：

```json
{
  "showHardwareCursor": false
}
```

不过对于 Pi 在 Herdr 中的场景，优先使用：

```toml
host_cursor = "native"
```