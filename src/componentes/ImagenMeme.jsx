import React, { useState } from "react";

const ImagenMeme = (props) => {

    const [imagenMeme, setImagenMeme] = useState("0");

    const cambiarImagen = (e) => {
        setImagenMeme(e.target.value);
    }
    return (
        <div>
            <h3>Seleccioná la imagen para tu Meme</h3>

            <select onChange={cambiarImagen} className="imagenMeme form-select form-select-lg mb-3 w-50 m-auto" aria-label=".form-select-lg example" name="img">
                <option value="0">Seleccione...</option>
                <option value="1">Futurama</option>
                <option value="2">Nena</option>
                <option value="3">Hombre que piensa</option>
                <option value="4">Jerry Sad</option>
            </select>

            <figure className="text-center" id="imagenMemeExportar">

                <p className="w-100 px-30 position-absolute top-30 start-30 h3 text-center text-white">{props.textoMeme}</p>

                <img src={`./imagenes/${imagenMeme}.jpg`} className="figure img img-fluid mt-3 d-block m-auto" alt="meme" />
            </figure>

        </div >
    )


}

export default ImagenMeme;