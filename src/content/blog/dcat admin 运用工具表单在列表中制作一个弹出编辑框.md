---
title: dcat admin 运用工具表单在列表中制作一个弹出编辑框
uid: 202406200910
datetime: 2024-06-20 09:10
slug: modal-edit-box-dcat-admin
aliases: 
tags: 
  - php
  - laravel
  - dcat-admin
source: 
link:

description: dcat admin 运用工具表单在列表中制作一个弹出编辑框
date: 2024-06-20 09:10:00
category: 笔记
---
注：以下内容基于php 8.1，laravel 10， dcat admin 2 

上一篇[[dcat admin中新建方法页面丢失样式的问题]] 说到如何创建一个独立的表单页面来更新数据，实现特定的用户充值功能。

这次说说如何不创建独立的页面（数据表单），直接在列表页弹出modal模态框，进行表单提交，数据更新。

主要用到[工具表单](https://learnku.com/docs/dcat-admin/2.x/tools-form/8125) ， [动作](https://learnku.com/docs/dcat-admin/2.x/basic-use/8124) ，在laravel-admin 中分别是  [数据表单](https://laravel-admin.org/docs/zh/2.x/data-form) , [自定义行&批量操作 - 行操作](https://laravel-admin.org/docs/zh/2.x/model-table-custom-actions) 可以互相参考。

## 工具表单 tools-form

使用命令创建
```shell
php artisan admin:form UserRechargeForm
```

生成工具表单文件 `app/Admin/Forms/UserRechargeForm.php` ，参照文档将上一篇单独页面的代码挪到这里。
```php
namespace App\Admin\Forms;

use App\Models\User;
use Dcat\Admin\Widgets\Form;
use Dcat\Admin\Traits\LazyWidget;  
use Dcat\Admin\Contracts\LazyRenderable;

class UserRechargeForm extends Form implements LazyRenderable
{
    public $title = '充值';
    use LazyWidget;

    public function handle(array $input)
    {
        // dump($input);

        // 获取外部传递参数
        $id = $this->payload['id'] ?? null;

        $recharge_money = $input['recharge_money'] ?? null;
        $recharge_address = $input['recharge_address'] ?? null;
        $transaction_id = $input['transaction_id'] ?? null;

        // ... 充值的逻辑代码

        // return $this->response()->error('Your error message.');

        return $this
                ->response()
                ->success('Processed successfully.')
                ->refresh();
    }

    public function form()
    {
        $id = $this->payload['id'] ?? null;

        // 输入字段
        $this->text('money', '充值金额')
            ->required()
            ->rules(['numeric', 'min:0']);
        // ...
    }

    public function default()
    {
        $id = $this->payload['id'] ?? null;
        $user = User::find($id);

        return [
            'id' => $id,
            'name'  => $user->name,
            // ...
        ];
    }
}
```
这里文档中给的使用范例 `Modal::make()`，一直没搞懂在那里使用的，直到看到后面的代码
## 动作 action
命令
```shell
php artisan admin:action
```
选`2` `grid-row` ，然后输入要创建的 action 类名 `UserRecharge`

在创建的文件中编辑
```php
// app\Admin\Actions\Grid\UserRecharge.php
// ...
use Dcat\Admin\Widgets\Modal;
use App\Admin\Forms\UserRechargeForm;

class UserRecharge extends RowAction
{
    protected $title = '充值';

    public function render(){
        // 实例化表单类并传递自定义参数
        $form = UserRechargeForm::make()->payload(['id' => $this->getKey()]);

        return Modal::make()
            ->lg()
            ->title($this->title)
            ->body($form)
            ->button($this->title);
    }
    // ...
```

## 将action动作按钮放入数据表格列表中
回到控制器，主要是 `$grid->actions` 这一句
```php
// app/Admin/Controllers/UserController.php
// ...
use App\Admin\Actions\Grid\UserRecharge;  

class UserController extends AdminController
{
	// ...
    protected function grid()
    {
		return Grid::make(Administrator::with(['roles']), function (Grid $grid) {
			// ...
			$grid->actions([new UserRecharge()]);
			// ...
```
添加好之后，即可在列表的操作栏看到充值的文字选项了。