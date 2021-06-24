import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Pages/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route exact path="/" component={Home}/> */}
        {/* <Route path="/favorites" component={Favorites}/> */}
        {/* <Route path="/watched" component={Watched Films}/> */}
        {/* <Route path="/about" component={About}/> */}
        
      </Switch>
    </Router>
  );
}

export default App;
