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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('matricule')->nullable();
            $table->string('firstname')->nullable();
            $table->date('birthdate')->nullable();
            $table->string('birthplace')->nullable();
            // $table->string('filiere')->nullable();
            $table->string('address')->nullable();
            $table->string('sexe')->nullable();
            // $table->string('nation')->nullable();
            $table->bigInteger('cin')->unique();
            // $table->date('date_cin')->nullable();
            // $table->string('lieu_cin')->nullable();
            // $table->string('etat')->nullable();
            // $table->string('photo')->nullable();
            $table->string('poste');
            $table->string('password');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};
