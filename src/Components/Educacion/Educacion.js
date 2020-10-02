import React from "react";
import "./educacion.css";

const Educacion = () => {
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
          <p className="unicaFont educationTitle col-12">
            Full Stack Developer
          </p>
          <div className="card educationContainer mb-3 exoFont">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={process.env.PUBLIC_URL + "fullStackEducation.jpg"}
                  className="card-img imgContainer"
                  alt="Pantalla con codigo web"
                ></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    Institucion: Rolling Code School
                  </h5>
                  <p className="mb-0">
                    <strong>Fecha:</strong> Marzo 2020 - Septiembre 2020
                  </p>
                  <p>
                    <strong>Lugar:</strong> San Miguel de Tucuman - Argentina
                  </p>
                  <p className="card-text">
                    Durante el cursado de la capacitacion como desarrollador
                    Full Stack pude obtener diferentes habilidades y
                    conocimientos relativos a la programacion a modo de ser
                    capaz de desarrollar una aplicacion web desde el punto de
                    vista del front end, como del back end. Para lograr ese
                    aprendizaje, fui enseñado en html, css, y javascript como
                    conceptos fundamentales. Una vez logrado el entendimiento,
                    procedi a aprender el uso correcto de Node.js, Webpack, y
                    React (FrontEnd), como tambien Express.js y MongoDB
                    (Backend).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-4">
          <p className="unicaFont educationTitle col-12">
            Licenciado en Administracion
          </p>
          <div className="card educationContainer mb-3 exoFont">
            <div className="row no-gutters">
              <div className="col-md-4 order-0 order-md-2">
                <img
                  src={process.env.PUBLIC_URL + "businessEducation.jpg"}
                  className="card-img imgContainer"
                  alt="Pantalla con codigo web"
                ></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    Institucion: Facultad de Ciencias Economicas - UNT
                  </h5>
                  <p className="mb-0">
                    <strong>Fecha:</strong> Marzo 2011 - Diciembre 2016
                  </p>
                  <p>
                    <strong>Lugar:</strong> San Miguel de Tucuman - Argentina
                  </p>
                  <p className="card-text">
                   Obtuve este titulo universitario tras demostrar mis conocimientos y aptitudes obtenidos durante el cursado de la carrera en temas como Marketing, Finanzas, Recursos Humanos, Logistica, Analisis de Produccion, Estrategia empresarial, Estadistica, Contabilidad, entre otros. Obtuve tras finalizar la misma, una vision amplia e integral sobre el funcionamiento de diversas organizaciones y la capacidad de resolucion de problemas tanto tecnicos, como de caracter social/interpersonales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-4">
          <p className="unicaFont educationTitle col-12">
            Tecnico Electronico
          </p>
          <div className="card educationContainer mb-3 exoFont">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={process.env.PUBLIC_URL + "electronicEducation.jpg"}
                  className="card-img imgContainer"
                  alt="Pantalla con codigo web"
                ></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    Institucion: Instituto Tecnico Lorenzo Massa
                  </h5>
                  <p className="mb-0">
                    <strong>Fecha:</strong> Marzo 2005 - Diciembre 2010
                  </p>
                  <p>
                    <strong>Lugar:</strong> San Miguel de Tucuman - Argentina
                  </p>
                  <p className="card-text">
                    Durante mi educacion secundaria, aprendi sobre topicos relacionados a la electronica y al pensamiento logico. Empece mi camino en el mundo de la programacion y los algoritmos mediante la programacion de microcontroladores con PIC. Obtuve conocimientos sobre los diversos componentes electronicos y su funcionamiento, y sobre el calculo electrico en circuitos mediante diagramas. Fue esta etapa durante la cual incorpore en mi vida la capacidad de visualizar conceptos abstractos y de plantear problemas a resolver como un conjunto de pasos a seguir / subprocesos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Educacion;
