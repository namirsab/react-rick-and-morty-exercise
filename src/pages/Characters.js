import { useEffect, useState } from "react";

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
      const { name, status, species, gender, origin, image } = char;
      return (
        <li className="character__liItem">
          <img src={image} alt="char" />
          <p>{name}</p>
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
        </li>
      );
    });
  }

  return (
    <div>
      <h1>Characters</h1>
      <ul>{renderCharacters()}</ul>
    </div>
  );
}
// {characters && characters.map((char) => <li>{char.name}</li>)}
