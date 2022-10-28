const API_URL = "https://pokeapi.co/api/v2";

export async function getAllPokemons() {
  try {
    const response = await fetch(`${API_URL}/pokemon?limit=150&offset=0`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

/** 
 *  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) =>{
        setPokeData(data);
        setImg(data.sprites.front_default)
      })
      
 * **/
export async function getPokeData(id) {
  try {
    const response = await fetch(`${API_URL}/pokemon/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const searchPokemon = async (pokemon) => {
  try {
      let url = `${API_URL}/pokemon/${pokemon}`
      const response = await fetch(url)
      return await response.json()
  } catch (error) {
      console.log("error: ", error)
  }
}
