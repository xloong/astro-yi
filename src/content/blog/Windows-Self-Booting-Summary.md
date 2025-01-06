---
title: "Windows自启动方式完全总结[zz]"
description: 在职业欠钱&zj1244那看到的，转来做收藏之用，以后碰到了难缠的病毒木马等可以查查看~一.自启动项目:开始---程序---启动,里面添加一些应用程序或者快捷方式.这是Windows里面最常见,以及应用最简单的启动方式
date: 2007-10-31 04:52:32
category: 技术文章
tags: ['技术类', '启发', '安全', '病毒Virus', 'Windows', 'Autoruninf']
post_id: 227
alias: Windows-Self-Booting-Summary
ViewNums: 7103
---

在[职业欠钱&zj1244](http://xdxf.cn//)那看到的，转来做收藏之用，以后碰到了难缠的病毒木马等可以查查看~

**一.自启动项目:**开始---程序---启动,里面添加一些应用程序或者快捷方式.
这是**Windows** 里面最常见,以及应用最简单的启动方式,如果想一些文件开机时候启动,那么也可以将他拖入里面或者建立快捷方式拖入里面.现在一般的病毒不会采取这样的启动手法.也有个别会.
路径:C:Documents and SettingsOwner「开始」菜单程序启动

**二. 第二自启动项目:**
这个是很明显却被人们所忽略的一个,使用方法和第一自启动目录是完全一样的, 只要找到该目录，将所需要启动的文件拖放进去就可以达到启动的目的.
路径:
C:Documents and SettingsUser「开始」菜单程序启动

**三. **系统**配置文件启动:**
对于系统配置文件,许多人一定很陌生,许多病毒都是以这种方式启动.

1)WIN.INI启动:
启动位置(xxx.exe为要启动的文件名称):
[windows]
load=xxx.exe[这种方法文件会在后台运行]
run=xxx.exe[这种方法文件会在默认状态下被运行]

2)SYSTEM.INI启动:
启动位置(xxx.exe为要启动的文件名称)：
默认为:
[boot]
Shell=Explorer.exe [Explorer.exe是Windows程序管理器或者Windows资源管理器,属于正常]
可启动文件后为:
[boot]
Shell= Explorer.exe xxx.exe [现在许多病毒会采用此启动方式,随着Explorer启动, 隐蔽性很好]
注意: SYSTEM.INI和WIN.INI文件不同,SYSTEM.INI的启动只能启动一个指定文件,不要把Shell=Explorer.exe xxx.exe换为Shell=xxx.exe,这样会使Windows瘫痪!

1) WININIT.INI启动:
WinInit即为Windows Setup Initialization Utility, 中文:Windows安装初始化工具.
它会在系统装载Windows之前让系统执行一些命令，包括复制，删除，重命名等，以完成更新文件的目的.
文件格式:
[rename]
xxx1=xxx2
意思是把xxx2文件复制为文件名为xxx1的文件，相当于覆盖xxx1文件
如果要把某文件删除,则可以用以下命令:
[rename]
nul=xxx2
以上文件名都必须包含完整路径.

1) WINSTART.BAT启动:
这是系统启动的批处理文件,主要用来复制和删除文件.如一些软件卸载后会剩余一些残留物在系统,这时它的作用就来了.
如：
“@if exist C:WINDOWSTEMPxxxx.BAT call C:WINDOWSTEMPxxxx.BAT”
这里是执行xxxx.BAT文件的意思

1) USERINIT.INI启动[2/2补充]:
这种启动方式也会被一些病毒作为启动方式,与SYSTEM.INI相同.

1) AUTOEXEC.BAT启动:
这个是常用的启动方式.病毒会通过它来做一些动作. 在AUTOEXEC.BAT文件中会包含有恶意代码。如format c: /y 等等其它.

