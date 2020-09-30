import React from "react";
import "./honeycombmenu.css";

const HoneycombMenu = () => {
  return (
    <div className="honeycomb-container">
      <ul className="honeycomb">
        <li className="honeycomb-cell col-12">
          <img
            className="honeycomb-cell-img"
            src={process.env.PUBLIC_URL + "principal-honeycomb.jpg"}
            alt=""
          />
          <div className="honeycomb-cell-title">Principal</div>
        </li>
        <li className="honeycomb-cell col-12">
          <img
            className="honeycomb-cell-img"
            src={process.env.PUBLIC_URL + "skills-honeycomb.jpg"}
            alt=""
          />
          <div className="honeycomb-cell-title">Skills</div>
        </li>
        <li className="honeycomb-cell col-12">
          <img
            className="honeycomb-cell-img"
            src={process.env.PUBLIC_URL + "education-honeycomb.jpg"}
            alt=""
          />
          <div className="honeycomb-cell-title">Educacion</div>
        </li>
        <li className="honeycomb-cell col-12">
          <img
            className="honeycomb-cell-img"
            src={process.env.PUBLIC_URL + "portfolio-honeycomb.jpg"}
            alt=""
          />
          <div className="honeycomb-cell-title">Portfolio</div>
        </li>
        <li className="honeycomb-cell col-12">
          <img
            className="honeycomb-cell-img"
            src={process.env.PUBLIC_URL + "contact-honeycomb.jpg"}
            alt=""
          />
          <div className="honeycomb-cell-title">Contacto</div>
        </li>
        <li className="honeycomb-cell honeycomb-hidden"></li>
      </ul>
    </div>
  );
};

export default HoneycombMenu;
