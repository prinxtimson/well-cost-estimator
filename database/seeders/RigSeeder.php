<?php

namespace Database\Seeders;

use App\Models\Rig;
use Illuminate\Database\Seeder;

class RigSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $path = storage_path() . './rigs.json';
        $rigs = json_decode(\file_get_contents($path), true);

        foreach($rigs as $rig){
            Rig::create($rig);
        }

    }
}