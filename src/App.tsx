import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Public from "./components/Public";
import Private from "./components/Private";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <ul>
        <li>
          <Link to="/">public component</Link>
        </li>
        <li>
          <Link to="/private">private component</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/">
          <Public />
        </Route>
        <Route path="/private">
          <Private />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
