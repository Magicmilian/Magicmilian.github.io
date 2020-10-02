import React from "react";
import "./portfolio.css";

const PortfolioEN = () => {
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
          <p className="unicaFont portfolioTitle col-12">Projects</p>
          <div className="projectsContainer d-flex flex-wrap justify-content-around exoFont">
            <div className="card projectElement col-12 p-0">
              <a
                className="text-decoration-none text-dark"
                href="https://rollingnews.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="px-3 pt-3 pb-0">
                  <img
                    src={process.env.PUBLIC_URL + "project-rollingnews.jpg"}
                    className="card-img-top imgProject"
                    alt="..."
                  ></img>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center text-md-left">
                    Rolling News - News Page
                  </h5>
                  <p className="card-text text-justify">
                    Project carried out as a final presentation for the course
                    of Full Stack. It includes the design and functionality of
                    the front end, as the backend, which is responsible for
                    supplying the information that ends up populating the site.
                    It was used also the consultation of third-party APIs.
                  </p>
                </div>
              </a>
              <a
                className="px-3 pb-3"
                href="https://github.com/Magicmilian/rollingnews"
                rel="noopener noreferrer"
                target="_blank"
              >
                See on Github
              </a>
            </div>
            <div className="card projectElement col-12 p-0">
              <a
                className="text-decoration-none text-dark"
                href="https://rollingnews.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="px-3 pt-3 pb-0">
                  <img
                    src={process.env.PUBLIC_URL + "project-rollinggames.jpg"}
                    className="card-img-top imgProject"
                    alt="..."
                  ></img>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center text-md-left">
                    Rolling Games - Video Games Store Page
                  </h5>
                  <p className="card-text text-justify">
                    Project carried out as a presentation of the second module
                    of the Full Stack course. Includes the design and
                    functionality of the front end. For content loading it use
                    Local Storage as back end simulation.
                  </p>
                </div>
              </a>
              <a
                className="px-3 pb-3"
                href="https://github.com/Magicmilian/epicCatalogue"
                rel="noopener noreferrer"
                target="_blank"
              >
                See on Github
              </a>
            </div>
            <div className="card projectElement col-12 p-0">
              <a
                className="text-decoration-none text-dark"
                href="https://maravilloso-mundo.netlify.app/index.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="px-3 pt-3 pb-0">
                  <img
                    src={
                      process.env.PUBLIC_URL + "project-maravillosomundo.jpg"
                    }
                    className="card-img-top imgProject"
                    alt="..."
                  ></img>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center text-md-left">
                    Maravilloso Mundo - Travels Blog
                  </h5>
                  <p className="card-text text-justify">
                    This project was carried out as a final presentation of the
                    first module in the Full Stack development program. In this
                    module we were able to understand and apply the HTML
                    language, next to CSS style sheets and using the framework
                    Bootstrap4. This project is just a layout, many of the
                    site's functionalities are not coded.
                  </p>
                </div>
              </a>
            </div>
            <div className="card projectElement col-12 p-0">
              <a
                className="text-decoration-none text-dark"
                href="https://panaderia-bootstrap.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="px-3 pt-3 pb-0">
                  <img
                    src={process.env.PUBLIC_URL + "project-panaderiaCocu.jpg"}
                    className="card-img-top imgProject"
                    alt="..."
                  ></img>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center text-md-left">
                    Panaderia Cocu - Landing Page
                  </h5>
                  <p className="card-text text-justify">
                    This project was carried out as a Bootstrap 4 practice. A
                    page layout was made for a business dedicated to the Bakery
                    industry.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioEN;
