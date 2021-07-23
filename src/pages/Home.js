import rickAndMortyAppCover from "../images/rickAndMortyAppCover.png";

export default function Home() {
  return (
    <>
      <h1>Welcome to the Rick and Morty App!</h1>
      <img
        className="Home-Img"
        src={rickAndMortyAppCover}
        alt="Rick and Morty"
      />
      <p>Developed by Adriana during the neuefische Bootcamp</p>
    </>
  );
}
