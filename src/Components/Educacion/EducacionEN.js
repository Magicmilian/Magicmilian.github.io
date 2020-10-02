import React from "react";
import "./educacion.css";

const EducacionEN = () => {
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
                    Institution: Rolling Code School
                  </h5>
                  <p className="mb-0">
                    <strong>Date:</strong> March 2020 - September 2020
                  </p>
                  <p>
                    <strong>Place:</strong> San Miguel de Tucuman - Argentina
                  </p>
                  <p className="card-text">
                    During the course of the training as a developer Full Stack
                    I was able to get different abilities and knowledge related
                    to programming as a way of being capable of developing a web
                    application including front end, as well as back end. To
                    achieve that learning, I was taught in html, css, and
                    javascript as fundamental concepts. Once understanding of
                    those concepts was achieved, I proceeded to learn the
                    correct use of Node.js, Webpack, and React (FrontEnd), as
                    well as Express.js and MongoDB (Backend).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-4">
          <p className="unicaFont educationTitle col-12">
            Degree in Administration
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
                    Institution: School of Economics - UNT
                  </h5>
                  <p className="mb-0">
                    <strong>Date:</strong> March 2011 - December 2016
                  </p>
                  <p>
                    <strong>Place:</strong> San Miguel de Tucuman - Argentina
                  </p>
                  <p className="card-text">
                    I obtained this university degree after demonstrating my
                    knowledge and skills obtained during the course of the
                    career in topics such as Marketing, Finance, Human
                    Resources, Logistics, Production Analysis, Business
                    Strategy, Statistics, Accounting, among others. After
                    finishing it, I got a broad and comprehensive vision on the
                    functioning of various organizations and the ability to
                    resolution of both technical and social/interpersonal
                    problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-4">
          <p className="unicaFont educationTitle col-12">
            Electronic Technician
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
                    Institution: Lorenzo Massa Technical Institute
                  </h5>
                  <p className="mb-0">
                    <strong>Date:</strong> March 2005 - December 2010
                  </p>
                  <p>
                    <strong>Place:</strong> San Miguel de Tucuman - Argentina
                  </p>
                  <p className="card-text">
                    During my high school education, I learned about topics
                    related to electronics and logical thinking. I started my
                    way in the world of programming and algorithms by
                    programming microcontrollers with PIC. I gained knowledge
                    about the various electronic components and their operation,
                    and the electrical calculation in circuits using diagrams.
                    It was this stage during which I incorporate into my life
                    the ability to visualize abstract concepts and pose problems
                    to solve as a set of steps / threads.
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

export default EducacionEN;
