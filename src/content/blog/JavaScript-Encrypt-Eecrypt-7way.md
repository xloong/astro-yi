---
title: JavaScript加密解密7种方法
description: 本文一共介绍了七种javascript加密方法：　　在做网页时（其实是网页木马呵呵），最让人烦恼的是自己辛辛苦苦写出来的客户端IE运行的javascript代码常常被别人轻易的拷贝，实在让自己的心里有点不是滋味，要知道自己写点东西也挺累的......^*^　　但我们也应该清楚地认识到因为javascript代码是在IE中解释执行，要想绝对的保密是不可能的，我们要做的就是尽可能的增大拷贝者复制的难度，让他知难而退（但愿~!~），下面我结合自己这几年来的实践，及个人研究的心得，和大家一起来探讨一下网页中javascript代码的加密解密技术。
date: 2007-12-04 10:18:50
category: 技术文章
tags: ['脚本Script', '木马']
post_id: 277
alias: JavaScript-Encrypt-Eecrypt-7way
ViewNums: 5519
---
from：[baiker](http://www.blogjava.net/baicker/)本文一共介绍了七种javascript加密方法：

　　在做网页时（其实是网页木马呵呵），最让人烦恼的是自己辛辛苦苦写出来的客户端IE运行的javascript代码常常被别人轻易的拷贝，实在让自己的心里有点不是滋味，要知道自己写点东西也挺累的......^*^

　　但我们也应该清楚地认识到因为javascript代码是在IE中解释执行，要想绝对的保密是不可能的，我们要做的就是尽可能的增大拷贝者复制的难度，让他知难而退（但愿~!~），下面我结合自己这几年来的实践，及个人研究的心得，和大家一起来探讨一下网页中javascript代码的加密解密技术。

　　以加密下面的javascript代码为例：

<SCRIPT LANGUAGE="javascript">
alert("《我爱一起》");
</SCRIPT>

　　**一：最简单的加密解密**

　　大家对于javascript函数escape()和unescape()想必是比较了解啦（很多网页加密在用它们），分别是编码和解码字符串，比如例子代码用escape()函数加密后变为如下格式：

alert%28%22%u9ED1%u5BA2%u9632%u7EBF%22%29%3B

　　如何？还看的懂吗？当然其中的ASCII字符"alert"并没有被加密，如果愿意我们可以写点javascript代码重新把它加密如下：

%61%6C%65%72%74%28%22%u9ED1%u5BA2%u9632%u7EBF%22%29%3B

　　呵呵！如何？这次是完全都加密了！

　　当然，这样加密后的代码是不能直接运行的，幸好还有eval(codeString)可用，这个函数的作用就是检查javascript代码并执行，必选项 codeString 参数是包含有效 javascript 代码的字符串值，加上上面的解码unescape()，加密后的结果如下：

<SCRIPT LANGUAGE="javascript">
var code=unescape("%61%6C%65%72%74%28%22%u9ED1%u5BA2%u9632%u7EBF%22%29%3B");
eval(code)
</SCRIPT>

是不是很简单？不要高兴，解密也就同样的简单，解密代码都摆给别人啦（unescape()）！呵呵

　　**二：转义字符""的妙用**

　　大家可能对转义字符""不太熟悉，但对于javascript提供了一些特殊字符如：n （换行）、 r （回车）、' （单引号）等应该是有所了解的吧？其实""后面还可以跟八进制或十六进制的数字，如字符"a"则可以表示为："141"或"x61"（注意是小写字符"x"），至于双字节字符如汉字"黑"则仅能用十六进制表示为"u9ED1"（注意是小写字符"u"），其中字符"u"表示是双字节字符，根据这个原理例子代码则可以表示为：

八进制转义字符串如下:

<SCRIPT LANGUAGE="javascript">
eval("1411541451621645042u9ED1u5BA2u9632u7EBF425173")
</SCRIPT>

十六进制转义字符串如下:

<SCRIPT LANGUAGE="javascript">
eval("x61x6Cx65x72x74x28x22u9ED1u5BA2u9632u7EBFx22x29x3B")
</SCRIPT>

这次没有了解码函数，因为javascript执行时会自行转换，同样解码也是很简单如下：

<SCRIPT LANGUAGE="javascript">
alert("x61x6Cx65x72x74x28x22u9ED1u5BA2u9632u7EBFx22x29x3B")
</SCRIPT>

就会弹出对话框告诉你解密后的结果！

　　**三：使用Microsoft出品的脚本编码器Script Encoder来进行编码**

　　工具的使用就不多介绍啦！我是直接使用javascript调用控件Scripting.Encoder完成的编码！代码如下：

<SCRIPT LANGUAGE="javascript">
var Senc=new ActiveXObject("Scripting.Encoder");
var code='<SCRIPT LANGUAGE="javascript">rnalert("《我爱一起》");rn</SCRIPT>';
var Encode=Senc.EncodeScriptFile(".htm",code,0,"");
alert(Encode);
</SCRIPT>

编码后的结果如下：

<SCRIPT LANGUAGE="JScript.Encode">#@~^FgAAAA==@#@&lsDD`J黑客防线r#p@#@&FgMAAA==^#~@</SCRIPT>

够难看懂得吧？但相应的解密工具早已出来，而且连解密网页都有！因为其解密网页代码过多，我就不多说拉！给大家介绍一下我独创的解密代码，如下：

<SCRIPT LANGUAGE="JScript.Encode">
function decode()
alert(decode.toString());
</SCRIPT>

咋样？够简单吧？它是原理是：编码后的代码运行前IE会先对其进行解码，如果我们先把加密的代码放入一个自定义函数如上面的decode()中，然后对自定义函数decode调用toString()方法，得到的将是解码后的代码！

如果你觉得这样编码得到的代码LANGUAGE属性是JScript.Encode，很容易让人识破，那么还有一个几乎不为人知的window对象的方法execScript()，其原形为：

window.execScript( sExpression, sLanguage )

参数：

sExpression:　 必选项。字符串(String)。要被执行的代码。

sLanguage　:　 必选项。字符串(String)。指定执行的代码的语言。默认值为 Microsoft JScript

使用时，前面的"window"可以省略不写！

利用它我们可以很好的运行编码后的javascript代码，如下：

<SCRIPT LANGUAGE="javascript">
execScript("#@~^FgAAAA==@#@&lsDD`J我爱一起r#p@#@&FgMAAA==^#~@","JScript.Encode")
</SCRIPT>

你可以利用方法二对其中的""号内的字符串再进行编码，使得"JScript.Encode"以及编码特征码"#@~^"不出现，效果会更好！

**四：任意添加NUL空字符（十六进制00H）**

　　一次偶然的实验，使我发现在HTML网页中任意位置添加任意个数的"空字符"，IE照样会正常显示其中的内容，并正常执行其中的javascript 代码，而添加的"空字符"我们在用一般的编辑器查看时，会显示形如空格或黑块，使得原码很难看懂，如用记事本查看则"空字符"会变成"空格"，利用这个原理加密结果如下：（其中显示的"空格"代表"空字符"）

<S C RI P T L ANG U A G E =" J a v a S c r i p t ">
a l er t (" 我 爱 一 起") ;
< / SC R I P T>

如何？是不是显得乱七八糟的？如果不知道方法的人很难想到要去掉里面的"空字符"（00H）的！

　　**五：无用内容混乱以及换行空格TAB大法**

　　在javascript代码中我们可以加入大量的无用字符串或数字，以及无用代码和注释内容等等，使真正的有用代码埋没在其中，并把有用的代码中能加入换行、空格、TAB的地方加入大量换行、空格、TAB，并可以把正常的字符串用""来进行换行，这样就会使得代码难以看懂！如我加密后的形式如下：

<SCRIPT LANGUAGE="javascript">
"xajgxsadffgds";1234567890
625623216;var $=0;alert//@$%%&*()(&(^%^
//cctv function//
(//hhsaasajx xc
/*
asjgdsgu*/
"我爱一起"//ashjgfgf
/*
@#%$^&%$96667r45fggbhytjty
*/
//window
)
;"#@$#%@#432hu";212351436
</SCRIPT>

至少如果我看到这样的代码是不会有心思去分析它的，你哪？

　　**六：自写解密函数法**

　　这个方法和一、二差不多，只不过是自己写个函数对代码进行解密，很多VBS病毒使用这种方法对自身进行加密，来防止特征码扫描！下面是我写的一个简单的加密解密函数，加密代码如下（详细参照文件"加密.htm"）：

<SCRIPT LANGUAGE="javascript">
function compile(code)
{
var c=String.fromCharCode(code.charCodeAt(0)+code.length);
for(var i=1;i<code.length;i++)
alert(escape(c));
}
compile('alert("《我爱一起》");')
</SCRIPT>

运行得到加密结果为：

o%CD%D1%D7%E6%9CJ%u9EF3%uFA73%uF1D4%u14F1%u7EE1Kd

相应的加密后解密的代码如下：

<SCRIPT LANGUAGE="javascript">
function uncompile(code)
{
code=unescape(code);
var c=String.fromCharCode(code.charCodeAt(0)-code.length);
for(var i=1;i<code.length;i++)
return c;
}
eval(uncompile("o%CD%D1%D7%E6%9CJ%u9EF3%uFA73%uF1D4%u14F1%u7EE1Kd"));
</SCRIPT>

**七：错误的利用**

　　利用try{}catch(e){}结构对代码进行测试解密，虽然这个想法很好（呵呵，夸夸自己），因为实用性不大，我仅给个例子

<SCRIPT LANGUAGE="javascript">
var a='alert("《我爱一起》");';
var c="";
for(var i=0;i<a.length;i++)
alert(c);
//上面的是加密代码，当然如果真正使用这个方法时，不会把加密写上的
//现在变量c就是加密后的代码
//下面的函数t()先假设初始密码为０，解密执行，
//遇到错误则把密码加１，然后接着解密执行，直到正确运行
var d=c; //保存加密后的代码
var b=0; //假定初始密码为0
t();
function t()catch(e){
c="";
for(var i=0;i<d.length;i++)
b+=1;
t();
//setTimeout("t()",0);
}
}
</SCRIPT>

