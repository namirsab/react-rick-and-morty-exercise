import homeWP from "../img/homewp.png";

export default function home() {
  return (
    <div className="home__content">
      <h1 className="home__h1">Welcome to the</h1>
      <img
        className="home__img"
        alt="home wallpaper of Rick and Morty"
        src={homeWP}
      />
      <h1 className="home__h1">Database</h1>
    </div>
  );
}
