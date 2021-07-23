import { NavLink } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <header className="App__header">
      <nav className="header__nav">
        <NavLink exact to="/">
          <h2>Home</h2>
        </NavLink>
        <NavLink to="/characters">
          <h2>Characters</h2>
        </NavLink>
      </nav>
    </header>
  );
}
