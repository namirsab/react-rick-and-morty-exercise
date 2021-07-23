import homeWP from "../img/homewp.png";

export default function home() {
  return (
    <div>
      <h1>Welcome to the Rick and Morty App</h1>
      <img
        className="home__img"
        alt="home wallpaper of Rick and Morty"
        src={homeWP}
      />
    </div>
  );
}
