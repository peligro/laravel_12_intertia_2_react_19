<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NosotrosController;
use App\Http\Controllers\TareasController;

Route::get('/', [HomeController::class, 'home_index'])->name('home_index');
//Route::inertia('/', 'home/Home')->name("home_index");

Route::get('/nosotros', [NosotrosController::class, 'nosotros_index'])->name('nosotros_index');

Route::get('/tareas', [TareasController::class, 'tareas_index'])->name('tareas_index');
Route::get('/tareas/add', [TareasController::class, 'tareas_add'])->name('tareas_add');
Route::post('/tareas/add', [TareasController::class, 'tareas_add_post'])->name('tareas_add_post');