---
title: Microsoft 安全通报：4 种方法暂时屏蔽 IE 最新 0day
description: Microsoft安全通报：4种方法暂时屏蔽IE最新0dayIE最新0day波及了微软全线系统，目前暂时没有补丁。微软于近日发布了一份安全通报，指导您如何暂时屏蔽此漏洞。漏洞出在OLEDB32.dll这个文件上。所以我们的目的就是屏蔽这个文件。对此，微软连出了4个杀手锏：
date: 2008-12-16 10:37:31
category: 业界新闻
tags: ['安全', '微软', '业界新闻']
post_id: 718
alias: 4-to-date-methods-of-IE-shielding-0day
ViewNums: 2870
---

**[Microsoft 安全通报：4 种方法暂时屏蔽 IE 最新 0day](/blog/4-to-date-methods-of-ie-shielding-0day)**

[IE 最新 0day](/blog/ie7-0day-exploit) 波及了微软全线系统，目前暂时没有补丁。微软于近日发布了一份安全通报，指导您如何暂时屏蔽此[漏洞](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF)。

漏洞出在 OLEDB32.dll 这个文件上。所以我们的目的就是屏蔽这个文件。对此，微软连出了4个杀手锏：

**1. SACL 法（仅适用于 Vista）**
[Unicode]
Unicode=yes
[Version]
signature="$CHICAGO$"
Revision=1
[File Security]
"%ProgramFiles%Common FilesSystemOle DBoledb32.dll",2,"S:(ML;;NWNRNX;;;ME)"

将以上内容保存为 BlockAccess_x86.inf
然后在命令提示符里执行 SecEdit /configure /db BlockAccess.sdb /cfg <inf file>
其中 <inf file> 为 inf 文件路径。若成功会看到“任务成功结束”的提示。

**2. 禁用 Row Position 功能法**

关于漏洞细节可查看：
[IE7漏洞0day exploit](/blog/ie7-0day-exploit "ie7漏洞0day exploit"
[ms08069利用代码exploit 网马](/blog/ms08069-exploit "ms08069利用代码exploit 网马"

HKEY_CLASSES_ROOTCLSID{2048EEE6-7FA2-11D0-9E6A-00A0C9138C29}
打开注册表编辑器，将此键删除即可。

**3. 取消 DLL 注册法**
在命令提示符中输入 Regsvr32.exe /u "%ProgramFiles%Common FilesSystemOle DBoledb32.dll"
即可

**4. 权限设置法**
在命令提示符中输入 cacls "%ProgramFiles%Common FilesSystemOle DBoledb32.dll" /E /P everyone:N

Vista 系统则需要输入3个命令：
takeown /f "%ProgramFiles%Common FilesSystemOle DBoledb32.dll"
icacls "%ProgramFiles%Common FilesSystemOle DBoledb32.dll" /save %TEMP%oledb32.32.dll.TXT
icacls "%ProgramFiles%Common FilesSystemOle DBoledb32.dll" /deny everyone:(F)
其中第一种方法影响最小（只影响 IE 对此 DLL 的访问）。

**附：此漏洞影响的系统、软件列表**

* Windows Internet Explorer 7
* Windows Internet Explorer 7 for Windows XP
* Windows Internet Explorer 7 for Windows Server 2003
* Windows Internet Explorer 7 for Windows Server 2003 IA64
* Windows Internet Explorer 7 in Windows Vista
* Windows Internet Explorer 8 Beta
* Microsoft Internet Explorer 6.0 Service Pack 2
* Microsoft Internet Explorer 6.0 Service Pack 1
* Microsoft Internet Explorer 6.0
* Microsoft Internet Explorer 5.01 Service Pack 4
* [Windows Server 2008](/blog/windows-server-2008-x86-dvd-chs) Datacenter without Hyper-V
* Windows Server 2008 Enterprise without Hyper-V
* Windows Server 2008 for Itanium-Based Systems
* Windows Server 2008 Standard without Hyper-V
* [Windows Server 2008 Datacenter](/blog/windows-server-2008-data-ent-sta-x64-chs)
* Windows Server 2008 Enterprise
* Windows Server 2008 Standard
* Windows Web Server 2008
* Windows Vista Service Pack 1, when used with:
  + Windows Vista Business
  + Windows Vista Enterprise
  + Windows Vista Home Basic
  + Windows Vista Home Premium
  + Windows Vista Starter
  + Windows Vista Ultimate
  + Windows Vista Enterprise 64-bit Edition
  + Windows Vista Home Basic 64-bit Edition
  + Windows Vista Home Premium 64-bit Edition
  + Windows Vista Ultimate 64-bit Edition
  + Windows Vista Business 64-bit Edition
* Microsoft Windows Server 2003 Service Pack 1, when used with:
  + Microsoft Windows Server 2003, Standard Edition (32-bit x86)
  + Microsoft Windows Server 2003, Enterprise Edition (32-bit x86)
  + Microsoft Windows Server 2003, Datacenter Edition (32-bit x86)
  + Microsoft Windows Server 2003, Web Edition
  + Microsoft Windows Server 2003, Datacenter Edition for Itanium-Based Systems
  + Microsoft Windows Server 2003, Enterprise Edition for Itanium-based Systems
* Microsoft Windows Server 2003, Datacenter x64 Edition
* Microsoft Windows Server 2003, Enterprise x64 Edition
* Microsoft Windows Server 2003, Standard x64 Edition
* Microsoft Windows XP Professional x64 Edition
* Microsoft Windows Server 2003 Service Pack 2, when used with:
  + Microsoft Windows Server 2003, Standard Edition (32-bit x86)
  + Microsoft Windows Server 2003, Enterprise Edition (32-bit x86)
  + Microsoft Windows Server 2003, Datacenter Edition (32-bit x86)
  + Microsoft Windows Server 2003, Web Edition
  + Microsoft Windows Server 2003, Datacenter x64 Edition
  + Microsoft Windows Server 2003, Enterprise x64 Edition
  + Microsoft Windows Server 2003, Standard x64 Edition
  + Microsoft Windows XP Professional x64 Edition
  + Microsoft Windows Server 2003, Datacenter Edition for Itanium-Based Systems
  + Microsoft Windows Server 2003, Enterprise Edition for Itanium-based Systems
* Microsoft Windows XP Service Pack 2, when used with:
  + Microsoft Windows XP Home Edition
  + Microsoft Windows XP Professional
* Microsoft [Windows XP Service Pack 3](/blog/deepin-ghost-xp-sp3-v90-iso), when used with:
  + Microsoft Windows XP Home Edition
  + [Microsoft Windows XP](/blog/deepin-litexp-windows-xp-sp3-v62) Professional

对于非 x86 系统请参考微软安全通报自行操作。