export const Pokemondata = ({ pokedata }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center ">
      <img
        className="h-2/4"
        src={pokedata.sprites.other.dream_world.front_default}
        alt={pokedata.name}
      />
      <h1 className="text-3xl font-medium">{pokedata.name}</h1>
      <div className="bg-green-600 rounded-md text-white  min-w-[40%] items-center flex justify-center mb-4">
        <p>
          {pokedata.types
            .map((curdata) => {
              return curdata.type.name;
            })
            .join(", ")}
        </p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        {/* 🟢 First Row of Stats */}
        <div className="grid grid-cols-3 gap-6 text-center">
          <div className="bg-white p-3 rounded-lg shadow">
            <span className="block text-gray-500 text-xs font-semibold">
              Height
            </span>
            <p className="text-lg font-bold text-gray-800">{pokedata.height}</p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow">
            <span className="block text-gray-500 text-xs font-semibold">
              Weight
            </span>
            <p className="text-lg font-bold text-gray-800">{pokedata.weight}</p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow">
            <span className="block text-gray-500 text-xs font-semibold">
              Speed
            </span>
            <p className="text-lg font-bold text-gray-800">
              {pokedata.stats[5].base_stat}
            </p>
          </div>
        </div>

        {/* 🔵 Second Row of Stats */}
        <div className="grid grid-cols-3 gap-6 text-center mt-4">
          <div className="bg-white p-3 rounded-lg shadow">
            <span className="block text-gray-500 text-xs font-semibold">
              Experience
            </span>
            <p className="text-lg font-bold text-gray-800">
              {pokedata.base_experience}
            </p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow">
            <span className="block text-gray-500 text-xs font-semibold">
              Attack
            </span>
            <p className="text-lg font-bold text-gray-800">
              {pokedata.stats[1].base_stat}
            </p>
          </div>

          <div className="">
            <span className=" text-gray-500 text-xs font-semibold">
              Abilities
            </span>
            <p className="text-sm font-bold text-gray-800 text-center">
              {pokedata.abilities
                .map((abilityInfo) => abilityInfo.ability.name)
                .join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
