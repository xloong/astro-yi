---
title: Debian+Nix配置
uid: "20260928125614"
datetime: 2026-09-28 12:56:14
slug: wsl-debian-nix
aliases: []
tags:
  - linux
  - debian
source:
link:
description: Debian+Nix配置
date: 2026-09-28 12:56:14
category:
---
之前的Fedora Silverblue 虽然能保证系统不被AI搞挂，但是AI执行命令有时候会碰到问题，正好看到这篇文章：nix 真的 agent 时代的天选之子 https://www.v2ex.com/t/1241549 ，于是折腾的心又开始骚动。

由于不需要桌面环境，也不是silverblue这种特殊的发行版，直接就安装在wsl中了。
## wsl
`C:\Users\Administrator\.wslconfig`

```toml
[wsl2]
networkingMode=mirrored  # 完全共享主机网络配置
localhostForwarding=true # 自动端口转发
dnsProxy=true
dnsTunneling=true
firewall=true
autoProxy=true
# 限制 WSL 2 最大占用内存，防止 Windows 物理内存吃满
memory=8GB 
# 允许 WSL 2 释放空闲内存给宿主机
autoMemoryReclaim=dropcache
# 新建或导入的 VHDX 默认启用稀疏模式
sparseVhd=true
```

## wsl安装debian
```powershell
wsl --install -d Debian
```
停止运行
```powershell
wsl --shutdown
```
迁移到D盘
目标目录 D:\wsl\debian
```poweshell
# 1. 导出到临时文件
wsl --export Debian D:\wsl\debian\debian_temp.tar

# 2. 注销 C 盘的原版
wsl --unregister Debian

# 3. 导入到 D 盘目标路径
wsl --import Debian D:\wsl\debian D:\wsl\debian\debian_temp.tar --version 2
```

查看系统发行版信息
```bash
cat /etc/os-release
```
改主机名
```bash
sudo nano /etc/wsl.conf
```

```ini
[network]
hostname = 你的新主机名
generateHosts = false
```
整个文件
```ini
[boot]
systemd=true
command="mount --make-rshared /"
[user]
default=你的用户名
[network]
hostname=你的新主机名
generateHosts=false

```


更新系统
如果碰到网络问题，需关闭主机代理软件的tun模式，只用系统代理
```bash
sudo apt update
sudo apt upgrade
```

## 安装tailscale

```bash
curl -fsSL https://tailscale.com/install.sh | sh
```
## ssh

```bash
sudo apt update
sudo apt install -y openssh-server
```

```bash
sudo nano /etc/ssh/sshd_config
```

在文件中确认或修改以下关键项（如果前面带 `#` 请取消注释）：

- `Port 22`（如果 Windows 本身也启用了 SSH 服务，建议改为 `Port 2222` 以防端口冲突）
- `PasswordAuthentication yes`（允许密码登录）
- `PermitRootLogin no`（出于安全考虑，禁止 root 直接登录，使用普通用户登录后再 `sudo`）

修改后保存退出（`Ctrl + O` -> `Enter` -> `Ctrl + X`）。
### 启动 SSH 服务

根据 WSL 是否开启了 `systemd`，选择对应的启动方式：

#### 情况 A：已开启 `systemd`（推荐）

如果在 `/etc/wsl.conf` 中开启了 `systemd`：

```bash
# 设置开机自启并立即启动
sudo systemctl enable --now ssh
```

#### 情况 B：未开启 `systemd`

如果使用传统的 WSL 初始化机制：

```bash
sudo service ssh start
```

## Nix

**1.配置 WSL systemd 支持：**
*前提条件：确保 Nix 和 Podman 能够正常后台运行。*

在 Debian WSL 中创建或修改 `/etc/wsl.conf`：

```toml
[boot]
systemd=true
command="mount --make-rshared /"
```
`command="mount --make-rshared /"` 在系统启动时自动将根目录设置为共享挂载，解决 `"/" is not a shared mount` 警告。

保存后，在 Windows PowerShell 中执行 `wsl --shutdown` 重启 WSL。

**2.安装 Nix 包管理器：**
*推荐使用 Determinate Systems 安装器。 https://docs.determinate.systems *

在 Debian 终端中运行以下命令安装 Nix（此安装器原生对 WSL 及 systemd 做了深度适配，且默认开启 Flakes 功能）：

```bash
curl -fsSL https://install.determinate.systems/nix | sh -s -- install
```

