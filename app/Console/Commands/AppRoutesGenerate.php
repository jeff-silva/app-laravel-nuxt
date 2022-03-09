<?php

// composer require nette/php-generator
// https://github.com/nette/php-generator

namespace App\Console\Commands;

class AppRoutesGenerate extends AppBase
{

    protected $signature = 'app:routes-generate';
    protected $description = 'Gera arquivo de rotas';

    public function handle() {
        
        $routes = [];
        foreach($this->getTables() as $table) {
            if ($this->ignoredTable($table->Name)) continue;
            $slug = $this->tableSlug($table->Name);
            $model_name = (string) \Str::of($slug)->studly() .'Controller';

            $routes["{$slug}-search"] = [
                'methods' => ['get'],
                'route' => "{$slug}/search",
                'call' => "\App\Http\Controllers\\{$model_name}@search"
            ];

            $routes["{$slug}-find"] = [
                'methods' => ['get'],
                'route' => "{$slug}/find/{id}",
                'call' => "\App\Http\Controllers\\{$model_name}@find"
            ];

            $routes["{$slug}-save"] = [
                'methods' => ['post'],
                'route' => "{$slug}/save",
                'call' => "\App\Http\Controllers\\{$model_name}@save"
            ];

            $routes["{$slug}-valid"] = [
                'methods' => ['post'],
                'route' => "{$slug}/valid",
                'call' => "\App\Http\Controllers\\{$model_name}@valid"
            ];
            
            $routes["{$slug}-delete"] = [
                'methods' => ['post'],
                'route' => "{$slug}/delete",
                'call' => "\App\Http\Controllers\\{$model_name}@delete"
            ];

            $routes["{$slug}-restore"] = [
                'methods' => ['post'],
                'route' => "{$slug}/restore",
                'call' => "\App\Http\Controllers\\{$model_name}@restore"
            ];

            $routes["{$slug}-clone"] = [
                'methods' => ['get'],
                'route' => "{$slug}/clone/{id}",
                'call' => "\App\Http\Controllers\\{$model_name}@clone"
            ];

            $routes["{$slug}-import"] = [
                'methods' => ['post'],
                'route' => "{$slug}/import",
                'call' => "\App\Http\Controllers\\{$model_name}@import"
            ];

            $routes["{$slug}-export"] = [
                'methods' => ['get'],
                'route' => "{$slug}/export",
                'call' => "\App\Http\Controllers\\{$model_name}@export"
            ];
        }

        $content = '<?php return '. $this->varExport($routes) .';';
        file_put_contents(base_path('routes/api_generated.php'), $content);
    }
}
