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
        <section key={id} className="Character-card--wrapper">
          <Link to={`/character/${id}`}>
            <p>{character.name}</p>
          </Link>
          <img
            className="Character-Card__image"
            src={character.image}
            alt={character.name}
          />
        </section>
      );
    });
  }

  return <div className="CharacterList__wrapper">{renderCharacters()}</div>;
}
