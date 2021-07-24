import { useEffect, useState, useContext } from "react";

import Input from "../components/Input";
import StatusSelect from "../components/StatusSelect";

import useLocalStorageState from "use-local-storage-state";
import RenderCharacter from "../components/RenderCharacter";

export default function Characters() {
  const [filter, setFilter] = useState("");
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);
  const [statusSearch, setStatusSearch] = useState("");

  //   const [heartActive, setHeartActive] = useState(false);

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

  function saveNewFilter(newFilter) {
    setFilter(newFilter);
  }
  function saveNewStatus(newStatus) {
    setStatusSearch(newStatus);
  }
  console.log(Object.keys(characters));
  return (
    <div className="characters__content">
      <Input saveNewFilter={saveNewFilter} />
      <StatusSelect saveNewStatus={saveNewStatus} />
      <ul>
        <RenderCharacter
          characters={characters}
          filter={filter}
          statusSearch={statusSearch}
        />
      </ul>

      <div className="button__div">
        <button className="button__loadMore" onClick={handleLoadMore}>
          Load More
        </button>
      </div>
    </div>
  );
}
