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
        Schema::create('demande_releves', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
 
            $table->foreign('user_id')->references('id')->on('users');
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
        Schema::dropIfExists('demande_releves');
        $table->dropForeign('demande_releves_user_id_foreign');
        $table->dropIndex('demande_releves_user_id_index');
        $table->dropColumn('user_id');
    }
};
