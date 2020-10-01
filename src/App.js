import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Navigation from "./Components/Common/Navigation";
import Principal from "./Components/Principal/Principal";
import Skills from "./Components/Skills/Skills"
import HoneycombMenu from "./Components/Common/HoneycombMenu";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Router>
      <Navigation showMenu={showMenu} setShowMenu={setShowMenu}></Navigation>
      <CSSTransition
        in={showMenu}
        timeout={1000}
        classNames="honeycombmenu"
        unmountOnExit
      >
        <HoneycombMenu></HoneycombMenu>
      </CSSTransition>
      <Switch>
        <Route exact path="/">
          <Principal></Principal>
        </Route>
        <Route exact path="/skills">
        <Skills></Skills>
        </Route>
        <Route exact path="/education">
 
        </Route>
        <Route exact path="/portfolio">

        </Route>
        <Route exact path="/contact">
   
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
