import "../ComponentStyles/pokeCard.css";


const IMG_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/";
function PokemonCard(props) {
    let imgsrc = `${IMG_URL}${props.id}.png`
    return (
        <div className="cardcontener">

            <div className="pokecard">
                <div>
                    <h2 className="pokename">{props.name}</h2>
                </div>
                <div className="img-contener">
                    <img className="img" src={imgsrc} alt="pokemon-icon" />
                </div>
                <div className="poke-type">
                    <b>  Type: {props.type} </b>
                </div>
                <div>
                    EXP: {props.exp}
                </div>
            </div>
        </div>
    );
};
export default PokemonCard;