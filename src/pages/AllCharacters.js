import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";

export default function AllCharacters() {
  const [allCharacters, setAllCharacters] = useState([]);
  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllCharacters(data.results);
      });
  }, []);

  return (
    <div className="app__all-characters">
      {allCharacters.map((character) => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </div>
  );
}
