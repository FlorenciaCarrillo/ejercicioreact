import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import TextoMeme from './componentes/textoMeme';
import ImagenMeme from './componentes/ImagenMeme';
import { useState } from "react";
import { Button } from "bootstrap";
import html2canvas from "html2canvas";
import { useEffect } from "react";

function App() {

  const [textoMeme, setTextoMeme] = useState("");
  const [memeSeleccionado, setMemeSeleccionado] = useState();
  const [memeGenerado, setMemeGenerado] = useState();
  const [listaMemes, setListaMeme] = useState([]);
  const [textos, setTextos] = useState([]);

  useEffect(() => {
    cargarMemes();
  }, [])

  const generarMeme = async () => {

    const formData = new FormData();

    formData.append('template_id', memeSeleccionado.id);
    formData.append('username', 'florcitaa007');
    formData.append('password', 'LosMemes1234');

    for (let i = 0; i < textos.length; i++) {
      const texto = textos[i];
      formData.append(`boxes[${i}][text]`, texto);
    }
    const resp = await fetch("https://api.imgflip.com/caption_image", {
      method: "POST",
      body: formData
    })

    const meme = await resp.json();
    setMemeGenerado(meme.data);
  }

  const cargarMemes = async () => {
    const resp = await fetch('https://api.imgflip.com/get_memes');
    const memes = await resp.json();
    setListaMeme(memes.data.memes);
  }

  const onImagenMemeChange = (meme) => {
    setMemeSeleccionado(meme);
    setMemeGenerado(undefined);
    setTextos(new Array(meme.box_count));
  }

  const onTextoMemeChange = (index, texto) => {

    const aux = [...textos];
    aux[index] = texto;
    setTextos(aux);

  }

  const exportarMeme = () => {
    fetch(memeGenerado.url)
      .then(response => response.blob())
      .then(blob => {
        const blobURL = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = blobURL;
        a.download = "meme.jpg";
        a.click();
      })
  }

  return (
    <>
      <div className="App container">
        <h1 className="mt-3 mb-3 text-center">Editá tu Meme</h1>

        <div className="row">
          <div className="col">
            <ImagenMeme onImagenMemeChange={onImagenMemeChange} listaMemes={listaMemes} ></ImagenMeme>
          </div>
        </div>

        <div className="row">
          <div className="col">
            {memeSeleccionado && <TextoMeme cantidadTextos={memeSeleccionado.box_count} onTextoMemeChange={onTextoMemeChange}></TextoMeme>}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <button className="btn btn-primary w-100" onClick={generarMeme}>Generar Meme</button>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <div className="text-center" >
              {memeSeleccionado && !memeGenerado && <img className="img img-fluid w-100" src={memeSeleccionado.url} />}
              {memeGenerado && <img src={memeGenerado.url} className="img img-fluid w-100" />}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {memeGenerado && <button className="btn btn-primary w-100" onClick={exportarMeme}>Exportar</button>}
          </div>
        </div>


      </div>
    </>
  );
}

export default App;
