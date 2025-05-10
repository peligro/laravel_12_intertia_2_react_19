
import { Link } from "@inertiajs/react";
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
      </div>
      {datos.links.map((link, index) =>
        link.url ? (
          <Link
            key={index}
            href={link.url}
            dangerouslySetInnerHTML={{ __html: link.label }}
            className={`p-1 mx-1 ${link.active ? "text-blue-500 font-bold" : ""
              }`}
          />
        ) : (
          <span
            key={index}
            dangerouslySetInnerHTML={{ __html: link.label }}
            className="p-1 mx-1 text-slate-300"
          ></span>
        )
      )}
    </>
  )
}
export default Nosotros