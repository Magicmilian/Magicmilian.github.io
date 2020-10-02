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
import ContactoEN from "./Components/Contacto/ContactoEN";
import Footer from "./Components/Common/Footer";
import FooterEN from "./Components/Common/FooterEN";
import PrincipalEN from "./Components/Principal/PrincipalEN";
import SkillsEN from "./Components/Skills/SkillsEN";
import EducacionEN from "./Components/Educacion/EducacionEN";
import PortfolioEN from "./Components/Portfolio/PortfolioEN";
import HoneycombMenuEN from "./Components/Common/HoneycombMenuEN";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [englishLang, setEnglishLang] = useState(false);

  return (
    <Router>
      <Navigation showMenu={showMenu} setShowMenu={setShowMenu}></Navigation>
      <CSSTransition
        in={showMenu}
        timeout={1000}
        classNames="honeycombmenu"
        unmountOnExit
      >
        {englishLang === false ? <HoneycombMenu></HoneycombMenu> : <HoneycombMenuEN></HoneycombMenuEN>}
      </CSSTransition>
      <Switch>
        <Route exact path="/">
          {englishLang === false ? (
            <Principal setEnglishLang={setEnglishLang}></Principal>
          ) : (
            <PrincipalEN setEnglishLang={setEnglishLang}></PrincipalEN>
          )}
        </Route>
        <Route exact path="/skills">
          {englishLang === false ? <Skills></Skills> : <SkillsEN></SkillsEN>}
        </Route>
        <Route exact path="/education">
          {englishLang === false ? (
            <Educacion></Educacion>
          ) : (
            <EducacionEN></EducacionEN>
          )}
        </Route>
        <Route exact path="/portfolio">
        {englishLang === false ? <Portfolio></Portfolio> : <PortfolioEN></PortfolioEN>}
        </Route>
        <Route exact path="/contact">
        {englishLang === false ? <Contacto></Contacto> : <ContactoEN></ContactoEN>}
        </Route>
      </Switch>
      {englishLang === false ? <Footer></Footer> : <FooterEN></FooterEN>}
    </Router>
  );
}

export default App;
