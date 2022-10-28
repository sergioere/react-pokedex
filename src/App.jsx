import { useState, useEffect } from "react";
import * as API from "./services/pokemons";
import "./App.css";
import CardItem from "./components/CardItem";
import ReactPaginate from "react-paginate";
import styled, { css } from "styled-components";
import Searchbar from "./components/SearchBar";

import { FaHeart, FaGithub } from "react-icons/fa";
import { Routes, Route, Link } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";

const Container = styled.div`
  display: grid;
  grid-area: "Header" "Main" "Footer";
`;


const Footer = styled.footer`
  padding: 20px;
  background: #e5e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .div a {
    text-decoration: none;
  }
`;

function App() {
 /* const [pokemons, setPokemons] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const [notFound, setNotFound] = useState(false);

  const pokesPerPage = 8;
  const pagesVisited = pageNumber * pokesPerPage;

  useEffect(() => {
    API.getAllPokemons()
      .then((data) => setPokemons(data.results))
      .catch(console.log);
  }, []);

  const displayPokes = pokemons
    .slice(pagesVisited, pagesVisited + pokesPerPage)
    .map((pokemon, id) => {
      return <CardItem key={pokemon.name} {...pokemon} />;
    });

  const pageCount = Math.ceil(pokemons.length / pokesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // search pokemons

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return await API.getAllPokemons();
    }

    //setLoading(true);
    setNotFound(false);
    const result = await API.searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      //setPage(0);
      //setTotalPages(1);
    }
    //setLoading(false);
  };*/

  return (
    <Container>
      <Routes>
        <Route
          path="/"
          element={<PokemonList />}
          
        />
        <Route
          path="pokemon/:id"
          element={<PokemonDetails />}
          
        />
      </Routes>

     

      <Footer>
        <div>
          {" "}
          Made by Sergio Romero 2022 © with <FaHeart />
        </div>
        <div>
          <a href="https://github.com/sergioere">
            {" "}
            <FaGithub /> My projects
          </a>
        </div>
      </Footer>
    </Container>
  );
}

export default App;
