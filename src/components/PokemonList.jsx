import { useState, useEffect } from "react";
import * as API from "../services/pokemons";
import "../App.css";
import CardItem from "../components/CardItem";
import ReactPaginate from "react-paginate";
import styled, { css } from "styled-components";
import Searchbar from "../components/SearchBar";

import { FaHeart, FaGithub } from "react-icons/fa";
import { Routes, Route, Link } from "react-router-dom";

const Header = styled.header`
  background: #ef476f;
  font-size: 2rem;
  font-weight: bold;
  color: #f8ffe5;
  padding: 10px;

  display: flex;
  flex-flow: row wrap;

  justify-content: space-around;
  align-items: center;

  .logo {
    /*background-color:blue;*/
  }
`;
const Main = styled.main`
  display: grid;

  gap: 3rem;

  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
`;
const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
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
const paginationBttns = styled.button`
  width: 80%;
  height: 40px;
  list-style: none;
  display: flex;
  justify-content: center;
`;

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
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
  };

  return (
    <>
      <Header>
        <div className="logo">
          <img
            src="/src/assets/pokedex.png"
            alt="pokedex"
            className="img-banner"
            width="30px"
          />
          Pokédex
        </div>

        <Searchbar onSearch={onSearchHandler} />
      </Header>

      {notFound ? (
        <>
          <h1>Not found this pokemon :\</h1>
          <Button>
           <a href="">Go back</a>
          </Button>
        </>
      ) : (
        <>
          
          <Main>{displayPokes}</Main>
          
        </>
      )}

      <Pagination>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </Pagination>
    </>
  );
}

export default PokemonList;
