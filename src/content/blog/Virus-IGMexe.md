---
title: 关于“IGM.EXE”病毒紧急公告及解决方案[zz]
description: 夜火:最近的病毒很多，五花八门，无奇不有~在教程吧剑心'Blog看到其在研究IGM病毒，还是个穿还原的，解决不易，转来处理方法，给大家借鉴借鉴：此病毒可以穿透市面上所有的还原软件。本人曾在虚拟机上安装最新冰点6.3（单击版本）用病毒样本测试。。都被病毒成功穿透。。可见起危害性如此大。。发上本人的处理办法。欢迎网友留言以及讨论。。。在这病毒横行的年代，网络没有绝对的安全；因为总是先有“魔”后有“道”，安全一定是“适度的”。但是，我们并不能因此放任自流，维持“适度”安全离不开建立一套完整的管理和技术保障体系。
date: 2007-11-01 01:43:24
category: 技术文章
tags: ['病毒Virus', '木马', '安全']
post_id: 228
alias: Virus-IGM.exe
ViewNums: 6842
---
        夜火:最近的病毒很多，五花八门，无奇不有~在[教程吧剑心'Blog](http://hi.baidu.com/jx52199)看到其在研究IGM病毒，还是个穿还原的，解决不易，转来处理方法，给大家借鉴借鉴：                       此病毒可以穿透市面上所有的还原软件。本人曾在虚拟机上安装最新冰点6.3 （单击版本）用病毒样本测试。。都被病毒成功穿透。。可见起危害性如此大。。发上本人的 处理办法。欢迎网友留言以及讨论。。。

在这病毒横行的年代，网络没有绝对的安全；因为总是先有“魔”后有“道”，安全一定是“适度的”。但是，我们并不能因此放任自流，维持“适度”安全离不开建立一套完整的管理和技术保障体系。
近日发现IGM.EXE病毒大范围传播，很多网吧深受其害；大家务必引起重视。

目前发现该病毒(暂时)不能够穿透还原，
但是如果局域网内一有台中该病毒的话（如网游服务器）；
整个局域网就会受到影响；甚至瘫痪。

该病毒利用MAC地址欺骗进行局域网传播。木马程序发作的时候会发出大量的数据包导致局域网通讯拥塞，用户会感觉上网速度越来越慢，掉线；甚至无法上网，同时造成整个局域网的不稳定。拦截局域网用户打开的网页。加载hxxp://ask.35832.com/main.js(为了防止点击http改成hxxp)从上面的网站下载木马盗号器，然后打开的网页会自动关闭。

病毒症状

1．MSconfig的启动项里发现IGM.EXE

2．会生存以下文件

c:WINDOWSIGW.exe（新变种）

c:WINDOWSAVPSrv.exe

c:WINDOWSDiskMan32.exe

c:WINDOWSIGM.exe

c:WINDOWSKvsc3.exe

c:WINDOWSlqvytv.exe

c:WINDOWSMsIMMs32.exe

c:WINDOWSsystem323CEBCAF.EXE

c:WINDOWSsystem32driverssvchost.exe

c:WINDOWSsystem32a.exe

c:WINDOWSupxdnd.exe

c:WINDOWSWinForm.exe

c:WINDOWSsystem32
sjzbpm.dll

c:WINDOWSsystem32
acvsvc.exe

c:WINDOWSdbghlp32.exe

c:WINDOWS
vdispdrv.exe

c:WINDOWSsystem32cmdbcs.dll

c:WINDOWSsystem32dbghlp32.dll

c:WINDOWSsystem32upxdnd.dll

c:WINDOWSsystem32yfmtdiouaf.dll

     C:WINDOWS49400MM.DLL
     C:WINDOWS338448WO.DLL
     C:windows235780mm.dll
     c:windows235780WO.dll

4. 启动项目 －－ 注册表之如下项删除：
[WinSys]     <C:\WINDOWS\IGW.exe>
[WinSysM]     <C:\WINDOWS\IGM.exe>

盘符下生存：Pegefile.pif; Autoruninf;

解决方案

**1.先结束掉IGM.EXE 进程

2.禁用IGM.EXE**
在运行里输入: reg add "HKLMSOFTWAREMicrosoftWindows NTCurrentVersionImage File Execution OptionsIGM.EXE" /v debugger /t reg_sz /d debugfile.exe /f

**3．将以下文件使用XDELBOX删除一次确保完全清除！**

c:\windows\igw.exe
c:\windows\igm.exe
c:\windows\system32\ser2vet.exe
C:\WINDOWS\system32\serdst.exe
C:\WINDOWS\system32\sedrsvedt.exe
C:\WINDOWS\49400MM.DLL
C:\WINDOWS\338448WO.DLL
C:\windows\235780mm.dll
c:\windows\235780WO.dll
c:\windows\system32\0.exe
c:\windows\system32\1.exe
c:\windows\system32\2.exe
c:\windows\system32\3.exe
c:\windows\system32\4.exe
c:\windows\system32\5.exe
c:\windows\system32\6.exe
c:\windows\system32\7.exe
c:\windows\system32\8.exe
c:\windows\system32\9.exe
c:\windows\system32\10.exe
c:\windows\system32\11.exe
c:\windows\system32\12.exe
c:\windows\system32\13.exe
c:\windows\system32\14.exe
c:\windows\system32\15.exe
c:\windows\system32\16.exe
c:\windows\system32\17.exe
c:\windows\system32\18.exe
c:\windows\system32\19.exe

**4．“免疫”把下面的内容另存为BAT文件运行**

md c:WINDOWSAVPSrv.exe   >nul 2>nul

md c:WINDOWSDiskMan32.exe   >nul 2>nul

md c:WINDOWSIGM.exe   >nul 2>nul

md c:WINDOWSKvsc3.exe   >nul 2>nul

md c:WINDOWSlqvytv.exe   >nul 2>nul

md c:WINDOWSMsIMMs32.exe   >nul 2>nul

md c:WINDOWSsystem323CEBCAF.EXE   >nul 2>nul

md %windir%system32driverssvchost.exe >nul 2>nul

md c:WINDOWSsystem32a.exe   >nul 2>nul

md c:WINDOWSupxdnd.exe   >nul 2>nul

md c:WINDOWSWinForm.exe   >nul 2>nul

md c:WINDOWSsystem32
sjzbpm.dll   >nul 2>nul

md c:WINDOWSsystem32
acvsvc.exe   >nul 2>nul

md c:WINDOWScmdbcs.exe   >nul 2>nul

md c:WINDOWSdbghlp32.exe   >nul 2>nul

md c:WINDOWS
vdispdrv.exe   >nul 2>nul

md c:WINDOWSsystem32cmdbcs.dll   >nul 2>nul

md c:WINDOWSsystem32dbghlp32.dll   >nul 2>nul

md c:WINDOWSsystem32upxdnd.dll   >nul 2>nul

md c:WINDOWSsystem32yfmtdiouaf.dll   >nul 2>nul

echo y|cacls.exe c:WINDOWSAVPSrv.exe /d everyone >nul 1>nul

echo y|cacls.exe %windir%system32driverssvchost.exe /d everyone >nul 1>nul

echo y|cacls.exe c:WINDOWSDiskMan32.exe /d everyone >nul 1>nul

echo y|cacls.exe c:WINDOWSIGM.exe /d everyone >nul 1>nul

echo y|cacls.exe c:WINDOWSKvsc3.exe /d everyone >nul 1>nul

echo y|cacls.exe c:WINDOWSlqvytv.exe /d everyone >nul 1>nul

echo y|cacls.exe c:WINDOWSMsIMMs32.exe /d everyone >nul 1>nul

echo y|cacls.exe c:WINDOWSsystem323CEBCAF.EXE /d everyone >nul 1>nul

echo y|cacls.exe c:WINDOWSsystem32a.exe /d everyone >nul 1>nul

echo y|cacls.exe c:WINDOWSupxdnd.exe /d everyone >nul 1>nul

echo y|cacls.exe c:WINDOWSWinForm.exe /d everyone >nul 1>nul

echo y|cacls.exe c:WINDOWSsystem32
sjzbpm.dll /d everyone >nul 1>nul

echo y|cacls.exe c:WINDOWSsystem32
acvsvc.exe /d everyone >nul 1>nul

echo y|cacls.exe c:WINDOWScmdbcs.exe /d everyone >nul 1>nul

echo y|cacls.exe c:WINDOWSdbghlp32.exe /d everyone >nul 1>nul

echo y|cacls.exe c:WINDOWS
vdispdrv.exe /d everyone >nul 1>nul

echo y|cacls.exe c:WINDOWSsystem32cmdbcs.dll /d everyone >nul 1>nul

echo y|cacls.exe c:WINDOWSsystem32dbghlp32.dll /d everyone >nul 1>nul

echo y|cacls.exe c:WINDOWSsystem32upxdnd.dll /d everyone >nul 1>nul

echo y|cacls.exe   c:WINDOWSsystem32yfmtdiouaf.dll /d everyone >nul 1>nul

echo reg add "HKLMSOFTWAREMicrosoftWindows NTCurrentVersionImage File Execution OptionsIGM.EXE" /v debugger /t reg_sz /d debugfile.exe /f

echo gpupdate

exit

**5．在路由上把下面的域名和IP封锁**

1.jopenqq.com

t.11se.com