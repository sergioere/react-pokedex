import { useState, useEffect } from "react";
import * as API from "../services/pokemons";
import ReactPaginate from "react-paginate";
import styled, { css } from "styled-components";
import {Link} from 'react-router-dom';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

width: 80%;

  background: rgba(187, 212, 219, 0.412);
  border: 2px solid darkcyan;
  margin-top: 25px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Button = styled.button`
width: 100px;
background-color:darkcyan;
border:1px solid black ;
color: white;
border-radius: 3px;
padding: 3px;
margin-top: 5px;

:hover{
  cursor: pointer;
  border:1px solid black ;
  background-color:white;
  color: darkcyan;
}
`;

function CardItem(pokemon) {
  const [pokeData, setPokeData] = useState({});
  const [img, setImg] = useState("");
  const [types, setTypes] = useState([]);
  let id = pokemon.name;

  useEffect(() => {
    API.getPokeData(id)
      .then((data) => {
        setPokeData(data);
        setImg(data.sprites.front_default);
        setTypes(data.types);
      })
      .catch(console.log);
  }, []);

  /*if (pokeData !== undefined && pokeData !== null) {
    return (<div>loading...  </div>)
  }
  */

  return (
    <FlexContainer>
      <div>Name: {pokemon.name}</div>
      <img src={img} alt={pokemon.name} height="100px" width="100px" />

      <div>
        Type:
        {types.map((type, id) => (
          <span key={type.type.name}> {type.type.name} </span>
        ))}
      </div>

      <Link to={`pokemon/${pokemon.name}`} >
      <Button>
        Details
      </Button>
      </Link>
      
    </FlexContainer>
  );
}

export default CardItem;
