import "../ComponentStyles/pokeCard.css";


const IMG_URL = "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/";
function PokemonCard(props) {
    let imgsrc = `${IMG_URL}${props.id}.svg`
    return (
        <div className="cardcontener">

            <div className="pokecard">
                <div>
                    <h2 className="pokename">{props.name}</h2>
                </div>
                <div className="img-contener">
                    <img className="img" src={imgsrc} />
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