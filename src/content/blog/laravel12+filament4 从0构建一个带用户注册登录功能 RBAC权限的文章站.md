---
title: laravel12+filament 从0构建一个带用户注册登录功能 RBAC权限的文章站
uid: 202601112341
datetime: 2026-01-11 23:41
slug: laravel12-filament4-rbac-article
aliases: []
tags: 
  - php
  - laravel
  - filament
source: gemini
link:

description: laravel12+filament 从0构建一个带用户注册登录功能 RBAC权限的文章站
date: 2026-01-11 23:41:00
category: 笔记
---
环境：php8.3 laravel12 filament4.5

> 接下来我想从0开始搭建上面说的laravel12+filament 构建一个带用户注册登录功能 带rbac权限的文章知识库网站 请你一步一步的教我如何做


从 0 开始构建一个基于 **Laravel 12** 和 **Filament v4.5** 的文章站。我们按照“安装 -> 基础配置 -> 权限系统 (RBAC) -> 核心功能”的顺序进行。

---

### 第一步：初始化 Laravel 12 项目

打开你的终端，执行以下命令创建一个全新的 Laravel 12 项目：

```bash
composer create-project laravel/laravel:^12.0 article-base
cd article-base
```

配置 `.env` 文件中的数据库（Laravel 12 默认使用 SQLite，非常适合快速开发；如果你想用 MySQL，请修改 `DB_CONNECTION`）。

使用SQLite的话，要注意开启PHP扩展：`pdo_sqlite`,`sqlite3`

Filament 4 需要开启PHP扩展：`intl`,`fileinfo`,`gd`

#### 改中文

.env 文件中
```
APP_LOCALE=zh_CN
```

下载中文语言包
```
composer require laravel-lang/common --dev
php artisan lang:update
```

#### 时区

```php
// config/app.php
'timezone' => 'Asia/Shanghai',
```

---

### 第二步：安装并配置 Filament v4

#### 我们将安装 Filament 并创建一个“管理后台”面板。

```bash
# 安装 Filament 核心
composer require filament/filament:"^4.0" -W

# 安装面板功能
php artisan filament:install --panels
```

执行命令后，它会询问面板 ID，直接按回车（默认为 `admin`）。

可选项：配置文件导出，以供修改 `config/filament.php`
```
php artisan vendor:publish --tag=filament-config
```

#### 开启注册功能

打开 `app/Providers/Filament/AdminPanelProvider.php`，在 `panel()` 方法中链式调用 `registration()`：

```php
public function panel(Panel $panel): Panel
{
    return $panel
        ->default()
        ->id('admin')
        ->path('admin')
        ->login()
        ->registration() // 开启用户注册
        ->passwordReset()
        ->emailVerification()
        ->profile();
}
```

预览效果：  

```bash
php artisan serve
```

没用户的话可以通过如下命令创建：

```bash
php artisan make:filament-user
```

---

### 第三步：构建 RBAC 权限系统 (使用 Filament Shield)

在 Filament 生态中，最快、最强大的权限管理方式是使用 **Filament Shield** 插件，它基于经典的 `spatie/laravel-permission`。

```bash
# 安装插件
composer require bezhansalleh/filament-shield

# 运行安装向导
php artisan shield:install

# 可能需要手动运行迁移
php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider"
php artisan migrate
```

**config/filament-shield.php 不是必须，需要修改再生成**
```bash
php artisan vendor:publish --tag="filament-shield-config"
```

```php
// config/filament-shield.php
return [
    // ...
    'auth_provider_model' => 'App\\Models\\User',
    // ...
];
```

安装过程中会引导你生成基础权限。安装完成后，你需要：

#### 1.在 `User` 模型中引入 Trait：`use HasRoles;`。
```php
// app/Models/User.php
<?php

namespace App\Models;

// 1. 引入必要的类
use Spatie\Permission\Traits\HasRoles;
use Filament\Models\Contracts\FilamentUser;
use Filament\Panel;
use Illuminate\Foundation\Auth\User as Authenticatable;
// ... 其他引入

class User extends Authenticatable implements FilamentUser // 2. 实现接口（为了安全访问控制）
{
    // 3. 在类内部使用 Trait
    use HasRoles; 

    /**
     * 4. 必须实现这个方法来决定谁能进入 Filament 面板
     */
    public function canAccessPanel(Panel $panel): bool
    {
        // 在开发阶段，你可以简单地返回 true 让所有人都能进去
        // 之后你可以限制为只有拥有特定角色（如 super_admin）的人才能进
        return true;
    }

    // ... 其他模型代码
}
```

#### 2.在 `AdminPanelProvider.php` 中注册插件：

```php
->plugin(\BezhanSalleh\FilamentShield\FilamentShieldPlugin::make())
```

#### 3.初始化角色
引入 Trait 后，你的数据库里还没有任何角色。请执行以下命令来生成默认的“超级管理员”角色和权限：
```bash
# 生成并同步所有权限
php artisan shield:generate --all

# 将自己设为超级管理员 (根据你之前创建用户的邮箱)
php artisan shield:super-admin --user=1
```

