<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class NosotrosController extends Controller
{
    public function nosotros_index(Request $request)
    {
        sleep(2);
        return Inertia::render('nosotros/Nosotros', []);
    }
}
