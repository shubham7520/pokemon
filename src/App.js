import './App.css';
import PokemonCard from './Components';
import detail from './Components/CardDetails';

function CreateCard(props) {
  return <PokemonCard id={props.id} name={props.name} type={props.type} exp={props.Base_experience} />
}

function App() {
  return (
    <div ClassName="App">
      <div ClassName="heading">
        <h1>POKEMON!</h1>
      </div>
      {detail.map(CreateCard)}

    </div>
  );
}

export default App;
