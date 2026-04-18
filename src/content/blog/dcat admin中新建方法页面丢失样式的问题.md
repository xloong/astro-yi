---
title: dcat admin中新建方法页面丢失样式的问题
uid: 202406192126
datetime: 2024-06-19 21:26
slug: issue-lost-style-method-page-dcat-admin
aliases: 
tags:
  - php
  - laravel
  - dcat-admin
source: 
link:

description: dcat admin中新建方法页面丢失样式的问题
date: 2024-06-19 21:26:00
category: 笔记
---
注：以下内容基于php 8.1，laravel 10， dcat admin 2 

需求是这样的，需要在后台添加一个给用户手动充值的功能，我不想为了这么一个小功能单独开一个控制器，就直接在用户的`UserController`新增加了一个方法 `recharge`。

内容就是数据表单 form 相关的代码，再配上路由，就可以访问了。

```php
// app/Admin/Controllers/UserController.php
class UserController extends AdminController{
	// ...
    function recharge($id)
    {
        $model = Administrator::with(['roles']);

        return Form::make($model, function (Form $form)  use ($id) {

            $form->title('充值');

            $form->text('money', '充值金额')
                ->required()
                ->rules(['numeric', 'min:0']);
            // ...
    }
}
```

## 发现问题

一切看上去都还正常，直到我在`recharge`页面点击了刷新，发现了问题，页面的样式全没了，只有光秃秃的html效果。

查了很多资料，总是不对症，<[Dcat Admin中新建页面，第一次点击菜单，显示页面正常，浏览器刷新当前页会导致css,js等样式内容丢失，请问如何解决](https://learnku.com/laravel/t/66349)> 从这个文章下面的评论看，也说是需要使用`$router->resource(...)`来加载资源路由，而不能自定义。但是这样加载资源路由的话，就只能完全按独立控制器的方式来实现了，后续如果有类似的小功能，都是需要挨个创建独立的控制器，也太傻了。 

## 定位问题

查了其他资料也无果，最后去看了下继承的类`AdminController` 源码，看看是怎么实现的默认表单页面`form`。

看到`AdminController`的源码，就感觉熟悉多了，什么`index`, `show`, `edit`之类,都在这里了,这里着重看了下`edit`方法:

```php
// vendor/dcat/laravel-admin/src/Http/Controllers/AdminController.php
    public function edit($id, Content $content)
    {
        return $content
            ->translation($this->translation())
            ->title($this->title())
            ->description($this->description()['edit'] ?? trans('admin.edit'))
            ->body($this->form()->edit($id));
    }
```
很清晰了，重点在最后一句，`body`中，需要包装一下`recharge`返回的`form`实例。

依葫芦画瓢，自己实现一个就好。
## 解决问题

为了图省事，直接把`UserController`中原来的`recharge`改名为`_recharge`，新建一个`recharge`来放上面的代码

```php
// app/Admin/Controllers/UserController.php
    // ...
    public function recharge($id, Content $content)
    {
        return $content
            ->title($this->title())
            ->description($this->description['edit'] ?? trans('admin.edit'))
            ->body($this->_recharge()->edit($id));
    }
    private function _recharge()
    {
        $model = Administrator::with(['roles']);

        return Form::make($model, function (Form $form) {
	        $id = $form->getKey();

            $form->title('充值');

            $form->text('money', '充值金额')
                ->required()
                ->rules(['numeric', 'min:0']);
            // ...
    }
    // ...
    
```
注意 `_recharge`中，有些许改动。

这样，不论页面怎么刷新，都不会丢失样式css、js等了。

## 提交保存数据

后续发现这个`recharge`的数据表单，还是会往默认的`form`方法里提交保存数据，导致没有按照`_recharge`内的保存逻辑去存储数据。

解决思路同上，看`AdminController`的代码。
```php
// vendor/dcat/laravel-admin/src/Http/Controllers/AdminController.php
	public function update($id)
    {
        return $this->form()->update($id);
    }
```
对应着在`UserController`里创建
```php
// app/Admin/Controllers/UserController.php
    function recharge_update($id)
    {
        return $this->_recharge()->update($id);
    }
```
同时，也配置一个`put`路由，到这个`recharge_update`方法上。

这里把这2个路由的代码都给出来吧，之前查资料看别人的文章发一半留一般的就很不爽，我在不扩大篇幅的情况下尽量写全一些
```php
// app/Admin/routes.php
	// ...
	$router->get('users/{id}/recharge', 'UserController@recharge')->name('users.recharge');
    $router->put('users/{id}/recharge', 'UserController@recharge_update')->name('users.recharge_update');
    // ...
```
`_recharge`方法内需要改一下
```php
// app/Admin/Controllers/UserController.php
	// ...
        $form = Form::make($model, function (Form $form){
            $id = $form->getKey();
            $form->action(route('dcat.admin.users.recharge_update', $id));
    // ...
```
这里主要是`$form->action`这句，指定了表单提交的页面。

提交后如何自定义保存逻辑，就写在`_recharge`中的`saving`里好了，如果不会，这个直接查文档就好。[事件及表单响应 - saving](https://learnku.com/docs/dcat-admin/2.x/event/8113#93cdc0) 

## 更好的实现方式

上述独立的用户充值表单页面做好之后，我发现了一种更好的实现方式，使用[工具表单](https://learnku.com/docs/dcat-admin/2.x/tools-form/8125)，弹出模态框（modal）进行操作，连路由都不需要定义。

这个后面单开一篇讲吧。