---
title: Autoruninf完全操作手册
description: 夜火：总结的比较全，有用的几乎都写上了，对比以前收集的《病毒的Autoruninf新写法与应用以及防御》和《彻底杜绝Autoruninf自动运行》对自己写写Autoruninf，或修改，杀毒等颇有帮助笔者按：鉴于现在网上完全介绍Autoruninf功能的文章不多，笔者在微软官网的一个犄角旮旯找到了一篇Autoruninf的英文使用说明，在翻译和笔者的亲自试验下写出此篇文章。======我是分隔线======一、Autoruninf是windows下操纵光盘行为的一个文件，需要放在光盘根目录下，部分操作对于硬盘也适用。二、Autoruninf是可以被禁止的。方法如下：点击开始->运行，在文本框中输入regedit或者regedt32。依次展开
date: 2007-11-18 13:04:05
category: 技术文章
tags: ['技术类', '安全', 'Autoruninf']
post_id: 253
alias: Autoruninf-Handbook
ViewNums: 8097
---

夜火：总结的比较全，有用的几乎都写上了，对比以前收集的《[病毒的**Autoruninf**新写法与应用以及防御](/blog/virusautoruninf)》和《[彻底杜绝**Autoruninf**自动运行](/blog/autoruninf)》对自己写写**Autoruninf**，或修改，杀毒等颇有帮助

笔者按：鉴于现在网上完全介绍**Autoruninf**功能的文章不多，笔者在微软官网的一个犄角旮旯找到了一篇**Autoruninf**的英文使用说明，在翻译和笔者的亲自试验下写出此篇文章。

======我是分隔线======

一、**Autoruninf**是windows下操纵光盘行为的一个文件，需要放在光盘根目录下，部分操作对于硬盘也适用。

二、**Autoruninf**是可以被禁止的。方法如下：

点击开始->运行，在文本框中输入regedit或者regedt32。依次展开HKEY_CURRENT_USERSoftwareMicrosoftWindowsCurrentVersionPoliciesExploer，其中的NoDriveTypeAutoRun子键限制着**Autorun**的作用范围，默认为95（16进制）。

把禁用的设备标志相加设置为键值就可以完成设置，其中设备标志如下：
1:无法识别的设备(建议禁止，默认禁止)
2:没有根目录的设备(Drive without root directory未知含义，建议禁止，默认不禁止)
4:可移动的设备(U盘，建议禁止，很多病毒利用U盘的**Autoruninf**进行传染，默认禁止)
8:固定的设备(硬盘，自己看着办，默认不禁止)
16:网络设备(web驱动器，建议禁止，默认禁止)
32:光盘驱动设备(CDROM，默认不禁止)
64:虚拟存储设备(RAM，建议禁止，默认不禁止)
128:未指定的其他驱动器(保留位，建议禁止，默认禁止)

三、**Autoruninf**文件分为三大部分[AutoRun] [AutoRun.Alpha] [DeviceInstall]。

[AutoRun]适用于Windows95以上系统与32位以上CD-ROM，必选。
[AutoRun.alpha]适用于基于RISC的计算机光驱，适用系统为Windows NT 4.0，可选。
[DeviceInstall]适用于Windows XP以上系统，可选。

四、[AutoRun]部分的命令及其详解。

1、DefaultIcon
含义：
指定应用程序的默认图标。
格式：
DefalutIcon=图标路径名[,序号]
参数：
图标文件名：应用程序的默认图标路径名，格式可以为.ico、.bmp、.exe、.dll。当文件格式为.exe和.dll时，有时需要使用序号来指定图标。
序号：当文件格式为.exe和.dll时，文件可能包括多余一个图标，此时需要使用序号来指定图标，需要注意的是，序号是从0开始的。
备注：
应用程序的默认图标将在windows explorer核心的驱动显示窗口中替代设备的默认图标来显示。
图标路径名的默认目录是设备根目录。

