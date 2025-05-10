
import Paginacion from '../../Componentes/Paginacion';
const Nosotros = ({ datos }) => {
  return (
    <>
      <h1>Tareas</h1>
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