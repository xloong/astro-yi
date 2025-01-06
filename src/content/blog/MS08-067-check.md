---
title: MS08-067漏洞批量检测程序-MS08-067 check
description: MS08-067check可以批量检测MS08-067漏洞更多关于MS08-067的利用等信息可以参看：MS08-067ExploitforCN2k/xp/2003.netversionMS08-067ExploitforCN2k/xp/2003bypassversionMS08-067-MSWindowsServerServiceCodeExecutionPoC
date: 2008-11-02 08:56:31
category: 漏洞信息
tags: ['漏洞信息', '工具共享']
post_id: 663
alias: MS08-067-check
ViewNums: 6154
---

**[MS08-067 check](/blog/ms08-067-check)** 可以批量检测 **MS08-067** [漏洞](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF)

更多关于 **MS08-067** 的利用等信息可以参看：

* [MS08-067 Exploit for CN 2k/xp/2003 .net version](/blog/ms08-067-exploit-for-cn-2k-xp-2003-net-version "MS08-067 Exploit for CN 2k/xp/2003 .net version")
* [MS08-067 Exploit for CN 2k/xp/2003 bypass version](/blog/ms08-067-exploit-for-cn-2k-xp-2003-bypass-version "MS08-067 Exploit for CN 2k/xp/2003 bypass version")
* [MS08-067 - MS Windows Server Service Code Execution PoC](/blog/ms08-067 "MS08-067 - MS Windows Server Service Code Execution PoC")

This tool can be used to anonymously check if a target machine or a list of target machines are affected by [MS08-067](http://www.microsoft.com/technet/security/Bulletin/ms08-067.mspx) (Vulnerability in Server Service Could Allow Remote Code Execution)

**Usage**
$ python ms08-067_check.py -h
Usage: ms08-067_check.py [-d] {-t |-l }

Options:
--version show program's version number and exit
-h, --help show this help message and exit
-d show description and exit
-t TARGET target IP or hostname
-l LIST text file with list of targets
-s be silent

**Example**
$ python ms08-067_check.py -t 192.168.123.30
192.168.123.30: VULNERABLE

**下载地址：**[ms08-067_check.py](/blog/download.asp?id=197
MD5: 67E72C148E5B3E606E4FEAAEF9436563
SHA1:5F0EF8BDBA8B58F2E2FF9F0C1B2176823A2FB92B