2、Icon
含义：
指定设备显示图标。
格式：
Icon=图标路径名[,序号]
参数：
图标文件名：应用程序的默认图标路径名，格式可以为.ico、.bmp、.exe、.dll。当文件格式为.exe和.dll时，有时需要使用序号来指定图标。
序号：当文件格式为.exe和.dll时，文件可能包括多余一个图标，此时需要使用序号来指定图标，需要注意的是，序号是从0开始的。
备注：
设备显示图标将在windows explorer核心的驱动显示窗口中替代设备的默认图标来显示。
图标路径名的默认目录是设备根目录。
当存在应用程序默认图标(DefaultIcon)时，本命令无效。

3、Label
含义：
指定设备描述
格式：
Label=描述
参数：
描述：任意文字，可以包括空格。
备注：
设备描述将在windows explorer核心的驱动显示窗口中替代设备的默认描述卷标来显示。
在非windows explorer核心的驱动显示窗口中（例如右击设备选择属性）显示的仍然是设备的卷标。

4、Open
含义：
指定设备启用时运行之命令行。
格式：
Open=命令行
(命令行：程序路径名 [参数])
参数：
命令行：自动运行的命令行，必须是.exe、.com、.bat文件，其他格式文件可以使用start.exe打开或使用ShellExecute命令。
备注：
命令行的起始目录是设备根目录和系统的＄Path环境变量。

5、ShellExecute
含义：
指定设备启用时执行文件。（操作系统支持未知）
格式：
ShellExecute=执行文件路径名 [参数]
参数：
执行文件路径名：设备启用时执行文件路径名。可以是任意格式文件。系统会调用设置的程序执行此文件。
参数：参数，根据执行文件作调整
备注：
命令行的起始目录是设备根目录和系统的＄Path环境变量。

6、Shell关键字Command
含义：
定义设备右键菜单执行命令行。
格式：
Shell关键字Command=命令行
(命令行：程序路径名 [参数])
参数：
命令行：自动运行的命令行，必须是.exe、.com、.bat文件，其他格式文件可以使用start.exe打开。
备注：
命令行的起始目录是设备根目录和系统的＄Path环境变量。

7、Shell关键字
含义：
定义设备右键菜单文本。
格式：
Shell关键字=文本
参数：
关键字：用以标记菜单，可以使用任何字符表示，包括空格。
文本：在右键菜单中显示的文本。可以使用任何字符，不能存在空格。
备注：
在同一Autoruninf文件中，不同右键菜单关键字不同，相同右键菜单关键字相同。
右键菜单文本中可以使用&设定加速键，&&输出一个&。
Shell关键字Command命令Shell关键字两者缺一不可，顺序无所谓。
当不存在Open、ShellExecute与Shell命令时，设备启用时运行第一个设备右键菜单指定命令。

8、Shell
含义：
定义设备启用时运行之设备右键命令。
格式：
Shell=关键字
参数：
关键字：标记过的菜单关键字
备注：
Shell指定的关键字可以在Autoruninf文件的任意部分。
OpenShellExecuteShell命令后定义的优先级高。

四、[AutoRun.alpha]部分的命令简介。

[AutoRun.alpha]部分的命令与[AutoRun]部分的命令相同，只不过在基于RISC的计算机光驱中，[AutoRun.alpha]优先级高于[AutoRun]

五、[DeviceInstall]部分命令及其详解。

DriverPath
含义：
定义搜索驱动程序目录。
格式：
DriverPath=驱动程序路径
参数：
驱动程序路径：驱动程序所在路径，包括其子路径。
备注：
Windows XP以上支持。
仅CD-ROM支持
当系统监测到一个新的设备时，会提示用户寻找设备的驱动程序。当用户点选此CD-ROM时，当[DeviceInstall]部分存在时，系统会按照 DriverPath所标记的路径出寻找驱动程序。未标记的路径系统将忽略查找。当[DeviceInstall]部分不存在时，系统将进行完全查找。
如果不希望系统在此CD-ROM中搜索驱动程序，只加一行[DeviceInstall]不加DriverPath命令即可。

