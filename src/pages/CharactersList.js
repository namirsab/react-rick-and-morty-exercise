import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);

  function renderCharacters() {
    return characters.map((character) => {
      const id = character.id;

      return (
        <li key={id} className="Character-Card">
          <Link to={`/character/${id}`}>
            <img src={character.image} alt={character.name} />
            {character.name}
          </Link>
        </li>
      );
    });
  }

  return <ul>{renderCharacters()}</ul>;
}
