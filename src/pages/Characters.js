import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  //   function renderCharacters() {
  //     if (characters) {
  //       return characters.map((char) => {
  //         return <p>{char.name}</p>;
  //       });
  //     }
  //   }

  function renderCharacters() {
    return characters.map((char) => {
      const { name, status, species, gender, origin, image, id } = char;
      return (
        <li key={id} className="character__liItem">
          <Link className="li__Link" to={`/characters/${id}`}>
            <img src={image} alt={`${name} avatar`} />

            <p className="character__name">{name}</p>
            <p
              className={`characters__status${
                status === "Alive"
                  ? " alive"
                  : status === "Dead"
                  ? " dead"
                  : " unknown"
              }`}
            >
              {status}
            </p>
            <p>{species}</p>
            <p>{gender}</p>
            <p>{origin.name}</p>
          </Link>
        </li>
      );
    });
  }

  return (
    <div>
      <ul>{renderCharacters()}</ul>
    </div>
  );
}
// {characters && characters.map((char) => <li>{char.name}</li>)}
