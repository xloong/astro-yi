---
title: fedora silverblue 配置笔记
uid: 202604081351
datetime: 2026-04-08 13:51
slug: fedora-silverblue-configuration-notes
aliases: []
tags: 
  - linux
  - fedora
  - silverblue
source:
link:

description: fedora silverblue 配置笔记
date: 2026-04-08 13:51:00
category: 笔记
---
最近又想折腾折腾linux了，之前折腾debian，manjaro 都没什么头绪，或者说是遇到自身能力无法解决的问题，于是这次试试fedora。

之前都是在vmware里尝试，这次试试hyper-v。
## 了解与安装
### 分区

本来还纠结如何分区，后来了解到fedora不需要处理这个，它有动态互通的功能，就是btrfs的”共用存储池“的特性，即多个子卷共享同一个磁盘分区，空间动态互补，不需要像传统分区那样预先分配固定大小。fedora是目前将btrfs子卷管理玩的最出色的发行版之一。

fedora默认将根目录 / 和家目录 /home 分为两个子卷。它们共享整个 VHDX 的空间。如果在 `/home` 下载了大量文件，`/` 可用的空间就会自动减少，反之亦然。这种“自适应”是全自动的，无需任何额外配置。在安装时，直接默认就行，开箱即用。

wsl的底层技术就是用的hyper-v，那么相应的也应该有与宿主机之间的读写速度慢的问题，AI告诉我说推荐使用在windows上开SMB的方式，或者vscode远程开发的方式，不同的是一个源码放在win，一个源码放在linux。

### 了解silverblue

本来了解到这里就可以了，但是突然想起网上好多人推荐的silverblue，不可变发行版，对于我这种一个系统跑起来就不想再去动，不想让它轻易崩溃的懒人来说，太合适。于是又开始了解silverblue。

silverblue 系统根目录等是只读的，使用`rpm-ostree`技术，系统就像一个只读的镜像。更新系统不是下载包，而是直接拉取一个新的“版本快照”。

官方不建议在系统层安装开发工具，一般推荐使用`Toolbx` 或 `Distrobox` 或 `Flatpak` 。开发环境的容器无缝挂载在home目录，体验非常干净。

`Distrobox` 允许你在 Fedora 里面跑一个完整的、互通的 Ubuntu 等环境。可以用来安装只有deb包的软件。

#### toolbx

`toolbox create` 创建一个容器

`toolbox enter` 进入容器

在容器中，可以使用`dnf install`命令进行安装各种环境

```bash
# 创建一个名为 "laravel-dev" 的实验室
toolbox create -c laravel-dev

# 进入这个实验室
toolbox enter -c laravel-dev
```
vscode可以使用 `Dev Containers` 插件，SSH连接系统后，直接选择容器操作。
#### 关于迁移

Silverblue 的设计初衷就是**解耦**。它的系统是一个镜像，你的配置在容器（Toolbx）和家目录（Home）里。

- **平滑度：极高。**
- **迁移逻辑：** 你只需要备份你的 `/home` 文件夹和导出 Toolbx 容器列表。在物理机装好 Silverblue 后，把 `/home` 还原，再重新运行一下容器构建脚本，你的整个开发环境（包括 NeoVim 配置、PHP/Python 环境）会**瞬间恢复**，且与虚拟机里一模一样。
- **优势：** 因为系统层是只读且标准化的，物理机和虚拟机的“系统环境”几乎没有差异。你不需要担心物理机的某个驱动安装会污染你的开发环境。

#### rpm-ostree

Silverblue 不使用 `dnf`，而是使用 `rpm-ostree`。它在命令行里比 `dnf` 更严谨：
- **安装系统级插件：** `rpm-ostree install tmux`（比如你想在系统层装个终端复用器）。
- **查看系统状态：** `rpm-ostree status`
    > 这里的输出会像 **Git 的提交历史**一样，告诉你当前系统在哪个版本，你之前“叠加”安装了哪些包。
- **回滚系统：** `rpm-ostree rollback`
    > 如果你装完某个驱动后系统进不去了，在命令行输入这个，系统会立刻变回安装驱动前的样子。

#### 各种软件安装层级 到底哪些需要安装到toolbx中

##### 1. 第一层：系统底座 (用 `rpm-ostree` 安装)

