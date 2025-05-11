import { Link } from "@inertiajs/react";

const Paginacion = ({ datos }) => {
  return (
    <>
    <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <Link className="page-link" href={datos.first_page_url}>Primera</Link>
            </li>
            <li className={`page-item ${!datos.prev_page_url ? 'disabled' : ''}`}>
              <Link className="page-link" href={datos.prev_page_url || '#'}>
                Anterior
              </Link>
            </li>

            {/* Números de página */}
            {datos.links.map((link, index) => {
              // Filtramos los links innecesarios
              if (
                link.label === 'pagination.previous' ||
                link.label === 'pagination.next' ||
                !link.url
              ) {
                return null;
              }

              return (
                <li
                  key={index}
                  className={`page-item ${link.active ? 'active' : ''}`}
                >
                  <Link
                    className="page-link"
                    href={link.url}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  />
                </li>
              );
            })}

            <li className={`page-item ${!datos.next_page_url ? 'disabled' : ''}`}>
              <Link className="page-link" href={datos.next_page_url || '#'}>
                Siguiente
              </Link>
            </li>
            {datos.last_page_url && (
              <li className="page-item">
                <Link className="page-link" href={datos.last_page_url}>Última</Link>
              </li>
            )}



          </ul>
        </nav>
    </>
  )
}

export default Paginacion