import { Link } from "@inertiajs/react";
const Layout = ({ children }) => {
    return (
        <>
           <div className="container">
           <header>
                <ul>
                    <li>
                    <Link className="nav-link" href="/">
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link className="nav-link" href="/nosotros">
                        Nosotros
                    </Link>
                    </li>
                    <li>
                    <Link className="nav-link" href="/tareas">
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