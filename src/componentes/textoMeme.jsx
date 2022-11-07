import { useEffect } from "react";
import { useState } from "react";


const TextoMeme = (props) => {

    const [textoMeme, setTextoMeme] = useState("");

    const textoMemeOnChange = (e) => {
        setTextoMeme(e.target.value);
    }

    useEffect(() => {
        props.onTextoMemeChange(textoMeme)
    }, [textoMeme])

    return (
        <div className="text-center">
            <h1 className="mt-3 mb-3 text-center">Editá tu Meme</h1>

            <h3 className="mt-3 mb-3 text-center">Ingresá el texto que llevará tu meme</h3>
            <input onChange={textoMemeOnChange} className="form-control w.50 m-auto d-block" type="text" placeholder="Frase del Meme" name="textoMeme" aria-aria-label="default input example" />

        </div>
    );



}

export default TextoMeme;