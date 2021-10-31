<?php

namespace App\Console\Commands;

class AppMakeControllers extends AppBase
{

    protected $signature = 'app:make-controllers';
    protected $description = 'Criar/alterar controllers de acordo com modelo do banco';

    public function handle()
    {
        // $this->comment('⚙️  Criando/alterando models');

        $tables = config('database-schema.tables', []);

        foreach($tables as $table_name=>$table) {

            if (! file_exists(base_path($table['ControllerFile']))) {
                file_put_contents(base_path($table['ControllerFile']), implode("\n", [
                    '<?php',
                    '',
                    "namespace App\Http\Controllers;",
                    '',
                    "class {$table['Controller']} extends Controller",
                    '{',
                    '}',
                ]));
            }

            $methods = [];

            $methods['search'] = implode("\n", [
                "\tpublic function search() {",
                "\t\treturn {$table['ModelNamespace']}\\{$table['Model']}::querySearch();",
                "\t}",
            ]);

            $methods['find'] = implode("\n", [
                "\tpublic function find(\$id) {",
                "\t\treturn {$table['ModelNamespace']}\\{$table['Model']}::find(\$id);",
                "\t}",
            ]);

            $methods['save'] = implode("\n", [
                "\tpublic function save() {",
                "\t\treturn {$table['ModelNamespace']}\\{$table['Model']}::fill(request()->all())->save();",
                "\t}",
            ]);

            $methods['valid'] = implode("\n", [
                "\tpublic function valid() {",
                "\t\treturn {$table['ModelNamespace']}\\{$table['Model']}::new()->validate(request()->all());",
                "\t}",
            ]);

            $methods['delete'] = implode("\n", [
                "\tpublic function delete(\$id) {",
                "\t\treturn {$table['ModelNamespace']}\\{$table['Model']}::find(\$id)->remove();",
                "\t}",
            ]);

            $methods['clone'] = implode("\n", [
                "\tpublic function clone(\$id) {",
                "\t\treturn {$table['ModelNamespace']}\\{$table['Model']}::find(\$id)->clone();",
                "\t}",
            ]);

            $methods['export'] = implode("\n", [
                "\tpublic function export(\$id) {",
                "\t\treturn {$table['ModelNamespace']}\\{$table['Model']}::find(\$id)->export();",
                "\t}",
            ]);

            foreach($methods as $method_name=>$method_content) {
                $this->classWriteMethod("{$table['ControllerNamespace']}\\{$table['Controller']}", $method_name, $method_content);
            }
        }

    }
}
