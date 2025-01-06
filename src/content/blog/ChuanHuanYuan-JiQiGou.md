---
title: 穿透还原的工作原理分析（逆向工程）--机器狗
description: 本来是在龙组论坛上看到了这个名为机器狗的病毒，但是因为是江民的病毒报告，明显的公式化，所以并没多关注，但是刚刚在鬼仔的blog上看到了相关的分析，就转来了鬼仔注：文章末尾所添加的机器狗、IGM、写穿还原的工具（已可以被卡巴检测到是病毒）是在无敌小龙那里看到的，我加了个备用地址。样本脱壳OD加载样本explorer.exe，。.......................
date: 2007-11-25 08:21:45
category: 技术文章
tags: ['病毒Virus', '木马', '安全', '技术类']
post_id: 265
alias: ChuanHuanYuan-JiQiGou
ViewNums: 5921
---

本来是在[龙组论坛](http://www.cnxlz.com/index.php?u=263)上看到了这个名为机器狗的病毒，但是因为是江民的病毒报告，明显的[公式化](/blog/242a)，所以并没多关注，但是刚刚在[鬼仔的blog](http://www.huaidan.org/blog/article.asp?id=1491)上看到了相关的分析，就转来了

鬼仔注：文章末尾所添加的机器狗、IGM、写穿还原的工具（已可以被卡巴检测到是病毒）是在无敌小龙那里看到的，我加了个备用地址。

样本脱壳
OD加载样本explorer.exe，
对GetModuleHandleA下断，参数为NULL时即为入口点处对此函数的调用，
退出CALL之后可以得到入口为 004016ED。
重新加载样本，对004016ED下内存写入断点，中断后StepOver一步，然后在004016ED
下断点，F9运行到入口，DUMP。DUMP之后不关闭OD，让样本处于挂起状态，使用ImportREC修复DUMP
出来的文件的导入表。
修复之后DUMP出来的文件用OD加载出错，使用PEDITOR的rebuilder功能重建PE之后即可用OD加载，说明
脱壳基本成功，但资源部分仍有问题,无法用Reshacker查看

pcihdd.sys的提取
OD加载样本explorer.exe，设置有新模块加载时中断，F9运行
当ADVAPI32.DLL加载时，对CreateServiceA下断点，F9运行
当CreateServiceA中断时，即可提取出pcihdd.sys

pcihdd.sys基本流程如下
1)检查IDT的09（NPX Segment Overrun）和0E（Page Fault ）处理程序的地址
如果09号中断处理程序存在，并且处理程序地址的高8位与0E处理程序高8位不同，则把
IDT中0E的高16位设为0。估计是检查0E是不是被HOOK了
我比较龌龊，看不懂这些操作的意思，这样不BSOD？请懂的兄弟跟帖告诉一声
2)通过搜索地址来查找自己的加载地址
查找驱动文件的资源中的1000/1000,并复制到一个全局缓冲区中
3)创建了DevicePhysicalHardDisk0及其符号连接DosDevicesPhysicalHardDisk0
4)只对IRP_MJ_CREATE
IRP_MJ_CLOSE
IRP_MJ_DEVICE_CONTROL
作出响应

其中IRP_MJ_CREATE中会断开DeviceHarddisk0DR0上附加的设备。这个操作会使磁盘过滤驱动、文件系统驱动(OS提供的，
但一些杀毒软件也通过此渠道进行文件系统监控）及其上的文件系统过滤驱动（大多数文件访问控制和监控
都是这个层次的）无效(参见[http://blog.csdn.net/joshua_yu/archive/2006/02/04/591636.aspx](http://blog.csdn.net/joshua_yu/archive/2006/02/04/591636.aspx "http://blog.csdn.net/joshua_yu/archive/2006/02/04/591636.aspx"))

在IRP_MJ_CLOSE 中对恢复DR0上的附加

在IRP_MJ_DEVICE_CONTROL中对0xF0003C04作出响应，只是把2)中找到的资源数据解密后返回到应用程序。
解密密钥是通过应用程序传入的一个串（密钥种子？）查表后产生(KEY：0x3f702d98)

0xF0003C04的作用：
将用户态传入的整个代码体作为密钥种子对这个代码体进行类似于校验和的运算后得
到4字节的解密KEY，然后使用此解密key将驱动自身携带的资源解密（仅仅是XOR），将解密
结果返回给用户态。

关于解除DR0上的附加设备：
这种操作应该会影响系统正常的文件系统操作，但是因为实际操作时此驱动被打开和关闭的的间隔很短，所以应该
不会有明显影响。

explorer.exe流程
1、释放资源中的pcihdd.sys并创建名为pcihdd的服务，启动服务
2、定位userinit.exe在硬盘中的位置。定位方法如下
1)通过FSCTL_GET_RETRIEVAL_POINTERS获取文件数据的分布信息

2)通过直接访问硬盘(\\.\PhysicalHardDisk0)的的MDR和
第一个分区的引导扇区得到分区参数(每簇扇区数),配合1)中得到的信息
来定位文件在硬盘上的绝对偏移量。
这里有个小BUG，扇区大小是使用固定的512字节而不是从引导扇区中获取

3)通过对比ReadFile读取的文件数据和自己定位后直接
读取所得到的文件数据，确定定位是否正确
3、把整个代码体作为参数传递给pcihdd.sys,控制码0xF0003C04，并将pcihdd返回
的数据直接写入userinit.exe的第一簇

被修改后的userinit.exe
1）查询SOFTWAREMicrosoftWindows NTCurrentVersionWinlogon下的Shell键值
2）创建Shell进程
3）等待网络链接，当网络链接畅通后，则从[http://yu.8s7.net/cert.cer下载列表](http://yu.8s7.net/cert.cer%E4%B8%8B%E8%BD%BD%E5%88%97%E8%A1%A8 "http://yu.8s7.net/cert.cer下载列表")
4）对于列表中的文件每个文件，创建一个新线程下载并执行，线程计数加一（INC）
5）等待所有线程结束后（线程计数为0）结束进程。

对于线程计数的操作并不是原子操作，理论上多CPU情况下有小的概率出问题。
不过人家是写针对普通PC的病毒，多CPU不常见，也不需要稳定

[![](http://www.huaidan.org/blog/styles/default/images/icon_file.gif) simple.rar](http://201314.free.fr/attachments/200711/simple.rar "http://201314.free.fr/attachments/200711/simple.rar") (142.99 KB)

文中所指的病毒就是一般说的新AV终结者

机器狗：[http://www.esfast.net/downs/explorer.rar](http://www.esfast.net/downs/explorer.rar "http://www.esfast.net/downs/explorer.rar") [[备用地址](http://201314.free.fr/attachments/200711/explorer.rar "http://201314.free.fr/attachments/200711/explorer.rar")]
IGM：[http://www.esfast.net/downs/IGM.rar](http://www.esfast.net/downs/IGM.rar "http://www.esfast.net/downs/IGM.rar") [[备用地址](http://201314.free.fr/attachments/200711/IGM.rar "http://201314.free.fr/attachments/200711/IGM.rar")]
写穿还原的工具：[http://www.esfast.net/downs/SectorEditor.zip](http://www.esfast.net/downs/SectorEditor.zip "http://www.esfast.net/downs/SectorEditor.zip") [[备用地址](http://201314.free.fr/attachments/200711/SectorEditor.zip "http://201314.free.fr/attachments/200711/SectorEditor.zip")]

