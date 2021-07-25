import "./CharacterCard.css";
import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <div className="app__character-card">
      <Link className="app__character-link" to={`/character/${character.id}`}>
        <img
          className="app__character-img"
          src={character.image}
          alt={character.name}
        />
        <p>{character.name}</p>
      </Link>
    </div>
  );
}
