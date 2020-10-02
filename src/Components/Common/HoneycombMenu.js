import React from "react";
import { Link } from "react-router-dom";
import "./honeycombmenu.css";

const HoneycombMenu = (props) => {
  return (
    <div className="honeycomb-container">
      <ul className="honeycomb">
        <li className="honeycomb-cell col-12">
        <Link to={`/`} className="text-decoration-none" onClick={() => props.setShowMenu(!props.showMenu)}>
          <img
            className="honeycomb-cell-img"
            src={process.env.PUBLIC_URL + "principal-honeycomb.jpg"}
            alt="Persona con mascara de neon"
          />
          <div className="honeycomb-cell-title">Principal</div>
          </Link>
        </li>
        <li className="honeycomb-cell col-12">
        <Link to={`/skills`} className="text-decoration-none" onClick={() => props.setShowMenu(!props.showMenu)}>
          <img
            className="honeycomb-cell-img"
            src={process.env.PUBLIC_URL + "skills-honeycomb.jpg"}
            alt="Chispas"
          />
          <div className="honeycomb-cell-title">Skills</div>
          </Link>
        </li>
        <li className="honeycomb-cell col-12">
        <Link to={`/education`} className="text-decoration-none" onClick={() => props.setShowMenu(!props.showMenu)}>
          <img
            className="honeycomb-cell-img"
            src={process.env.PUBLIC_URL + "education-honeycomb.jpg"}
            alt="Taza de cafe"
          />
          <div className="honeycomb-cell-title">Educacion</div>
          </Link>
        </li>
        <li className="honeycomb-cell col-12">
        <Link to={`/projects`} className="text-decoration-none" onClick={() => props.setShowMenu(!props.showMenu)}>
          <img
            className="honeycomb-cell-img"
            src={process.env.PUBLIC_URL + "portfolio-honeycomb.jpg"}
            alt="Teclado luminoso"
          />
          <div className="honeycomb-cell-title">Portfolio</div>
          </Link>
        </li>
        <li className="honeycomb-cell col-12">
        <Link to={`/contact`} className="text-decoration-none" onClick={() => props.setShowMenu(!props.showMenu)}>
          <img
            className="honeycomb-cell-img"
            src={process.env.PUBLIC_URL + "contact-honeycomb.jpg"}
            alt="Telefono antiguo"
          />
          <div className="honeycomb-cell-title">Contacto</div>
          </Link>
        </li>
        <li className="honeycomb-cell honeycomb-hidden"></li>
      </ul>
    </div>
  );
};

export default HoneycombMenu;
