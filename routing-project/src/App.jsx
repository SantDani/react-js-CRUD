import './App.css';

import {
    BrowserRouter as Router,
    Switch, // Fo change between pages
    Route, // It is a router. It is necessary for one for page
    Link // It for send to other page, basic one link <a></a>
} from "react-router-dom";
import Users from "./Component/Users";
import UserDetails from "./Component/UserDetails";


function App() {
  return (
    <div className="container">
        <section className="container">
            <Router>
                <Link to="/">Users</Link>
                <Switch>
                    <Route path="/user/:id">
                        <UserDetails/>
                    </Route>
                    <Route path="/" exact>
                        <Users/>
                    </Route>
                </Switch>
            </Router>
        </section>
    </div>
  );
}

export default App;
