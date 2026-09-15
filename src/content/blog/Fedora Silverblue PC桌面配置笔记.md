---
title: Fedora Silverblue PC桌面配置笔记
uid: "20260721002956"
datetime: 2026-07-21 00:29:56
slug: fedora-silverblue-desktop-configuration-notes
aliases: []
tags:
  - linux
  - fedora
  - silverblue
source:
link:
description: Fedora Silverblue PC桌面配置笔记
date: 2026-07-21 00:29:56
category: 笔记
---
我是在一个老笔记本（dell latitude 5490）上安装的fedora silverblue，刚开始识别不出硬盘，需要在开机时按f2，导航至 **System Configuration** -> **SATA Operation**。
将其从 **RAID On** 修改为 **AHCI**。
保存并退出（Apply/Exit）。

### 系统
```bash
# 检查可用更新
rpm-ostree upgrade --check
# 更新
rpm-ostree upgrade 
# 永久回滚
sudo rpm-ostree rollback -r
```

### clash verge

u盘拷贝，命令安装
```bash
rpm-ostree install Clash.Verge.*.rpm
# 卸载
rpm-ostree uninstall clash-verge
```

### flatpak 添加flathub仓库源

```bash
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo

# 换源
# 上海交通大学
flatpak remote-modify flathub --url=https://mirror.sjtu.edu.cn/flathub
# 中国科学技术大学
flatpak remote-modify flathub --url=https://mirrors.ustc.edu.cn/flathub
# 南方科技大学
flatpak remote-modify flathub --url=https://mirrors.sustech.edu.cn/flathub
# 换源后强制更新
# flatpak update --refresh
# 验证是否切换成功
flatpak remotes -d
```

## 输入法 - 小鹤音形

fedora自带的ibus选项中，可以选择小鹤双拼，但是没有音形


推荐使用 GNOME 默认的 IBus + Rime，不必换成 Fcitx5，对 Silverblue 改动最少。

### 1. 安装 Rime

在宿主系统终端执行，不要在 Toolbox 里安装：
```bash
rpm-ostree install ibus-rime librime-lua
systemctl reboot
```
重启后进入：

`设置 → 键盘 → 输入源 → 添加 → 中文 → Rime`

### 2. 安装小鹤音形配置


~/.config/ibus/rime/

注意复制的是压缩包里面的文件，不要在该目录下多套一层文件夹。

也可以使用第三方自动安装方案：
```bash
curl -fsSL https://raw.githubusercontent.com/rime/plum/master/rime-install |
bash -s -- cubercsl/rime-flypy
```
后者来自社区仓库，并非小鹤官网发布包。

### 3. 启用小鹤音形

编辑配置：
```bash
nano ~/.config/ibus/rime/default.custom.yaml
```
写入：
```
patch:
  schema_list:
    - schema: flypy
```
保存后切换到 Rime，点击 GNOME 顶栏输入法菜单中的“部署”。之后用 Super+Space 切换输入法。

如果部署失败，可查看：
```bash
tail -n 50 /tmp/rime.ibus.ERROR
```
关键点是：ibus-rime 和 librime-lua 安装在 Silverblue 宿主系统，小鹤配置放在个人目录，不需要解除系统只读状态。

# 没有托盘以及图标的问题

Silverblue 的 GNOME Shell 不显示传统系统托盘，需要安装 AppIndicator 扩展。Clash Verge Rev 本身已经创建了托盘图标。

### 推荐方案

使用 Flatpak 安装“扩展管理器”，不需要修改 Silverblue 系统镜像：
```bash
flatpak install flathub com.mattjakeman.ExtensionManager
```
如果提示没有 flathub：
```bash
flatpak remote-add --user --if-not-exists flathub \
https://flathub.org/repo/flathub.flatpakrepo

flatpak install --user flathub com.mattjakeman.ExtensionManager
```
打开“扩展管理器”，搜索并安装：

AppIndicator and KStatusNotifierItem Support

启用后注销并重新登录，再启动 Clash Verge Rev。图标会显示在 GNOME 顶栏右侧，点击或右键即可调整节点、系统代理、TUN 模式等。

### 系统包方案

