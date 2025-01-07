---
title: 跟夜火学CodeIgniter - QQ登陆接口
description: 很抱歉跟夜火学CodeIgniter系列教程从年初一直拖沓到年尾，因为平时比较忙，有时候一忙其他的，或者经过一定量的代码，中间碰到的比较稀奇的想发出来给大家看的代码就忘掉了，或者说没当时想发出来的那种激情了，真是惭愧，现在好了，新学到的东西立即发出来，就不会拖沓了。本文基于CodeIgniter2.1.3说实话，在昨天之前，我对接口的认识只停留在知道这个名称，和大概知道是交换数据用的。今天
date: 2014-11-03 12:32:05
category: 教程与电子书
tags: ['CodeIgniter', 'PHP']
post_id: 1543
alias: yehuo-CI-QQdenglujiekou
ViewNums: 3134
---

很抱歉[跟夜火学CodeIgniter](/blog/yehuo-ci-xu-mulu) 系列教程从年初一直拖沓到年尾，因为平时比较忙，有时候一忙其他的，或者经过一定量的代码，中间碰到的比较稀奇的想发出来给大家看的代码就忘掉了，或者说没当时想发出来的那种激情了，真是惭愧，现在好了，新学到的东西立即发出来，就不会拖沓了。

本文基于[CodeIgniter](/tags/CodeIgniter) 2.1.3

说实话，在昨天之前，我对接口的认识只停留在知道这个名称，和大概知道是交换数据用的。今天下载了[腾讯的QQ接口SDK](http://wiki.connect.qq.com/sdk%E4%B8%8B%E8%BD%BD) ，因为自己的奇葩失误，调试了半天，不过也对[QQ登陆接口](/blog/yehuo-ci-qqdenglujiekou)sdk里的代码有了初步的认识，以至于之前在网上找到的一段代码知道怎么改了，之前一直报错：**The configuration file isetting/qq_setting.php does not exist.**，但是无从下手，现在好了。网上找到的文章：[CI框架 QQ接口（第三方登录接口PHP版）](http://blog.csdn.net/iamduoluo/article/details/38227545)，下面我就直接原文贴出来，然后有需要改动的我都给改好并写了说明：

本帖内容较多，大部分都是源码，要修改的地方只有一个，其他只要复制过去，就可以完美运行。本帖主要针对CI框架，不用下载SDK，按我下面的步骤，建文件，复制代码就可以了。10分钟不要，接口就可完成。

**第一步：申请APP ID**，APP KEY，申请地址：http://connect.opensns.qq.com/
验证通过后：会得到APP ID,APP KEY。这是你用个文件把这些信息保持下来，免得用的时候有要上网去查，记录在本地记事本里，方便，用的时候打开就可以。如下：
APP ID：101091331
APP KEY：7cb032049f2c900fea509424e614a979
回调地址：http://test.com/qq   // 原作者的登陆于回调地址都是这个/qq

**第二步：如果你的系统没有安装curl，请先安装curl。**

怎么知道本地系统是否安装了curl呢，方法如下：
1.在web服务器目录（ Ubuntu下的通常为 /var/www )新建crul.php文件
2.编辑文件，键入下面一行代码：
```php
  <?php phpinfo(); ?>
```
3.保存文件
4.打开浏览器，浏览该网页。（例如：http://localhost/curl.php)
5.搜索"curl",如果没搜到就证明没安装curl。

下面是安装方法：
打开终端，输入下面的命令：
sudo apt-get install curl libcurl3 libcurl3-dev php5-curl
再重启apache：
sudo /etc/init.d/apache2 restart
这样curl就安装好了，打开你刚才的那个页面，搜一下curl,就可以看到了curl了，这表示已经安装成功，很简单吧。

如果还是没有，编辑你的php.ini文件,我的phpini.php文件在/etc/php5/apache2/php.ini,估计你的也差不多是在这个位置，去找找看，找到后，打开这个文件，在最后加上一行：
extension=curl.so

保存文件后重启Apache服务器，再打开页面，就会出现curl了。

**第三步：代码**