**原则：只有“让硬件跑起来”或“最基础的系统工具”才装在这里。** 这些软件需要重启才能生效，因为它们被“焊”在了系统镜像上。

- **驱动程序：** 如 NVIDIA 显卡驱动、打印机驱动。
- **虚拟化工具：** 如 `libvirt`, `virt-manager` (如果你要在 Fedora 里跑 Win 虚拟机)。
- **系统底层插件：** 如特殊的输入法框架、ZSH/Fish 壳程序、VPN 客户端（如 Tailscale）。
- **必须随系统启动的工具：** 比如 `tmux` 或 `htop`（如果你希望任何时候 SSH 进去都能直接用）。

##### 2. 第二层：日常办公应用 (用 `Flatpak` 安装)

**原则：所有带“图形界面”的成品软件。** 这些软件运行在独立的沙盒里，互不干扰，也不会弄脏系统。

- **浏览器：** Chrome, Firefox。
- **通讯/办公：** 微信、飞书、Discord、LibreOffice。
- **图形化的开发工具：** **VS Code**、Sublime Text、Postman、Navicat。
- **媒体播放：** VLC, Spotify。

##### 3. 第三层：开发实验室 (在 `Toolbx` 里安装)

**原则：所有涉及“编程语言”、“编译器”、“数据库”和“频繁变动的工具”。** 这是你最常敲命令的地方，也是为了保护系统不被各种 runtime（运行时）搞乱。

- **编程语言运行时：** **PHP** (Laravel 必备), **Python** (交易机器人必备), Node.js, Go, Rust。
- **包管理器：** Composer, npm, pip。
- **命令行编译器：** gcc, make。
- **特定项目的命令行工具：** Laravel Installer, AWS CLI, Docker-compose。

## 配置笔记

安装时，都是图形化向导，没什么好说的，而且分区也是默认的，一路选选选，下一步就安装好了，过程很快，10分钟左右。

查看 Silverblue 特有的系统状态：
```bash
rpm-ostree status
```
`State: idle`（表示系统正常）和 `Deployments`（显示你当前运行的版本镜像哈希值），busy 正在执行任务，有可能是系统更新。

查看详细的硬件与系统概览：
```bash
hostnamectl
```

基础的发行版说明：
```bash
cat /etc/os-release
```

```bash
# 启动 SSH 服务
sudo systemctl enable --now sshd
```

### 切换系统源 (rpm-ostree / dnf)
**操作步骤：**

1. **进入配置目录：**

```bash
 cd /etc/yum.repos.d/
```

2. **备份原文件**（防止万一）：

```bash
sudo mkdir backup
sudo cp fedora*.repo backup/
```

3. **使用命令行替换地址**（以**清华源**为例）：

```bash
sudo sed -e 's|^metalink=|#metalink=|g' \
         -e 's|^#baseurl=http://download.example/pub/fedora/linux|baseurl=https://mirrors.tuna.tsinghua.edu.cn/fedora|g' \
         -i fedora.repo fedora-updates.repo fedora-modular.repo fedora-updates-modular.repo
```
执行的时候，提示后2个文件不存在

4. **刷新缓存**：
提示命令不存在
```bash
rpm-ostree cleanup --metadata
```

### 切换应用源 (Flatpak / Flathub)

你平时在“软件商店”下载的东西大多来自 Flathub。默认源在国内极慢，建议切换到 **上海交大 (SJTU)** 或 **上海科技大学** 的镜像。

**操作步骤：**

1. **添加国内镜像远程库：**
```bash
# 以交大镜像为例
sudo flatpak remote-modify flathub --url=https://mirror.sjtu.edu.cn/flathub
```

2. **验证是否生效：**

```
flatpak remotes -d
```

你会看到 `flathub` 的 URL 已经变成了国内地址。

### 切换开发环境源 (Toolbx / Container)

1. 进入容器：`toolbox enter`
2. 执行与前面类似的 `sed` 命令，或者直接安装 `dnf-plugins-core` 并使用 `dnf config-manager`。
### 常用工具

```bash
sudo rpm-ostree install fish btop tmux distrobox grubby fastfetch
```

#### 安装Homebrew
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
# 按提示操作
- Run these commands in your terminal to add Homebrew to your PATH:
    echo >> /var/home/[your_user_name]/.config/fish/config.fish
    echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv fish)"' >> /var/home/[your_user_name]/.config/fish/config.fish
    eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv fish)"
