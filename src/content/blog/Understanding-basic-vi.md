---
title: vi 基础入门
description: vi基础入门翻译自Understandingbasicvi(visualeditor)难度系数:中估计只需要5分钟Vim是一个基于高效文本编辑而设计的文本编辑装逼利器是命令行编辑器的不二选择,当然在图形界面偶还是推荐IntellijIDEA,除非你真的很牛逼或很装逼通常的vi其实调用的也是vim,在大多数的UNIX系统里默认都会捆绑一个
date: 2009-07-19 11:44:44
category: 技术文章
tags: ['Vim', '技术类']
post_id: 914
alias: Understanding-basic-vi
ViewNums: 2468
---

[vi 基础入门](/blog/understanding-basic-vi)
翻译自[Understanding basic vi (visual editor)](http://kb.mediatemple.net/questions/911/Understanding%2Bbasic%2Bvi%2B%28visual%2Beditor%29)
难度系数: 中
估计只需要5分钟

[Vim](/blog/understanding-basic-vi) 是一个基于高效文本编辑而设计的文本编辑装逼利器
是命令行编辑器的不二选择,当然在图形界面偶还是推荐 Intellij IDEA, 除非你真的很牛逼或很装逼
通常的 [vi](/blog/understanding-basic-vi) 其实调用的也是vim,在大多数的UNIX系统里默认都会捆绑一个

vi是一个全屏编辑器,丫有俩种操作模式

* **命令行模式** - 每个字符打下去都会被当成命令. 这是启动 vi 后的默认模式. 按 **Esc** 可返回此模式.
* **插入模式** - 这个就是咱熟悉的编辑模式. 要开启这个模式请在命令模式下输入 **i** 它代表邪恶的~~小黄瓜~~insert

> **提醒:**
> vi 对大小写敏感. 在输入命令的时候要注意别搞混了, 不然生出来的孩子都不像你

学习vi最好的方式就是跟着 vimtutor ,你可以在连接SSH后输入下面的命令
`vimtutor`下面是对新手非常有用的几个常用命令
都需要在命令行模式跑,也是就按了Esc后的那个

**用 vi 打开某个文件**
只需要输入vi 空格 文件名
`vi filename`如果存在则打开,不存在则创建

**跳转到某一行**
大写的G跳到最后一行
`G`第一行就是 1G 或 gg
`1G`如果你爱玩war3,可能更喜欢输入俩小g
`gg`
**在 vi 中滚来滚去**
当然你可以用箭头上下左右... 但
不懒的程序员不是好程序员,
除了懒得用鼠标,键盘太长,偶才不要甩手腕捏

* 输入 **h** 向左移动
* 输入 **l** 向右移动
* 输入 **k** 向上移动
* 输入 **j** 向下移动

你会发现在google reader里也能用 jk 翻文章...

**在 [vi](/blog/understanding-basic-vi) 里搜索**
如果你要搜索一下早川濑里奈那就可以用 "/"
`/早川濑里奈`搜索下一个也就是next,只需要输入 **n**
`n` 你会发现在google reader里也能用 / 搜索...

**退出 vi**
退出但不保存
`:q!`退出并保存
`:wq`

`via [ooxx.me](http://ooxx.me)`

