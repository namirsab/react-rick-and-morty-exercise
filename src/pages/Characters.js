import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import StatusSelect from "../components/StatusSelect";

export default function Characters() {
  const [filter, setFilter] = useState("");
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);
  const [statusSearch, setStatusSearch] = useState("");
  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${filter}&?status=${statusSearch}`;
    console.log(url);
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
    return characters
      .filter((status) => status.status.includes(statusSearch))
      .filter((name) => name.name.toLowerCase().includes(filter.toLowerCase()))

      .map((char) => {
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

  function saveNewFilter(newFilter) {
    setFilter(newFilter);
  }
  function saveNewStatus(newStatus) {
    setStatusSearch(newStatus);
  }

  return (
    <div className="characters__content">
      <Input saveNewFilter={saveNewFilter} />
      <StatusSelect saveNewStatus={saveNewStatus} />
      <ul>{renderCharacters()}</ul>

      <div className="button__div">
        <button className="button__loadMore" onClick={handleLoadMore}>
          Load More
        </button>
      </div>
    </div>
  );
}