安装完成后重启终端，验证安装：`nix --version`。

**3.配置 Home Manager：**
*声明式管理所有 CLI 工具。*

创建配置目录并编写 `~/.config/home-manager/home.nix`：

```bash
mkdir -p ~/.config/home-manager
```

填入以下配置文件`home.nix`：

```nix
{ config, pkgs, ... }:

{
  home.username = "your-username"; # 替换为你的 Debian 用户名
  home.homeDirectory = "/home/your-username"; # 替换为你的主目录路径
  home.stateVersion = "26.05";
  
  # 以后如果发生冲突，自动把旧文件加上 .bak 扩展名并备份 
  # 独立运行模式（Standalone Mode）不能这样设置
  #home.backupFileExtension = "bak";

  # 允许特定过期的不安全软件包（顶层配置）
  nixpkgs.config = {
    allowUnfree = true; # 可选：顺便允许非自由软件（如 unrar 等）
  };


  # 仅由 Nix 安装的软件列表
  home.packages = with pkgs; [
    unzip
    btop
    eza
    fastfetch
    gnumake
    mosh
    netcat-openbsd
    socat
    jq
    fff
    yazi
    lazygit
    delta
    ripgrep

    nodejs
    pnpm
    yarn
    jdk17
    go
    gcc
    android-tools
    typescript-language-server
    prettier
    python314
    uv
    ruff
    php83
    php83Packages.composer
  ];

  # 启用了 Home Manager 深度集成的配置模块
  #programs.fish.enable = true;
  programs.fzf.enable = true;
  #programs.zoxide.enable = true;
  #programs.git.enable = true;
  #programs.tmux.enable = true;
  
  # 推荐：开启 Git 并自动配置 Delta 与 Lazygit
  programs.git = {
    enable = true;
    settings.user = {
      user = {
	      name  = "Your Name";
	      email = "your.email@example.com";
      };
    };
  };

  # 新版独立的 Delta 配置 
  programs.delta = { 
    enable = true; 
    enableGitIntegration = true; # 显式开启 Git 集成 
  };

  programs.lazygit = {
    enable = true;
    settings.gui.language = "zh-CN";
  };

  # 启用并配置 Neovim 模块
  programs.neovim = {
    enable = true;
    defaultEditor = true; # 自动将系统默认编辑器设为 nvim (代替 nano)
    viAlias = true;       # 允许输入 vi 直接启动 nvim
    vimAlias = true;      # 允许输入 vim 直接启动 nvim
    
    # 可以在这里提前声明 Neovim 运行时依赖的一些常用小工具
    extraPackages = with pkgs; [
      ripgrep     # Telescope 等插件强力依赖
      xclip       # 剪贴板支持（WSL 下非常有用）
    ];
  };

  
  # Home Manager is pretty good at managing dotfiles. The primary way to manage
  # plain files is through 'home.file'.
  home.file = {
    # # Building this configuration will create a copy of 'dotfiles/screenrc' in
    # # the Nix store. Activating the configuration will then make '~/.screenrc' a
    # # symlink to the Nix store copy.
    # ".screenrc".source = dotfiles/screenrc;

    # # You can also set the file content immediately.
    # ".gradle/gradle.properties".text = ''
    #   org.gradle.console=verbose
    #   org.gradle.daemon.idletimeout=3600000
    # '';
  };

  # Home Manager can also manage your environment variables through
  # 'home.sessionVariables'. These will be explicitly sourced when using a
  # shell provided by Home Manager. If you don't want to manage your shell
  # through Home Manager then you have to manually source 'hm-session-vars.sh'
  # located at either
  #
  #  ~/.nix-profile/etc/profile.d/hm-session-vars.sh
  #
  # or
  #
  #  ~/.local/state/nix/profiles/profile/etc/profile.d/hm-session-vars.sh
  #
  # or
  #
  #  /etc/profiles/per-user/[user]/etc/profile.d/hm-session-vars.sh

  # ========================================== 
  # 1. 通用环境变量（ Bash 和 Fish 都会自动继承 ） 
  # ==========================================
  
  # Home Manager 专门用于管理 PATH 环境变量的属性
  home.sessionPath = [
    "$HOME/.local/bin"
    "$HOME/.cargo/bin"
    "$HOME/.npm-global/bin"
    "$HOME/Android/Sdk/platform-tools"
    "$HOME/Android/Sdk/cmdline-tools/latest/bin"
    "$HOME/Android/Sdk/emulator"
  ];

  home.sessionVariables = {
    EDITOR = "nvim";
    #PATH = "$HOME/.npm-global/bin:$HOME/.local/bin:$PATH";

    # 设置 npm 全局安装路径（防止需要 root 权限）
    NPM_CONFIG_PREFIX = "$HOME/.npm-global";

    ANDROID_HOME = "$HOME/Android/Sdk";
    ANDROID_SDK_ROOT = "$HOME/Android/Sdk";
    ANDROID_NDK_HOME = "$HOME/Android/Sdk/ndk/28.0.13004108";
    JAVA_HOME = "${pkgs.jdk17}";
  };
  
  
  # ==========================================
  # 2. Bash 配置
  # ==========================================
  programs.bash = {
    enable = true;

    # Bash 专属别名
    shellAliases = {
      ll = "eza -l --icons";
      la = "eza -la --icons";
      lg = "lazygit";
      ff = "fff";
      cd = "z";
    };

	# 直接追加到 ~/.bashrc 末尾的自定义命令/逻辑
	bashrcExtra = ''
	  if [ -f "$HOME/.nix-profile/etc/profile.d/hm-session-vars.sh" ]; then
	    . "$HOME/.nix-profile/etc/profile.d/hm-session-vars.sh"
	  fi
	  # 可以在这里添加只属于 bash 的初始化脚本
	'';
  };

  # ==========================================
  # 3. Fish 配置
  # ==========================================
  programs.fish = {
    enable = true;

    # Fish 专属别名
    shellAliases = {
      ll = "eza -l --icons";
      la = "eza -la --icons";
      lg = "lazygit";
      ff = "fff";
      cd = "z";
    };

    # Fish 启动时的交互初始化脚本
    interactiveShellInit = ''
      # 禁用默认的 Fish 欢迎问候语
      set -g fish_greeting ""

      if test -f "$HOME/.nix-profile/etc/profile.d/hm-session-vars.fish"
        source "$HOME/.nix-profile/etc/profile.d/hm-session-vars.fish"
      end

      # 将特定路径添加到 Fish 的 PATH 列表中
      #fish_add_path $HOME/.npm-global/bin $HOME/.local/bin
    '';

  };
  
  # 启用 zoxide，并自动集成到各 Shell 中
  programs.zoxide = {
    enable = true;
    enableFishIntegration = true; # 自动为 Fish 添加 z 命令
    enableBashIntegration = true; # 自动为 Bash 添加 z 命令
    options = [ 
      "--cmd cd" # 将 zoxide 的主命令绑定到 cd 上 
    ];
  };



  # Let Home Manager install and manage itself.
  programs.home-manager.enable = true;
}
```

