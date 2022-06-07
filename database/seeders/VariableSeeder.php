<?php

namespace Database\Seeders;

use App\Models\Variable;
use Illuminate\Database\Seeder;

class VariableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $path = storage_path() . '/wellextra.json';
        $extras = json_decode(file_get_contents($path), true);

        foreach($extras as $extra){
            $metas = $extra['meta'];
            $variable = Variable::create([
                'name' => $extra['name'],
                'slug' => $extra['slug']
            ]);

            foreach($metas as $meta){
                $variable->variablemeta()->create($meta);
            }
        }
    }
}