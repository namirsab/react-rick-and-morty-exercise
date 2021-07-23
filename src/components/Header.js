import { NavLink } from "react-router-dom";
import randm from "../images/randm.png";
export default function Header() {
  return (
    <header className="App-Header">
      <nav className="App-Header__Nav">
        <img className="App-Header--Logo" src={randm} alt="Logo" />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
      </nav>
    </header>
  );
}
