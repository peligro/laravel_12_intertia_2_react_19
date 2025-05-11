import { useForm } from '@inertiajs/react'
import { route } from 'ziggy-js';
import { Link } from "@inertiajs/react"; 
import MensajesFlash from '../../Componentes/MensajesFlash'

const Add = () => {
    const { data, setData, post, processing, errors } = useForm({
        nombre: '',
        descripcion: '' 
      })
      
      function handleSubmit(e) {
        e.preventDefault()
        post('/tareas/add')
      } 
      
  return (
    <>
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link href={route('home_index')}><i className="fas fa-home"></i></Link></li>
        <li className="breadcrumb-item"><Link href={route('tareas_index')}>Tareas</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Crear tarea</li>
    </ol>
    </nav>
   
 
    <h1>Crear tarea</h1>
    <form onSubmit={handleSubmit}>
    <div className="row">
    
    <div className="mb-3">
    <label htmlFor="nombre" className="form-label">Nombre</label>
    <input 
        className='form-control' 
        type="text" 
        id="nombre" 
        value={data.nombre} 
        onChange={e => setData('nombre', e.target.value)} 
        placeholder="Nombre" />
        {errors.nombre && <p className="text text-danger">{errors.nombre}</p>}
    </div>

    <div className="mb-3">
    <label htmlFor="descripcion" className="form-label">Descripción</label>
    <textarea 
        className='form-control' 
        id="descripcion" 
        value={data.descripcion} 
        onChange={e => setData('descripcion', e.target.value)} 
        placeholder="Descripción"></textarea>
        {errors.descripcion && <p className="text text-danger">{errors.descripcion}</p>}
    </div>
    <div className="mb-3">
    <button type="submit" className='btn btn-danger' disabled={processing}><i className="fas fa-arrow-up"></i> Enviar</button>
    </div>
    
  
    </div></form>
    </>
  )
}

export default Add