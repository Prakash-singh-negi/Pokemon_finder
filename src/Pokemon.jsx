import { useEffect, useState } from "react";
import { Pokemondata } from "./Pokemondata";

export const Pokemon = () => {
  const [Pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=24";

  const fetchpokemon = async () => {
    try {
      const fetchapi = await fetch(API);
      const data = await fetchapi.json();

      const detaileddata = data.results.map(async (curdata) => {
        const res = await fetch(curdata.url);
        const data = await res.json();
        return data;
      });

      const moredetaileddata = await Promise.all(detaileddata);
      setPokemon(moredetaileddata);
      console.log(moredetaileddata);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  const searchdata = Pokemon.filter((curPokemon)=>{
    return curPokemon.name.toLowerCase().includes(search.toLowerCase());
  })

  useEffect(() => {
    fetchpokemon();
  }, []);

if (loading) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin mx-auto mb-4"></div>
        <h1 className="text-xl font-semibold text-gray-700">Loading...</h1>
      </div>
    </div>
  );
}


  if (error) {
    return (
      <div>
        <h1> {error.message} </h1>
      </div>
    );
  }
  return (
    <div>
      <header className="font-bold text-4xl m-8 items-center flex justify-center">
<h1 className="text-5xl font-extrabold text-red-500 text-center drop-shadow-lg uppercase mb-4 animate-bounce">
  Welcome to Pokémon World!
</h1>
      </header>
<div className="flex justify-center items-center mt-6">
  <div className="w-[80%] md:w-[50%] lg:w-[40%] flex items-center border-2 border-yellow-400 rounded-full px-4 py-2 shadow-md bg-white hover:shadow-lg transition duration-300 ease-in-out">
    <input
      type="text"
      placeholder="Search your Pokémon..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-2 text-lg text-gray-700 bg-transparent border-none outline-none placeholder-gray-400"
    />
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
      alt="Pokeball"
      className="w-6 h-6 ml-2 animate-pulse"
    />
  </div>
</div>

      <section>
        <div>
          <ul className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {searchdata.map((curelm) => {
              return <Pokemondata key={curelm.id} pokedata={curelm} />;
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};
