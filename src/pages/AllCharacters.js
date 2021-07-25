import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import LoadMore from "../components/LoadMore";

export default function AllCharacters() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllCharacters([...allCharacters, ...data.results]);
      });
  }, [page]);

  function handleOnClick() {
    setPage(page + 1);
  }

  return (
    <>
      <div className="app__all-characters">
        {allCharacters.map((character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </div>
      <LoadMore onClick={handleOnClick} />
    </>
  );
}
