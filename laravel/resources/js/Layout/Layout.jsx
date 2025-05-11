import { Link } from "@inertiajs/react"; 
import { route } from 'ziggy-js';
const Layout = ({ children }) => {
    return (
        <>
           <div className="container">
           <header>
                <ul>
                    <li>
                    <Link className="nav-link" href={route('home_index')}>
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link className="nav-link" href={route('nosotros_index')}>
                        Nosotros
                    </Link>
                    </li>
                    <li>
                    <Link className="nav-link" href={route('tareas_index')}>
                        Tareas
                    </Link>
                    </li>
                </ul>
            </header>
            <main>
            
                {children}
            </main>
           </div>
            
        </>
    )
}

export default Layout