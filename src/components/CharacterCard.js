import "./CharacterCard.css";

export default function CharacterCard({ character }) {
  return (
    <div className="app__character-card">
      <img src={character.image} alt={character.name} />
      <p>{character.name}</p>
    </div>
  );
}