**四. 注册表启动:**
通过注册表来启动,是WINDOWS中使用最频繁的一种.
-----------------------------------------------------------------------------------------------------------------
HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindows NTCurrentVersionWinlogon
HKEY_LOCAL_MACHINESystemCurrentControlSetServices
HKEY_LOCAL_MACHINESystemControlSet001Session ManagerBootExecute
HKEY_LOCAL_MACHINESYSTEMControlSet001ControlSession ManagerBootExecute
HKEY_CURRENT_USERSoftwareMicrosoftWindowsCurrentVersionGroup Policy Objects本地UserSoftwareMicrosoftWindowsCurrentVersionPolicies ExplorerRun
HKLMSoftwareMicrosoftWindowsCurrentVersionExplorerBrowser Helper Objects
HKLMSOFTWAREMicrosoftWindows NTCurrentVersionWindowsAppInit_DLLs
HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindows NTCurrentVersionWinlogonNotify
HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindowsCurrentVersionRunOnceEx
HKEY_LOCAL_MACHINESoftwareMicrosoftWindowsCurrentVersionRunServicesOnce
HKEY_LOCAL_MACHINESoftwareMicrosoftWindowsCurrentVersionRunServices
HKEY_CURRENT_USERSoftwareMicrosoftWindowsCurrentVersionRunOnceSetup
HKEY_USERS.DefaultSoftwareMicrosoftWindowsCurrentVersionRun
HKEY_USERS.DefaultSoftwareMicrosoftWindowsCurrentVersionRunOnce
HKEY_LOCAL_MACHINESoftwareMicrosoftActive SetupInstalled Components
HKEY_LOCAL_MACHINESystemCurrentControlSetServicesVxD
HKEY_CURRENT_USERControl PanelDesktop
HKEY_LOCAL_MACHINESystemCurrentControlSetControlSession Manager
HKEY_LOCAL_MACHINESystemCurrentControlSetServices
HKEY_LOCAL_MACHINESoftwareMicrosoftWindows NTCurrentVersionWinlogonUserinit
HKEY_CURRENT_USERSoftwareMicrosoftWindows NTCurrentVersionWindows
un
HKEY_LOCAL_MACHINESoftwareMicrosoftWindowsCurrentVersionShellServiceObjectDelayLoad
HKEY_CURRENT_USERSoftwareMicrosoftWindows NTCurrentVersionWindowsload
HKEY_CURRENT_USERSoftwareMicrosoftWindowsCurrentVersionPoliciesExplorer
un
HKEY_LOCAL_MACHINESoftwareMicrosoftWindowsCurrentVersionPoliciesExplorer
un
HKLMSOFTWAREClassesProtocolsFilter
HKLMSOFTWAREClassesProtocolsHandler
HKLMSOFTWAREMicrosoftActive SetupInstalled Components
HKLMSOFTWAREMicrosoftWindowsCurrentVersionExplorerSharedTaskScheduler
HKLMSOFTWAREMicrosoftWindowsCurrentVersionShellServiceObjectDelayLoad
HKLMSoftwareMicrosoftWindowsCurrentVersionExplorerShellExecuteHooks
HKLMSoftwareMicrosoftWindowsCurrentVersionShell ExtensionsApproved
HKLMSoftwareClassesFolderShellexColumnHandlers
HKCUSoftwareMicrosoftInternet ExplorerUrlSearchHooks
HKLMSoftwareMicrosoftInternet ExplorerToolbar
HKLMSoftwareMicrosoftInternet ExplorerExtensions
HKLMSystemCurrentControlSetControlSession ManagerBootExecute
HKLMSoftwareMicrosoftWindows NTCurrentVersionImage File Execution Options
HKLMSystemCurrentControlSetControlSession ManagerKnownDlls
HKLMSOFTWAREMicrosoftWindows NTCurrentVersionWinlogonUIHost
HKLMSOFTWAREMicrosoftWindows NTCurrentVersionWinlogonNotify
HKCUControl PanelDesktopScrnsave.exe
HKLMSystemCurrentControlSetServicesWinSockParametersProtocol_Catalog9
HKLMSYSTEMCurrentControlSetControlPrintMonitors
HKLMSYSTEMCurrentControlSetControlLsaAuthentication Packages
HKLMSYSTEMCurrentControlSetControlLsaNotification Packages
HKLMSYSTEMCurrentControlSetControlLsaSecurity Packages

