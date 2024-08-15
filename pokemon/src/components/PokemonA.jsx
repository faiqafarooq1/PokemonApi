import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

function PokemonA(){

    const [pokemon,setpokemon]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,seterror]=useState(null);
    const [search,setsearch]=useState("");

    const API="https://pokeapi.co/api/v2/pokemon?limit=150";
    useEffect(()=>{
        fetchPokemon();
    },[])
    const fetchPokemon=async()=>{
        try 
        {
                const res= await fetch(API);
                const data=await res.json();
            //   console.log(data);
                const  detailedpokemon=data.results.map(async(curPokemon)=>{
                const res=await fetch(curPokemon.url); 
                const  data=await res.json();
                return data;
            });  
            // console.log(detailedpokemon);
            const detailedresponses=await Promise.all(detailedpokemon);
            console.log(detailedresponses);
            setpokemon(detailedresponses);
            setLoading(false);
            seterror(error);
        }
         catch (error) {
            console.log(error);
            setLoading(false);
            
        }
    }
    const searchdata=pokemon.filter((curPokemon)=>
        curPokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    if(loading){
        return(
            <div>
                <h1>
                    Loading...
                </h1>
            </div>
        );
    }
    if(error){
        return(
            <div>
                <h1>
                    {error.message}
                </h1>
            </div>
        );
    }
    return(
        <div className="container mx-auto p-6">
            <h1 className=" justify-center text-center font-bold text-2xl">Pokemon </h1>
            <br/>
        <div className="flex justify-center items-center">
            
            <input 
                type="text" 
                placeholder="Enter to search" 
                value={search} 
                onChange={(e) => setsearch(e.target.value)} 
                className="text-center border border-gray-300 mb-8 border-b-4 rounded-md w-56 h-8" 
            />
        </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            
                {searchdata.map((curPokemon)=>{
                        return <PokemonCard key={curPokemon.id} pokemoncard={curPokemon}/>
                    })}
            </ul>
        </div>
    );
}
export default PokemonA;