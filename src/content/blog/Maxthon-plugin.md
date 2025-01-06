---
title: 傲游浏览器(Maxthon)插件制作
description: 在木子屋看到的这篇post/Maxthon-plugin.html">傲游浏览器(Maxthon)插件制作的文章，转来给大家看看，夜火也做个备忘。/tags/Maxthon">傲游插件一般由plugin.ini、运行文件、ico图标等文件组成，再压缩成一个post/Maxthon-plugin.html">m2p包而成(m2p为zip格式文档)。组成结构如下：……
date: 2010-01-05 10:55:58
category: 技术文章
tags: ['Maxthon', '浏览器', '插件']
post_id: 1043
alias: Maxthon-plugin
ViewNums: 3999
---

在[木子屋](http://www.mzwu.com/)看到的这篇[傲游浏览器(Maxthon)插件制作](/blog/maxthon-plugin)的文章，转来给大家看看，[夜火](http://www.15897.com)也做个备忘。

[傲游](/tags/Maxthon)插件一般由plugin.ini、运行文件、ico图标等文件组成，再压缩成一个[m2p](/blog/maxthon-plugin)包而成(m2p为zip格式文档)。组成结构如下：

引用内容mzwu.m2p
├mzwu
│├[plugin.ini](/blog/maxthon-plugin)
│├mzwu.ico
│└mzwu.js **plugin.ini标准格式：**

程序代码

[General]
;必须,定义插件的主要属性 Name=
;插件名称 Author=
;作者名字

Version=
;版本号

FileName=
;运行文件名

ModuleType=
;运行文件类型，可以是 Script，HTML，COM 或 EXE

Type=
;插件界面元素类型，可以是 M2Plugin_Button, M2Plugin_Sidebar, M2Plugin_Toolbar, M2Plugin_COM_Button, M2Plugin_MHO, M2Plugin_MHO_Button

Comments=
;在插件选项或按钮的工具提示所显示的描述

IdealSize=
;指定插件在接口显示的大小，比如 "120 20"(阔度 高度，适用于 HTML 插件)

IdealSizeVertical=
;选摘性，指定当工具栏在垂直放置的插件接口显示的大小，比如 "120 20"(阔度 高度，适用于 HTML 插件)

Icon=
;在按钮或侧边栏插件显示的图标 (适用于按钮及侧边栏插件)

HotIcon=
;当鼠标移到插件按钮上时显示的图标 (适用于按钮插件)

CLSID=
;COM 插件的 CLSID (适用于 COM 插件)

[MyIE2Buttons]
;可选,定义按钮类型插件的下拉菜单，适用于 Script 及 EXE 类型插件

Count=
;插件下拉菜单项目的数量

Name1=
;第一个下拉菜单项目的名称，如此类推

FileName1=
;提供第一个下拉菜单项目应执行的代码的档案，如此类推

**插件文件类型和界面元素类型支持情况**

[傲游插件](/blog/maxthon-plugin)按文件类型通常可分为Script、HTML、COM、EXE4种，按界面元素类型可分Button、Sidebar、Toolbar、COM_Button、 MHO、MHO_Button6种，这在plugin.ini中使用ModuleType和Type两个参数来说明，但并不是4种文件都可以显示为6种界面，下表为它们的支持情况：

![](http://www.mzwu.com/pic/200912/016.gif)

**补充说明**

**1).Script文件格式**

程序代码<script language= "Javascript" >
//脚本内容
</script>

**2).扩展属性**
·max_security_id：返回傲游安全ID，例：var security_id=%max_security_id
·tab_count：返回当前打开的标签总数(整数)，例：var tab_count=external.tab_count
·cur_sel：返回当前激活标签的序号(整数)，1.x支持，例：var cur_sel=external.cur_sel
·current_tab：返回当前激活标签的序号(整数)，2.x支持，例：var cur_sel=external.current_tab
·max_language_id：返回用户当前所选择的语言，例：var language_id=external.max_language_id

*1.x 版本的语言代码
0000 英文 English
0001 中文简体 Chinese
0005 中文繁体 Chinese Traditional

2.x 版本的语言代码
0x0409 英文 English
0x0804 中文简体 Chinese
0x0404 中文繁体 Chinese Traditional*

**3).扩展方法**
·addFavorite(url [,title])：添加网址到收藏夹，例：external.addFavorite("[http://www.mzwu.com](http://www.mzwu.com/)","木子屋")
·addProxy(name, address, speed, type)：添加代理到 Maxthon 的代理服务器列表中，1.x支持，例：external.addProxy("My proxy","192.168.1.0:8080",3,0)
·addProxy(name, address, type)：添加代理到 Maxthon 的代理服务器列表中，2.x支持，例：external.addProxy("My proxy","192.168.1.0:8080",0)
·addFilter(url_mask [,type])：添加过滤规则到 Maxthon 的过滤列表中，例：external.addFilter("*/ad/*", 0)
·m2_run_cmd( security_id, command_id)：该函数将调用一个 Maxthon 命令，例：external.m2_run_cmd(%max_security_id,32772)
·m2_search_text(security_id)：返回 Maxthon 搜索栏中的文本，例：var s=external.m2_search_text(%max_security_id)
·m2_plugin_folder(security_id, plugin_name)：返回插件文件夹的本地路径，例：var s=external.m2_plugin_folder(%max_security_id, "mzwu")

**4).侧边栏显示html**
可以在侧边栏显示html页面，但plugin.ini中ModuleType参数值仍应为Script，而不是HTML；

**5).插件安装删除**
安装：双击m2p文件或将m2p文件拖到[Maxthon](/tags/Maxthon)窗口中即可安装；
删除：打开菜单"工具(T)→管理插件(P)..."，选中要删除的插件，选择删除即可；

**相关资源**

官方wiki：<http://wiki.maxthon.com/index.php/Maxthon_2_-_Plugin_Reference>
傲游插件开发参考：<http://bbs.maxthon.cn/viewthread.php?tid=23564>

