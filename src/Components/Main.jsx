import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Pokeinfo from './Pokeinfo';


const Main=() =>{
    const [pokeData, setPokeData] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const[pokeDex, setPokeDex] = useState();



    const pokeFun = async() => {
        setLoading(true)
        const res = await axios.get(url); // api request
        setNextUrl(res.data.next);  //next & previous - the attributes of the fetched JSON object
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false);
        console.log(pokeData);
        
    }

    const getPokemon =async (res) =>{
        res.map(async(item) =>{
            const result = await axios.get(item.url);
            setPokeData( state =>{
                state = [...state, result.data] //storing all the pokemons in an array
                state.sort((a,b) => a.id > b.id ? 1 : -1);
                return state;
            })
        })
    }

    useEffect( () =>{
       pokeFun();
    }, [url])

    return(
        <>
            <div className="container">
                <div className="left-content">
                    <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
                    
                    <div className="btn-group">
                        {  prevUrl && <button onClick={()=>{
                            setPokeData([])
                           setUrl(prevUrl) 
                        }}>Previous</button>}

                        { nextUrl && <button onClick={()=>{
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}

                    </div>
                </div>
                <div className="right-content">
                   <Pokeinfo data={pokeDex}/>
                </div>
            </div>
        </>
    )
}
export default Main;
