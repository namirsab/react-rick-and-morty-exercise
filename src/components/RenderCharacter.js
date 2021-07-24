import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function RenderCharacter({
  characters,
  statusSearch,
  filter,
  char,
}) {
  const { addChartoFavourites, favourites } = useContext(GlobalContext);
  //   let favouritedChar = favourites.find((o) => o.index === characters.index);

  //   console.log(favouritedChar);
  //   const favouritedDisabled = favouritedChar ? true : false;

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
          </Link>
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
          <button
            // disabled={favouritedDisabled}
            onClick={() => addChartoFavourites(char)}
          >
            ♥️
          </button>
        </li>
      );
    });
}
