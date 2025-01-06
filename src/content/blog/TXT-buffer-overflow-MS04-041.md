---
title: 传说中的TXT溢出漏洞
description: 六年前发现的洞,这个EXP现在估计没啥伤杀力,放出来主要是满足小白们的好奇心.基本上也可以证明NothingIsImpossible.CVE:CAN-2004-0901MST:MS04-041
date: 2008-03-01 11:24:03
category: 漏洞信息
tags: ['exploit', '缓冲区溢出', '漏洞信息']
post_id: 387
alias: TXT-buffer-overflow-MS04-041
ViewNums: 5203
---

六年前发现的洞,这个[EXP](/tags/exploit)现在估计没啥伤杀力,放出来主要是满足小白们的好奇心.基本上也可以证明
Nothing Is Impossible.

CVE: CAN-2004-0901
MST: MS04-041

受影响组件:mswrd632.wpc/mswrd6.wpc
受影响系统:[windows](/tags/Windows)XP sp0-sp1严重
windows2K sp0-sp4严重
windowsXP sp2/windows 2003影响较小

背景:WORDPAD是WIN系统自带的写字板,用于在没有安装MS OFFICE的情况下打开.DOC文档.
在安装有MS OFFICE的情况下,可以双击打开.WRI后缀的文档.mswrd632.wpc或mswrd6.wpc模块
用于在wordpad中解析word 95/6.0文档格式.

细节:
wordpad.exe加载的mswrd632.wpc模块,对超长字体名参数缺乏必要的验证(字体名长度超过80h),
攻击者可以构造恶意后缀名为.doc/.rtf/.wri的文档,如果用户双击将触发一个基于栈的[溢出](/tags/%E7%BC%93%E5%86%B2%E5%8C%BA%E6%BA%A2%E5%87%BA).
该[漏洞](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF)成功率非常高.

关于补丁:这个洞在04年底被MS补上了,同时MS对注册表EnableLegacyConverters键值进行了设置造成,补丁后的写字板默认情况下不能打开word 95/6.0的文档,会提示"不能加载word for windows 6.0".另外XP SP2和2003下的写字板默认是调用mswrd6.wpc(位于C:Program FilesWindows NTAccessories),这个模块也有问题,但是在出错函数返回前有STACK COOKIE所以利用较难.这个EXP主要是几年前打那些没装OFFICE,且喜欢用WIN 2K的系统管理员,还是取得了不错的战果.

出错代码:这是XP SP2上的mswrd6.wpc(版本是10.0.803.1,打了补丁后版本应该是10.0.803.2)
0008:010D8A39 8BFF MOV EDI,EDI
0008:010D8A3B 55 PUSH EBP
0008:010D8A3C 8BEC MOV EBP,ESP
0008:010D8A3E 81EC84000000 SUB ESP,00000084 ;空间分配太小
0008:010D8A44 A11C8A0E01 MOV EAX,[010E8A1C]
0008:010D8A49 57 PUSH EDI
0008:010D8A4A 8D7E06 LEA EDI,[ESI+06]
0008:010D8A4D 57 PUSH EDI
0008:010D8A4E 8945FC MOV [EBP-04],EAX
0008:010D8A51 FF1544100C01 CALL [KERNEL32!lstrlen]
0008:010D8A57 40 INC EAX
0008:010D8A58 50 PUSH EAX
0008:010D8A59 8D857CFFFFFF LEA EAX,[EBP-0084]
0008:010D8A5F 57 PUSH EDI
0008:010D8A60 50 PUSH EAX
0008:010D8A61 FF1550110C01 CALL [msvcrt!memmove] ;覆盖RET
0008:010D8A67 83C40C ADD ESP,0C
0008:010D8A6A 8D857CFFFFFF LEA EAX,[EBP-0084]
0008:010D8A70 50 PUSH EAX
0008:010D8A71 E8D5D50000 CALL 010E604B
0008:010D8A76 6A7B PUSH 7B
................中间省略了.................
0008:010D8B01 6A7D PUSH 7D
0008:010D8B03 E8CD70FFFF CALL 010CFBD5
0008:010D8B08 8B4DFC MOV ECX,[EBP-04] ;STACK COOKIE
0008:010D8B0B E893DF0000 CALL 010E6AA3
0008:010D8B10 C9 LEAVE
0008:010D8B11 C20400 RET 0004

如何构造:自已动动脑子吧,很容易的.

关于标题:其实有些老版本的NOTEPAD在打开大于64KB的TXT文件时会自动调用WORDPAD.EXE,而WORDPAD又是只认格式不认后缀.所以在N年前这招还是很管用的.

最后:用BINDIFF2比较了一下见下图,现在的小白们真是幸福有这么好的工具可以用.EN,每年的2月29日,俺都会有料暴的今年就这样吧:)但愿没让各位看官失望.

From:[http://hi.baidu.com/wordexp/](http://hi.baidu.com/wordexp/ "http://hi.baidu.com/wordexp/")

