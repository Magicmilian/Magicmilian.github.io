import React from "react";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faReact,
  faJsSquare,
  faGitAlt,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faServer,
  faUsers,
  faUserPlus,
  faExchangeAlt,
  faChartArea,
  faExclamation,
  faFire,
  faCommentsDollar,
  faBalanceScale,
  faShieldAlt,
  faClipboardList,
  faListOl,
  faChess
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const background = {
    backgroundImage: "url(/background.jpg)",
    minHeight: "calc(100vh - 80px)",
    backgroundSize: "cover",
    paddingBottom: "10px",
  };
  return (
    <div style={background}>
      <div className="container py-5">
        <section className="mb-4">
          <p className="unicaFont skillTitle col-12">IT Skills</p>
          <div className="skillContainer unicaFont">
            <div className="skillElement">
              <FontAwesomeIcon icon={faHtml5} size="3x" />
              <p>HTML5</p>
            </div>
            <div className="skillElement">
              <FontAwesomeIcon icon={faCss3Alt} size="3x" />
              <p>CSS</p>
            </div>
            <div className="skillElement">
              <FontAwesomeIcon icon={faJsSquare} size="3x" />
              <p>Javascript</p>
            </div>
            <div className="skillElement">
              <FontAwesomeIcon icon={faGitAlt} size="3x" />
              <p>Git</p>
            </div>
            <div className="skillElement">
              <FontAwesomeIcon icon={faNode} size="3x" />
              <p>Node.js</p>
            </div>
            <div className="skillElement">
              <FontAwesomeIcon icon={faReact} size="3x" />
              <p>React</p>
            </div>
            <div className="skillElement">
              <FontAwesomeIcon icon={faDatabase} size="3x" />
              <p>MongoDB</p>
            </div>
            <div className="skillElement">
              <FontAwesomeIcon icon={faServer} size="3x" />
              <p>Express.js</p>
            </div>
          </div>
        </section>
        <section className="mb-4">
          <p className="unicaFont skillTitle col-12">Soft Skills</p>
          <div className="skillContainer unicaFont">
            <div className="skillElement">
              <FontAwesomeIcon icon={faUsers} size="3x" />
              <p>Trabajo en equipo</p>
            </div>
            <div className="skillElement">
              <FontAwesomeIcon icon={faUserPlus} size="3x" />
              <p>Liderazgo</p>
            </div>
            <div className="skillElement">
              <FontAwesomeIcon icon={faExchangeAlt} size="3x" />
              <p>Negociacion</p>
            </div>
            <div className="skillElement">
              <FontAwesomeIcon icon={faChartArea} size="3x" />
              <p>Presentacion</p>
            </div>
            <div className="skillElement">
              <FontAwesomeIcon icon={faExclamation} size="3x" />
              <p>Pensamiento creativo</p>
            </div>
            <div className="skillElement">
              <FontAwesomeIcon icon={faFire} size="3x" />
              <p>Y mas...</p>
            </div>
          </div>
        </section>
        <section className="mb-4">
          <p className="unicaFont skillTitle col-12">Business Skills</p>
          <div className="skillContainer unicaFont">
            <div className="skillElement">
              <FontAwesomeIcon icon={faCommentsDollar} size="3x" />
              <p>Marketing</p>
            </div>
            <div className="skillElement">
              <FontAwesomeIcon icon={faBalanceScale} size="3x" />
              <p>Finanzas</p>
            </div>
            <div className="skillElement">
              <FontAwesomeIcon icon={faShieldAlt} size="3x" />
              <p>Control Interno</p>
            </div>
            <div className="skillElement">
              <FontAwesomeIcon icon={faClipboardList} size="3x" />
              <p>Auditoria</p>
            </div>
            <div className="skillElement">
              <FontAwesomeIcon icon={faListOl} size="3x" />
              <p>Planificacion</p>
            </div>
            <div className="skillElement">
              <FontAwesomeIcon icon={faChess} size="3x" />
              <p>Estrategia</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