- Install Homebrew's dependencies if you have sudo access:
    sudo dnf group install development-tools
  For more information, see:
    https://docs.brew.sh/Homebrew-on-Linux
- We recommend that you install GCC:
    brew install gcc
- Run brew help to get started
- Further documentation:
    https://docs.brew.sh
```
#### homebrew 换源
fish，非bash，将核心库切换至中科大镜像（USTC）：
```bash
# 修改 brew 核心程序源
git -C (brew --repo) remote set-url origin https://mirrors.ustc.edu.cn/brew.git

# 修改 homebrew-core 源
# git -C (brew --repo)/Library/Taps/homebrew/homebrew-core remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git

# 创建配置目录（如果不存在）
mkdir -p ~/.config/fish

# 将环境变量写入 config.fish
echo '
# Homebrew 镜像配置
set -gx HOMEBREW_INSTALL_FROM_API 1
set -gx HOMEBREW_API_DOMAIN "https://mirrors.ustc.edu.cn/homebrew-bottles/api"
set -gx HOMEBREW_BOTTLE_DOMAIN "https://mirrors.ustc.edu.cn/homebrew-bottles"
set -gx HOMEBREW_BREW_GIT_REMOTE "https://mirrors.ustc.edu.cn/brew.git"
set -gx HOMEBREW_CORE_GIT_REMOTE "https://mirrors.ustc.edu.cn/homebrew-core.git"
' >> ~/.config/fish/config.fish

# 立即在当前会话生效
source ~/.config/fish/config.fish
```

~~`vi ~/.config/fish/config.fish` 在文件顶部添加：~~

```bash
# 自动初始化 Homebrew 环境变量 (无论在宿主机还是容器)
if test -d /home/linuxbrew/.linuxbrew
    set -gx HOMEBREW_PREFIX "/home/linuxbrew/.linuxbrew"
    set -gx HOMEBREW_CELLAR "/home/linuxbrew/.linuxbrew/Cellar"
    set -gx HOMEBREW_REPOSITORY "/home/linuxbrew/.linuxbrew/Homebrew"
    fish_add_path -m /home/linuxbrew/.linuxbrew/bin /home/linuxbrew/.linuxbrew/sbin
    # 初始化 Homebrew 环境变量 
    # 这行代码会自动设置 PATH, MANPATH 等
    # eval (/home/linuxbrew/.linuxbrew/bin/brew shellenv)
end
```

~~这样你只需安装一次，以后不管在哪个容器里，直接输入 `fastfetch` 都能用。~~  
不行 需要安装软件后，穿透别名才行
```bash
# --- Silverblue 命令穿透方案 ---

# 1. 定义核心运行函数 (指向你安装了 Brew 的容器名)
function tb
    toolbox run --container laravel10 $argv
end

# 2. 建立常用工具的“映射”
# 这样你在宿主机输入这些命令时，系统会自动去容器里跑
alias brew='tb brew'
# alias fastfetch='tb fastfetch'
alias tldr='tb tldr'
alias fnm='tb fnm'
alias yazi='tb yazi'

# 3. 别名补全 (让 Tab 键更好用)
complete -c tb -w toolbox
```

#### Homebrew安装常用工具
```bash
brew install yazi ffmpeg sevenzip jq poppler fd ripgrep fzf zoxide fnm tldr neovim
tldr --update
```


### 在 Linux (Silverblue) 内部“填零”

Linux 删除文件只是在文件系统层面标记为“已删”，底层数据还在。我们需要用 `fstrim` 告诉 Hyper-V 哪些空间是真正没用的。

```bash
sudo fstrim -av
```


---

### tailscale

https://tailscale.com/docs/install/linux  

```bash
# 直接使用 curl 下载仓库配置文件
sudo curl -Lo /etc/yum.repos.d/tailscale.repo https://pkgs.tailscale.com/stable/fedora/tailscale.repo

# 安装 tailscale
sudo rpm-ostree install tailscale

systemctl reboot

# 启动并设置开机自启
sudo systemctl enable --now tailscaled

