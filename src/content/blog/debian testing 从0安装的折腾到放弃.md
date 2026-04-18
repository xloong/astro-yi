---
title: debian testing 从0安装的折腾到放弃
uid: 202310080937
datetime: 2023-10-08 09:37
slug: debian-testing-install-giveup
aliases: 
tags:
  - linux
  - debian
source: 
link:

description: debian testing 从0安装的折腾到放弃
date: 2023-10-08 09:37:00
category: 笔记
---
下载安装就不赘述了

安装莫名其妙的慢, 换了源也是, 最后先安装了纯命令行的debian, 然后再安装kde plasma桌面环境, 发现实际速度也还是慢

后面的内容更偏笔记, 无过多说明

清华镜像
https://mirrors.tuna.tsinghua.edu.cn/help/debian/

纯命令行的debian 安装kde plasma
https://www.yundongfang.com/Yun83738.html

```shell
sudo apt install tasksel
sudo tasksel
```

### 基础

```shell
sudo apt install curl
sudo apt install vim
sudo apt install git
```

**如果没有sudo权限**

```shell
su
vim /etc/sudoers
```

在
```shell
# User privilege specification
root ALL=(ALL:ALL) ALL
```

下面添加

```shell
username ALL=(ALL:ALL) ALL
```

即可

**输出字符串组成的系统发行版logo及相应信息**

```shell
sudo apt install screenfetch
screenfetch
```

### ~~代理 vmware NAT~~

查看网络

```shell
ip addr show
```

主机有v2ray代理
debian网络设置 `代理服务器` `使用代理服务器自动配置url`
socks://主机ip:10808

### 网络代理不行 换 qv2ray

https://crainyday.gitee.io/Ubuntu_006.html

https://github.com/v2ray/v2ray-core/releases/
https://github.com/v2fly/v2ray-core/releases/tag/v4.31.0
https://github.com/v2fly/v2ray-core/releases/download/v4.31.0/v2ray-linux-64.zip

https://github.com/Qv2ray/Qv2ray/releases
https://github.com/Qv2ray/Qv2ray/releases/download/v2.7.0/Qv2ray-v2.7.0-linux-x64.AppImage

### 输入法

```shell
sudo apt install ruby
sudo apt install fcitx5
im-config -n fcitx5 # 选择fcitx5 作为默认输入法

# 重启
fcitx5

# fcitx5-configtool # 配置工具 通过命令行运行可能失败 通过图形界面运行
sudo apt install fcitx5-rime

rime 输入法自动部署脚本
# https://github.com/Mark24Code/rime-auto-deploy

git clone --depth=1 https://github.com/Mark24Code/rime-auto-deploy.git --branch latest
cd rime-auto-deploy
./installer.rb # 进入部署脚本 3 1
# 重启

# https://github.com/ssnhd/rime
# 下载小鹤双拼方案yaml文件

# 原输入法安装配置脚本 的custom目录下的文件 复制到
# 修正 修改custom目录的文件 利用脚本手动部署 3 2 3 自动复制
# `~/.local/share/fcitx5/rime/` 下
# 重新部署输入法

# https://github.com/iDvel/rime-ice
# 词库

# 自定义词库还没搞
```

### ZSH

```shell
sudo apt install zsh
chsh -s $(which zsh)
```

#### debian KDE 更改konsole的默认shell为zsh

konsole 中 `设置` `配置Konsole` `配置方案` `新建`

 `zsh` `/bin/zsh`

 设为默认即可

 #### zsh的提示设置成中文

```shell
vim ~/.zshrc
```

找到

```shell
export LANG=en_US.UTF-8
```

将其修改为：

```shell
export LANG=zh_CN.UTF-8
```

保存退出后，执行：

```shell
source ~/.zshrc
```
#### ohmyzsh

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

到这一步还必须得扶梯子才能上githubusercontent

又折腾了半天的梯子

最后浏览器可以科学上网了,sh还不行,得单独配置下

直接改命令先跑起来

```shell
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh --proxy http://127.0.0.1:8888)"
```


**给bash或zsh统一设置代理**

`~/.bashrc` 或 `~/.zshrc`

```shell
export http_proxy=http://<代理服务器地址>:<代理端口号>
export https_proxy=http://<代理服务器地址>:<代理端口号>
```

##### ohmyzsh 插件

https://segmentfault.com/a/1190000039860436

**zsh-syntax-highlighting**

```shell
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

在 ~/.zshrc 中配置

```shell
plugins=(其他的插件 zsh-syntax-highlighting)
```

更新配置后重启

```shell
source ~/.zshrc
```

**zsh-autosuggestions**

```shell
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

其他同上

**Z**
oh-my-zsh 自带Z 直接在plugins里加上就好

### 冻结

桌面使用起来有莫名的卡顿, 鼠标点击也有莫名的偏移, 以为是驱动问题, 重新安装了vmware tools, 还是不行, 这在之前的openSUSE和manjaro上都没有碰到过, 也不知道是什么原因, 有空再研究吧