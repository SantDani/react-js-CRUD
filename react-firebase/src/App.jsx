
import './App.css';

import {
  BrowserRouter as Router, 
  Switch, // Fo change between pages
  Route // It is a router. It is necessary for one for page
  
} from "react-router-dom";

import Home from './components/Home';
import Admin from './components/Admin';
import Login from './components/Login';
import Menu from './components/Menu';
import AddProduct from './components/AddProduct';

function App() {
  return (
    
    <Router>
    <Menu/>
    <Switch>
      <Route path="/" component={Home} exact>
        
      </Route>
      <Route path="/admin">
        <Admin/>
      </Route>
      <Route path="/login" >
        <Login/>
      </Route>
      <Route path="/new-product" >
        <AddProduct/>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
