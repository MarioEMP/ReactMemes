import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas'

function App() {

  const [linea1, setLinea1] = useState();
  const [linea2, setLinea2] = useState();
  const [imagen, setImagen] = useState();

  const onChangeLinea1 = function (event) {
    setLinea1(event.target.value)
  }

  const onChangeLinea2 = function (event) {
    setLinea2(event.target.value)
  }

  const onChangeImagen = function (event) {
    setImagen(event.target.value)
  }

  const onClickExportar = function (event) {
    
    html2canvas(document.querySelector("#meme")).then(canvas => {
    var img = canvas.toDataURL('image/png');
    var link = document.createElement('a');
    link.download = 'meme.png';
    link.href = img;
    link.click();
    })}

  return (
    <div className="App">

      {/* Select picker de memes */}
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="blondekid">Niña Rubia</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philisoraptor</option>
        <option value="smart">Smart Guy</option>
      </select> <br />

      {/* // Input text - Primera linea */}
      <input onChange={onChangeLinea1} type="text" placeholder="linea 1" /> <br />

      {/* // Input text - segunda linea */}
      <input onChange={onChangeLinea2} type="text" placeholder="linea 2" /> <br />

      {/* // Boton exportar */}
      <button onClick={onClickExportar}>Exportar</button> <br />

      <div className="meme" id="meme">
        <span id='linea1'>{linea1}</span> <br />
        <span id='linea2'>{linea2}</span> <br />
        <img src={`/img/${imagen}.jpg`} />
      </div>

    </div>
  );
}

export default App;
