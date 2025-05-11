import './bootstrap';
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
/*
window.showToast = function(message, type = 'success') {
  const container = document.getElementById('toast-container');

  if (!container) return;

  const id = `toast-${Date.now()}`;
  const toastHTML = `
      <div id="${id}" class="toast align-items-center text-white bg-${type === 'success' ? 'primary' : type}" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000">
          <div class="d-flex">
              <div class="toast-body">
                  ${message}
              </div>
              <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
      </div>
  `;

  container.insertAdjacentHTML('beforeend', toastHTML);

  const toastElement = document.getElementById(id);
  const bsToast = new bootstrap.Toast(toastElement);
  bsToast.show();

  // Elimina el toast del DOM después de que se oculte
  toastElement.addEventListener('hidden.bs.toast', () => {
      toastElement.remove();
  });
};*/