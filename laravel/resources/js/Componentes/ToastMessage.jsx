import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';

const ToastMessage = () => {
    const {
        props: {
            flash = { toast: null }
        }
    } = usePage();

    useEffect(() => {
        if (flash.toast && window.showToast) {
            window.showToast(flash.toast.mensaje, flash.toast.css);
        }
    }, [flash]);

    return null; // Este componente no renderiza nada visual
};

export default ToastMessage;