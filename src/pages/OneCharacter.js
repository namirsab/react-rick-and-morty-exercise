import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./OneCharacter.css";

export default function OneCharacter() {
  const { characterId } = useParams();
  const [character, setCharacter] = useState();

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${characterId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCharacter(data);
      });
  }, [characterId]);
  return (
    <div className="app__one-character-page--container">
      <div className="app__one-character-page">
        <p>{character?.name}</p>
        <img src={character?.image} alt={character?.name} />
        <p>{character?.status}</p> <p>{character?.gender}</p>{" "}
        <p>{character?.species}</p>
        <p>{character?.type}</p>
      </div>
    </div>
  );
}
