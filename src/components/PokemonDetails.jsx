import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as API from "../services/pokemons";
import styled, { css } from "styled-components";

import bugIcon from "../assets/icons/bug.svg";
import darkIcon from "../assets/icons/dark.svg";
import dragonIcon from "../assets/icons/dragon.svg";
import electricIcon from "../assets/icons/electric.svg";
import fairyIcon from "../assets/icons/fairy.svg";
import fightingIcon from "../assets/icons/fighting.svg";
import fireIcon from "../assets/icons/fire.svg";
import flyingIcon from "../assets/icons/flying.svg";
import ghostIcon from "../assets/icons/ghost.svg";
import grassIcon from "../assets/icons/grass.svg";
import groundIcon from "../assets/icons/ground.svg";
import iceIcon from "../assets/icons/ice.svg";
import normalIcon from "../assets/icons/normal.svg";
import poisonIcon from "../assets/icons/poison.svg";
import psychicIcon from "../assets/icons/psychic.svg";
import rockIcon from "../assets/icons/rock.svg";
import steelIcon from "../assets/icons/steel.svg";
import waterIcon from "../assets/icons/water.svg";

const Container = styled.div`
  height: 700px;
  padding: 35px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 45px;
  background-color: #ed7e7e;
  background-size: contain;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.1rem;
`;

const Icon = styled.img`
  width: 20px;
`;

const Button = styled.button`
  width: 100px;
  background-color: darkcyan;
  border: 1px solid black;
  color: white;
  border-radius: 3px;
  padding: 3px;
  margin-top: 5px;

  :hover {
    cursor: pointer;
    border: 1px solid black;
    background-color: white;
    color: aquamarine;
  }
  a{
    text-decoration:none ;
  }
`;

function PokemonDetails() {
  const { id } = useParams();

  const [pokeData, setPokeData] = useState({});
  const [img, setImg] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [stats, setStats] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [types, setTypes] = useState([]);

  const pokemonIcons = {
    bug: bugIcon,
    dark: darkIcon,
    dragon: dragonIcon,
    electric: electricIcon,
    fairy: fairyIcon,
    fighting: fightingIcon,
    fire: fireIcon,
    flying: flyingIcon,
    ghost: ghostIcon,
    grass: grassIcon,
    ground: groundIcon,
    ice: iceIcon,
    normal: normalIcon,
    poison: poisonIcon,
    psychic: psychicIcon,
    rock: rockIcon,
    steel: steelIcon,
    water: waterIcon,
  };

  useEffect(() => {
    API.getPokeData(id)
      .then((data) => {
        setImg(data.sprites.other.dream_world.front_default);
        setHeight(data.height);
        setWeight(data.weight);
        setTypes(data.types);

        setStats(data.stats);
        setAbilities(data.abilities);
        console.log(
          "🚀 ~ file: PokemonDetails.jsx ~ line 17 ~ .then ~ setStats(data.stats)",
          stats
        );
      })
      .catch(console.log);
  }, [id]);

  return (
    
    <Container>
      <div>
      <Button>
          <a href="/">Go back</a>
        </Button>
        <div>{id[0].toUpperCase() + id.substring(1)}</div>
        <img src={img} alt="" width={"250px"} />
      </div>

      <div>
        Type:
        {types.map((type, id) => (
          <span key={type.type.name}>
            {
              <div>
                <Icon src={pokemonIcons[type.type.name]} /> {type.type.name}
              </div>
            }
          </span>
        ))}
      </div>

      <div>height:{height} </div>
      <div>weight: {weight}</div>

      <div>
        Abilities:
        {abilities.map((ability, id) => (
          <div key={ability.ability.name}>{ability.ability.name}</div>
        ))}
      </div>

      <div>
        Stats:
        {stats.map((stat, id) => (
          <div key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default PokemonDetails;
