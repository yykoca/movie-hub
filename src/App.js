import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Watched from "./Pages/Watched";
import About from "./Pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/watched" component={Watched} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
