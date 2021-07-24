import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Favourites() {
  const { favourites } = useContext(GlobalContext);

  return (
    <div>
      <h1>Favourites</h1>
      {favourites
        .filter(
          (favourites, index, self) =>
            index ===
            self.findIndex(
              (t) => t.id === favourites.id && t.name === favourites.name
            )
        )
        .map((char) => (
          <div className="singleChar__card">
            <h2>{char.name}</h2>
            <img src={char.image} alt={`${char.name} avatar`} />
            <div className="singleChar__textBox">
              <p
                className={`characters__status${
                  char.status === "Alive"
                    ? " alive"
                    : char.status === "Dead"
                    ? " dead"
                    : " unknown"
                }`}
              >
                Status: {char.status}
              </p>
              <p>Species: {char.species}</p>
              <p>Gender: {char.gender}</p>
              <p>Origin: {char.origin.name}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
