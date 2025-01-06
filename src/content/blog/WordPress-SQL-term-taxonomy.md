---
title: WordPress 通过SQL批量删除指定目录的文章
description:     本文讲述的是WordPress通过SQL批量删除指定目录文章的方法。起因是夜火的一个采集站，因为时间久了，数据量过大，总数据量有4~5W条了，对数据库有奇怪的操作，频繁读写硬盘，拖累整个VPS的速度，影响同VPS其他站点，故忍痛删除数据量最庞大的一个分类文章，约3W条数据。    但是问题来
date: 2012-03-10 11:58:52
category: 技术文章
tags: ['WordPress', 'MySql', 'SQL']
post_id: 1299
alias: WordPress-SQL-term-taxonomy
ViewNums: 6707
---

本文讲述的是 [WordPress 通过SQL批量删除指定目录文章的方法](/blog/wordpress-sql-term-taxonomy)。起因是[夜火](http://www.15897.com)的一个采集站，因为时间久了，数据量过大，总数据量有4~5W条了，对数据库有奇怪的操作，频繁读写硬盘，拖累整个VPS的速度，影响同VPS其他站点，故忍痛删除数据量最庞大的一个分类文章，约3W条数据。

但是问题来了，[WordPress](/tags/WordPress) 后台想删除的话，只能20还是30条的删，删多了就超时失败，而且数据库臃肿，删除20~30条也得等半天，导致删了几个小时也没删掉多少，无奈只能通过phpmyadmin进行 [SQL](/tags/SQL) 批量删除。

进入phpmyadmin之后，找到wp_posts表，发现根本没有分类的字段，我就纳闷了半天，难道WP那么高级，连分类都不用字段标识？那前台怎么进行分类显示的啊？于是就研究了起来，四处翻表，四处查找。最终还是通过搜索查到了一点资料：[WordPress直接访问数据库列出指定分类目录下的所有文章](http://mymbk.blog.sohu.com/163871312.html)，才知道，原来WP的分类都是写在wp_term_relationships这个表里，通过文章ID和分类ID或tag的ID对应来进行分类。

知道这些，就好办多了。通过引用文章里介绍的sql语句进行查询删除就行了，但是因为那篇文章写的比较早，对应的WP版本，数据库结构可能有所不同，需要进行修改一下，当然，我这里所说的[WordPress 通过SQL批量删除指定目录文章的方法](/blog/wordpress-sql-term-taxonomy)也是针对目前的wordpress 3.3.1版本。

引用文章提供的SQL语句：
select ID,post_title,post_date,post_name from wp_posts,wp_term_relationships,wp_term_taxonomy where ID=object_id and wp_term_relationships.term_taxonomy_id = wp_term_taxonomy.term_taxonomy_id and post_type=’post’ and post_status = ‘publish’ and wp_term_relationships.term_taxonomy_id = $CID and taxonomy = ‘category’ order by ID desc

经过我修改之后的语句（这里我要删除的特定目录ID就是26）：
select ID,post_title,post_date,post_name from wp_posts,wp_term_relationships,wp_term_taxonomy where ID=object_id and wp_term_relationships.term_taxonomy_id = wp_term_taxonomy.term_taxonomy_id and wp_term_relationships.term_taxonomy_id = 26

稍微精简的语句（只查询出要查找的ID）：
select ID from wp_posts,wp_term_relationships,wp_term_taxonomy where ID=wp_term_relationships.object_id and wp_term_relationships.term_taxonomy_id = wp_term_taxonomy.term_taxonomy_id and wp_term_relationships.term_taxonomy_id = 26

中间为了找到删除的方法变形的3个语句（具体的思路经过1天1夜和酒精的摧残已经想不起来了）：

select * from wp_posts where wp_posts.id in (select wp_posts.id from wp_posts,wp_term_relationships,wp_term_taxonomy where wp_posts.id=wp_term_relationships.object_id and wp_term_relationships.term_taxonomy_id = wp_term_taxonomy.term_taxonomy_id and wp_term_relationships.term_taxonomy_id = 26)

select * from wp_posts where wp_posts.id in (select wp_posts.id from wp_posts,wp_term_relationships,wp_term_taxonomy where wp_posts.id=wp_term_relationships.object_id and wp_term_relationships.term_taxonomy_id = wp_term_taxonomy.term_taxonomy_id and wp_term_relationships.term_taxonomy_id = 26)

delete * from wp_posts where wp_posts.id in (select wp_posts.id from wp_posts,wp_term_relationships,wp_term_taxonomy where wp_posts.id=wp_term_relationships.object_id and wp_term_relationships.term_taxonomy_id = wp_term_taxonomy.term_taxonomy_id and wp_term_relationships.term_taxonomy_id = 26)

中间因为delete语句老是报错，于是搜了下关于mysql delete数据的语法：[对MySQL DELETE语法的详细解析](http://database.51cto.com/art/201005/202216.htm)，才知道自己写的不对，哪里要那么多的select那么多的括号，查那么多的表，直接delete from ... using ... where ....就行了。下面是最终的，[WordPress指定特定目录删除下面所有文章](/blog/wordpress-sql-term-taxonomy)的语句：

delete
from
wp_posts
using
wp_posts,
wp_term_relationships,
wp_term_taxonomy
where
wp_posts.id=wp_term_relationships.object_id
and
wp_term_relationships.term_taxonomy_id = wp_term_taxonomy.term_taxonomy_id
and
wp_term_relationships.term_taxonomy_id = 26

[![WordPress 通过SQL批量删除指定目录的文章](/upload/2012-03-09-01-26-mysql-delete-yehuo8.jpg)](/blog/wordpress-sql-term-taxonomy)

这就是我奋斗到凌晨1点半的结果，希望后来的诸位共勉之，不要像我一样走那么多弯路，神啊，原谅我这个不懂MySql的人吧~

2012.03.10 update:

（1）wp_posts 进行完上面的删除操作之后，需要对表进行一下优化（phpmyadmin后台界面操作），不然还是原来好几百M。

（2）wp_term_relationships 也需要删除对应的文章分类关系，不然记录条数和原来的wp_posts 一样，好几W条。

查询看下是不是：
SELECT * FROM `wp_term_relationships` where term_taxonomy_id=26

删除：
delete FROM `wp_term_relationships` where term_taxonomy_id=26

同样几W条记录消灭掉，最后记得优化下表。

（3）最后把wp_term_taxonomy里的分类文章数量计数的几W count 给归零，这个可以直接通过phpmyadmin直接界面操作
UPDATE `wp_term_taxonomy` SET `count` = '0' WHERE `wp_term_taxonomy`.`term_taxonomy_id` =26 LIMIT 1 ;

免责声明：如果你不懂上面的语句，或者没有修改，直接复制执行了，产生的任何后果，[夜火](http://www.15897.com)我不承担任何责任，因为这是你的失误，执行前一定要慎重！