如果更倾向 Fedora 自带软件包：
```bash
rpm-ostree install gnome-shell-extension-appindicator
systemctl reboot
```
重启后启用：
```bash
gnome-extensions enable appindicatorsupport@rgcjonas.gmail.com
```
考虑到你之前遇到过 rpm-ostree transaction in progress，更建议第一种 Flatpak 方案。

如果仍不显示，检查扩展：
```bash
gnome-extensions list --enabled | grep appindicator
pgrep -af clash-verge
```
注意 Silverblue 默认使用 Wayland，不要使用 Alt+F2 后输入 r 重启桌面；直接注销再登录。

# 各种软件包

Tailscale、VS Code 装宿主；Neovim 用宿主 Homebrew；普通桌面应用优先 Flatpak；PicList/iShellPro 用 Gear Lever 管理 AppImage。

软件         推荐方式                 托盘及注意事项
━━━━━━━━━━━  ━━━━━━━━━━━━━━━━━━━━━━━  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tailscale    官方 RPM                 配合 Trayscale 获得托盘面板
───────────  ───────────────────────  ─────────────────────────────────────
Trayscale    Flatpak                  非官方 Tailscale GUI，支持托盘
───────────  ───────────────────────  ─────────────────────────────────────
RustDesk     Flatpak                  有托盘；无人值守被控端改用 RPM
───────────  ───────────────────────  ─────────────────────────────────────
KeePassXC    Flatpak                  有托盘；浏览器集成需注意
───────────  ───────────────────────  ─────────────────────────────────────
Vivaldi      Flatpak或官方 RPM        KeePassXC 浏览器集成建议 RPM
───────────  ───────────────────────  ─────────────────────────────────────
Syncthing    SyncthingTray Flatpak    内置 Syncthing，有完整托盘面板
───────────  ───────────────────────  ─────────────────────────────────────
PicList      官方 AppImage            用 Gear Lever 管理，支持托盘
───────────  ───────────────────────  ─────────────────────────────────────
QQ/微信      Flatpak                  社区封装官方二进制，有托盘
───────────  ───────────────────────  ─────────────────────────────────────
iShellPro    官方 AppImage            用 Gear Lever 管理
───────────  ───────────────────────  ─────────────────────────────────────
Neovim       宿主 Homebrew            终端工具，不要装进 Toolbox
───────────  ───────────────────────  ─────────────────────────────────────
VS Code      微软官方 RPM             比 Flatpak 更方便调用宿主和 Toolbox
───────────  ───────────────────────  ─────────────────────────────────────
Telegram     Flatpak                  官方验证，有托盘
───────────  ───────────────────────  ─────────────────────────────────────
WPS          WPS 365 Flatpak          中文新版；社区封装官方二进制

### 1. 安装 Flatpak 桌面应用
```bash
flatpak remote-add --user --if-not-exists flathub \
https://flathub.org/repo/flathub.flatpakrepo

flatpak install --user flathub \
dev.deedles.Trayscale \
com.rustdesk.RustDesk \
io.github.martchus.syncthingtray \
org.telegram.desktop \
com.qq.QQ \
com.tencent.WeChat \
cn.wps.wps_365 \
it.mijorus.gearlever
```
其中 Telegram、RustDesk、Trayscale、SyncthingTray 有上游验证；QQ、微信和 WPS 365 是社区 Flatpak 封装，但下载的是官方二进制。

WPS 365 体积约 900MB。如果不使用云文档，可以禁止联网：
```bash
flatpak override --user --unshare=network cn.wps.wps_365
```
### 2. 安装 Tailscale 和 VS Code

添加 Tailscale 仓库：
```bash
sudo curl -fsSL \
https://pkgs.tailscale.com/stable/fedora/tailscale.repo \
-o /etc/yum.repos.d/tailscale.repo
```
添加微软 VS Code 仓库：
```bash
printf '%s\n' \
'[code]' \
'name=Visual Studio Code' \
'baseurl=https://packages.microsoft.com/yumrepos/vscode' \
'enabled=1' \
'type=rpm-md' \
'gpgcheck=1' \
'gpgkey=https://packages.microsoft.com/keys/microsoft.asc' |
sudo tee /etc/yum.repos.d/vscode.repo >/dev/null
```
确认没有升级事务后安装：
```bash
rpm-ostree status
rpm-ostree install tailscale code
systemctl reboot
```
重启后配置 Tailscale：
```bash
sudo systemctl enable --now tailscaled
sudo tailscale up # 可能会受clash影响 关闭tun就可以了
sudo tailscale set --operator="$USER"
```
随后打开 Trayscale 并启用自动启动。

