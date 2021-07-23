import Characters from "../pages/Characters";
import Home from "../pages/Home";
import SingleCharacter from "../pages/SingleCharacter";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
import "./Main.css";

export default function Main() {
  return (
    <main className="main__content">
      <Switch>
        <Route path="/characters/:charId">
          <SingleCharacter />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <h2>Error 404 - Page not found</h2>
        </Route>
      </Switch>
    </main>
  );
}
