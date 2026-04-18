---
title: 多屏幕鼠标一键跳转显示屏 AHK脚本
uid: 202309191504
datetime: 2023-09-19 15:04
slug: multi-screen-mouse-jump
aliases: []
tags: []
source: 
link:

description: 多屏幕鼠标一键跳转显示屏 AHK脚本
date: 2023-09-19 15:04:00
category: 笔记
---
身为双屏用户，因为鼠标手的原因，一直想找个多屏幕一键鼠标跳转到另一个显示屏的软件，以减少鼠标长距离移动，减缓疼痛。但是一直没碰到想要的，不知道是都没这需求还是我找的方式不对。

自以为这需求偏系统底层了，需要C，C++之类的底层语言来实现，就一直没研究，今天突然想起来AutoHotkey，搜了下，还真有类似的实现 [AutoHotkey配置鼠标光标在屏幕之间瞬移](https://www.voidking.com/hobby-autohotkey-mouse-cursor-switch-between-screens/)  

不过他实现的脚本，对我右屏作为主屏的来说，有点问题，而且这种只能应对双屏，不能应对更多屏幕，不是那么完美。

于是又自己实现了一遍

## 使用

`win + alt + x` 将鼠标跳转到下一个屏幕的中心  
`win + alt + z` 将鼠标跳转到上一个屏幕的中心  
`win + alt + c` 显示鼠标当前所在位置的坐标  

用win键来设置快捷键主要不想有冲突，至于使用起来按键多，麻烦的问题，我是用鼠标多余的功能键映射快捷键，使用鼠标的时候一键就触发了；使用触摸板的时候，也近一些

之前忘了触摸板的三指手势设置的是 power toys 的 鼠标跳转，把一部分手势换成这个快捷键，用起来更丝滑了。至于为什么不继续用 power toys ，从那个缩略图显示，再到点击缩略图，感觉太拖沓了，不如直接一键跳转来的爽利。

跳转后会自动激活鼠标所在的窗口，方便直接操作。

**由于我只有2个显示屏，因此多余2个显示屏的使用，未经测试**

## 代码

```AutoHotkey
CoordMode, Mouse, Screen
MouseGetPos, xpos, ypos

SysGet, MCount, MonitorCount

before_monitor := 1 ; 记录上一个显示器

monitors := {}
; 循环所有的显示器 根据显示器的上右下左 获取中心点
Loop, %MCount%
{
    cur := A_Index
    SysGet, temp, monitor, %cur%

    ; MsgBox,显示器%cur% Left: %tempLeft%  -- Top:  %tempTop%  -- Right:  %tempRight%  -- Bottom:  %tempBottom%  -- x: %xpos%  -- y: %ypos%

    ; 计算对应屏幕的中心点
    m_x:= (tempLeft+tempRight)//2
    m_y:= (tempTop+tempBottom)//2

    ; 指定鼠标跳转后所在 显示器的指定位置
    if(cur==1){
        ; 指定屏幕位置
        ; m_x := 1200
        ; m_y := 800
        ; 根据中心点偏移
        ; m_x := m_x+200
        ; m_y := m_y-300
    }

    monitors[cur] := {left: tempLeft,top: tempTop,right: tempRight,bottom: tempBottom,x: m_x,y: m_y}
}

  

; 显示鼠标当前坐标
#!C::
    MouseGetPos, xpos, ypos
    MsgBox, x: %xpos%  -- y: %ypos%
return

; 鼠标跳转到下一个显示器
#!X::
    the_next := 1
    MouseGetPos, xpos, ypos
    ; 循环所有的显示器
    Loop, %MCount%
    {
        cur := A_Index

        ;   monitors[cur] := {left: tempLeft,top: tempTop,right: tempRight,bottom: tempBottom,x: m_x,y: m_y}

        ; 判断当前鼠标所在的显示器
        if(xpos >= monitors[cur].Left)
        and (xpos <= monitors[cur].Right)
        and (ypos >= monitors[cur].Top)
        and (ypos <= monitors[cur].Bottom)
        {
            ; MsgBox, 改变前 显示器%cur%
            before_monitor := cur
            if(MCount= cur){
                the_next := 1
            }
            else{
                the_next += 1
            }
        }
    }

    ; MsgBox %the_next%
    MouseMove, monitors[the_next].x, monitors[the_next].y, 0

    ; 激活窗口
    MouseGetPos, mouseX, mouseY, winId
    WinActivate, ahk_id %winId%
    WinWaitActive, ahk_id %winId% ; 等待窗口激活

return

; 鼠标跳转到上一个显示器
#!Z::
    the_prev := before_monitor
    MouseGetPos, xpos, ypos
    ; 循环所有的显示器
    Loop, %MCount%
    {
        cur := A_Index
        ; 判断当前鼠标所在的显示器
        if(xpos >= monitors[cur].Left)
        and (xpos <= monitors[cur].Right)
        and (ypos >= monitors[cur].Top)
        and (ypos <= monitors[cur].Bottom)
        {
            ; MsgBox, 改变前 显示器%cur%
            before_monitor := cur
        }
    }

    ; MsgBox %the_prev%
    MouseMove, monitors[the_prev].x, monitors[the_prev].y, 0

    ; 激活窗口
    MouseGetPos, mouseX, mouseY, winId
    WinActivate, ahk_id %winId%
    WinWaitActive, ahk_id %winId% ; 等待窗口激活

return
```

## github

懒得修改，想直接用的话可以到github下载exe文件:  
https://github.com/xloong/multi_screen_mouse_jump

## 参考

[AutoHotkey下载](https://www.autohotkey.com/download/)  
[AutoHotkey配置鼠标光标在屏幕之间瞬移](https://www.voidking.com/hobby-autohotkey-mouse-cursor-switch-between-screens/)  
[SysGet](https://wyagd001.github.io/zh-cn/docs/lib/SysGet.htm)    
[MouseMove](https://wyagd001.github.io/zh-cn/docs/lib/MouseMove.htm)  
[WinActivate](https://wyagd001.github.io/zh-cn/docs/lib/WinActivate.htm)  