#### 若刷新后台没有 `roles` 菜单，则
```bash
php artisan filament:cache-components
# 或者简单粗暴地清理所有缓存
php artisan view:clear
php artisan cache:clear

# 或者 确保权限生成完整
php artisan shield:generate --all
```

---
### 第四步：创建“文章”核心逻辑

我们需要创建文章分类（Category）和文章（Article）模型。

```bash
# 创建模型和迁移
php artisan make:model Category -m
php artisan make:model Article -m
```

#### 数据库迁移示例 (Article)

在 `database/migrations/..._create_articles_table.php` 中：

```php
Schema::create('articles', function (Blueprint $table) {
    $table->id();
    $table->foreignId('category_id')->constrained();
    $table->string('title');
    $table->text('content');
    $table->boolean('is_published')->default(false);
    $table->timestamps();
});
```

运行迁移：`php artisan migrate`。

---

### 第五步：生成 Filament 管理界面

现在利用 Filament 的命令一键生成 CRUD 界面：

```bash
php artisan make:filament-resource Category --generate
php artisan make:filament-resource Article --generate
```
#### 为 Resource 绑定权限

运行以下命令，Filament Shield 会自动为你的 Article 和 Category 生成对应的权限策略（Policies）：

```bash
php artisan shield:generate --all
php artisan filament:cache-components
```

现在，你可以在后台的 **Roles** 界面里，勾选哪些角色可以“创建文章”或“删除分类”了。
#### 修改菜单栏中的文字为中文
```php
// app/Filament/Resources/Articles/ArticleResource.php
protected static ?string $navigationLabel = '文章'; // 导航侧栏名称
protected static ?string $modelLabel = '文章';
protected static ?string $pluralModelLabel = '文章'; // 复数名称

protected static ?int $navigationSort = 3; // 导航栏中的排序

use UnitEnum;
protected static string | UnitEnum | null $navigationGroup = 'Articles'; // 分组导航项
```
更多见 https://filamentphp.com/docs/4.x/navigation/overview  
#### 修改表单字段标签

在 `form()` 方法里，给每个组件加上 `label()`：
```php
// app/Filament/Resources/Articles/Schemas/ArticleForm.php
// app/Filament/Resources/Articles/Tables/ArticlesTable.php
TextInput::make('title')
    ->label('标题') // 👈 这样前台就会显示“标题”而不是“Title”
```

内容在另外一个 **一对一关联表** 的情况

```php
// app/Filament/Resources/Articles/Schemas/ArticleForm.php
use Filament\Forms\Components\RichEditor;
use Filament\Schemas\Components\Group;
# 与上面的TextInput平级 添加下面内容
Group::make()
	->columnSpanFull()
	->relationship('content')
	->schema([
		RichEditor::make('content')
			->required()
			->label('内容')
	])
```

富文本编辑器图片上传目录，修改上面的RichEditor
```php
// app/Filament/Resources/Articles/Schemas/ArticleForm.php
		RichEditor::make('content')
			->required()
			->label('内容')
			->fileAttachmentsDisk('public') // 指定使用 public 磁盘
			->fileAttachmentsDirectory('article_content') // 图片存放的子目录
			->fileAttachmentsVisibility('public') // 确保权限是公开的
```
这里需要软链接，因为实际的上传目录是 `storage/app/public` 
```
php artisan storage:link
```

.env文件，确保上传后的图片可以访问
```yaml
APP_URL=http://127.0.0.1:8000  # 👈 必须与你浏览器访问的地址完全一致
```

**不使用软链接的方式**，直接存到public目录中

```php
// config/filesystems.php
'disks' => [
    // ... 其他磁盘
  
    'admin_public' => [
        'driver' => 'local',
        'root' => public_path('uploads'), // 👈 文件将直接存在 public/uploads 目录下
        'url' => env('APP_URL').'/uploads', // 👈 浏览器访问的 URL 前缀
        'visibility' => 'public',
        'throw' => false,
    ],
],
```

```php
// app/Filament/Resources/Articles/Schemas/ArticleForm.php
use Filament\Forms\Components\RichEditor;

RichEditor::make('content')
    ->label('文章内容')
    ->fileAttachmentsDisk('admin_public') // 👈 使用自定义的磁盘
    ->fileAttachmentsDirectory('articles') // 图片会存在 public/uploads/articles
    ->fileAttachmentsVisibility('public')
```

---

### 第六步：实现前台展示

虽然你可以给前台也开一个 Filament Panel，但对于知识库，通常建议用简单的 **Blade + Tailwind** 做一个清爽的首页。

1. **创建控制器：** `php artisan make:controller ArticleController`
2. **在路由中定义：** `Route::get('/', [ArticleController::class, 'index']);`
3. **在 Blade 中展示：** 使用简单的循环展示文章。由于是 Laravel 12，你可以直接利用内置的 Vite 编译 Tailwind 样式。
