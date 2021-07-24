import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Header />
          <Main />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
