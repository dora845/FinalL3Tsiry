<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('infomentions', function (Blueprint $table) {
            $table->id();
            $table->string("mentions");
            $table->string("parcours");
            $table->string("niveau");
            $table->timestamps();

            $table->index(["mentions", "parcours", "niveau"]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('infomentions');
    }
};
