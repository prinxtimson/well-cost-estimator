<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRigsratesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rigs', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->double('mob');
            $table->double('demob');
            $table->double('day_rate');
            $table->double('solid_control_eqpt');
            $table->double('extra_catering');
            $table->double('marine_spread');
            $table->double('additional_marine_spread');
            $table->double('diesel_usage');
            $table->double('water');
            $table->double('rig_up');
            $table->double('well_depth')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rigs');
    }
}