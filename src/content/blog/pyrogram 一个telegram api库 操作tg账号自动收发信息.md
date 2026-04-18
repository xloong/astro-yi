---
title: pyrogram 一个telegram api库 操作tg账号自动收发信息
uid: 202405230857
datetime: 2024-05-23 08:57
slug: pyrogram
aliases: 
tags: 
  - python
  - telegram
source: 
link:

description: pyrogram 一个telegram api库 操作tg账号自动收发信息
date: 2024-05-23 08:57:00
category: 笔记
---
最近写了个小工具，使用python操作普通的telegram号，给telegram bot发消息，获取返回内容，入库。

申请telegram的api什么的这些前置项就不赘述了

刚开始找到一个`python-telegram`库（ https://github.com/alexander-akhmetov/python-telegram ），试了一下，感觉并不是多好使。获取最新的消息也有点问题。

后来发现了`pyrogram`（ https://github.com/pyrogram/pyrogram ， https://docs.pyrogram.org ），感觉挺符合我的使用习惯。

### 登录授权
https://docs.pyrogram.org/start/auth
```python
from pyrogram import Client
# api_id 和 api_hash改为自己的 运行后会提示输入tg账号和授权码
app = Client("account", api_id=<api_id>, api_hash=<api_hash>)
with app:
    print(app.get_me()) # 获取账号信息
    session_string = app.export_session_string() # 获取session_string
    print(session_string)
  
# 使用session_string登录 范例
with Client("account", session_string=session_string) as app:
    print(app.get_me())

app.run()
```

### 发送消息

消息对象的账号为对方账号@后面的内容 
https://docs.pyrogram.org/api/methods/send_message
```python
msg_result = await app.send_message(<消息对象的账号>, <消息内容>)
```

### 接收消息

接收消息有多种方式

使用`@app.on_message()`装饰器进行接收 
https://docs.pyrogram.org/start/examples/echo_bot
```python
from pyrogram import Client, filters

app = Client("my_account")

@app.on_message(filters.text & filters.private)
async def echo(client, message):
    await message.reply(message.text)

app.run()  # Automatically start() and idle()
```

使用`app.get_messages()` 轮询 
https://docs.pyrogram.org/api/methods/get_messages
```python
# Get one message
await app.get_messages(chat_id, 12345)

# Get more than one message (list of messages)
await app.get_messages(chat_id, [12345, 12346])

# Get message by ignoring any replied-to message
await app.get_messages(chat_id, message_id, replies=0)

# Get message with all chained replied-to messages
await app.get_messages(chat_id, message_id, replies=-1)

# Get the replied-to message of a message
await app.get_messages(chat_id, reply_to_message_ids=message_id)
```

使用`app.get_chat_history()`查询历史消息 
https://docs.pyrogram.org/start/examples/get_chat_history  
https://docs.pyrogram.org/api/methods/get_chat_history 
```python
from pyrogram import Client

app = Client("my_account")

async def main():
    async with app:
        # "me" refers to your own chat (Saved Messages)
        async for message in app.get_chat_history("me"):
            print(message)

app.run(main())
```