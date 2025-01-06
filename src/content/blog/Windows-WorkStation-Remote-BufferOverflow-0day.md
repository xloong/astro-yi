---
title: Microsoft Windows WorkStation 服务(xp sp3)远程缓冲区溢出漏洞0day
description: MicrosoftWindowsWorkStation服务(xpsp3)远程缓冲区溢出漏洞0daya5这个参数,由于在执行wcscpy的字符串拷贝前，没有校验字符串的长度，因此会诱发栈缓冲区溢出（StackOverflow），成功利用可以远程执行任意代码。存在漏洞DLL文件：wkssvc或者wkssvc.dllDLL名称：NetworkWorkstationservicelibrary描述：wkssvc.dll是本地系统进行远程文件打印相关服务文件。属于：Windows系统DLL文件：是
date: 2009-01-06 10:28:13
category: 漏洞信息
tags: ['缓冲区溢出', '0day', 'Windows', '微软']
post_id: 741
alias: Windows-WorkStation-Remote-BufferOverflow-0day
ViewNums: 5041
---

[**Microsoft Windows WorkStation 服务(xp sp3)远程缓冲区溢出漏洞0day**](/blog/windows-workstation-remote-bufferoverflow-0day)
a5这个参数,由于在执行wcscpy的字符串拷贝前，没有校验字符串的长度，因此会诱发栈[缓冲区溢出](/blog/buffer-overflow-tutorial-ebook-iso-download)（Stack Overflow） ，成功利用可以远程执行任意代码。

存在漏洞DLL 文件： wkssvc 或者 wkssvc.dll
DLL 名称： **Network Workstation service library**
描述： wkssvc.dll是本地系统进行远程文件打印相关服务文件。
属于： [Windows](/blog/deepin-ghost-xp-sp3-v90-iso)
系统 DLL文件： 是

分析如下（伪代码）：

/*
Found by Friddy 12.25
Email:qianyang@ssyeah.com
http://www.friddy.cn
*/
DWORD __userpurge sub_76854A96<eax>(int a1<eax>, HLOCAL *a2<esi>, int a3, wchar_t *a4,wchar_t *a5,int a6, int a7, int a8)
{
  int v8; // eax@1
  int v9; // ebx@1
  HLOCAL v10; // eax@3
  HLOCAL v11; // eax@4
  HLOCAL v12; // eax@7
  HLOCAL v13; // edi@7
  int v15; // ecx@4
  int v16; // edx@4
  int v17; // eax@4
  char v18; // zf@4
  wchar_t *v19; // ST0C_4@5

  v9 = a1;
  v8 = 0;
  if ( a4 )
    v8 = *(_WORD *)(a7 + 2);
  v10 = LocalAlloc(0x40u, v8 + ((2 * v9 + 39) & 0xFFFFFFFE));
  *a2 = v10;
  if ( v10 )
  {
    *(_DWORD *)v10 = 0;
    v15 = a3;
    v16 = a8;
    *((_DWORD *)*a2 + 3) = v9;
    *((_DWORD *)*a2 + 4) = 1;
    *((_DWORD *)*a2 + 5) = v15;
    v17 = dword_7686F588;
    *((_DWORD *)*a2 + 6) = dword_7686F588;
    v18 = a4 == 0;
    *((_DWORD *)*a2 + 8) = v16;
    dword_7686F588 = (v17 + 1) & 0x7FFFFFFF;
    v11 = *a2;
    if ( v18 )
    {
      *((_DWORD *)v11 + 2) = 0;
      *((_DWORD *)*a2 + 7) = 0;
    }
    else
    {
      v19 = a4;
      *((_DWORD *)v11 + 2) = (char *)v11 + 36;
      wcscpy(*((wchar_t **)*a2 + 2), v19);
      *((_DWORD *)*a2 + 7) = (unsigned int)(*a2 + 2 * v9 + 39) & 0xFFFFFFFE;
      wcscpy(*((wchar_t **)*a2 + 7), *(const wchar_t **)(a7 + 4));
    }
    if ( !a5 )
      return 0;
    v12 = LocalAlloc(0x40u, 2 * a6 + 12);
    v13 = v12;
    if ( v12 )
    {
     wcscpy((wchar_t *)v12 + 4, a5);//栈溢出发生在这里
      *((_DWORD *)v13 + 1) = a6;
      *(_DWORD *)v13 = 1;
      *((_DWORD *)*a2 + 1) = v13;
      return 0;
    }
    LocalFree(*a2);
  }
  return GetLastError();
}

#################################################
//----- (7685499D) --------------------------------------------------------
signed int __stdcall sub_7685499D(int a1, int a2, wchar_t *a3, int a4, wchar_t *a5, int a6, int a7, int a8)
{
  signed int v8; // edi@1
  DWORD v9; // eax@2
  wchar_t *v10; // ecx@7
  int v12; // eax@21
  int v13; // [sp+14h] [bp-4h]@1
  int v14; // [sp+10h] [bp-8h]@1
  int v15; // [sp+Ch] [bp-Ch]@2

  v8 = 0;
  v13 = 0;
  v14 = 0;
  if ( !(unsigned __int8)RtlAcquireResourceExclusive(&unk_7686F3E4, 1) )
  {
    v8 = 2140;
    goto LABEL_18;
  }
  v9 = sub_76852B71((int)&dword_7686F3E0, a1, (int)&v15, 1);
  if ( v9 )
    goto LABEL_13;
  if ( *(_DWORD *)(dword_7686F3E0 + 12 * v15) )
    sub_76854B88(*(_DWORD *)(dword_7686F3E0 + 12 * v15), a5, (int)&v13, (int)&v14);
  if ( v13 )
  {
    if ( !a3 && !*(_DWORD *)(v13 + 8) )
    {
      ++*(_DWORD *)(v13 + 16);
      ++**(_DWORD **)(v13 + 4);
      goto LABEL_17;
    }
    v9 = sub_76854A96(a4, (HLOCAL *)&a3, a2, a3, 0, 0, a7, a8);
    if ( !v9 )
    {
      v12 = *(_DWORD *)(v13 + 4);
      v10 = a3;
      *((_DWORD *)a3 + 1) = *(_DWORD *)(v13 + 4);
      ++*(_DWORD *)v12;
      goto LABEL_8;
    }
LABEL_13:
    v8 = v9;
LABEL_17:
    RtlReleaseResource(&unk_7686F3E4);
LABEL_18:
    NtClose(a2);
    return v8;
  }
  v9 = sub_76854A96(a4, (HLOCAL *)&a3, a2, a3, a5, a6, a7, a8);//这里调用了漏洞，由此触发
  if ( v9 )
    goto LABEL_13;
  v10 = a3;
LABEL_8:
  if ( v14 )
    *(_DWORD *)v14 = v10;
  else
    *(_DWORD *)(dword_7686F3E0 + 12 * v15) = v10;
  RtlReleaseResource(&unk_7686F3E4);
  return 0;

From: <http://www.friddy.cn/article.asp?id=66>