首次激活 Home Manager：

```bash
nix run home-manager/master -- init
nix run home-manager/master -- switch
#或
#nix run home-manager/master -- switch -b bak
```
若不能下载安装，记得调整宿主机的代理工具，一般关闭tun模式就行了

**4.使用 APT 安装底层容器工具：**
*配置 Podman 环境。*

更新系统的 APT 库并安装 Podman 及相关组件：

```bashs
sudo apt update
sudo apt install -y podman podman-docker podman-compose
```

如果需要在 Nix 调用的 Shell 中以 default shell 启动 Fish，可以运行 `chsh -s $(nix-build '<nixpkgs>' -A fish)/bin/fish` 或在 `~/.bashrc` 末尾添加 `exec fish`。
开启用户 Lingering（常驻会话）
```bash
sudo loginctl enable-linger $USER
```

### 在 WSL 中将 Fish 设为默认 Shell

Nix 安装的 Fish 位于 `/home/[user]/.nix-profile/bin/fish`，在 Debian 中将其设为默认 Shell：

1.将 Nix 路径下的 fish 加入系统安全 shell 列表：

```bash
echo "$HOME/.nix-profile/bin/fish" | sudo tee -a /etc/shells
```

2.更改默认 shell：

```bash
chsh -s $HOME/.nix-profile/bin/fish
# 或
chsh -s "$(command -v fish)"
```

3.重新打开 WSL 终端，就会直接进入由 Nix 全权管理的 Fish 环境了。

## 各类nix外的工具

https://github.com/herdrdev/herdr

```bash
curl -fsSL https://herdr.dev/install.sh | sh
```

https://github.com/saladday/cc-switch-cli

