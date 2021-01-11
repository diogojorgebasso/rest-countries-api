import Header from "./Header";
import Search from "./Search";
import Countries from "./Countries";
import Atributions from "./Atributions";
import Countrie from "./Countrie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/:id">
            <Countrie />
          </Route>
          <Route path="/">
            {/*Make sure it  s the last one*/}
            <Search />
            <Countries />
            <Atributions />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
