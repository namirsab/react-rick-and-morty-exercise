import "./CharacterCard.css";
import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <div className="app__character-card">
      <Link to={`/character/${character.id}`}>
        <img src={character.image} alt={character.name} />
        <p>{character.name}</p>
      </Link>
    </div>
  );
}
