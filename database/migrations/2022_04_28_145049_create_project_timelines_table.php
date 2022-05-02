<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectTimelinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_timelines', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')
                  ->constrained()->onDelete('cascade');
            $table->string('name');
            $table->double('depth')->default(0);
            $table->double('rih')->default(0);
            $table->double('drill')->default(0);
            $table->double('poh')->default(0);
            $table->double('casing')->default(0);
            $table->double('wh_work')->default(0);
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
        Schema::dropIfExists('project_timelines');
    }
}