<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectCostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_costs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')
                  ->constrained()->onDelete('cascade');
            $table->string('sub_title');
            $table->string('name');
            $table->string('unit');
            $table->string('unit_cost');
            $table->string('quantity')->default(0);
            $table->string('total')->default(0);
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
        Schema::dropIfExists('project_costs');
    }
}