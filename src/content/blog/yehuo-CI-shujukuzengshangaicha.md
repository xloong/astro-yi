---
title: 跟夜火学CodeIgniter - 数据库的增删改查
description: 数据库操作无非是CRUD，用非装逼的语言来说就是增删改查。也许这一节会讲的很泛泛，或者很多人看不懂，没关系，大致的看看，知道是这么回事就好，继续往后看，后面会讲实例，这些枯燥而又抽象的东西可以先跳过，慢慢就会明白了。而且这部分内容CI手册讲的很全面，我也没什么好方式讲的很通俗易懂，索性不重复造那么大的轮子。  连接数据库 想要操作数据库，首先要确认已经配置好数据
date: 2014-03-19 04:24:18
category: 教程与电子书
tags: ['CodeIgniter', 'PHP']
post_id: 1512
alias: yehuo-CI-shujukuzengshangaicha
ViewNums: 3607
---

数据库操作无非是CRUD，用非装逼的语言来说就是增删改查。也许这一节会讲的很泛泛，或者很多人看不懂，没关系，大致的看看，知道是这么回事就好，继续往后看，后面会讲实例，这些枯燥而又抽象的东西可以先跳过，慢慢就会明白了。而且这部分内容CI手册讲的很全面，我也没什么好方式讲的很通俗易懂，索性不重复造那么大的轮子。

### 连接数据库

想要操作数据库，首先要确认已经配置好数据库连接设置，这点在[安装](/blog/yehuo-ci-anzhuang)部分的最下面已经讲过，不再重复。

虽然配置好了，但是文件如何加载此类配置？在相应的控制器或者模型里对应的位置添加
```php
$this->load->database();
```
一般是在模型的构造函数里添加此代码，这样只要调用了该模型，所有控制器和该模型内的其他函数都可以连接数据库。

如果你不知道什么是控制器、模型等，请按我如下操作：

打开 application/models 文件夹新建一个文件 model.php，代码如下：
```php
<?php

class Model extends CI_Model {

  public function __construct()

  {

    $this->load->database();

  }

}
```
### 读取数据库内容

以上连接数据库的操作都设置好之后，我们就可以来利用CI自带的 [Active Record模式](http://codeigniter.org.cn/user_guide/database/active_record.html) 来读取数据库内容了。
```php
$query = $this->db->get('news');

return $query->result_array();
```
get()是用来获取数据库里指定表的内容，没加限定的where之类的，就是获取所有内容。

result_array()意思为返回数组形式的结果集，不加array就是返回对象形式的，更详细的可以参见 [Active Record 类](http://codeigniter.org.cn/user_guide/database/active_record.html) 这里不做过多详解。

return是函数内用来返回结果的操作，也可以赋值、var_dump 等之类操作查看$query->result_array();的内容

我一般习惯这样写，比较懒省事：
```php
$query = $this->db->get('news')->result_array();

return $query;
```
看个人使用喜好了。

### 插入新数据内容

可以用数组的形式通过$this->db->insert()插入数据，第一个参数为插入数据的表名，第二个参数为数组，键名对应数据表字段名，后面是数据。
```php
$data = array(

               'title' => 'My title' ,

               'name' => 'My Name' ,

               'date' => 'My date'

            );

$this->db->insert('mytable', $data);
```
将执行如下SQL语句: 
```sql
INSERT INTO mytable (title, name, date) VALUES ('My title', 'My name', 'My date')
```
这样写起来是不是比直接写sql来的要简明的多？

### 更新数据内容
```php
$data = array(

               'title' => $title,

               'name' => $name,

               'date' => $date

            );

$this->db->where('id', $id);

$this->db->update('mytable', $data);
```
生成:
```sql
UPDATE mytable

SET title = '{$title}', name = '{$name}', date = '{$date}'

WHERE id = $id
```
和插入的代码相比，就多了一个where条件，更新特定条目，不加where就更新所有表内内容了。虽然where和update不在同一行，但是一串数据库的操作会排在一起执行的，这个不用担心。

### 删除数据内容
```php
$this->db->where('id', $id);

$this->db->delete('mytable');
```
生成:
```sql
DELETE FROM mytable

WHERE id = $id
```
这里和上面的更新类似，只是加了where条件，没有数组传入。

这样就是基本的数据库增删改查操作，这里只是大致的讲了下，没详细的讲解，以后有时间慢慢完善吧，大家可以参见 [Active Record 类](http://codeigniter.org.cn/user_guide/database/active_record.html)。

PS：真是懒到底了，连几个示例代码都是从手册上摘抄的。。。

参考CodeIgniter手册：

[读取新闻条目](http://codeigniter.org.cn/user_guide/tutorial/news_section.html)

[创建新闻条目](http://codeigniter.org.cn/user_guide/tutorial/create_news_items.html)

[Active Record 类](http://codeigniter.org.cn/user_guide/database/active_record.html)

上一节：[发布静态页](/blog/yehuo-ci-jingtaiye)   下一节：