**五.其他启动方式:**
(1).C:Explorer.exe启动方式:
这种启动方式很少人知道.
在Win9X下,由于SYSTEM.INI只指定了Windows的外壳文件Explorer.exe的名称,而并没有指定绝对路径,所以Win9X会搜索Explorer.exe文件.
搜索顺序如下：
(1).　　搜索当前目录.
(2).　　如果没有搜索到Explorer.exe则系统会获取
[HKEY_LOCAL_MACHINESYSTEMCurrentControlSetControlSession ManagerExecutivePath]的信息获得相对路径.
(3).　　如果还是没有文件系统则会获取[HKEY_CURRENT_USEREnvironmentPath]的信息获得相对路径.
[HKEY_LOCAL_MACHINESYSTEMCurrentControlSetControlSession ManagerExecutivePath]和[HKEY_CURRENT_USEREnvironmentPath]所保存的相对路径的键值 为:“%SystemRoot%System32;%SystemRoot%”和空.
所以,由于当系统启动时,“当前目录”肯定是%SystemDrive%(系统驱动器),这样系统搜索Explorer.EXE的顺序应该是:
(1).　　%SystemDrive%(例如C:)
(2).　　%SystemRoot%System32(例如C:WINNTSYSTEM32)
(3).　　%SystemRoot%(例如C:WINNT)
此时,如果把一个名为Explorer.EXE的文件放到系统根目录下,这样在每次启动的时候系统就会自动先启动根目录下的Explorer.exe而不启动Windows目录下的Explorer.exe了.
在WinNT系列下,WindowsNT/Windows2000更加注意了Explorer.exe的文件名放置的位置,把系统启动时要使用的外壳文件(Explorer.exe)的名称放到了:
[HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindowsNTCurrentVersionWinlogonShell] 而在Windows 2000 SP2中微软已经更改了这一方式.

(2).屏幕保护启动方式:
Windows 屏幕保护程序是一个*.scr文件,是一个可执行PE文件,如果把屏幕保护程序*.scr重命名为*.exe的文件,这个程序仍然可以正常启动,类似的*.exe文件更名为*.scr文件也仍然可以正常启动.
文件路径保存在System.ini中的SCRNSAVE.EXE=的这条中.如: SCANSAVE.EXE=/%system32% xxxx.scr
这种启动方式具有一定危险.

(3).计划任务启动方式:
Windows 的计划任务功能是指某个程序在某个特指时间启动.这种启动方式隐蔽性相当不错.
[开始]---[程序]---[附件]---[系统工具]---[计划任务],按照一步步顺序操作即可.

(4).Autoruninf的启动方式:
Autoruninf这个文件出现于光盘加载的时候,放入光盘时,光驱会根据这个文件内容来确定是否打开光盘里面的内容.
Autoruninf的内容通常是：
[AUTORUN]
OPEN=文件名.exe
ICON=icon(图标文件).ico
1.如一个木马,为xxx.exe.那么Autoruninf则可以如下:
ōPEN=Windowsxxx.exe
ICON=xxx.exe
这时,每次双击C盘的时候就可以运行木马xxx.exe.

2.如把Autoruninf放入C盘根目录里,则里面内容为:
ōPEN=D:xxx.exe
ICON=xxx.exe
这时,双击C盘则可以运行D盘的xxx.exe

更多请参见：[**Autoruninf**完全操作手册](/blog/autoruninf-handbook)

(5).更改扩展名启动方式:
更改扩展名:  (*.exe)
如:*.exe的文件可以改为:*.bat,*.scr等扩展名来启动.

**六.Vxd虚拟设备驱动启动方式:**
应用程序通过动态加载的VXD虚拟设备驱动,而去的Windows 9X系统的操控权(VXD虚拟设备驱动只适用于Windows 95/98/Me).
可以用来管理例如硬件设备或者已安装软件等系统资源的32位可执行程序，使得几个应用程序可以同时使用这些资源.

