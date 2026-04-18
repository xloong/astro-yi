---
title: PHP+JS 对接OpenAI chatGPT逐字逐句加载回答(SSE数据流)
uid: 202306161600
datetime: 2023-06-16 16:00
slug: php-js-sse-openai-chatgpt
aliases: []
tags: 
  - php
  - javascript
source: 
link: 

description: PHP+JS 对接OpenAI chatGPT逐字逐句加载回答(SSE数据流)
date: 2023-06-16 16:00:00
category: 笔记
---
之前看到其他人对接的OpenAI chatGPT 都是JS一个字一个字的加载，类似打字机的效果，想也知道这比PHP直接一次性获取内容再显示要好，如果一次性获取的内容太多，PHP容易执行超时，挂掉。

经过一番搜寻，发现是使用的SSE数据流(Server-Sent Events)的方式，之前没接触过SSE数据流，踩了不少坑，记录一下

### PHP服务端接收与转发SSE数据流

转发主要为了隐藏api key， 域名根据需要设置反向代理。

获取SSE数据流处理的过程中，因为对SSE的不熟悉，没注意到返回的内容最前面带 `data:` 字样，导致php端处理json数据时踩了不少坑，浪费了不少时间。

```php
// 设置 OpenAI API 访问凭证
$api_key = '<your api key>';

// 设置 API 请求参数
$prompt = $_GET['prompt'];
// $model = 'text-davinci-003';
$model = 'gpt-3.5-turbo';
// $model = 'gpt-3.5-turbo-16k-0613';
$temperature = 0.5;
$max_tokens = 2048;

// 发起 API 请求
// $url = 'http://api.openai.com/v1/engines/' . $model . '/completions';
// $url = 'http://api.openai.com/v1/completions'; // davinci
$url = 'http://api.openai.com/v1/chat/completions'; // gpt-3.5-turbo
$data = array(
  'model' => $model,
  // 'prompt' => $prompt, // davinci
  'messages' => array(
    array(
      'role' => 'system',
      'content' => "Unless necessary, try to answer in Chinese as much as possible.You always answer truthfully and don't make things up. When responding to the following prompt, please make sure to properly style your response using Github Flavored Markdown. Use markdown syntax for things like headings, lists, colored text, code blocks, highlights etc. Make sure not to mention markdown or styling in your actual response"
      // 除非必要，你尽量以中文回答。你总是如实回答，不要捏造事实。在响应以下提示时，请确保使用Github Flavored Markdown正确设置响应样式。对标题、列表、彩色文本、代码块、突出显示等使用markdown语法。确保在实际响应中不要提及markdown或样式
    ),
    array( // gpt-3.5-turbo
      'role' => 'user',
      'content' => $prompt,
    )
  ),
  'temperature' => $temperature,
  'max_tokens' => $max_tokens,
  'stream' => true,
);

if(!empty($uid))
  $data['user'] = $uid;

$data = json_encode($data);

$options = array(
  'http' => array(
      'header'  => "Content-type: application/json\r\n" .
        "Authorization: Bearer " . $api_key . "\r\n",
      'method'  => 'POST',
      'content' => $data,
      'ignore_errors' => true,
      'timeout' => 30
  )
);

$context  = stream_context_create($options);
$stream = fopen($url, 'r', false, $context);
// stream_set_blocking($stream, 0); // 将流设置为非阻塞模式

// 检查当前缓冲区级别
if (ob_get_level() > 0) {
    // 如果有缓冲区，则清空缓冲区
    ob_end_clean();
}

// 开始传输并将结果输出为SSE流
header("Content-Type: text/event-stream");
header("Cache-Control: no-cache");
header("Connection: keep-alive");
header('X-Accel-Buffering: no');

// 建立连接后，您可以输出初始化数据到客户端
// echo "event: sse_init\ndata: {}\n\n";
// ob_flush();
flush();

// 开始传输并输出结果
if ($stream === false) {
    echo "cURL error: " . curl_error($ch);
} else {
    // echo "event: data\ndata: {test:123}\n\n";
    // // ob_flush();
    // flush();
    $log_id = '';
    $content = '';
    while (!feof($stream)) {
        $sse_data = '';
        $sse_data = fgets($stream);
        // $sse_data = fread($stream, 1);

        echo "event: message\n".$sse_data."\n\n";
        // ob_flush();
        flush();

        // 处理SSE流中的数据
        $data = '';
        if (strpos($sse_data, 'data:') === 0) { //返回的数据里开头有`data:`
          $data = trim(substr($sse_data, 5));
        }

        $d = json_decode($data, true);

        if( // 第一次 只返回role
          !empty($d['choices'][0]['delta']['role'])
          && $d['choices'][0]['delta']['role'] == 'assistant'
        ){
          // 根据需要 进行处理
        }

        // 有内容
        if(!empty($d['choices'][0]['delta']['content'])){
          $content .= $d['choices'][0]['delta']['content'];
        }

        // 内容结束
        if(
          !empty($d['choices'][0]['finish_reason'])
          && $d['choices'][0]['finish_reason']=='stop'
        ){
          // 根据需要 保存内容 $content
        }
    }
}
```


