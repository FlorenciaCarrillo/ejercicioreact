import React, { useState } from "react";
import { useEffect } from "react";

const ImagenMeme = (props) => {

    // const [imagenMeme, setImagenMeme] = useState();


    const cambiarImagen = (e) => {
        const memeSeleccionado = props.listaMemes.find(meme => meme.id === e.target.value)
        if (props.onImagenMemeChange)
            props.onImagenMemeChange(memeSeleccionado)
    }
    return (
        <div>
            <h3>Seleccioná la imagen para tu Meme</h3>

            <select onChange={cambiarImagen} className="imagenMeme form-select form-select-lg mb-3 w-100 m-auto" aria-label=".form-select-lg example" name="img">
                <option key={0} value="0">Seleccione...</option>
                {props.listaMemes.map(meme => <option key={meme.id} value={meme.id}>{meme.name}</option>)}
            </select>

        </div >
    )


}

export default ImagenMeme;