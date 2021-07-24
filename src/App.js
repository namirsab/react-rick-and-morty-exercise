import "./App.css";
import Home from "./pages/Home";
import AllCharacters from "./pages/AllCharacters";
import OneCharacter from "./pages/OneCharacter";
import {
  Switch,
  Route,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app__header">
          <nav className="app__nav">
            <NavLink className="app__nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="app__nav-link" to="/characters">
              All characters
            </NavLink>
          </nav>
        </header>
        <main className="app__main">
          <Switch>
            <Route path="/character/:characterId">
              <OneCharacter />
            </Route>
            <Route path="/characters">
              <AllCharacters />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Home />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