### 页面内 javascript 接收读取SSE数据流

HTML如下，样式就不搬了
```html
<div id="chat_msg_area"></div>

<div id="input_area">
  <button id="chat_send_btn" class="btn btn-primary">发送</button>
  <input id="chat_input" class="form-control" type="text" value="给我一个简单的回应,带markdown格式 附带一些代码块 还有超链接">
</div>
```

javascript代码，提问与回答均会创建一个新的div(`.chat_msg_q` `.chat_msg_a`)插入到 `#chat_msg_area`

```javascript
const el_chat_msg_area = document.getElementById('chat_msg_area');

// chat
const el_chat_send_btn = document.getElementById('chat_send_btn');
const el_chat_input = document.getElementById('chat_input');
var el_chat_msg_a_cur = null;
var prompt = '';
var sourceData = '';

onStart = function() {
  console.log('onStart')
  var el_chat_msg_q = document.createElement('div');
  el_chat_msg_q.className = 'chat_msg chat_msg_q'
  el_chat_msg_q.innerText = prompt
  el_chat_msg_area.appendChild(el_chat_msg_q)

  el_chat_send_btn.disabled = true // 禁用发送按钮
  // 去掉最后一个chat_msg_a 的 cur
  els_chat_msg_a_all = document.getElementsByClassName('chat_msg_a')
  if(els_chat_msg_a_all.length > 0){
    els_chat_msg_a_all[els_chat_msg_a_all.length-1].classList.remove('cur')
  }

  // 添加新的chat_msg_a cur
  var el_chat_msg_a = document.createElement('div');
  el_chat_msg_a.className = 'chat_msg chat_msg_a cur'
  el_chat_msg_area.appendChild(el_chat_msg_a)
  el_chat_msg_a_cur = document.getElementsByClassName('chat_msg_a cur')[0]
  el_chat_msg_a_cur.scrollIntoView()
};

onDone = function() {
  console.log('onDone')
  el_chat_send_btn.disabled = false // 恢复发送按钮
};

el_chat_send_btn.addEventListener("click", function() {
  console.log('chat_send_btn', el_chat_input.value)
  prompt = el_chat_input.value
  onStart()
  sourceData = '';
  const source = new EventSource("<?php echo site_url() ?>Openai/sse?prompt="+prompt);

  source.onmessage = function(event) {
    // console.log(event.data)
    if(event.data == '[DONE]'){
      source.close();
      onDone()
      return
    }

    var data = JSON.parse(event.data)
    // console.log(data) // 解析后的json数据
    if(data.choices[0].delta.content){
      sourceData += data.choices[0].delta.content
      // console.log(data.choices[0].delta.content) // 逐字逐句输出
      // el_chat_msg_a_cur.innerHTML += data.choices[0].delta.content;
      // el_chat_msg_a_cur.innerHTML += data.choices[0].delta.content.replace(/\n/g, '<br />'); // 仅仅格式化换行
      el_chat_msg_a_cur.innerHTML = md.render(sourceData); // markdown内容格式化 后面有说
      el_chat_msg_a_cur.scrollIntoView()
    }

    if(data.finish_reason == 'stop'){
      source.close();
      onDone()
    }

    // const data = JSON.parse(event.data);
    // console.log(data.choices[0].text);
  };

  source.onerror = function(error) {
    console.error(error);
    source.close();
    onDone()
  };
});
```

  

### 返回内容格式化

markdown内容格式化以及代码块高亮由下面2个库处理：
- markdown-it
- highlight.js

没处理这个之前看到别人对接的chatGPT，都可以边接收数据，边显示，边显示格式化的内容，并且代码块没输出完的情况下也可以正常格式化，还以为有什么高深的技术。没想到都是由这2个库自动处理的。

引入上述2个库并实例化后，使用render方法即可。下面这段实例化代码需要放在上面那段加载SSE数据流的js代码之前

```javascript
// 创建MarkdownIt实例
const md = new markdownit({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ''; // 使用外部默认转义
  }
});

// 使用示例
// md.render([markdown文本]);
```

### 参考

https://platform.openai.com/docs/api-reference/completions/create  
踩坑踩的多，参考的内容也多，大多记不住了