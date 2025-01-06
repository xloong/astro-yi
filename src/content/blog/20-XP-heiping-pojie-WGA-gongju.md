---
title: 20日盗版xp黑屏破解方法及工具-WGA黑屏破解补丁
description: 继微软对番茄花园下手之后，对中国市场的又一大动作，夜火在网上看到20日盗版xp黑屏破解方法及工具，特收集于此，以备自用，需要的朋友也可以下载。仅供研究，支持正版。微软将针对中国市场在10月20日启动WindowsXP专业版及Office的正版验证计划，届时，安装了盗版WindowsXP专业版的电脑将被强行每小时“黑屏”(桌面背景变为纯黑色)一次，Office的菜单栏将被添加“不是正版”的标记。
date: 2008-10-19 09:16:00
category: 杂七杂八
tags: ['Windows', '黑屏', '破解', '补丁']
post_id: 648
alias: 20-XP-heiping-pojie-WGA-gongju
ViewNums: 25239
---

继微软对番茄花园下手之后，对中国市场的又一大动作，[夜火](/blog/)在网上看到[**20日盗版xp黑屏破解方法及工具**](/blog/20-xp-heiping-pojie-wga-gongju)，特收集于此，以备自用，需要的朋友也可以下载。仅供研究，支持正版。

微软将针对中国市场在10月20日启动[Windows XP](/blog/deepin-ghost-xp-sp3-v90-iso)专业版及Office的正版验证计划，届时，安装了盗版[Windows XP](/blog/deepin-litexp-windows-xp-sp3-v62)专业版的电脑将被强行每小时“黑屏”(桌面背景变为纯黑色)一次，Office的菜单栏将被添加“不是正版”的标记。

盗版用户开机进入后桌面背景将变为纯黑色，用户需重设背景后方可正常使用电脑，但每隔1个小时背景将变回黑色。用户登录时会出现登录中断对话框，并在屏幕右下方出现一个永久通知和持续提醒的对话框，显示“您可能是软件盗版的受害者”。

**避免20日盗版xp黑屏的方法：**
1.我的电脑-属性-自动更新-关闭自动更新
2.开始-运行（输入services.msc）—禁用Office Source Engine和Automatic Updates

如果20号以后出现每小时黑屏一次的情况，用下面的方法

@echo off
sfc /purgecache
reg delete "HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindows NTCurrentVersionWinlogonNotifyWgalogon" /f
taskkill /f /im WgaTray.exe /T
del c:Windowssystem32WgaTray.exe /f /q
taskkill /f /im WgaTray.exe /T
del c:Windowssystem32WgaTray.exe /f /q
taskkill /f /im WgaTray.exe /T
del c:Windowssystem32WgaTray.exe /f /q
taskkill /f /im WgaTray.exe /T
del c:Windowssystem32WgaTray.exe /f /q
taskkill /f /im WgaTray.exe /T
del c:WINNTsystem32WgaTray.exe /f /q
taskkill /f /im WgaTray.exe /T
del c:WINNTsystem32WgaTray.exe /f /q
taskkill /f /im WgaTray.exe /T
del c:WINNTsystem32WgaTray.exe /f /q
echo. & pause

把上面的复制到记事本里保存,把记事本的后缀Txt改成Bat,然后运行。

当然也可以在服务里直接禁用自动更新服务也是可以的

**XP反盗版黑屏修复工具 2.0**

[![20日盗版xp黑屏破解方法及工具-WGA黑屏破解补丁](http://www.xyzreg.net/xyzwga.jpg "20日盗版xp黑屏破解方法及工具-WGA黑屏破解补丁")](/blog/20-xp-heiping-pojie-wga-gongju)

**XP反盗版黑屏修复工具 2.0**版本更新：
新增：新加入绿色免疫功能，适用于还未出现黑屏的用户（也就是还未安装WGA补丁的）。进行免疫之后，即便开启自动更新或者直接安装反盗版补丁也不会出现异常。

XP反盗版黑屏修复工具 1.2版本更新：
新增：加入自动恢复默认桌面背景的功能，当然你也可选择否由自己手动修改背景。

10月17号更新，版本号v2.0，测试有效。

[**XP反盗版黑屏修复工具 2.0** 下载地址](/blog/download.asp?id=183

**绝对盗版|自觉黑屏**

[![绝对盗版|自觉黑屏 20日盗版xp黑屏破解方法及工具](http://www.cnbeta.com/upimg/081018/ugmbbc_104850.jpg)](/blog/20-xp-heiping-pojie-wga-gongju)

破解虽好，但不能保证永远有效，最好的还是自虐一下，自己来黑屏，让暴风雨来个更猛烈些吧~

[**绝对盗版|自觉黑屏** 下载地址](/blog/download.asp?id=184

From:[kurt](http://kurt.ruyiblog.com),[xyzreg](http://www.xyzreg.net/blog/),[cnBeta](http://www.cnBeta.com)

