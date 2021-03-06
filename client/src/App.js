import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'; // import our pages 
import Saved from './pages/Saved';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Home' component={Home} />
          <Route exact path='/Saved' component={Saved} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
