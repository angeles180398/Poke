import './App.css';
import { myAxios } from './helpers/api';
import React from 'react';

function App() {
  const [bulbasor, setBulbasor] = React.useState("");


  React.useEffect(() => {
    const getPokemon = async () => {
      try {
        const { data } = await myAxios({
          url: `pokemon/1`,
          method: "get",
        });
        console.log(data);
        var primerpokeImagen = data.sprites.front_default;
        setBulbasor(primerpokeImagen);
      } catch (error) {}
    };
    getPokemon();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={bulbasor} className="App-logo" alt="logo" />
        <p></p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://pokeapi.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          POKE API
        </a>
      </header>
    </div>
  );
}

export default App;
