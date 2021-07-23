import "./App.css";

import CharacterCard from "./components/CharacterCard";
import LoadMore from "./components/LoadMore";
import Home from "./pages/Home";
import AllCharacters from "./pages/AllCharacters";
import { Switch, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="app__header">
        <nav className="app__nav">
          <NavLink className="app__nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="app__nav-link" to="/AllCharacters">
            All characters
          </NavLink>
        </nav>
      </header>
      <main className="app__main">
        <Switch>
          <Route path="/AllCharacters">
            <AllCharacters />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Home />
        </Switch>
      </main>
      <LoadMore />
    </div>
  );
}

export default App;