VS Code 建议使用这个宿主 RPM 版本；Flatpak 版访问编译器、SSH Agent、Docker/Podman 和 Toolbox 时需要额外绕过沙箱。

### 3. 安装 Neovim

#### HomeBrew
Silverblue 可以直接把 Homebrew 安装到用户目录，不需要修改只读系统，也不要装进 Toolbox。

在 宿主机终端执行官方安装命令：
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
安装结束后，为默认 Bash 配置环境变量：
```bash
echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> ~/.bashrc
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
```
验证：
```bash
brew --version
brew doctor
```
然后可以安装之前提到的 Neovim：
```bash
brew install neovim
nvim --version
```
如果使用 Fish，则改为：
```bash
mkdir -p ~/.config/fish
echo 'eval (/home/linuxbrew/.linuxbrew/bin/brew shellenv)' >> ~/.config/fish/config.fish
eval (/home/linuxbrew/.linuxbrew/bin/brew shellenv)
```
注意：

- 不要使用 sudo brew ...。
- 不要从 Toolbox 中执行安装脚本，否则 Brew 会装进容器环境。
- Brew 安装不经过 rpm-ostree，不会触发之前的 transaction in progress。
- 如果下载一直卡住，通常是 GitHub 网络问题；可以先开启 Clash Verge Rev 的系统代理再执行。

#### neovim

如果宿主 Homebrew 仍在之前的路径：
```bash
/home/linuxbrew/.linuxbrew/bin/brew install neovim
command -v nvim
nvim --version
```
不要直接运行可能指向 Toolbox 的 brew 别名。若宿主没有 Homebrew，也可以使用：
```bash
rpm-ostree install neovim
systemctl reboot
```
### 4. 选择 KeePassXC 与 Vivaldi 方案

如果不需要 KeePassXC-Browser 自动填充，直接安装 Flatpak：
```bash
flatpak install --user flathub \
org.keepassxc.KeePassXC \
com.vivaldi.Vivaldi
```
如果需要 KeePassXC-Browser，Flatpak 浏览器的 Native Messaging 通常不可用，建议两者装成宿主 RPM：
```bash
sudo curl -fsSL \
https://repo.vivaldi.com/archive/vivaldi-fedora.repo \
-o /etc/yum.repos.d/vivaldi.repo

rpm-ostree install vivaldi-stable keepassxc
systemctl reboot
```
不要同时保留同一个软件的 Flatpak 和 RPM 版本。

### 5. 配置 SyncthingTray

首次启动向导中选择：

- 使用内置 Syncthing
- 由 SyncthingTray 启动后端
- 登录后自动启动

不要再安装另一份 syncthing。GNOME 下双击托盘图标可打开完整面板。

同步外接硬盘时授权：
```bash
flatpak override --user \
--filesystem=/run/media/$USER \
io.github.martchus.syncthingtray
```
### 6. 安装 PicList 和 iShellPro

通过浏览器下载 x86_64 AppImage：

