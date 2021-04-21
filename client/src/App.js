import "./App.css";
import { Fib } from "./Fib";
import { OtherPage } from "./OtherPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to={"/"}>Home</Link>
        <br />
        <Link to={"/otherpage"}>OtherPage</Link>
        <br />
      </div>
      <div>
        <Route exact path="/">
          <Fib />
        </Route>
        <Route exact path="/otherpage">
          <OtherPage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
