---
title: Laravel i18n链接路由前缀locale 如何让route不用每次都设置
uid: 202406142247
datetime: 2024-06-14 22:47
slug: laravel-i18n-route-locale
aliases: 
tags:
  - php
  - laravel
source: 
link:

description: Laravel i18n链接路由前缀locale 如何让route不用每次都设置
date: 2024-06-14 22:47:00
category: 笔记
---
注：以下内容基于php 8.1， laravel 10

最近在使用laravel写一个需要i18n的项目，laravel设置i18n多语言很方便，没什么说的。但是我在使用route生成超链接地址时，每次都需要在route的参数里填写当前语言，才能生成对应的超链接。

超链接类似这样:
`www.baidu.com/zh_cn/xxx/xxx`
`www.baidu.com/en/xxx/xxx`

使用route生成url的方式如下：
```php
route('post.index', app()->getLocale());
```

每次使用route时都需要设置，不管是在控制器还是在视图，搞的感觉就很傻，一直想找省事的地方统一设置，不用每次都去设置，但是一直没找到，想写个中间件来处理，也没搞好。

直到我查资料时翻到了一个文档： https://learnku.com/docs/laravel/5.7/urls/2260#225f3e 

```php
URL::defaults(['locale' => $request->user()->locale]);
```

这样设置中间件就可以了：
```php
// app/Http/Middleware/SetLocaleMiddleware.php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\URL;

class SetDefaultLocaleForUrls
{
    public function handle($request, Closure $next)
    {
        URL::defaults(['locale' => $request->user()->locale]);

        return $next($request);
    }
}
```

设置kernel
```php
// app/Http/Kernel.php
class Kernel extends HttpKernel
{
...
    protected $middlewareAliases = [
	    ...
	    'setlocale' => \App\Http\Middleware\SetDefaultLocaleForUrls::class,
	    ...
	];
}
```

路由配置文件中使用
```php
// routes/web.php
Route::group([
    'middleware' => [
        'setlocale'
    ],
    'prefix' => '{locale}',
], function (Router $router) {
    $router->get('/', function () {
        return view('welcome');
    });
});
```

像上面这样，将需要默认语言前缀的路由，写到group的匿名函数中就可以了。

之后，使用route生成url就不需要再附带语言参数了。