<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tareas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 100);
            $table->string('slug', 100)->unique();
            $table->text('descripcion');
            $table->date('fecha')->useCurrent();
            //$table->unsignedBigInteger('categorias_3_id');
            //$table->foreign('categorias_3_id')->references('id')->on('categorias_3')->onDelete('cascade');
            $table->index(['nombre', 'slug', 'fecha']);
           
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tareas');
    }
};
