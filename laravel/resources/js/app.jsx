import './bootstrap';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

window.toastr = toastr; // Para acceso global si lo necesitas
import { createInertiaApp} from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import Layout from './Layout/Layout' 
createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
    let page = pages[`./Pages/${name}.jsx`];
    page.default.layout=page.default.layout || ((page)=> <Layout children={page} />)
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
  progress:{//barra de progreso en peticiones http
    color: '#ff0000',
    showSpinner: true
  }
})