**七.Service[服务]启动方式:**
[开始]---[运行]---输入"services.msc",不带引号---即可对服务项目的操作.
在“服务启动方式”选项下,可以设置系统的启动方式:程序开始时自动运行,还是手动运行,或者永久停止启动,或者暂停(重新启动后依旧会启动).
注册表位置:HKEY_LOCAL_MACHINESystemCurrentControlSetServices
通过服务来启动的程序,都是在后台运行,例如国产木马"灰鸽子"就是利用此启动方式来达到后台启动,窃取用户信息.

**八.驱动程序启动方式:**
有些病毒会伪装成硬件的驱动程序,从而达到启动的目的.
1.系统自带的驱动程序.[指直接使用操作系统自带的标准程序来启动]
2.硬件自带的驱动程序.[指使用硬件自带的标准程序来启动]
3.病毒本身伪装的驱动程序.[指病毒本身伪装的标准程序来启动]

06/3/11补充[来自peter_yu]:
windirStart MenuProgramsStartup
UserStartup
All UsersStartup
windirsystemiosubsys
windirsystemvmm32
windirTasks

c:explorer.exe
c:autoexec.bat
c:config.sys
windirwininit.ini
windirwinstart.bat
windirwin.ini - [windows] "load"
windirwin.ini - [windows] "run"
windirsystem.ini - [boot] "shell"
windirsystem.ini - [boot] "scrnsave.exe"
windirdosstart.bat
windirsystemautoexec.nt
windirsystemconfig.nt

06/3/25补充[来自smzd2005]:
Folder.htt
desktop.ini
C:Documents and Settings用户名Application DataMicrosoftInternet ExplorerDesktop.htt

06/8/1补充[本人补充(注册表启动方式)]:
HKLMSYSTEMCurrentControlSetControlMPRServices
HKCUftpshellopencommand
HKCRftpshellopencommand
HKCUSoftwareMicrosoftole
HKCUSoftwareMicrosoftCommand Processor
HKLMSOFTWAREClassesmailtoshellopencommand
HKLMSOFTWAREClassesPROTOCOLS
HKCRPROTOCOLS
HKCUControl PanelDesktop
HKLMSOFTWAREPoliciesMicrosoftWindowsSystemscrīpts
HKLMSOFTWAREMicrosoftCode Store DatabaseDistribution Units
HKLMSYSTEMCurrentControlSetServicesWinSock2
HKLMSYSTEMCurrentControlSetControlLsa
HKLMSOFTWAREMicrosoftWindowsCurrentVersionpoliciesExplorerRun
HKLMSOFTWAREMicrosoftActive SetupInstalled Components
HKLMSOFTWAREMicrosoftWindowsCurrentVersionApp ManagementARPCache
HKLMSOFTWAREMicrosoftWindowsCurrentVersionShellServiceObjectDelayLoad
HKLMSOFTWAREMicrosoftWindowsCurrentVersionExplorerSharedTaskScheduler
HKLMSOFTWAREMicrosoftWindowsCurrentVersionExplorerShellExecuteHooks
HKLMSOFTWAREMicrosoftWindowsCurrentVersionExplorerShell Folders
HKLMSoftwareMicrosoftWindowsCurrentVersionexplorerShell foldersStartup
HKLMSOFTWAREMicrosoftWindowsCurrentVersion
unServices
HKLMSoftwareMicrosoftActive SetupInstalled Components
HKCUSoftwareMicrosoftWindows NTCurrentVersionWindows
HKLMSoftwareMicrosoftWindows NTCurrentVersionWindows

06/8/6补充[本人补充(注册表启动方式)]:
HKLMSoftwareMicrosoftWindows NTCurrentVersionImage File Execution Options
HKLMSystemCurrentControlSetControlSession ManagerKnownDlls
HKLMSOFTWAREClassesProtocolsHandler
HKLMSystemCurrentControlSetControlTerminal ServerWds
dpwdStartupPrograms
HKLMSOFTWAREMicrosoftWindows NTCurrentVersionWinlogonShell

