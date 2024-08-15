function PokemonCard({ pokemoncard }) {
    return (
        <div className="border border-gray-200 shadow-md rounded-lg p-4 transition-transform duration-300 ease-in-out hover:scale-105">
            <figure>
                <h1 className="font-bold text-center text-lg mb-2">
                    {pokemoncard.name}
                </h1>
                <img
                    className="w-32 h-40 mx-auto mb-2"
                    src={pokemoncard.sprites.other.dream_world.front_default}
                    alt={pokemoncard.name}
                />
                <p className="font-bold text-center mb-4 bg-black text-white rounded-full w-32 h-8 flex items-center justify-center mx-auto">
                    {pokemoncard.types.map((curType) => curType.type.name).join(", ")}
                </p>

                <figcaption>
                    <div className="flex justify-between text-sm mb-2">
                        <p>Height: {pokemoncard.height}</p>
                        <p>Weight: {pokemoncard.weight}</p>
                        <p>Speed: {pokemoncard.stats[5].base_stat}</p>
                    </div>
                    <div className="flex justify-between text-sm">
                        <p>Experience: {pokemoncard.base_experience}</p>
                        <p>Attack: {pokemoncard.stats[1].base_stat}</p>
                        <p>Abilities: {pokemoncard.abilities.map((abilityInfo) => abilityInfo.ability.name).slice(0, 1).join(", ")}</p>
                    </div>
                </figcaption>
            </figure>
        </div>
    );
}

export default PokemonCard;
