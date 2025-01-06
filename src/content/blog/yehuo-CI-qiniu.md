---
title: 跟夜火学CodeIgniter - 集成七牛云存储
description: 最近有一个项目需要集成七牛云存储的图片存储和调用功能，程序是基于CodeIgniter2.1.3的PHP框架。刚拿到手完全无从下手的感觉，因为像框架这种东西，想从官方的PHPSDK集成进去，需要改动很多地方。还好，有前辈蹚水，我等后辈直接参考或者说是拿来用了。上传插件采用的是plupload。plupload：www.plupload.com/多附件上传控件plupload的使用心得：www
date: 2014-12-23 12:46:03
category: 教程与电子书
tags: ['CodeIgniter', 'PHP']
post_id: 1550
alias: yehuo-CI-qiniu
ViewNums: 4740
---

最近有一个项目需要[集成七牛云存储的图片存储和调用功能](/blog/yehuo-ci-qiniu)，程序是基于[CodeIgniter](/blog/yehuo-ci-xu-mulu) 2.1.3的[PHP](/tags/PHP)框架。刚拿到手完全无从下手的感觉，因为像框架这种东西，想从官方的PHPSDK集成进去，需要改动很多地方。还好，有前辈蹚水，我等后辈直接参考或者说是拿来用了。上传插件采用的是plupload。

