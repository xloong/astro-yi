---
title: 灰鸽子控制端逻辑漏洞
description: 灰鸽子控制端逻辑漏洞发布时间：2009-5-19更新时间：2009-5-19严重程度：弱威胁程度：控制远程主机错误类型：逻辑错误利用方式：主机模式受影响系统源代码灰鸽子v1.2之前所有版本，更新版本未测试，估计也存在。
date: 2009-05-30 09:56:46
category: 漏洞信息
tags: ['远程控制', '漏洞信息']
post_id: 879
alias: huigezi-control-logic-loopholes-client
ViewNums: 2964
---

**[灰鸽子控制端逻辑漏洞](/blog/huigezi-control-logic-loopholes-client)**

**发布时间：**2009-5-19
**更新时间：**2009-5-19
**严重程度：弱**
**威胁程度：**控制远程主机
**错误类型：**[逻辑错误](/blog/huigezi-control-logic-loopholes-client)
**利用方式：**[主机模式](/blog/huigezi-control-logic-loopholes-client)

**受影响系统**
源代码灰鸽子 v1.2之前所有版本，更新版本未测试，估计也存在。

**未影响系统**

未知

**详细描述**
灰鸽子开放源代码的v1.2版本（可能包括最新版本的灰鸽子以及从这个基础上修改的上兴） 发现漏洞一个逻辑漏洞，这些漏洞可以被用户利用，如果打开控制端并且操作过一次本地打开，任意一个[被控端可以向控制端发送任意文件并执行](/blog/huigezi-control-logic-loopholes-client)。

**漏洞代码**
//----------------------------------------------------- 17{本地打开}
if RecCMD = '017' then
begin
try
RsltStream := TmemoryStream.Create;
try
i := AThread.Connection.ReadInteger;
AThread.Connection.ReadStream(RsltStream, i, False);
RsltStream.Position := 0;
RsltStream.SaveToFile(HgzVip.Qviwepath);
ShellExecute(0, 'Open', pchar(HgzVip.Qviwepath),nil, nil, SW_NORMAL);
HgzVip.AddLineStr(HgzVip.Translate('ZhuanTai137','本地打开远程文件成功.'), 1, False);
except
HgzVip.AddLineStr(HgzVip.Translate('ZhuanTai138','本地打开远程文件出错! 连接已断开!'), 2, False);
end;
RsltStream.Free;
except
end;
HgzVip.Enabled := True;
Exit;
end;

**解决方案**

**相关信息**
email: kissxiaotutu@hotmail.com
Web: [http://www.cisrg.org](http://www.cisrg.org/)

来源：[CISRG Group](http://groups.google.com/group/cisrg-group/browse_thread/thread/87ab84525c9e8ea?hl=zh-CN)

