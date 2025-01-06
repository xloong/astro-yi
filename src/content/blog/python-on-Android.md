---
title: 在Android上运行python程序
description: 作者：evil0x86经过一翻折腾，把ASE装到G1上面。以前的ASE版本运行/tags/Python">python不太好。不过试了一下这个。还不错。首先去:http://code.google.com/p/android-scripting/downloads/list下载ase_r14.apk.……
date: 2010-01-15 10:26:29
category: Android
tags: ['Android', 'Python']
post_id: 1049
alias: python-on-Android
ViewNums: 16311
---

作者：[evil0x86](http://hi.baidu.com/evil0x86 "evil0x86的空间 http://hi.baidu.com/evil0x86")

经过一翻折腾，把ASE装到G1上面。以前的ASE版本运行[python](/tags/Python)不太好。不过试了一下这个。还不错。

首先去: <http://code.google.com/p/android-scripting/downloads/list>下载[ase_r14.apk](http://android-scripting.googlecode.com/files/ase_r14.apk).下载三个python模块:

* [python_extras_r0.zip](http://android-scripting.googlecode.com/files/python_extras_r0.zip)
* [python_r0.zip](http://android-scripting.googlecode.com/files/python_r0.zip)
* [python_scripts_r0.zip](http://android-scripting.googlecode.com/files/python_scripts_r0.zip)

把这三个放到存储卡根目录.ASE会自动找的.打开ASE->Menu键->Interpreters ->Menu键->Add选择python 用python写一个简单的[android](/tags/Android)程序:添加一个脚本时会出现我们安装的python选项.脚本会自动包含下面代码:
```
import android
droid = android.Android()
```
# 我们加入代码
```
droid.makeToast("Hello, Android!") # 弹出hello Android.
```
最后Menu键->save&run 在玩的朋友共享点经验啊 :).