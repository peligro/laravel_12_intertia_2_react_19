<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Tareas;

class TareasController extends Controller
{
    public function tareas_index(Request $request)
    {
        $datos=Tareas::orderBy('id', 'desc')->paginate(1);
        
        //dd(\DB::getQueryLog());
        return Inertia::render('tareas/Index', ['datos'=>$datos]);
    }
}
