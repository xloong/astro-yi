---
title: WScan v3.0 - CRST红狼小组的web扫描器
description: 来自C.R.S.T的WScanv3.0，cooldiyer作品，一个很不错的web扫描器，夜火极力推荐哦~wscanV3.0-NetworkSecurityScanner(BycooldiyerJul222008)usage:wscan<-v><-hHost><-rRulesFile><-pPort><-mMaxThread>        <-tTimeout><-lLogFile>Example:  >wscan-hwww.baidu.com-rcgi.txt-p80-m10-t3
date: 2008-07-24 11:46:26
category: 安全工具
tags: ['WebScanner', '工具共享', '下载Download']
post_id: 551
alias: WScan-v3.0-CRST
ViewNums: 4839
---

来自[C.R.S.T](http://www.crst.com.cn/forum)的**WScan v3.0**，cooldiyer作品，一个很不错的web扫描器，[夜火](/blog/)极力推荐哦~

wscan V3.0 - Network Security Scanner (By [cooldiyer](http://www.xdiyer.com/) Jul 22 2008)
usage: wscan <-v> <-h Host> <-r RulesFile> <-p Port> <-m MaxThread>
         <-t Timeout> <-l LogFile>
Example:
  > wscan -h www.baidu.com -r cgi.txt -p 80 -m 10 -t 3

速度,稳定一流

规则文件实例如下,类似twwwscan的规则语法,规则需以";"结束

如下只关注200状态码

200-> HEAD :/database/lyboard.mdb^桃源网络论坛[数据库](/tags/%E6%95%B0%E6%8D%AE%E5%BA%93);
200-> HEAD :/database/PE_Region.mdb^动网论坛数据库;
200-> HEAD :/data/dvbbs7.mdb^动网论坛数据库;
200-> HEAD :/databackup/dvbbs7.mdb^动网论坛备份[数据库](/blog/html-caozuo-bendi-shujuku);

关注200,403,301任意一个

200|403|301-> HEAD :Eedit/^Eedit/;
200|403|301-> HEAD :eWebEditorNet/^eWebEditorNet/;
200|403|301-> HEAD :edit/eWebEditorNet/^edit/eWebEditorNet/;
200|403|301-> HEAD :Admin/eWebEditorNet/^Admin/eWebEditorNet/;
200|403|301-> HEAD :Admin/eWebEditorNet/UploadFile/^Admin/eWebEditorNet/UploadFile/;

上传压缩包内容如下:

BUGS.txt
cgi.txt
db.txt
dic.txt
dirfile.txt
edit.txt
nt.txt
php.txt
scan.bat
script.txt
unix.txt
unix_cgi.txt
wscan.exe
admin.txt
upfile.txt

[**WScan v3.0下载地址**](/blog/download.asp?id=111