注：腾讯提供了SDK，可以在官网下载：[下载地址](http://wiki.connect.qq.com/sdk%E4%B8%8B%E8%BD%BD)，如果不是CI框架，估计下载下来就可以用了，CI框架调用规则不同，所以要做修改，如果是CI框架下开发QQ登录接口，就不用下载SDK了，用我下面的代码，下面正式上代码，完整的代码。

代码步骤：

// [夜火](http://www.15897.com/)发现这里的代码libraries里的文件完全调用不到，或者有我不知道的方法，如有高手知道，请告之。这一步跳过。

1.打开application/config/constants.php文件
写入如下代码：
```php
/*qq登陆*/
define('GET_AUTH_CODE_URL', "https://graph.qq.com/oauth2.0/authorize");
define('GET_ACCESS_TOKEN_URL' , "https://graph.qq.com/oauth2.0/token");
define('GET_OPENID_URL' , "https://graph.qq.com/oauth2.0/me");
```
保存

// 这里原作者写的是在application下新建isetting，但是经过试验，需要放在application/config下才行

2.打开application文件夹，在application/config下新建一个文件夹isetting,在isetting下建一个qq_setting.php文件，
打开qq_setting.php文件，输入如下代码：
```php
<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

    /**
     * @qq互联配置信息
     * 默认开启get_user_info模块
     * **/

    $config['inc_info'] = array(
        array (
                'appid' => '101091331',
                'appkey' => '7cb032049f2c900fea509424e614a979',
                'callback' => 'http://test.com/qq'
              ),
        array (
                'get_user_info' => '1',
                'add_topic' => '0',
                'add_one_blog' => '0',
                'add_album' => '0',
                'upload_pic' => '0',
                'list_album' => '0',
                'add_share' => '0',
                'check_page_fans' => '0',
                'add_t' => '0',
                'add_pic_t' => '0',
                'del_t' => '0',
                'get_repost_list' => '0',
                'get_info' => '0',
                'get_other_info' => '0',
                'get_fanslist' => '0',
                'get_idollist' => '0',
                'add_idol' => '0',
                'del_idol' => '0',
                'get_tenpay_addr' => '0',
              )
    );
```
保存
说明：你需要把appid，appkey对应的键值修改成你刚刚申请的appid,appkey值，callback为回调地址（所谓回调地址就是登录成功后，返回到哪个页面），callback的值写你申请的时候做验证的那个地址。

// 第1步里没加的代码，加在这个文件里的构造函数里了。这部分代码服务器不让提交。。。就打包上传了
3.打开application下的libraries文件，新建一个文件夹tencent，在tencent里面新建一个文件oauth.php,打开这个文件，复制下面的代码进去：

[oauth.rar](/upload/oauth.rar)

说明：这段代码复制不过就行，不用做任何改动。这个是最核心的代码，代码比较多，但是功能代码就这些了，想想，在自己的网站上，别人用qq帐号就可以登录了，都不用注册，多方便啊，是吧，这样一想这些代码也不算多了。

4.建控制器。打开application下的controllers文件夹，在controllers下新建一个文件qq.php,打开qq.php,复制下面代码：
```php
<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

    /*
     * @ qq登陆 注销 消息获取等
     * @author
     */
    class QQ extends CI_Controller
    {

        public function __construct() {
            parent::__construct();
            session_start();
            $this->load->helper('url');
            //error_reporting(0);
            /*qq登陆*/
           $this->load->library('tencent/oauth','oauth');
        }

        public function index()
        {
            //验证是登陆还是回调
            if($this->oauth->check_login() === 'false')
            {
                $this->oauth->qq_login();
            }
            else
            {
                $this->oauth->qq_callback();
            }

        }
    }
```
保存
说明：这段代码不用做修改。

// 这个地方改了下图片地址，直接用腾讯官方的，就不用来回替换，直接拿来就用了

5.放置登录按钮，点击用QQ帐号登录按钮，跳转到QQ登录页面登录。
在你的登录页面放按钮的位置，写入：
```html
<a href="/qq"><img src="http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/bt_blue_76X24.png" style="height:24px;width:76px;"></a>
```
保存
说明：样式你可自己调整，图片按钮可以从[官网下载](http://wiki.connect.qq.com/%E8%A7%86%E8%A7%89%E7%B4%A0%E6%9D%90%E4%B8%8B%E8%BD%BD#2.QQ.E7.99.BB.E5.BD.95.E6.A1.86.E6.A0.87.E5.87.86.E6.A0.B7.E5.BC.8F)

到这里，QQ第三方登录接口就OK了，你打开你的登录页面，点击QQ登录的图片按钮，它会转到QQ登录页面登录，如果要上线，要用到别的功能，可在这几个文件上填代码就行了。

夜火注：以上代码只是初步实现了登陆，其他代码我还没细致的看，先发出来吧。记得感谢原作者<http://blog.csdn.net/iamduoluo/article/details/38227545>，以及我，嘿嘿

