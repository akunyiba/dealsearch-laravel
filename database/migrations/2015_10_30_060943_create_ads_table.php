<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ads', function (Blueprint $table) {
            $table->increments('id');
            $table->enum('type', ['частное лицо', 'компания']);
            $table->string('name');
            $table->string('email');
            $table->smallInteger('allow_mails');
            $table->string('contact_number');
            $table->integer('category');
            $table->integer('city');
            $table->string('title');
            $table->longText('description');
            $table->integer('price');
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
        Schema::drop('ads');
    }
}