# 登录并连接（这会给你一个认证链接）
sudo tailscale up
```
腾讯云 OpenCloudos 发行版，参考这个centos7的操作 可以安装  
https://tailscale.com/docs/install/centos/centos-7  

#### 宿主机能访问容器中的网页，但是其他tailscale网络中的机器无法访问
package.json中的命令，监听0.0.0.0的ip
```bash
php artisan serve --host=0.0.0.0 --port=8000
```
如果网页能打开，但是样式全乱了或者报错，那是 Vite 的问题。Vite 默认只在 `localhost` 运行。
vite.config.js
```bash
export default defineConfig({
    server: {
        host: '0.0.0.0', // 允许外部访问
        hmr: {
            host: '100.x.y.z' // 这里填你虚拟机的 Tailscale IP
        },
    },
});
```
silverblue运行：
```bash
# 1. 将 tailscale 接口加入到信任区域（或允许其端口）
sudo firewall-cmd --permanent --add-service=http # 实际这一步就足够了
sudo firewall-cmd --permanent --add-port=8000/tcp
sudo firewall-cmd --permanent --add-port=5173/tcp

# 2. 关键：允许来自 tailscale 网段的流量（如果上面不生效）
sudo firewall-cmd --permanent --zone=public --add-interface=tailscale0

# 3. 刷新配置
sudo firewall-cmd --reload
```
## toolbox容器安装laravel10环境

### 创建并进入环境
```bash
toolbox create -c laravel10
toolbox enter laravel10
```
### 换源
```bash
sudo sed -e 's|^metalink=|#metalink=|g' \
         -e 's|^#baseurl=http://download.example/pub/fedora/linux|baseurl=https://mirrors.tuna.tsinghua.edu.cn/fedora|g' \
         -i /etc/yum.repos.d/fedora.repo /etc/yum.repos.d/fedora-updates.repo
```
### 常用工具
silverblue宿主上的一些命令并不能带进toolbox容器环境中，需要再行安装，如fish，yazi，fastfetch等。
```bash
sudo dnf install fish fastfetch lrzsz
```
设置默认shell为fish
```bash
vi ~/.bashrc
```
在文件的**最顶部**添加以下逻辑：
```bash
# 如果当前在交互式模式，且存在 fish 命令，且不在 fish 进程中 
if [[ $- == *i* ]] && command -v fish >/dev/null 2>&1 && [[ $(ps -p $PPID -o comm=) != "fish" ]]; then 
    export SHELL=$(command -v fish) # 强制更新环境变量 
    exec fish 
fi
```
**原理：** `exec` 命令会用 Fish 进程替换掉当前的 Bash 进程。这意味着当你退出 Fish 时，容器窗口会直接关闭，而不会退回到 Bash，非常干净。

homebrew与前面的安装相同
yazi也同上

### Docker命令映射
```bash
rpm-ostree install podman-docker
# 容器中安装 podman-docker 插件，它会自动创建一个 docker 别名指向 podman 
sudo dnf install podman-docker
```
### 降级安装PHP 8.1
使用Remi 配置包降级
```bash
# 如果你是 Fedora 41
sudo dnf install -y https://rpms.remirepo.net/fedora/remi-release-41.rpm

# 如果你是 Fedora 42
sudo dnf install -y https://rpms.remirepo.net/fedora/remi-release-42.rpm

# 或
sudo dnf install -y https://rpms.remirepo.net/fedora/remi-release-$(rpm -E %fedora).rpm
```

安装remi后才能使用`dnf module`命令
```bash
# 重置模块状态
sudo dnf module reset php -y
# 启用remi的8.1模块
sudo dnf module enable php:remi-8.1 -y
# 安装PHP8.1
sudo dnf install -y php-cli php-common php-mbstring php-xml php-zip php-curl php-mysqlnd php-bcmath php-gd php-intl php-opcache php-pdo
```
### 安装composer
```bash
# 在容器内执行
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer

# 验证版本和关联的 PHP
composer --version 
# 确保输出中显示的 PHP 版本是 8.1.x
```

### 安装sail（可选）
https://docs.golaravel.com/docs/10.x/sail  
在已有项目中安装：
```bash
composer require laravel/sail --dev
```
生成配置文件(交互式)
```bash
php artisan sail:install
```
.env 环境变量
```bash
SAIL_PHP_VERSION=8.1
```
启动sail
```bash
./vendor/bin/sail up -d
```
别名
```bash
alias sail='bash vendor/bin/sail'
```

### Fast Node Manager (fnm)
安装
```bash
curl -fsSL https://fnm.vercel.app/install | bash
```
配置fish
`~/.config/fish/config.fish`

```bash
# fnm
set PATH "$HOME/.local/share/fnm" $PATH
fnm env --use-on-cd | source
```
使用
```bash
fnm install 20  # 安装最新的 v20
fnm install 18.16.0  # 安装精确版本
fnm use 20  # 切换到 v20
# 其他
fnm list # 查看已安装
fnm list-remote # 查看远程可用
fnm uninstall 20 # 卸载版本
fnm default 20 # 设置默认值
```

### Podman安装Mariadb数据库

Silverblue 中（不进入Toolbox)
推荐后面的Quadlet方式

1. 创建并启动MariaDB容器：
```bash
# 创建数据存放目录（确保重启不丢数据）
mkdir -p ~/.local/share/mariadb