- PicList 最新版 (https://github.com/Kuingsmile/PicList/releases/latest)
- iShellPro 官网 (https://ishell.cc/)，选择 Linux

右键下载的 AppImage，选择 Gear Lever 打开，然后加入应用菜单。PicList 托盘会由之前安装的 AppIndicator 扩展显示。

#### ishellpro 黑屏的问题

黑屏问题是 Tauri AppImage 的已知打包问题。AppImage 内置的 Wayland 库与 Fedora 44 的 Mesa/EGL 冲突。

解包 AppImage，并移走其中的 Wayland 库。
```bash
mkdir -p ~/AppImages/ishellpro-fixed

cd ~/AppImages/ishellpro-fixed

../ishellpro.appimage --appimage-extract
```
确认内置库存在：
```bash
ls squashfs-root/usr/lib/*wayland*.so*
```
将这些库移动到备份目录：
```bash
mkdir -p squashfs-root/disabled-wayland-libs

mv squashfs-root/usr/lib/*wayland*.so* squashfs-root/disabled-wayland-libs/
```
启动修复后的版本：
```bash
env GDK_BACKEND=x11 WEBKIT_DISABLE_DMABUF_RENDERER=1 ./squashfs-root/AppRun
```
如果正常打开，以后启动文件就是：
```bash
/var/home/root/AppImages/ishellpro-fixed/squashfs-root/AppRun
```
可以找到原来的桌面启动项：
```bash
grep -Ril "ishellpro.appimage" ~/.local/share/applications
```
将其中的 Exec= 修改为：
```bash
Exec=env GDK_BACKEND=x11 WEBKIT_DISABLE_DMABUF_RENDERER=1 /var/home/root/AppImages/ishellpro-fixed/squashfs-root/AppRun
```
这是临时绕过方案；iShellPro 更新后需要重新解包处理。

---

先运行下面的命令寻找 iShellPro 的桌面启动文件：
```bash
grep -Ril "ishellpro.appimage" ~/.local/share/applications
```
它通常会输出类似：
```bash
/var/home/root/.local/share/applications/gearlever_ishellpro.desktop
```
输出的这个 .desktop 文件就是需要修改的文件。用 nano 打开，例如：
```bash
nano /var/home/root/.local/share/applications/gearlever_ishellpro.desktop
```
实际文件名以你的命令输出为准。找到以 Exec= 开头的一行，将整行替换为：
```bash
Exec=env DESKTOPINTEGRATION=1 GDK_BACKEND=x11 WEBKIT_DISABLE_DMABUF_RENDERER=1 /var/home/root/AppImages/ishellpro-fixed/squashfs-
root/AppRun %U
```
在 Nano 中保存：

- Ctrl+O
- 按回车确认
- Ctrl+X 退出

刷新应用启动项：
```bash
update-desktop-database ~/.local/share/applications
```
然后重新点击应用列表中的 iShellPro 图标。

---

如不能启动，检查 Exec= 命令是否被换成了两行，squashfs-root/AppRun 因此被当成非法配置。使用短启动脚本可以避免长命令再次断行。

先编辑启动脚本：
```
nano ~/AppImages/ishellpro-fixed/run-ishellpro
```
写入：
```
#!/usr/bin/env bash
export DESKTOPINTEGRATION=1
export GDK_BACKEND=x11
export WEBKIT_DISABLE_DMABUF_RENDERER=1
exec /var/home/root/AppImages/ishellpro-fixed/squashfs-root/AppRun
```
然后：
```
chmod +x ~/AppImages/ishellpro-fixed/run-ishellpro
```
重新编辑桌面文件：
```
nano ~/.local/share/applications/ishellpro-fixed.desktop
```
将内容全部替换为：
```
[Desktop Entry]
Name=iShellPro Fixed
Exec=/var/home/root/AppImages/ishellpro-fixed/run-ishellpro
Terminal=false
Type=Application
Categories=Network;RemoteAccess;
```
检查并启动：
```
desktop-file-validate ~/.local/share/applications/ishellpro-fixed.desktop
gtk-launch ishellpro-fixed
```
验证命令没有输出就表示格式正确。之后注销并重新登录，应用列表中会显示 iShellPro Fixed。

### 7. RustDesk 和 WPS 的特殊情况

当前 Flatpak RustDesk 适合用这台电脑控制其他设备。如果需要在重启后、登录前远程控制这台电脑，应下载官方 RustDesk RPM (https://github.com/rustdesk/rustdesk/releases/latest)，通过 rpm-ostree install 文件名.rpm 安装；Wayland
登录界面仍不能被远程接管。

WPS 如果不想使用社区 Flatpak，可从WPS Linux 官网 (https://linux.wps.cn/)下载官方 x86_64 RPM：
```bash
rpm-ostree install ~/Downloads/wps-office-*.x86_64.rpm
systemctl reboot
```
WPS 365 Flatpak与官方 RPM 二选一。复杂 Office 文档若出现字体错位，可将自己合法拥有的 Windows 字体放入 ~/.local/share/fonts/ 后运行：
```bash
fc-cache -f
```
完成安装并注销、重新登录后，Trayscale、SyncthingTray、Telegram、RustDesk、KeePassXC、QQ、微信和 PicList 的图标应出现在 GNOME 顶栏右侧。

### obsidian与数据库

Obsidian 可以直接加入 Flatpak 软件列表：
```bash
flatpak install --user flathub md.obsidian.Obsidian
```
HeidiSQL 的 Linux 替代品首推 DBeaver Community：支持 MySQL/MariaDB、PostgreSQL、SQLite、SQL Server 等，也有 SSH 隧道、数据编辑和导入导出，功能最接近 HeidiSQL。
```bash
flatpak install --user flathub io.dbeaver.DBeaverCommunity
```
如果觉得 DBeaver 界面偏复杂，可以选择更简洁的 Beekeeper Studio：
```bash
flatpak install --user flathub io.beekeeperstudio.Studio
```
Dell 5490 上建议先用 DBeaver；若只是偶尔连接 MySQL/PostgreSQL，再考虑 Beekeeper。Obsidian 仓库可以放进 Syncthing 同步目录，但应避免两台设备同时修改同一篇笔记，否则可能产生冲突副本。

# 落霞孤鹜字体

在 Fedora Silverblue 上建议安装到用户字体目录，不需要 sudo，也不需要 rpm-ostree。

安装简体中文 GB 屏幕版：
```bash
mkdir -p ~/.local/share/fonts/LXGW
curl -fL \
https://github.com/lxgw/LxgwWenKai-Screen/releases/latest/download/LXGWWenKaiGBScreen.ttf \
-o ~/.local/share/fonts/LXGW/LXGWWenKaiGBScreen.ttf

fc-cache -fv
```
如果还想给终端、VS Code、Neovim 使用等宽版：
```bash
curl -fL \
https://github.com/lxgw/LxgwWenKai-Screen/releases/latest/download/LXGWWenKaiMonoGBScreen.ttf \
-o ~/.local/share/fonts/LXGW/LXGWWenKaiMonoGBScreen.ttf

fc-cache -fv
```
检查是否识别：
```bash
fc-match "LXGW WenKai GB Screen"
fc-match "LXGW WenKai Mono GB Screen"
```
安装后重启 Obsidian、VS Code 等应用；GNOME 界面若暂时找不到字体，注销并重新登录。普通文章阅读选择 LXGW WenKai GB Screen，终端和代码编
辑器选择 LXGW WenKai Mono GB Screen。

# 改键 CapsLock

Linux 没有完全等同于 AHK 的工具。在 Fedora Silverblue + GNOME Wayland 下，推荐使用 keyd，可全局实现：

- 轻按 CapsLock → Esc
- 按住 CapsLock 配合其他键 → Ctrl

### 1. 安装 keyd

keyd 当前通过上游推荐的第三方 COPR 提供：
```bash
FEDORA_VERSION=$(rpm -E %fedora)

sudo curl -fL \
"https://copr.fedorainfracloud.org/coprs/alternateved/keyd/repo/fedora-${FEDORA_VERSION}/alternateved-keyd-fedora-${FEDORA_VERSION}.repo"
\
-o /etc/yum.repos.d/_copr:alternateved:keyd.repo

# sudo curl --fail --location --output=/etc/yum.repos.d/keyd.repo https://copr.fedorainfracloud.org/coprs/alternateved/keyd/repo/fedora-44/alternateved-keyd-fedora-44.repo

# 确认下载成功：

head /etc/yum.repos.d/keyd.repo

# 能看到类似 [copr:copr.fedorainfracloud.org:alternateved:keyd] 后，再执行：

sudo rpm-ostree install keyd
```
安装完成后重启：
```bash
systemctl reboot
```
### 2. 配置 CapsLock

重启后执行：
```bash
sudo mkdir -p /etc/keyd
sudo nano /etc/keyd/default.conf
```
写入：
```
[ids]
*

[main]
capslock = overload(control, esc)
```
保存后启动：
```bash
sudo systemctl enable --now keyd
sudo keyd reload
```
现在轻按 CapsLock 就是 Esc，按住 CapsLock 再按 C、V、A 等键，就是 Ctrl+C、Ctrl+V、Ctrl+A。

如果需要临时恢复原键盘行为：
```bash
sudo systemctl disable --now keyd
```
AutoKey 虽然比较像 AHK，但在 Wayland 下无法可靠捕获所有全局按键，因此这个需求用 keyd 更合适。

# 查看进程与cpu内存使用情况

Silverblue 中对应 Windows“任务管理器”的工具，推荐 Resources（资源），可以查看进程、CPU、内存、磁盘、网络和 GPU 使用情况，也能结束进程。

安装：
```bash
flatpak install --user flathub net.nokyan.Resources
```
安装后按 Super 键，搜索“Resources”或“资源”。

也可以使用 GNOME 官方的系统监视器：
```bash
flatpak install --user flathub org.gnome.SystemMonitor
```
如果想像 Windows 一样用 Ctrl+Shift+Esc 呼出：

1. 打开“设置 → 键盘 → 查看及自定义快捷键”。
2. 找到“自定义快捷键”并添加。
3. 名称填写 任务管理器。
4. 命令填写：
```bash
flatpak run net.nokyan.Resources
```
1. 快捷键设置为 Ctrl+Shift+Esc。

终端中则推荐 btop：
```bash
brew install btop
btop
```
btop 使用方向键选择进程，按 k 可以结束进程，按 q 退出。要查看宿主机全部进程，应从 Silverblue 宿主终端运行，不要在 Toolbox 中运行。

# fastfetch
```bash
brew install fastfetch
fastfetch
```



# 开发环境

## volta node

```
curl https://get.volta.sh | bash
```

```
source ~/.bashrc
```

```
volta --version 
which volta 
# 正常应输出类似: ~/.volta/bin/volta
```

```
volta install node@lts 
node -v
```


# 系统跨版本升级

Silverblue 43 升级到 44，建议按下面顺序操作。升级前请先备份重要文件，并确保磁盘空间充足。

1. 更新当前 Fedora 43：

```
rpm-ostree status
sudo rpm-ostree upgrade
systemctl reboot
```

2. 重启进入 Fedora 43 后，确认没有 rpm-ostree 任务运行：

```
rpm-ostree status
```

如果显示 `State: idle`，执行切换到 Fedora 44：

```
sudo rpm-ostree rebase fedora:fedora/44/x86_64/silverblue
```

3. 查看待部署版本，然后重启：

```
rpm-ostree status
systemctl reboot
```

重启后确认版本：

```
rpm-ostree status
rpm -E %fedora
```

应显示 Fedora 44。

如果升级后出现驱动或软件问题，可以回滚到原来的 Fedora 43：

```
sudo rpm-ostree rollback
systemctl reboot
```

Flatpak 应用不会随系统版本自动完成全部更新，升级后建议执行：

```
flatpak update
```

如果你安装过 layered RPM、第三方仓库或 NVIDIA 驱动，先把下面命令的输出发给我，我可以判断是否需要额外处理：

```
rpm-ostree status
```

升级期间不要同时运行 GNOME Software 的系统更新；如果状态不是 `State: idle`，先等待或停止后台 rpm-ostree 事务。

# cd zd（zoxide） ls eza
```bash
rpm-ostree install zoxide eza fzf
```

```
# 如果你使用默认的 Bash，编辑该文件：
nano ~/.bashrc

# 如果你使用的是 Zsh，编辑该文件：
nano ~/.zshrc

```
在文件的**最末尾**，粘贴以下配置代码：

```bash
# -------------------------------------------------------------------
# 1. 配置 zoxide 彻底替代并增强 cd
# -------------------------------------------------------------------
# 让 zoxide 初始化，并将主跳转命令直接改成 "cd" 和 "zd"
eval "$(zoxide init bash --cmd cd)"
# 这样配置后：
# 敲 `cd 路径` 依然可以像以前一样工作，并且会被 zoxide 记录。
# 敲 `cd 模糊词` 就可以开始智能盲跳。
# 敲 `cdi`（或配置了 fzf 后的 `zi`）可以打开交互式历史路径菜单。


# -------------------------------------------------------------------
# 2. 配置 eza 彻底替代 ls
# -------------------------------------------------------------------
if command -v eza &> /dev/null; then
    alias ls='eza --icons=auto --group-directories-first'
    alias ll='eza -lh --icons=auto --group-directories-first --git'
    alias la='eza -lah --icons=auto --group-directories-first --git'
    alias tree='eza --tree --icons=auto'
fi
```

```bash
source ~/.bashrc
```

## fish：
### 配置 `zoxide` 替代 `cd`

```bash
# 创建 fish 配置文件夹（如果不存在的话）
mkdir -p ~/.config/fish/conf.d/

# 将 zoxide 的初始化代码写入专用的启动配置中，并指定触发命令为 cd
echo 'zoxide init fish --cmd cd | source' > ~/.config/fish/conf.d/zoxide.fish

```

### 配置 `eza` 替代 `ls`

```bash
# 1. 替换标准的 ls 命令
funced ls
# 此时终端会打开一个编辑界面，将内容修改为：
function ls
    eza --icons=auto --group-directories-first $argv
end
# 输入完成后，输入 funcsave ls 保存该函数
funcsave ls

# 2. 替换或创建 ll 命令（显示详细信息与 Git 状态）
funced ll
# 将内容修改为：
function ll
    eza -lh --icons=auto --group-directories-first --git $argv
end
funcsave ll

# 3. 替换或创建 la 命令（显示隐藏文件）
funced la
# 将内容修改为：
function la
    eza -lah --icons=auto --group-directories-first --git $argv
end
funcsave la

# 4. 替换或创建 tree 命令（显示目录树）
funced tree
# 将内容修改为：
function tree
    eza --tree --icons=auto $argv
end
funcsave tree

```

### 让配置立刻生效

```bash
source ~/.config/fish/conf.d/zoxide.fish
```

## 终端里的**图标变成了方块或问号（乱码）** 需要**Nerd Fonts（图标字体）**

```bash
# 1. 创建本地用户字体目录（如果不存在）
mkdir -p ~/.local/share/fonts

# 2. 进入临时目录下载 JetBrains Mono 补丁过的 Nerd Font 压缩包
cd /tmp
curl -OL https://github.com/ryanoasis/nerd-fonts/releases/download/v3.5.1/JetBrainsMono.zip

# 3. 解压字体文件到你的用户字体目录中
unzip JetBrainsMono.zip -d ~/.local/share/fonts/

# 4. 刷新系统的字体缓存（立刻生效，无需重启电脑）
fc-cache -fv

# 5. 清理下载的临时压缩包
rm JetBrainsMono.zip

```

**windows ssh远程连接的话 也需要安装字体** https://www.nerdfonts.com/font-downloads 下载解压后全选-右键-为所有人安装

ishellpro中 需要在设置-应用主题-终端 中设置字体

# bash + ble.sh 命令行提示等

```bash
rpm-ostree install git make gawk
```

```bash
# 1. 克隆源码到本地
git clone --recursive --depth 1 --shallow-submodules https://github.com/akinomyoga/ble.sh.git

# 2. 编译并安装到你的用户家目录
make -C ble.sh install PREFIX=~/.local

```

```bash
# 3. 写入配置
echo 'source -- ~/.local/share/blesh/ble.sh' >> ~/.bashrc

# 4. 让配置立即生效
source ~/.bashrc

```
# starship
```bash
curl -sS https://starship.rs/install.sh | sh

```
修改~/.bashrc
```bash
# 1. 先加载 ble.sh
echo 'source -- ~/.local/share/blesh/ble.sh' >> ~/.bashrc

# 2. 后加载 Starship（必须加上 --bash 且在 ble.sh 之后）
echo 'eval "$(starship init bash)"' >> ~/.bashrc


```

```bash
source ~/.bashrc
```
## 为fish设置为starship

在 `~/.config/fish/config.fish` 的最后，添加以下内容：

```bash
starship init fish | source
```

## 配置starship

```bash
mkdir -p ~/.config && touch ~/.config/starship.toml
```


