import React, { useState } from "react";
import styled, { css } from "styled-components";

export const Container = styled.div`

  //display: flex;
  padding: 2px 0px;
  //flex-direction: row;
  //justify-content: center;
  //align-items: center;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  //line-height: 20px;
  
  input {
  padding: 11px;
  border-radius: 2px;
  border: 1px solid white;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
}
button {
  background-color: darkcyan;
  border: none;
  border-radius:10px;
  height: 40px;
  color: var(--white);
  padding: 10px 12px;
  margin-left:12px;
  cursor: pointer;
  :hover {
    cursor: pointer;
    background-color: darkcyan;
    color: white;
  }
}`  


export default function Searchbar(props) {
  const [search, setSearch] = useState("");
  const { onSearch } = props;
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  return (
    <Container>
      
        <input placeholder="Search by name..." onChange={onChangeHandler} />
     
     
        <button onClick={onButtonClickHandler}>Search</button>
      
    </Container>
  );
}