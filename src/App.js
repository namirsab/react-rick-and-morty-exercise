import { NavLink, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <p>R&M LOGO</p>
        <nav className="Header__navigation">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/characters">Characters</NavLink>
        </nav>
      </header>
      <main className="Main">
        <Switch>
          <Route path="/characters/:id">Single Character</Route>
          <Route path="/characters">Characters Page</Route>
          <Route path="/">Home</Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
