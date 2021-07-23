import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function SingleCharacter() {
  const [character, setCharacter] = useState(null);

  const { charId } = useParams();
  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${charId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  }, [charId]);

  function renderCharacter() {
    const { name, status, species, gender, origin, image } = character;
    return (
      <div className="singleChar__card">
        <h2>{name}</h2>
        <img src={image} alt={`${name} avatar`} />
        <div className="singleChar__textBox">
          <p
            className={`characters__status${
              status === "Alive"
                ? " alive"
                : status === "Dead"
                ? " dead"
                : " unknown"
            }`}
          >
            Status: {status}
          </p>
          <p>Species: {species}</p>
          <p>Gender: {gender}</p>
          <p>Origin: {origin.name}</p>
        </div>
      </div>
    );
  }

  return <div>{character && renderCharacter()}</div>;
}
