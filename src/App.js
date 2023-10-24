import React, { useState, useEffect } from 'react';
import Main from './Components/Main';
import './Components/style.css';
import PokemonList from './PokemonList';
import axios from 'axios'; //allows us t have asynchronous requests
import Pagination from './Pagination';


function App() {
  // const[pokemon, setPokemon] = useState([]); //giving initial value to the array of pokemons
  // const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  // const [nextPageUrl, setNextPageUrl] = useState();
  // const [prevPageUrl, setPrevPageUrl] = useState();
  // const [loading, setLoading] = useState(true);
  
  // useEffect(() => {
  //   setLoading(true);
  //   let cancel;
  //   axios.get(currentPageUrl, {
  //     cancelToken: new axios.CancelToken(c => cancel = c) //to cancel previous  requests if we have new ones
  //   }).then(res => {// res - response to our request
  //     setLoading(false);
  //     setNextPageUrl(res.data.next) //next and previus are propertes the fetched json object has
  //     setPrevPageUrl(res.data.previous)
  //     setPokemon(res.data.results.map(pokemon => pokemon.name))
  //   })

  //   return () => {
  //      cancel()
  //   }

  // }, [currentPageUrl])

  // function goToNextPage(){
  //   setCurrentPageUrl(nextPageUrl)
  // }

  // function goToPrevPage(){
  //   setCurrentPageUrl(prevPageUrl)
  // }



  // if(loading) return "Loading..." //appears on screen when the page is laoding

  return (
    <> 
      <Main />
      {/* <PokemonList pokemon={pokemon} />
      <Pagination 
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
      /> */}
    </>
   
  );
}

export default App;