plupload：[www.plupload.com/](http://www.plupload.com/)

多附件上传控件plupload的使用心得：[www.cnblogs.com/luckybird/archive/2013/01/15/2861072.html](http://www.cnblogs.com/luckybird/archive/2013/01/15/2861072.html)

七牛云存储：[qiniu.com](https://portal.qiniu.com/signup?code=3ljwh69fabqs2)

为做备份之用，还是整篇拉过来一份吧：

最近想做个相册系统，平时都是使用ThinkPHP来开发的，但是这次想换一个PHP框架试试，于是选择了[CodeIgniter](/tags/CodeIgniter)框架，因为熟悉了TP框架，所以CodeIgniter学起来也相对容易点.
网上搜了一下，几乎没有CodeIgniter结合七牛的案例，加上自己也是初次使用CodeIgniter和七牛，所以花了一整天的时间在研究这个，用到的上传插件是Plupload，在这里分享给大家，希望对大家有帮助。
**修改七牛php-sdk**
首先下载七牛的php-sdk，将压缩包内的qiniu文件夹放置到CodeIgniter框架applicationlibraries文件夹下.因为CodeIgniter的类库对命名有要求，而七牛sdk的类库文件名和类名不一致，所以需要稍微修改下sdk里面的文件名.

将io.php修改为Qiniu_PutExtra.php
将rs.php修改为Qiniu_RS_GetPolicy.php
将fop.php修改为Qiniu_ImageView.php

引入Plupload并初始化
```html
<script type="text/javascript" src="<?php echo base_url(); ?>public/js/jquery-1.11.1.min.js" ></script>
<script type="text/javascript" src="<?php echo base_url(); ?>public/js/plupload/plupload.full.min.js" ></script>
<script type="text/javascript" src="<?php echo base_url(); ?>public/js/plupload/jquery.plupload.queue/jquery.plupload.queue.min.js" ></script>
<script type="text/javascript" src="<?php echo base_url(); ?>public/js/plupload/i18n/zh_CN.js" ></script>
<link rel="stylesheet" href="<?php echo base_url(); ?>public/js/plupload/jquery.plupload.queue/css/jquery.plupload.queue.css" />
```
在模板中添加标签，用于显示上传区域
```html
<div id="muilti_uploader">
    <p>你的浏览器没有安装Flash插件，或不支持HTML5</p>
</div>
```
设置参数，初始化Plupload（下面有个eval的地方需要手动去掉中间的空格）
```html
<script type="text/javascript">
$(function() {
    var photos = Array(); // 用于存放照片信息
    // 设置参数，初始化Plupload

    $("#muilti_uploader").pluploadQueue({

        runtimes : 'html5,flash,silverlight,html4',

        url : "http://up.qiniu.com/",

        chunk_size : '512kb',

        rename : true,

        dragdrop: true,

        filters : {

            max_file_size : '10mb',

            mime_types: [

                {title : "Image files", extensions : "jpg,jpeg,gif,png"},

                {title : "Zip files", extensions : "zip"}

            ]

        },

        multipart: true,

        multipart_params: {

            'token': '<?php echo $upToken;?>', //token，需要从服务器获取

        },

        flash_swf_url : '<?php echo base_url(); ?>public/js/plupload/Moxie.swf'

    });

    var uploader = $('#muilti_uploader').pluploadQueue();

    //上传文件之前触发

    uploader.bind('BeforeUpload', function(uploader, file){

        var file_ext = file.name.substr(file.name.lastIndexOf(".")); // 图片后缀

        //指定文件的名称，如果不设置，七牛会默认将文件的hash值作为文件的名字

        uploader.settings.multipart_params.key = parseInt(new Date().valueOf()/1000) + '-' + parseInt(Math.random()*8999 + 1000) + file_ext;

    });

    //成功上传一个文件后触发

    uploader.bind('FileUploaded', function(uploader, file, responseObject) {

        //将七牛返回的json数据转换成对象

        var res = ev al('('+responseObject.response+')');

        //组合文件信息

        var photo = new Object();

        //因为在数据库中，我用字段名name来存储文件名，用path来存储七牛上的文件名

        //所以这里的photo对象属性为name和path，如果你用的字段名和我的不一样，请自行修改

        photo.name = file.name; // 上传之前的图片名称

        photo.path = res.key; // 保存后的图片名称(含前缀)

        photos.push(photo); //将对象压入到photos数组

    });

    //全部文件上传完成后触发

    uploader.bind('UploadComplete', function(uploader, file){

        //文件全部成功上传后，将数据传递给CI框架进行处理

        $.ajax({

            url: "<?php echo site_url('photo/save'); ?>", //ci框架处理地址

            type: "POST",

            data: {files:JSON.stringify(photos)},

            success: function(msg){

                ale rt(msg);

            }

        });

    });

});

</script>
```
**CodeIgniter代码部分**

在控制器中编写一个方法，用来显示刚才的视图页面.
```php
/**

 * 上传照片页面

 * @return void

 */

public function upload()

{

    //载入七牛sdk类库

    $this->load->library('qiniu/Qiniu_PutExtra');

    $this->load->library('qiniu/Qiniu_RS_GetPolicy');

    //配置七牛云存储，请查看自己的七牛账号

    $bucket = ""; //你的七牛云存储的空间名称

    $accessKey = ''; //公钥

    $secretKey = ''; //密钥

    Qiniu_SetKeys($accessKey, $secretKey);

    $putPolicy = new Qiniu_RS_PutPolicy($bucket);

    //生成token

    $data['upToken'] = $putPolicy->Token(null);

    //载入视图

    $this->load->view('photo_upload', $data);

}

编写一个方法，用来存储文件信息到自己的数据库.

/**

 * 保存照片

 * @return string

 */

public function save()

{

    //载入七牛SDK类库

    $this->load->library('qiniu/Qiniu_RS_GetPolicy');

    $this->load->library('qiniu/Qiniu_ImageView');

    $bucket = ""; //你的七牛云存储的空间名称

    $domain = ''; //你的七牛云存储空间的地址

    $accessKey = ''; //公钥

    $secretKey = ''; //密钥

    Qiniu_SetKeys($accessKey, $secretKey);

    $imgInfo = new Qiniu_ImageInfo;

    // 组合数据

    if (isset($_POST['files']) && !empty($_POST['files'])) {

        $files = json_decode($_POST['files'], true);

        foreach ($files as $key => $value) {

            //生成baseUrl

            $baseUrl = Qiniu_RS_MakeBaseUrl($domain, $value['path']);

            //生成fopUrl

            $imgInfoUrl = $imgInfo->MakeRequest($baseUrl);

            //获取七牛上的图片属性

            // format       图片类型，如png、jpeg、gif、bmp等。

            // width        图片宽度，单位：像素（px）。

            // height       图片高度，单位：像素（px）。

            // colorModel   彩色空间，如palette16、ycbcr等。

            // frameNumber  帧数，gif 图片会返回此项。

            $arr = json_decode(file_get_contents($imgInfoUrl), true);

            $files[$key]['name'] = substr($value['name'], 0, strrpos($value['name'], '.')); //只保留文件名部分，去除文件名后缀

            $files[$key]['width'] = $arr['width']; //图片宽度

            $files[$key]['height'] = $arr['height']; //图片高度

            $files[$key]['create_time'] = time();//创建时间

        }

    }

    // 插入数据库

    if ($this->db->insert_batch('photos', $files)) {

        echo '上传成功';

        die;

    } else {

        echo '上传失败';

        die;

    }

}
```
代码中注释写的很全，应该没有需要补充的地方了，代码拿来直接可用，非常省心

参考文章：[codeigniter.org.cn/forums/thread-19738-1-1.html](http://codeigniter.org.cn/forums/thread-19738-1-1.html)

进阶：[plupload如何限制上传文件数量，限制只能上传单个文件](/blog/plupload-xianzhishangchuanwenjianshuliang)

