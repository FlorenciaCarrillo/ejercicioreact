import { useEffect } from "react";
import { useState } from "react";


const TextoMeme = (props) => {

    const onTextoMemeChange = (index, texto) => {
        props.onTextoMemeChange(index, texto);
    }

    useEffect(() => {
        document.getElementsByTagName("form")[0].reset();
    }, [props.cantidadTextos])

    return (
        <div className="text-center">
            <h3 className="mt-3 mb-3 text-center">Ingresá los que llevará tu meme</h3>

            <form>
                {Array.from(Array(props.cantidadTextos).keys()).map(i =>
                    <input key={i} onChange={(e) => { onTextoMemeChange(i, e.target.value) }} className="form-control m-auto d-block mb-2" type="text" placeholder={`Texto n° ${i + 1}`} aria-aria-label="default input example" />
                )}
            </form>

        </div>
    );



}

export default TextoMeme;