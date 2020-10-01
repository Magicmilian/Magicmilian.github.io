import React from "react";
import "./honeycombmenu.css";

const HoneycombMenu = () => {
  return (
    <div className="honeycomb-container">
      <ul className="honeycomb">
        <li className="honeycomb-cell col-12">
        <a className="text-decoration-none" href="/">
          <img
            className="honeycomb-cell-img"
            src={process.env.PUBLIC_URL + "principal-honeycomb.jpg"}
            alt="Persona con mascara de neon"
          />
          <div className="honeycomb-cell-title">Principal</div>
          </a>
        </li>
        <li className="honeycomb-cell col-12">
        <a className="text-decoration-none" href="/skills">
          <img
            className="honeycomb-cell-img"
            src={process.env.PUBLIC_URL + "skills-honeycomb.jpg"}
            alt="Chispas"
          />
          <div className="honeycomb-cell-title">Skills</div>
          </a>
        </li>
        <li className="honeycomb-cell col-12">
        <a className="text-decoration-none" href="/education">
          <img
            className="honeycomb-cell-img"
            src={process.env.PUBLIC_URL + "education-honeycomb.jpg"}
            alt="Taza de cafe"
          />
          <div className="honeycomb-cell-title">Educacion</div>
          </a>
        </li>
        <li className="honeycomb-cell col-12">
        <a className="text-decoration-none" href="/portfolio">
          <img
            className="honeycomb-cell-img"
            src={process.env.PUBLIC_URL + "portfolio-honeycomb.jpg"}
            alt="Teclado luminoso"
          />
          <div className="honeycomb-cell-title">Portfolio</div>
          </a>
        </li>
        <li className="honeycomb-cell col-12">
        <a className="text-decoration-none" href="/contact">
          <img
            className="honeycomb-cell-img"
            src={process.env.PUBLIC_URL + "contact-honeycomb.jpg"}
            alt="Telefono antiguo"
          />
          <div className="honeycomb-cell-title">Contacto</div>
          </a>
        </li>
        <li className="honeycomb-cell honeycomb-hidden"></li>
      </ul>
    </div>
  );
};

export default HoneycombMenu;
