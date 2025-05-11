<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Tareas;
use Illuminate\Support\Str;
class TareasController extends Controller
{
    public function tareas_index(Request $request)
    {
        $datos=Tareas::orderBy('id', 'desc')->paginate(3);
        return Inertia::render('tareas/Index', ['datos'=>$datos]);
    }
    public function tareas_add(Request $request)
    {
        
        return Inertia::render('tareas/Add', []);
    }
    public function tareas_add_post(Request $request)
    {
        //sleep(2);//para probar el valor processing de useForm
        $validated = $request->validate([
            'nombre' => 'required|min:5',
            'descripcion' => 'required',
            
        ],
        [
            'nombre.required'=>'El campo Nombre está vacío',
            'nombre.min'=>'El campo Nombre debe tener al menos 5 caracteres',
            'descripcion.required'=>'El campo Descripción está vacío',
            
        ]); 
        $save=new Tareas();
        $save->nombre=$request->nombre;
        $save->slug=Str::slug($request->nombre, '-');
        $save->descripcion=$request->descripcion;
        $save->fecha=date('Y-m-d');
        $save->save();
         //si da problemas con los autoincrementables usar: SELECT setval('tareas_id_seq', (SELECT MAX(id) FROM tareas));
        return redirect()->route('tareas_add')->with(['css'=>'success', 'mensaje'=>'Se creó el registro exitosamente']);
     
      

       
    }
}