```bash
curl -fsSL https://github.com/SaladDay/cc-switch-cli/releases/latest/download/install.sh | bash
```

https://pi.dev

```bash
curl -fsSL https://pi.dev/install.sh | sh
# OR
npm install -g --ignore-scripts @earendil-works/pi-coding-agent
```

https://omp.sh

```bash
curl -fsSL https://omp.sh/install | sh
```

pi设置
`~\.pi\agent\models.json`

```json
{
  "providers": {
    "asdf": {
      "baseUrl": "https://asdf.com/v1",
      "api": "openai-completions",
      "apiKey": "sk-****",
      "compat": {
        "supportsDeveloperRole": false,
        "supportsReasoningEffort": true
      },
      "models": [
        {
          "id": "gpt-6-sol",
          "contextWindow": 1050000,
          "maxTokens": 128000,
          "reasoning": true,
          "reasoningEffort": "low",
          "compaction": {
            "triggerRatio": 0.8,
            "reserveTokens": 20000,
            "keepRecentMessages": 10
          }
        },
        {
          "id": "gpt-5.6-sol",
          "contextWindow": 1050000,
          "maxTokens": 128000,
          "reasoning": true,
          "reasoningEffort": "low",
          "compaction": {
            "triggerRatio": 0.8,
            "reserveTokens": 20000,
            "keepRecentMessages": 10
          }
        },
        {
          "id": "gpt-6-astra",
          "contextWindow": 1050000,
          "maxTokens": 128000,
          "reasoning": true,
          "reasoningEffort": "low",
          "compaction": {
            "triggerRatio": 0.8,
            "reserveTokens": 20000,
            "keepRecentMessages": 10
          }
        }
      ],
      "name": "asdf"
    }
  }
}

```

`~\.pi\agent\settings.json`

```json
{
  "defaultProvider": "asdf",
  "defaultModel": "gpt-6-sol",
  "defaultThinkingLevel": "low",
  "showHardwareCursor": true,
  "lastChangelogVersion": "0.87.1",
  "theme": "dark",
  "outputPad": 0,
  "terminal": {
    "showTerminalProgress": true
  },
  "hideThinkingBlock": false,
  "packages": [
  ]
}
```

pi插件
```bash
pi install npm:pi-web-access
pi install npm:pi-mcp-adapter
pi install npm:pi-subagents
pi install npm:pi-lens
pi install npm:pi-memory
pi install npm:@juicesharp/rpiv-todo
pi install npm:bigpowers
pi install npm:context-mode
pi install npm:pi-powerline-footer
pi install npm:@ff-labs/pi-fff
pi install npm:pi-background-tasks
pi install npm:@vndv/pi-codegraph
pi install npm:pi-cache-optimizer
pi install npm:@juicesharp/rpiv-ask-user-question
pi install npm:pi-zentui
pi install npm:pi-calm
pi install npm:pi-cc-extensions
pi install npm:@narumitw/pi-plan-mode
pi install npm:@paulpham157/apply-patch
```

## 代理 解决git clone慢的问题

- ~/.ssh/config：为 Host * 设置默认 ProxyCommand，让 SSH 连接经代理转发。
### netcat方式

~/.ssh/config
```
Host *
    ProxyCommand nc -X 5 -x 127.0.0.1:7897 %h %p
```

正常ssh远程需要：
```bash
ssh -o ProxyCommand=none -o StrictHostKeyChecking=accept-new user@host
```

## 设置wsl系统随宿主系统一起启动

要实现 Windows 宿主机开机时 WSL 自动运行并对外提供 SSH 服务，需要配置三个核心环节：**WSL 内部 SSH 服务自启**、**Windows 开机唤醒 WSL** 以及 **网络连通性（镜像模式与防火墙）**。

### 第一步：配置 WSL 内部 SSH 服务自启

1.打开 WSL 终端，编辑 WSL 配置文件：

```bash
sudo nano /etc/wsl.conf
```

2.在文件中添加（或修改）以下内容以启用 systemd 支持：

```toml
[boot]
systemd=true
```

3.保存并退出（`Ctrl + O`，回车，`Ctrl + X`），随后设置 SSH 随 systemd 自启：

```bash
sudo systemctl enable ssh
```


### 第二步：配置 Windows 任务计划程序（宿主开机启动 WSL）

使用 Windows “任务计划程序”可以在系统启动（哪怕尚未登录 Windows 桌面）时自动拉起 WSL：

