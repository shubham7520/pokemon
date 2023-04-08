import './App.css';
import PokemonCard from "./Components/PokemonCard"
import { useEffect } from 'react';
import { useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';

function App() {

  const [detail, setDetail] = useState([]);
  // let pokemon;

  const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 200; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        Base_experience: result.base_experience,
        type: result.types.map((type) => type.type.name).join(', '),
        id: result.id
      }));
      setDetail(pokemon);
    });

  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="App">
      <div className="heading">
        <h1>POKEMON!</h1>
      </div>
      {detail.length === 0 ? <div style={{ paddingTop: "30vh" }}><RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      /></div>
        : detail.map((props, index) => {
          return <PokemonCard key={index} id={props.id} name={props.name} type={props.type} exp={props.Base_experience} />
        })}

    </div>
  );
}

export default App;