# 启动容器
podman run -d \
  --name maria_db \
  --label "io.containers.autoupdate=image" \
  -e MARIADB_ROOT_PASSWORD=your_password \
  -e MARIADB_DATABASE=laravel_db \
  -p 3306:3306 \
  -v ~/.local/share/mariadb:/var/lib/mysql:Z \
  docker.io/library/mariadb:latest
```
2. 将容器变成“系统服务” (实现开机自启)
systemd方式
```bash
# 创建用户级别的 systemd 配置目录
mkdir -p ~/.config/systemd/user/

# 生成服务文件
cd ~/.config/systemd/user/
podman generate systemd --name mariadb_db --files --new

# 重新加载并启用服务
systemctl --user daemon-reload
systemctl --user enable --now container-maria_db.service
```

#### Quadlet方式
Quadlet 方式 与上面的systemd的方式2选1即可
```bash
# 创建数据存放目录（确保重启不丢数据）
mkdir -p ~/.local/share/mariadb

mkdir -p ~/.config/containers/systemd/

nvim ~/.config/containers/systemd/maria_db.container
```

```ini
[Unit]
Description=MariaDB Local Database
After=network-online.target

[Container]
Image=docker.io/library/mariadb:latest
ContainerName=maria_db
PublishPort=3306:3306
Environment=MARIADB_ROOT_PASSWORD=your_password
Environment=MARIADB_DATABASE=laravel_db
Volume=%h/.local/share/mariadb:/var/lib/mysql:Z
Label=io.containers.autoupdate=image

[Install]
# 这一行确保开机自启
WantedBy=default.target
```
生效配置
```bash
# 先删除旧的手动运行容器
podman rm -f local-db

# 让 systemd 识别 Quadlet
systemctl --user daemon-reload

# 启动服务 quadlet的方式不需要enable
# systemctl --user enable --now maria_db.service
# 直接启动服务 
systemctl --user start maria_db.service
```
查看是否生效
```bash
systemctl --user status maria_db.service
# 显示 active (running) 为正常
```

3. 确保用户未登录时也能运行
默认情况下，用户级别的 systemd 会在退出登录时停止。我们需要开启“常驻”
```bash
sudo loginctl enable-linger $USER
```

```bash
# 停止服务
systemctl --user stop maria_db.service
# 再次启动
systemctl --user start maria_db.service
```
#### 创建新的数据库
使用数据库管理工具 或：
silverblue执行
```bash
# 进入正在运行的本地数据库容器并打开命令行
podman exec -it local-db mariadb -u root -p
```
输入你设置的密码后，在 MariaDB 命令行里输入：
```sql
CREATE DATABASE some_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- 重复上面的命令可以创建更多库
EXIT;
```

### Podman安装Redis
Quadlet模式

```bash
mkdir -p ~/.local/share/local_redis
```

`nvim ~/.config/containers/systemd/local_redis.container` 

```ini
[Unit]
Description=Redis Service

[Container]
Image=docker.io/library/redis:alpine
ContainerName=local_redis
PublishPort=6379:6379
# 如果需要数据持久化，可以挂载卷
Volume=%h/.local/share/local_redis:/data:Z

[Install]
WantedBy=default.target
```

```bash
systemctl --user daemon-reload
# systemctl --user enable --now local-redis.service
systemctl --user start local_redis.service

sudo loginctl enable-linger $USER
```

## 安装claude code codex

进入toolbox容器
```bash
node -v
npm -v

# 安装 Claude Code
npm install -g @anthropic-ai/claude-code
# 安装完成后，直接输入以下命令并按照提示进行身份验证（需要 Anthropic API Key）
claude

```