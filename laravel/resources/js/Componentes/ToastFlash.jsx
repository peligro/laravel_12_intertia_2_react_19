import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';

const ToastFlash = () => {
    const { flash } = usePage().props[0] || {};
    const { mensaje, css } = flash || {};

    useEffect(() => {
        if (mensaje) {
            switch (css) {
                case 'success':
                    toastr.success(mensaje);
                    break;
                case 'error':
                case 'danger':
                    toastr.error(mensaje);
                    break;
                case 'warning':
                    toastr.warning(mensaje);
                    break;
                case 'info':
                    toastr.info(mensaje);
                    break;
                default:
                    toastr.info(mensaje);
            }
        }
    }, [mensaje]);

    return null; // Este componente no renderiza nada visible
};

export default ToastFlash;