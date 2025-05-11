import { Link, usePage } from "@inertiajs/react"; 
import { route } from 'ziggy-js';
import Paginacion from '../../Componentes/Paginacion';
const Nosotros = ({ datos }) => {
  
  const {
    props: {
        flash = { mensaje: null, css: null }
    }
} = usePage();

  return (
    <>
     
      <h1>Tareas  </h1>
      {flash.mensaje && (
                <div className={`alert ${flash.css || 'alert-danger'}`} role="alert">
                    {flash.mensaje} 
                </div>
            )}
      <p>Hay {datos.total} registros y {datos.last_page} páginas en total</p>
      <p className=' d-flex justify-content-end'>
          <Link className="btn btn-outline-success" href={route('tareas_add')}><i className="fas fa-plus"></i> Crear</Link>
      </p>
      <div className="table-responsive">
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {datos.data.map((dato) => (
              <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.nombre}</td>
                <td>{dato.descripcion}</td>
                <td>{dato.fecha}</td>
                <td>{dato.id}</td>
              </tr>
            ))}
          </tbody>
        </table>

         <Paginacion datos={datos} />

      </div>

    </>
  )
}
export default Nosotros