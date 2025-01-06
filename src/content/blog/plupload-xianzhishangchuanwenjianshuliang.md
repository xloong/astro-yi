---
title: plupload如何限制上传文件数量，限制只能上传单个文件
description: 接前2天（实际已经一个月了。。）的 跟夜火学CodeIgniter-集成七牛云存储，文内介绍集成七牛云存储使用的前端上传插件使用的是plupload，上传虽然是没问题了，但是交给客户使用的时候，怎么限制用户上传过多的文件或图片，甚至限制用户只能上传一个文件。毕竟总是有那么一小撮恶意捣乱的人，一直不停的上传文件的话，也是个问题。这个问题我参考了几个文章：Plupload中文文档，介
date: 2015-01-26 12:33:14
category: 技术文章
tags: ['javascript']
post_id: 1552
alias: plupload-xianzhishangchuanwenjianshuliang
ViewNums: 18273
---

接前2天（实际已经一个月了。。）的 [跟夜火学CodeIgniter - 集成七牛云存储](/blog/yehuo-ci-qiniu)，文内介绍集成七牛云存储使用的前端上传插件使用的是[plupload](http://www.plupload.com/)，上传虽然是没问题了，但是交给客户使用的时候，[怎么限制用户上传过多的文件或图片](/blog/plupload-xianzhishangchuanwenjianshuliang)，甚至[限制用户只能上传一个文件](/blog/plupload-xianzhishangchuanwenjianshuliang)。毕竟总是有那么一小撮恶意捣乱的人，一直不停的上传文件的话，也是个问题。

这个问题我参考了几个文章：

[Plupload中文文档](http://www.cnblogs.com/God-Shell/articles/3209708.html)，介绍了plupload的一些参数用法等，具有参考意义（翻了文档也没找到直接解决的办法）；

[jquery plupload 上传 单个文件怎么限制](http://zhidao.baidu.com/link?url=zdjCBcy3VQ4ydh8GIAwLbeJRfb6_BWVW_OPxJU-YPIvx9M5W4x47oL4ETngFP3NFj73YdfCROWjzf3NxBjxL8K)，限制文件数量，但是是通过循环判断的，感觉不是太完美；

[plupload 如何限制上传文件的数量？如何选择完文件后立即上传？](http://www.oschina.net/question/96135_149947?sort=time)，通过length 来判断的，超过数量弹出提示。

上面几个文章都给了我很好的思路，不多废话，直接给出我的方法：
```js
uploader.bind('FilesAdded', function(uploader, file){

        // al ert('只能上传3张图片，请注意选择图片！');
        if(uploader.files.length>3){ // 最多上传3张图
            uploader.splice(3,999);
        }

        uploader.start();

        // for (var i in file) {
        //     if(i>2){
        //         uploader.splice(3,100);
        //         // uploader.removeFile( uploader.getFile(file[i].id));
        //     }
        // }

    });
```
因为我需要添加图片之后立即上传，所以绑定的FilesAdded方法，可以根据需要在不同的方法里绑定。

这里我也是用length来判断，不过不弹出提示，直接删除多余的文件，删除采用的splice，从第4个文件删除到第1000个文件，我想一般人都不会一次性添加那么多文件吧，应该足够用了，不够的话再根据自己需要添加，设置个999999999999都没人问的。

至此，我[plupload如何限制上传文件数量，限制只能上传单个文件](/blog/plupload-xianzhishangchuanwenjianshuliang)的需求就解决了，提供给后来人节省时间精力，来更好的完善自己的作品。

