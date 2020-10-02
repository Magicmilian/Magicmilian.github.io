import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Navigation = (props) => {
  return (
    <nav id="navContainer">
      <Link to={`/`} className="text-decoration-none col-12 col-sm-10">
        <div id="cvAuthor">Maximiliano Diaz Huerta</div>
      </Link>
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
