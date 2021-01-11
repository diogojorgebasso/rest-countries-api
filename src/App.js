import Header from "./Header";
import Search from "./Search";
import Countries from "./Countries";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search />
      <Countries></Countries>
      <div className="atributions">
        Made by <a href="https://github.com/diogojorgebasso">Diogo Basso</a> for
        <a href="frontendmentor.io">Frontend Mentor</a>
      </div>
    </div>
  );
}

export default App;
