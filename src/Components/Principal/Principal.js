import React,{useEffect} from "react";
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

const Principal = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
          <h1>Licenciado en Administracion</h1>
          <div className="d-flex flex-wrap justify-content-center">
            <Link
              to={`/contact`}
              className="mainButtons my-3 mx-2 col-12 col-sm-5"
            >
              <p>CONTACTO</p>
            </Link>
            <div
              onClick={() => props.setEnglishLang(true)}
              className="mainButtons my-3 mx-2 col-12 col-sm-5"
            >
              <p>ENGLISH</p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap container justify-content-around exoFont">
        <article className="articlePrincipal col-sm-12 shadow py-4 my-4 bg-white rounded">
          <h3 className="text-warning text-center">
            Informacion Basica{" "}
            <FontAwesomeIcon icon={faCommentDots} size="1x" />
          </h3>
          <hr />
          <p>
            <strong>Edad:</strong> {age} años
          </p>
          <p>
            <strong>Email:</strong> diazhuerta93@gmail.com
          </p>
          <p>
            <strong>Telefono:</strong> +54 381 6150013
          </p>
          <p>
            <strong>Ubicacion:</strong> San Miguel de Tucuman, Tucuman,
            Argentina
          </p>
          <h3 className="text-warning text-center">
            Mi historia <FontAwesomeIcon icon={faGrinStars} size="1x" />
          </h3>
          <hr />
          <p className="text-justify">
            {" "}
            Tras recibirme de administrador de empresas, y en base a las
            diversas experiencias que tuve, decidi aprender programacion y me
            capacite como Full Stack (MERN). Considero que ambas ramas del
            conocimiento se complementan, ya que cuento con el punto de vista de
            las empresas, y con la capacidad de resolucion de un desarrollador.
            Amante de la tecnología y la innovación. Cuento con experiencia en
            el trato a clientes, presentación de resultados
            mediante métodos gráficos y capacidad analítica, entre otras
            aptitudes.{" "}
          </p>
        </article>
        <article className="articlePrincipal col-sm-12  shadow p-4 my-4 bg-white rounded">
          <h3 className="text-warning text-center">
            Experiencia <FontAwesomeIcon icon={faBriefcase} size="1x" />
          </h3>
          <hr />
          <Accordion defaultActiveKey="2">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <p className="mb-0">
                  <strong>Supervisor de cobranzas</strong>
                </p>
                <p className="mb-0">RECUPERO CREDITICIO BY OSTENGO</p>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <p className="mb-0 mt-0">
                    <small>Julio 2019 - Diciembre 2019</small>
                  </p>
                  <hr />
                  <p className="text-justify">
                    Durante mi tiempo desempeñandome en la posicion, estuve a
                    cargo de la planificación e implementacion de estrategias
                    para la gestion de cobranzas sobre titulares de varias
                    empresas clientes del rubro retail, elaboracion de informes
                    sobre los resultados obtenidos y composicion de cartera, de
                    la administracion del equipo de trabajo y de la relacion
                    diaria con las empresas cliente. Participe activamente en el
                    diseño y correccion de planillas automatizadas de calculo de
                    mora y punitorios, como tambien métodos para agilizar
                    actividades rutinarias.
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
                  <strong>Asesor de riesgo</strong>
                </p>
                <p className="mb-0">DELOITTE ARGENTINA</p>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <p className="mb-0 mt-0">
                    <small>Noviembre 2017 - Marzo 2019</small>
                  </p>
                  <hr />
                  <p className="text-justify">
                    En la compañía, pude realizar la siguiente lista de
                    actividades para diversos clientes pertenecientes a las
                    industrias de Energía, Farmacéutica, Venta Mayorista y
                    minorista, entre otros: Análisis de riesgos. Relevamiento de
                    ciclos de negocio, y procesos de IT. Documentación detallada
                    de procesos. Análisis sobre desarrollo, implementación y
                    eficacia operativa sobre controles. Validación de
                    observaciones detectadas. Desarrollo de presentaciones en
                    base a conclusiones. Testeo de registraciones contables
                    (Journal Entry Testing). Recuento de inventarios.
                    Verificación de cumplimiento de políticas. Gestión de
                    requerimientos y solicitudes.
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
                  <strong>Agente de servicio tecnico (Pasantia)</strong>
                </p>
                <p className="mb-0">DISCAR SC</p>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p className="mb-0 mt-0">
                    <small>2010 - Menos de un año</small>
                  </p>
                  <hr />
                  <p className="text-justify">
                    Pasantía realizada durante 3 meses en el año 2010.
                    Responsabilidades: realizacion de actividades a domicilio
                    vinculadas a la instalación y servicio técnico de
                    dispositivos LaPos en San Miguel de Tucumán.
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

export default Principal;