1. 按 `Win + R` 键，输入 `taskschd.msc` 并回车。
2. 在右侧操作栏点击 **“创建任务”**（不要选“创建基本任务”）：

- **常规选项卡**：
	- 名称：`AutoStartWSL`
	- 勾选 **“不管用户是否登录都要运行”**
	- 勾选 **“使用最高权限运行”**

- **触发器选项卡**：
	- 点击“新建” -> 开始任务选择 **“启动时”**（如果希望登录桌面后再启动，可选“在登录时”）。

- **操作选项卡**：
	- 点击“新建” -> 操作选择“启动程序”。
	- **程序或脚本**：`wsl.exe`
	- **添加参数**：`-d <你的分发版名称> --exec true`（例如 `-d Ubuntu --exec true`；若不确定名称，可在 PowerShell 中运行 `wsl -l` 查看）。

- **条件选项卡**：
	- 取消勾选 **“只有在计算机使用交流电源时才启动此任务”**（防止笔记本拔掉电源后失效）。

3.点击“确定”保存，系统会提示输入 Windows 当前管理员账号的密码。


### 第三步：配置网络与防火墙（确保外部可访问）

WSL 2 默认的 NAT 模式会导致每次重启后 WSL 虚拟 IP 发生变化。最稳妥简便的方式是开启 **镜像网络模式（Mirrored Networking）**，让 WSL 直接共享宿主机的 IP 地址与端口。

1. 在 Windows 用户根目录（如 `C:\Users\你的用户名\`）下创建或编辑 `.wslconfig` 文件。
2. 添加以下配置：

```toml
[wsl2]
networkingMode=mirrored
```
3.**放行 Windows 防火墙端口**：

以管理员身份打开 Windows PowerShell，运行以下命令开通 22 端口入站规则：

```poweshell
New-NetFirewallRule -Name "WSL_SSH_22" -DisplayName "WSL SSH Inbound" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 22
```

### 验证生效

1. 在 PowerShell 中运行 `wsl --shutdown` 完全关闭当前 WSL。
2. 重启 Windows 宿主机。
3. 在局域网内的其他设备上，直接尝试通过 SSH 连接宿主机的 IP 即可：

```bash
ssh <WSL用户名>@<Windows宿主机IP>
```

## 安卓USB调试

USB 直连到 WSL2

需要在 Windows 侧安装并使用 usbipd-win，把手机的 USB 设备附加给 WSL：
https://usbipd-win.en.softonic.com/download
1. 手机开启“开发者选项”和“USB 调试”。
2. Windows 安装 usbipd-win。
3. 在 PowerShell 查看 USB 设备：

```powershell
usbipd list
```

4. 绑定设备：

```powershell
usbipd bind --busid <BUSID>
```

5. 附加到 Debian：

```powershell
usbipd attach --wsl --busid <BUSID>
```

6. 在 Debian 中确认：

lsusb 需单独安装
```bash
sudo apt install usbutils
```

```bash
lsusb
adb devices
```

**adb devices 弹出 `no permissions (missing udev rules...`等信息的话**
```bash
sudo apt install android-sdk-platform-tools-common
```
然后重新连接设备并重启 ADB：

```bash
adb kill-server
adb start-server
adb devices
```
如果仍然没有权限，在 Debian 中添加规则：
2d95 是对应设备id

```bash
sudo tee /etc/udev/rules.d/51-android.rules >/dev/null <<'EOF'
SUBSYSTEM=="usb", ATTR{idVendor}=="2d95", MODE="0660", GROUP="plugdev"
EOF

sudo chmod 644 /etc/udev/rules.d/51-android.rules
sudo udevadm control --reload-rules
sudo udevadm trigger
```
重新执行
```bash
adb kill-server
adb start-server
adb devices
```
**不弹出允许USB调试的提示 始终是authorizing状态**
检查USB线是否有数据传输能力（可能是纯充电线） 换根线

**手机第一次连接时会弹出“允许 USB 调试”的授权提示，需要确认。**

如果 Debian 中没有 adb，需要安装 Android platform-tools。优先使用已有 Android SDK 中的：

```bash
$ANDROID_HOME/platform-tools/adb devices
```

或者：

```bash
$ANDROID_SDK_ROOT/platform-tools/adb devices
```

adb devices 正常时应看到类似：

```text
R58M1234567    device
```

如果显示：

```text
unauthorized
```

说明手机还没有确认调试授权。