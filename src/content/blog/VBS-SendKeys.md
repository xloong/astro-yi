---
title: VBS SendKeys
description: 简单说,这个命令就是模拟键盘操作,将一个或多个按键指令发送到指定Windows窗口来控制应用程序运行,其使用格式为:object.SendKeysstring"object":表示WshShell对象"string":表示要发送的按键指令字符串,需要放在英文双引号中.
date: 2008-04-08 10:09:05
category: 技术文章
tags: ['VBS', '脚本Script', '技术类']
post_id: 441
alias: VBS-SendKeys
ViewNums: 6644
---

简单说,这个命令就是模拟键盘操作,将一个或多个按键指令发送到指定[Windows](/tags/Windows)窗口来控制应用程序运行,其使用格式为:
object.SendKeys string
"object":表示WshShell对象
"string":表示要发送的按键指令字符串,需要放在英文双引号中.
1.基本键

　　一般来说,要发送的按键指令都可以直接用该按键字符本身来表示,例如要发送字母"x",使用
WshShell.SendKeys "x" 即可.

　　也可直接发送多个按键指令,只需要将按键字符按顺序排列在一起即可.例如,要发送按键"cfan",可以使用" WshShell.SendKeys "cfan" ".

2.特殊功能键
对于需要与Shift、Ctrl、Alt三个控制键组合的按键SendKeys使用特殊字符来表示:
特殊控制键 特殊字符
Shift 　　　　+
Ctrl　　　　　 ^
Alt 　　　　　%

如要发送的组合按键是同时按下Ctrl+E,需要用" WshShell.SendKeys "^e" "表示,
如果要发送的组合按键是按住Ctrl键的同时按下E与C两个键,这时应使用小括号把字母括起来,书写格式为" WshShell.SendKeys "^(ec)" ".这里要注意它与" WshShell.SendKeys "^ec" "的区别,后者表示组合按键是同时按住Ctrl和E键,然后松开Ctrl键,单独按下"C"字母键

　　由于"+"、"^"这些字符用来表示特殊的控制按键了,如何表示这些按键呢?只要用大括号括住这些字符即可.例如,要发送加号"+",可使用" WshShell.SendKeys "{+}" ".另外对于一些不会生成字符的控制功能按键,也同样需要使用大括号括起来按键号名称,例如要发送回车键,需要用" WshShell.SendKeys "{ENTER}" "表示,发送向下的方向键用" WshShell.SendKeys "{DOWN}" "表示.

小提示
如果需要发送多个重复的单字母按键,不必重复输入该字母,SendKdys允许使用简化格式进行描述,使用格式为"{按键 数字}".例如要发送10个字母"x",则输入" WshShell.SendKeys "{x 10}" "即可.

3.翻译上手实例
" WshShell.SendKeys "^{ESC}u" "这句翻译为:按下Ctrl+Esc组合键(相当于按Win键)打开"开始"菜单,按着按U键打开"关机"菜单.

---Just Do It---------------------------------
让VBS脚本自动在词本中输入一行文字"Hello, welcome to cfan".
```
Dim WshShell
Set WshShell=WScript.CreateObject("WScript.Shell")
WshShell.Run "notepad"
WScript.Sleep 200
WshShell.AppActivate " 无标题 - 记事本 "
WshShell.SendKeys "hello, welcome to cfan"
```
我们最常用的记事本没有Word、WPS那样的自动定时存盘功能,其实利用VBS脚本再加上SendKeys命令,就能弥补这个遗憾.打开记事本,输入以下内容(以容易描述和分析,把代码分为四个部分):

