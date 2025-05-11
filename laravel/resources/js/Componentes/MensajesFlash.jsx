import { usePage } from "@inertiajs/react";



const MensajesFlash = () => {
    const { flash } = usePage().props[0] || {};
    return (
        <>
         {flash.mensaje && (
                
                <div className={`alert alert-${flash.css}   border-0 alert-dismissible fade show`} role="alert">

                {flash.mensaje}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" title="Cerrar"></button>
            </div>
            )}
           



        </>
    )
}

export default MensajesFlash