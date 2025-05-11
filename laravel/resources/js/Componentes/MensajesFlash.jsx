import { useState } from "react";


const MensajesFlash = ({ flash }) => {
    const [flashMsg, setFlashMsg] = useState(flash.mensaje);
    setTimeout(() => {
        setFlashMsg(null);
    }, 2000);
   console.log(flashMsg)
    return (
        <>
            {flashMsg && (
                <div class={`alert alert-${flash.css}   border-0 alert-dismissible fade show`} role="alert">

                    {flashMsg}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" title="Cerrar"></button>
                </div>
            )}


        </>
    )
}

export default MensajesFlash