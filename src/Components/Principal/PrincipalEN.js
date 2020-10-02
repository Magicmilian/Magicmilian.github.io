import React from "react";
import "./principal.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faGrinStars,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const PrincipalEN = (props) => {
  const background = {
    backgroundImage: "url(/background.jpg)",
    minHeight: "calc(100vh - 80px)",
    backgroundSize: "cover",
    paddingBottom: "10px",
  };

  const today = new Date();
  const birth = new Date("1993-06-15");
  const ageMs = Math.abs(today - birth);
  const age = Math.floor(ageMs / (1000 * 3600 * 24 * 365.25));

  return (
    <div style={background} className="unicaFont">
      <div className="d-flex flex-wrap py-3 mainSection">
        <div className="col-12 col-md-6 col-lg-5 align-items-center justify-content-center d-flex flex-wrap">
          <div className="text-center text-md-left col-12 col-sm-7 col-md-9">
            <img
              id="authorImg"
              src={process.env.PUBLIC_URL + "author.jpg"}
              alt="Foto de Maximiliano Diaz Huerta"
            />
          </div>
          <div className="p-0 my-2 d-flex flex-row flex-wrap col-12 col-sm-2  justify-content-center">
            <a
              href="https://www.facebook.com/magicmilian"
              target="_blank"
              rel="noopener noreferrer"
              className="socialButtons my-2 col-3 col-sm-12 text-center text-decoration-none"
            >
              {" "}
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a
              href="https://www.instagram.com/magicmilian/"
              target="_blank"
              rel="noopener noreferrer"
              className="socialButtons my-2 col-3 col-sm-12 text-center text-decoration-none"
            >
              {" "}
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
            <a
              href="https://github.com/Magicmilian"
              target="_blank"
              rel="noopener noreferrer"
              className="socialButtons my-2 col-3 col-sm-12 text-center text-decoration-none"
            >
              {" "}
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
            <a
              href="https://www.linkedin.com/in/roberto-maximiliano-diaz-huerta-51323a149"
              target="_blank"
              rel="noopener noreferrer"
              className="socialButtons my-2 col-3 col-sm-12 text-center text-decoration-none"
            >
              {" "}
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6" id="titulos">
          <h1 className="my-4">Full Stack developer</h1>
          <h1>Degree in Administration</h1>
          <div className="d-flex flex-wrap justify-content-center">
            <Link
              to={`/contact`}
              className="mainButtons my-3 mx-2 col-12 col-sm-5"
            >
              <p>CONTACT ME</p>
            </Link>
            <div
              onClick={() => props.setEnglishLang(false)}
              className="mainButtons my-3 mx-2 col-12 col-sm-5"
            >
              <p>ESPAÑOL</p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap container justify-content-around exoFont">
        <article className="articlePrincipal col-sm-12 shadow py-4 my-4 bg-white rounded">
          <h3 className="text-warning text-center">
            Basic Information <FontAwesomeIcon icon={faCommentDots} size="1x" />
          </h3>
          <hr />
          <p>
            <strong>Age:</strong> {age} years
          </p>
          <p>
            <strong>Email:</strong> diazhuerta93@gmail.com
          </p>
          <p>
            <strong>Phone number:</strong> +54 381 6150013
          </p>
          <p>
            <strong>Location:</strong> San Miguel de Tucuman, Tucuman, Argentina
          </p>
          <h3 className="text-warning text-center">
            My story <FontAwesomeIcon icon={faGrinStars} size="1x" />
          </h3>
          <hr />
          <p className="text-justify">
            {" "}
            After graduating with a degree in business administration, and based
            on the various experiences I had, I decided to learn programming and
            train as Full Stack (MERN). I consider that both branches of
            knowledge complement each other, since I have the point of view of
            companies, with the resolution capacity of a developer. Lover of
            technology and innovation. I have experience in customer management,
            results presentation through graphical methods and analytical
            capacity, among others aptitudes.{" "}
          </p>
        </article>
        <article className="articlePrincipal col-sm-12  shadow p-4 my-4 bg-white rounded">
          <h3 className="text-warning text-center">
            Experience <FontAwesomeIcon icon={faBriefcase} size="1x" />
          </h3>
          <hr />
          <Accordion defaultActiveKey="2">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <p className="mb-0">
                  <strong>Collections Supervisor</strong>
                </p>
                <p className="mb-0">RECUPERO CREDITICIO BY OSTENGO</p>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <p className="mb-0 mt-0">
                    <small>July 2019 - December 2019</small>
                  </p>
                  <hr />
                  <p className="text-justify">
                    During my time serving in the position, I was in charge of
                    planning and implementing strategies for the management of
                    collections on holders of several client companies of the
                    retail sector, preparation of reports on the results
                    obtained and portfolio composition, management of the work
                    team and daily relationship with client companies. Actively
                    participate in design and correction of automated
                    spreadsheets of arrears and penalties, as well as methods to
                    expedite routine activities.
                  </p>
                  <p>
                    Skills:
                    <span className="mx-1 badge badge-info">
                      Microsoft Office
                    </span>
                    <span className="mx-1 badge badge-success">
                      Presentation of data
                    </span>
                    <span className="mx-1 badge badge-dark">
                      Team Management
                    </span>
                    <span className="mx-1 badge badge-primary">
                      Customer Satisfaction
                    </span>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <p className="mb-0">
                  <strong>Risk Advisor</strong>
                </p>
                <p className="mb-0">DELOITTE ARGENTINA</p>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <p className="mb-0 mt-0">
                    <small>November 2017 - March 2019</small>
                  </p>
                  <hr />
                  <p className="text-justify">
                    In the company, I was able to make the following list of
                    activities for various clients belonging to the Energy,
                    Pharmaceutical, Wholesale and retailer, among others: Risk
                    analysis. Survey of business cycles, and IT processes.
                    Detailed documentation of processes. Analysis on
                    development, implementation and operational effectiveness
                    over controls. Validation of observations detected.
                    Development of presentations based on conclusions. Testing
                    of accounting records (Journal Entry Testing). Inventory
                    count. Policy compliance verification. Management
                    requirements and requests.
                  </p>
                  <p>
                    Skills:
                    <span className="mx-1 badge badge-info">
                      Microsoft Office
                    </span>
                    <span className="mx-1 badge badge-success">
                      Presentation of data
                    </span>
                    <span className="mx-1 badge badge-dark">
                      Team Management
                    </span>
                    <span className="mx-1 badge badge-primary">
                      Customer Satisfaction
                    </span>
                    <span className="mx-1 badge badge-danger">SQL</span>
                    <span className="mx-1 badge badge-danger">SAP</span>
                    <span className="mx-1 badge badge-dark">
                      Project meetings
                    </span>
                    <span className="mx-1 badge badge-warning">
                      Only English projects
                    </span>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <p className="mb-0">
                  <strong>Technical service agent (Internship)</strong>
                </p>
                <p className="mb-0">DISCAR SC</p>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p className="mb-0 mt-0">
                    <small>2010 - Less than a year</small>
                  </p>
                  <hr />
                  <p className="text-justify">
                    Internship carried out for 3 months in 2010.
                    Responsibilities: carrying out activities at customer homes
                    related to the installation and technical service of LaPos
                    devices in San Miguel de Tucumán.
                  </p>
                  <p>
                    Skills:
                    <span className="mx-1 badge badge-info">
                      Microsoft Office
                    </span>
                    <span className="mx-1 badge badge-warning">
                      Road Management
                    </span>
                    <span className="mx-1 badge badge-primary">
                      Customer Satisfaction
                    </span>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </article>
      </div>
    </div>
  );
};

export default PrincipalEN;
