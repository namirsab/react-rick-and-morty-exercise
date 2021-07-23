import "./App.css";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import LoadMore from "./components/LoadMore";

function App() {
  return (
    <div className="App">
      <Header />
      <CharacterCard />
      <LoadMore />
    </div>
  );
}

export default App;
