---
title: 给程式设计师的Vim入门图解说明
description: 在LinuxToy上看到的post/Vim-rumen-tujie-shuoming.html">给程式设计师的Vim入门图解说明推荐，转来之，作者是vgod’sblog。刚在寫那篇關於vi和文字編輯器的文章時，本來想附上一個/tags/Vim">vim的超簡單入門連結，但找了一下都沒有很滿意的，所以決定自己動手先來畫個入門用的說明圖。
date: 2010-01-13 10:51:00
category: 技术文章
tags: ['Vim', '技术类']
post_id: 1048
alias: Vim-rumen-tujie-shuoming
ViewNums: 3316
---

在[LinuxToy](http://linuxtoy.org/)上看到的[**给程式设计师的Vim入门图解说明**](/blog/vim-rumen-tujie-shuoming)推荐，转来之，作者是[vgod’s blog](http://blog.vgod.tw/)。

刚在寫那篇[關於vi和文字編輯器的文章](http://blog.vgod.tw/2009/12/07/text-editing/ "(660 hits)")時，本來想附上一個[vim](/tags/Vim)的超簡單入門連結，但找了一下都沒有很滿意的，所以決定自己動手先來畫個入門用的說明圖。

[![vim-cheat-sheet-full](http://blog.vgod.tw/wp-content/uploads/2009/12/vim-cheat-sheet-full-thumb.png "vim-cheat-sheet-full")](http://blog.vgod.tw/wp-content/uploads/2009/12/vim-cheat-sheet-full.png "(3636 hits)")
 [PDF版下載](http://blog.vgod.tw/wp-content/uploads/2009/12/vgod-vim-cheat-sheet-full.pdf)

[![vim-cheat-sheet-diagram](http://blog.vgod.tw/wp-content/uploads/2009/12/vim-cheat-sheet-diagram-thumb.png "vim-cheat-sheet-diagram")](http://blog.vgod.tw/wp-content/uploads/2009/12/vim-cheat-sheet-diagram.png "(1216 hits)")

這個圖把vim中基本的移動方法都畫上去了，為了方便programmer，特別列出了很多只有寫程式才會用的按鍵。除了這些以外，其實還有一些好用的東西我還沒想到怎麼畫上去比較好(像是tags、沒有標準快速鍵的tab、man..)，如果大家有idea歡迎提供。

這些圖示依照移動的單位大小分為以下幾個種類，分別用不同顏色標示：
（注意，這不是完整的vim快速鍵列表，只是我覺得比較常用的鍵而已。）

| 字元(character) | |
| --- | --- |
| h | 左 |
| j | 下 |
| k | 上 |
| l | 右 |

| 單字(word) | |
| --- | --- |
| w | 下一個word |
| W | 下一個word(跳過標點符號) |
| b | 前一個word |
| e | 跳到目前word的尾端 |

| 行(line) | |
| --- | --- |
| 0 | 跳到目前行的開頭 |
| ^ | 跳到目前行第一個非空白字元 |
| $ | 跳到行尾 |

| 段落(paragraph)、區塊(block) | |
| --- | --- |
| { | 上一段(以空白行分隔) |
| } | 下一段(以空白行分隔) |
| [{ | 跳到目前區塊開頭 |
| ]} | 跳到目前區塊結尾 |
| % | 跳到目前對應的括號上(適用各種括號,有設定好的話連HTML tag都能跳) |

| 螢幕(screen)、絕對位置 | |
| --- | --- |
| H | 螢幕頂端 |
| M | 螢幕中間 |
| L | 螢幕底部 |
| :**x** **x**G | 跳到第x行(x是行號) |

| 搜尋(search) | |
| --- | --- |
| /xxxx | 搜尋xxxx |
| # | 往前搜尋目前游標所在的字(word) |
| * | 往後搜尋目前游標所在的字(word) |
| f**x** | 在目前行往後搜尋字元x |
| gd | 跳到目前游標所在的字(word)的定義位置(寫程式用, 跳到定義變數/函式的地方) |

| 分割視窗 | |
| --- | --- |
| :split | 分割視窗(可加檔名順便開啟另一檔案) |
| :diffsplit xxx | 以分割視窗和檔案xxx做比較(diff) |
| Ctrl-W p | 跳到前一個分割視窗(在兩個分割窗來回切換) |
| Ctrl-W j | 跳到下面的分割窗 |
| Ctrl-W h | 跳到左邊的分割窗 |
| Ctrl-W k | 跳到上面的分割窗 |
| Ctrl-W l | 跳到右邊的分割窗 |

| 自動補齊(Auto-completion) (在Insert Mode中使用) | |
| --- | --- |
| Ctrl-N | 自動補齊檔案內的下一個可能字(word) |
| Ctrl-P | 自動補齊檔案內的上一個可能字(word) |
| Ctrl-X Ctrl-F | 自動補齊檔名 |

