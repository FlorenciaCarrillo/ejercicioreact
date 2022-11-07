import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import TextoMeme from './componentes/textoMeme';
import ImagenMeme from './componentes/ImagenMeme';
import { useState } from "react";
import { Button } from "bootstrap";
import html2canvas from "html2canvas"

function App() {

  const [textoMeme, setTextoMeme] = useState("");

  const onTextoMemeChange = (textoMeme) => {
    setTextoMeme(textoMeme);
  }

  const exportarMeme = () => {
    html2canvas(document.getElementById("imagenMemeExportar")).then(function (canvas) {
      const link = document.createElement("a");
      link.href = canvas.toDataURL();
      link.download = "meme/jpg"
      link.click();
    });
  }
  return (
    <>
      <div className="App">

        <TextoMeme onTextoMemeChange={onTextoMemeChange}></TextoMeme>
        <ImagenMeme textoMeme={textoMeme}></ImagenMeme>
        <button onClick={exportarMeme}>Exportar</button>

      </div>
    </>
  );
}

export default App;
