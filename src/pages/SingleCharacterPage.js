import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleCharacterPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
      });
  }, [id]);

  function renderCharacter() {
    return (
      <>
        <h2>{character?.name}</h2>
        <img src={character?.image} alt={character?.name} />
        <ul>
          <li>{character?.status}</li>
          <li>{character?.gender}</li>
          <li>{character?.species}</li>
          <li>{character?.type}</li>
          <li>{character?.location?.name}</li>
        </ul>
      </>
    );
  }

  return <section>{renderCharacter()}</section>;
}
