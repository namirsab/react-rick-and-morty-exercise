import "./App.css";
import Home from "./pages/Home";
import AllCharacters from "./pages/AllCharacters";
import OneCharacter from "./pages/OneCharacter";
import Header from "./components/Header";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
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
