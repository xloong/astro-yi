---
title: Discuz! 6.0.0 0Day漏洞
description: //允许程序在register_globals=off的环境下工作$onoff=(function_exists('ini_get'))?ini_get('register_globals'):get_cfg_var('register_globals');if($onoff!=1){@extract($_POST,EXTR_SKIP);@extract($_GET,EXTR_SKIP);}$self=$_SERVER['PHP_SELF'];$dis_func=get_cfg_var("disable_functions");
date: 2007-11-25 08:16:47
category: 漏洞信息
tags: ['技术类', 'exploit', '漏洞信息', '0day', '源码']
post_id: 264
alias: Discuz!-6.0.0-0Day
ViewNums: 7480
---
来源：坏狼安全网

// 允许程序在 register_globals = off 的环境下工作
$onoff = (function_exists('ini_get')) ? ini_get('register_globals') : get_cfg_var('register_globals');

if ($onoff != 1) {
@extract($_POST, EXTR_SKIP);
@extract($_GET, EXTR_SKIP);
}

$self = $_SERVER['PHP_SELF'];
$dis_func = get_cfg_var("disable_functions");

/*===================== 身份验证 =====================*/
if($admin['check'] == "1") {
if ($_GET['action'] == "logout") {
setcookie ("adminpass", "");
echo "<meta http-equiv="refresh" content="3;URL=".$self."">";
echo "<span style="font-size: 12px; font-family: Verdana">注销成功......<p><a href="".$self."">三秒后自动退出或单击这里退出程序界面 >>></a></span>";
exit;
}

if ($_POST['do'] == 'login') {
$thepass=trim($_POST['adminpass']);
if ($admin['pass'] == $thepass) {
setcookie ("adminpass",$thepass,time()+(1*24*3600));
echo "<meta http-equiv="refresh" content="3;URL=".$self."">";
echo "<span style="font-size: 12px; font-family: Verdana">登陆成功......<p><a href="".$self."">三秒后自动跳转或单击这里进入程序界面 >>></a></span>";
exit;
}
}
if (isset($_COOKIE['adminpass'])) {
if ($_COOKIE['adminpass'] != $admin['pass']) {
loginpage();
}
} else {
loginpage();
}
}
/*===================== 验证结束 =====================*/

// 判断 magic_quotes_gpc 状态
if (get_magic_quotes_gpc()) {
$_GET = stripslashes_array($_GET);
$_POST = stripslashes_array($_POST);
}
---------------------------------------------------------------------------------------------------------------------
[http://www.discuz.net/admin/logging.php?action=login](http://www.discuz.net/admin/logging.php?action=login "http://www.discuz.net/admin/logging.php?action=login")
可以跳到其它目录
注册登录后利用

http://www.discuz.net/search.php?user%id=100
可以进行injection……

只能手工注射

注意:showpath里必须包含用户自己的路径
如果限制的话，还可以向上跳,向上级传文件的时候，不能直接
[http://www.](http://www./ "http://www.") http://www.discuz.net/user/up/_id=../../....../(注射语句)
就包含用户路径
[http://www.discuz.net/member.php?action=list_UserNumber=1402257EE8F](http://www.discuz.net/member.php?action=list_UserNumber=1402257EE8F "http://www.discuz.net/member.php?action=list_UserNumber=1402257EE8F")
不然不能进行注射。

文件漏洞代码如下
<?
define('__SYSTEM_ROOT', '');
include dirname(__FILE__).'/framework_gb/framework.php';

using('System.Data.Data');
using('System.Data.Plugins.Option');
using('System.Page.Page');
using('System.Smarty.Smarty');
using('System.Functions.Functions');

require_once __SYSTEM_ROOT."global.php";
require_once __SYSTEM_ROOT."vars.php";

$db=new stdClass();

$db=$Data->getDB();
/*

echo '<pre>';
print_r($Data);
*/
?>
可以直接注射,拿到后台密码。
