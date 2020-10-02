import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Navigation from "./Components/Common/Navigation";
import Principal from "./Components/Principal/Principal";
import Skills from "./Components/Skills/Skills";
import HoneycombMenu from "./Components/Common/HoneycombMenu";
import Educacion from "./Components/Educacion/Educacion";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contacto from "./Components/Contacto/Contacto";
import Footer from "./Components/Common/Footer";

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
          <Educacion></Educacion>
        </Route>
        <Route exact path="/portfolio">
          <Portfolio></Portfolio>
        </Route>
        <Route exact path="/contact">
          <Contacto></Contacto>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
