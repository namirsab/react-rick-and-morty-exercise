import { NavLink, Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="app__header">
      <Link to="/">
        <img
          className="app__img--header"
          src="https://vsthemes.org/uploads/posts/2019-03/1195118549.jpg"
          alt="Rick and Morty Logo"
        />
      </Link>
      <nav className="app__nav">
        <NavLink className="app__nav-link" exact to="/">
          Home
        </NavLink>
        <NavLink className="app__nav-link" to="/characters">
          All characters
        </NavLink>
      </nav>
    </header>
  );
}