'第一部分：定义变量和对象
```
Dim WshShell, AutoSaveTime, TXTFileName
AutoSaveTime=300000
Set WshShell=WScript.CreateObject("WScript.Shell")
TXTFileName=InputBox("请输入你要创建的文件名(不能用中文和纯数字)：")
```
'第二部分：打开并激活记事本
```
WshShell.Run "notepad"
WScript.Sleep 200
WshShell.AppActivate "无标题 - 记事本"

'第三部分：用输入的文件名存盘
```
WshShell.SendKeys "^s"
WScript.Sleep 300
WshShell.SendKeys TXTFileName
WScript.Sleep 300
WshShell.SendKeys "%s"
WScript.Sleep AutoSaveTime
```
'第四部分：自动定时存盘
```
While WshShell.AppActivate (TXTFileName)=True
WshShell.SendKeys "^s"
WScript.Sleep AutoSaveTime
Wend
WScript.Quit
```
将其保存为记事本.vbs,以后要使用记事本时,都通过双击这个脚本文件来打开.

程序翻译

这个脚本的基本思路是定时向记事本发送Ctrl+S这个存盘组合键.
第一部分:定义了脚本中需要用到的变量和对象."AutoSaveTime"变量用来设置自动存盘间隔,单位为毫秒,这里设置为5分钟."TXTFileName"变量通过输入框取得你要创建的文本文件名称.
第二部分:运行记事本,对于Windows本身提供的程序,比如计算器等,可直接在"WshShell.Run"后输入程序名称,如"calc"对于非系统程序,则可输入完全路径,但要注意使用8.3格式输入,比如" "D:Progra~1TencentQQ.exe" "
第三部分:这里用SendKeys命令执行了这样的操作流程(请注意每个操作之间延时命令的使用):
在记事本中按Ctrl+S组合键→弹出保存文件的窗口→输入文件名→按Alt+S组合键进行保存(默认保存在"我的文档"目录).
第四部分:定时存盘的关键,通过"While......Wend"这个当条件为"真"时循环命令,实现自动存盘代码" WshShell.SendKeys "^s" "和定时代码" WScript.Sleep AutoSaveTime "的重复执行.因为不能让这个定时存盘循环一直执行,退出记事本后,必须自动退出脚本并结束循环,所以设计了一个循环判断条件" WshShell.AppActivate TXTFileName=True ",当记事本运行中时,可以激活记事本窗口,这个条件运行结果为"True",定时存盘循环一直执行,退出记事本后,脚本无法激活记事本窗口,就会路出循环,执行"Wend"后面的"WScript.Quit"退出脚本.

---Just Do It---------------------------------
有款软件叫"QQ多账号自动登录器",它有记住[QQ](/tags/QQ)账号和密码,从而帮你用指定QQ号码自动登录,特别适合有多个QQ账号的朋友.其实利用VBS脚本你完全可以DIY一个.请到<http://www.newhua.com/cfan/200419/vbs.rar>下载脚本实例.其中有一个双QQ号码自动登录的脚本,请对照其中的解释将其修改为适合自己的QQ自动登录脚本.
请制作一个脚本,在你复制了一段文字后,只要双击运行这个[脚本](/tags/%E8%84%9A%E6%9C%ACScript),就会自动打开记事本,并自动将复制的文字粘贴进来.
-----------------------------------------------

VBS中Sendkey键盘对应的码表
```
Key Code
------------------------------
Shift +
Ctrl ^
Alt %
BACKSPACE {BACKSPACE}, {BS}, or {BKSP}
BREAK {BREAK}
CAPS LOCK {CAPSLOCK}
DEL or DELETE {DELETE} or {DEL}
DOWN ARROW {DOWN}
END {END}
ENTER {ENTER}or ~
ESC {ESC}
HELP {HELP}
HOME {HOME}
INS or INSERT {INSERT} or {INS}
LEFT ARROW {LEFT}
NUM LOCK {NUMLOCK}
PAGE DOWN {PGDN}
PAGE UP {PGUP}
PRINT SCREEN {PRTSC}
RIGHT ARROW {RIGHT}
SCROLL LOCK {SCROLLLOCK}
TAB {TAB}
UP ARROW {UP}
F1 {F1}
F2 {F2}
F3 {F3}
F4 {F4}
F5 {F5}
F6 {F6}
F7 {F7}
F8 {F8}
F9 {F9}
F10 {F10}
F11 {F11}
F12 {F12}
F13 {F13}
F14 {F14}
F15 {F15}
F16 {F16}
```
来源：Tr4c3的学习笔记

