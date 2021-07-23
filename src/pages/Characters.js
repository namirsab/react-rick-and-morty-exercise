import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters((prevChar) => {
          return [...prevChar, ...data.results];
        });
        setTotalPages(data.info.pages);
      });
  }, [page]);

  function handleLoadMore() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

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
      <div className="button__div">
        <button className="button__loadMore" onClick={handleLoadMore}>
          Load More
        </button>
      </div>
    </div>
  );
}
