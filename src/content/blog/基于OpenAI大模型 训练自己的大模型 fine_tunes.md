---
title: 基于OpenAI大模型 训练自己的大模型 fine_tunes

uid: 202307281630
datetime: 2023-07-28 16:30
slug: openai-fine-tunes
aliases: []
tags: [AI]
source:
link:

description: 基于OpenAI大模型 训练自己的大模型 fine_tunes
date: 2023-07-28 16:30:00
category: 笔记
---

说是基于大模型，训练自己的大模型，其实就是 fine_tunes 微调。

这篇文章会写的更意识流一些，更多的是作为笔记。下面记录的代码也都是基于命令行，进行技术验证，非python代码。

相关概念 [利用GPT-3 Fine-tunes训练专属语言模型](https://blog.csdn.net/jarodyv/article/details/129243315)

英文过关的话可以直接查看官方文档： https://platform.openai.com/docs/guides/fine-tuning

## 准备

### 安装openai

```bash
pip install --upgrade openai
```

### 设置openai api key

linux

```bash
export OPENAI_API_KEY="<OPENAI_API_KEY>"
```

windows

```bash
setx OPENAI_API_KEY "<OPENAI_API_KEY>"
```

  

## 上传训练文件(非必要)

这步可以跳过，发现后面的fine_tunes.create可以直接上传当前目录下的文件  

  

### GPT 列出所有上传的文件

```bash
curl https://api.openai.com/v1/files  -H "Authorization: Bearer sk-***"
```

或

```bash
set OPENAI_API_KEY="sk-***"
curl https://api.openai.com/v1/files  -H "Authorization: Bearer %OPENAI_API_KEY%"
```

  

### GPT 上传文件

```bash
curl https://api.openai.com/v1/files  -H "Authorization: Bearer sk-***"  -F purpose="fine-tune"  -F file="@file.jsonl"
```

#### 返回

```bash
{
  "object": "file",
  "id": "file-***",
  "purpose": "fine-tune",
  "filename": "file.jsonl",
  "bytes": 281,
  "created_at": 168*******,
  "status": "uploaded",
  "status_details": null
}
```


## 微调模型

### 创建微调模型


```bash
openai api fine_tunes.create -t file.jsonl -m ada --suffix "test_model"
```

```bash
openai api fine_tunes.create -t file-*** -m davinci --suffix "test_d_model"
```


可以忽略前面的单独上传文件，这里可以点击回车，自动上传当前目录下的文件  
这里使用已上传的文件，可以直接输入文件id，如file-***

### 列出微调模型

```bash
openai api fine_tunes.list
```

### 跟踪事件流

```bash
openai api fine_tunes.follow -i ft-***
```

  
#### 输出

```bash
[2023-07-***] Created fine-tune: ft-***
[2023-07-***] Fine-tune costs $0.00
[2023-07-***] Fine-tune enqueued. Queue number: 2
[2023-07-***] Fine-tune is in the queue. Queue number: 1
[2023-07-***] Fine-tune is in the queue. Queue number: 0
[2023-07-***] Fine-tune started
[2023-07-***] Completed epoch 1/4
[2023-07-***] Completed epoch 2/4
[2023-07-***] Completed epoch 3/4
[2023-07-***] Completed epoch 4/4
[2023-07-***] Uploaded model: ada:ft-8000:text-model-2023-07-***
[2023-07-***] Uploaded result file: file-***
[2023-07-***] Fine-tune succeeded
  
Job complete! Status: succeeded 🎉
Try out your fine-tuned model:
  
openai api completions.create -m ada:ft-8000:text-model-2023-07-*** -p <YOUR_PROMPT>

````

  
```bash
openai api completions.create -m davinci:ft-8000:test-d-model-2023-07-*** -p <YOUR_PROMPT>
```

  
### 列出微调模型

```bash
openai api fine_tunes.list
```

#### 输出

```bash
{
  "object": "list",
  "data": [
    {
      "object": "fine-tune",
      "id": "ft-***"
      "hyperparams": {
        "n_epochs": 4,
        "batch_size": 1,
        "prompt_loss_weight": 0.01,
        "learning_rate_multiplier": 0.1
      },
      "organization_id": "org-***",
      "model": "ada",
      "training_files": [
        {
          "object": "file",
          "id": "file-***",
          "purpose": "fine-tune",
          "filename": "file.jsonl",
          "bytes": 281,
          "created_at": 168*******,
          "status": "processed",
          "status_details": null
        }
      ],
      "validation_files": [],
      "result_files": [
        {
          "object": "file",
          "id": "file-***",
          "purpose": "fine-tune-results",
          "filename": "compiled_results.csv",
          "bytes": 894,
          "created_at": 168*******,
          "status": "processed",
          "status_details": null
        }
      ],
      "created_at": 168*******,
      "updated_at": 168*******,
      "status": "succeeded",
      "fine_tuned_model": "ada:ft-8000:text-model-2023-07-***"
    }
  ]
}
```

  
  

## 参考

[利用GPT-3 Fine-tunes训练专属语言模型](https://blog.csdn.net/jarodyv/article/details/129243315)  
[手把手带你微调自己的GPT-davinci-003](https://blog.csdn.net/qq_43337103/article/details/129366483)  
https://platform.openai.com/docs/guides/fine-tuning   