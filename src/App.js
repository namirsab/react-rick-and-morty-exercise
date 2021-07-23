import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Router>
  );
}

export default App;
