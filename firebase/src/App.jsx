
import './App.css';

import {
  BrowserRouter as Router, // Es el tag que engloba todas la rutas
  Switch, // Fo change between pages
  Route, // It is a router. It is necessary for one for page
} from "react-router-dom";

import Home from './components/Home';
import Admin from './components/Admin';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h2>Hello World</h2>
      <Router>
        <Switch>
          <Route path="/" >
            <Home></Home>
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/login" >
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
