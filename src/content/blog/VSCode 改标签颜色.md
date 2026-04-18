---
title: VSCode 改标签颜色
uid: 202402190849
datetime: 2024-02-19 08:49
slug: vscode-tab-color
aliases: 
tags: 
source: 
link:

description: VSCode 改标签颜色
date: 2024-02-19 08:49:00
category: 笔记
---
我vscode使用的是 Sublime Monokai 主题，活动标签(当前正在修改的文件标签)，和其他标签的背景色区别不大，每次都要辨认一番，比较烦。

之前也修改过颜色，不知为什么变回去了，于是又查找修改的方法，重改了一遍。这次记录下，方便以后查阅。

### 修改方法

vscode 中 设置(ctrl+,) 

直接搜索 `workbench.colorCustomizations`， 点击 `在 settings.json 中编辑` 

按如下方式修改即可

```json
// ...
"workbench.colorCustomizations": {
	"tab.activeBackground": "#0066B8"
	// "tab.inactiveBackground": "#1e2127",
	// "tab.border": "#fff"
},
// ...
```