import React from "react";
import "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Navigation = (props) => {
  return (
    <nav id="navContainer">
      <a className="text-decoration-none col-12 col-sm-10" href="/">
        <div id="cvAuthor">Maximiliano Diaz Huerta</div>
      </a>
      <div
        onClick={() => props.setShowMenu(!props.showMenu)}
        id="menuButton"
        className="text-light"
      >
        <FontAwesomeIcon
          className="mr-3 text-warning"
          icon={faArrowRight}
          size="2x"
        />
        <FontAwesomeIcon icon={faBars} size="2x" />
      </div>
    </nav>
  );
};

export default Navigation;
