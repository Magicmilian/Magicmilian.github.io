import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <p className="unicaFont portfolioTitle col-12">Proyectos</p>
          <div className="projectsContainer d-flex flex-wrap justify-content-around exoFont">
            <div className="card projectElement col-12 p-0">
              <div className="px-3 pt-3 pb-0">
                <Carousel indicators={false}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 imgProjectCarousel"
                      src={process.env.PUBLIC_URL + "project-corchomenu-1.jpg"}
                      alt="Slide Corcho Menu 1"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 imgProjectCarousel"
                      src={process.env.PUBLIC_URL + "project-corchomenu-2.jpg"}
                      alt="Slide Corcho Menu 2"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 imgProjectCarousel"
                      src={process.env.PUBLIC_URL + "project-corchomenu-3.jpg"}
                      alt="Slide Corcho Menu 3"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 imgProjectCarousel"
                      src={process.env.PUBLIC_URL + "project-corchomenu-4.jpg"}
                      alt="Slide Corcho Menu 4"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 imgProjectCarousel"
                      src={process.env.PUBLIC_URL + "project-corchomenu-5.jpg"}
                      alt="Slide Corcho Menu 5"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 imgProjectCarousel"
                      src={process.env.PUBLIC_URL + "project-corchomenu-6.jpg"}
                      alt="Slide Corcho Menu 6"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 imgProjectCarousel"
                      src={process.env.PUBLIC_URL + "project-corchomenu-7.jpg"}
                      alt="Slide Corcho Menu 7"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <a
                className="text-decoration-none projectLink text-dark"
                href="https://corcho-menu.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="card-body">
                  <h5 className="card-title text-center text-md-left">
                    Corcho Menu - Menu Digital Simil Carta
                  </h5>
                  <p className="card-text text-justify">
                    Proyecto realizado para Bar Tucumano con el fin de ofrecer
                    una opcion digitalizada de la carta utilizada por el
                    comercio. Se busco con el mismo, emular la distribucion de
                    la informacion de modo que se asemeje a una carta
                    tradicional. Se desarrollo frontend utilizando React.js, y
                    backend utilizando MongoDB mediante Express.js. A nivel
                    backend se aplicaron rutas protegidas mediante JWT,
                    validacion de usuario mediante Google reCaptcha V2,
                    restablecimiento de contraseña con envio automatico de email
                    desde el backend. A nivel frontend se desarrollo CRUD con
                    capacidad para reordenar los componentes dentro del menu
                    como tambien modificar el comportamiento de display de cada
                    categoria, la distincion de productos huerfanos (sin
                    categoria), productos no publicados, y productos publicados
                    mediante indicador visual, entre otras caracteristicas.
                  </p>
                </div>
              </a>
              <a
                className="px-3 pb-3"
                href="https://github.com/Magicmilian/corchoMenuFrontEnd"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver en Github
              </a>
            </div>
            <div className="card projectElement col-12 p-0">
              <div className="px-3 pt-3 pb-0">
                <img
                  src={process.env.PUBLIC_URL + "project-rollingnews.jpg"}
                  className="card-img-top imgProject"
                  alt="Imagen de RollingNews"
                ></img>
              </div>
              <a
                className="text-decoration-none projectLink text-dark"
                href="https://rollingnews.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="card-body">
                  <h5 className="card-title text-center text-md-left">
                    Rolling News - Pagina de noticias
                  </h5>
                  <p className="card-text text-justify">
                    Proyecto realizado como presentacion final para el curso de
                    Full Stack. Incluye el diseño y funcionalidad del front end,
                    como el backend, que se encarga de suministrar la
                    informacion que termina poblando el sitio. Se utilizo
                    tambien la consulta a API's de terceros.
                  </p>
                </div>
              </a>
              <a
                className="px-3 pb-3"
                href="https://github.com/Magicmilian/rollingnews"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver en Github
              </a>
            </div>
            <div className="card projectElement col-12 p-0">
              <div className="px-3 pt-3 pb-0">
                <img
                  src={process.env.PUBLIC_URL + "project-rollinggames.jpg"}
                  className="card-img-top imgProject"
                  alt="Imagen de Rolling Games"
                ></img>
              </div>
              <a
                className="text-decoration-none projectLink text-dark"
                href="https://rolling-games.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="card-body">
                  <h5 className="card-title text-center text-md-left">
                    Rolling Games - Pagina de juegos
                  </h5>
                  <p className="card-text text-justify">
                    Proyecto realizado como presentacion del segundo modulo del
                    curso de Full Stack. Incluye el diseño y funcionalidad del
                    front end. Para la carga de contenido utiliza Local Storage
                    como simulacion de back end. Ver detalles sobre cargar el
                    contenido en repositorio de Github.
                  </p>
                </div>
              </a>
              <a
                className="px-3 pb-3"
                href="https://github.com/Magicmilian/epicCatalogue"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver en Github
              </a>
            </div>
            <div className="card projectElement col-12 p-0">
              <div className="px-3 pt-3 pb-0">
                <img
                  src={process.env.PUBLIC_URL + "project-maravillosomundo.jpg"}
                  className="card-img-top imgProject"
                  alt="Imagen de Maravilloso Mundo"
                ></img>
              </div>
              <a
                className="text-decoration-none projectLink text-dark"
                href="https://maravilloso-mundo.netlify.app/index.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="card-body">
                  <h5 className="card-title text-center text-md-left">
                    Maravilloso Mundo - Blog de viajes
                  </h5>
                  <p className="card-text text-justify">
                    Este proyecto fue realizado como presentacion final del
                    primer modulo en el programa de desarrollo Full Stack. En
                    este modulo pudimos comprender y aplicar el lenguaje HTML,
                    junto a hojas de estilo CSS y utilizando el framework
                    Bootstrap4. Este proyecto es solo un maquetado, muchas de
                    las funcionalidades del sitio no se encuentran codificadas.
                  </p>
                </div>
              </a>
            </div>
            <div className="card projectElement col-12 p-0">
              <div className="px-3 pt-3 pb-0">
                <img
                  src={process.env.PUBLIC_URL + "project-panaderiaCocu.jpg"}
                  className="card-img-top imgProject"
                  alt="Imagen de panaderia Cocu"
                ></img>
              </div>
              <a
                className="text-decoration-none projectLink text-dark"
                href="https://panaderia-bootstrap.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="card-body">
                  <h5 className="card-title text-center text-md-left">
                    Panaderia Cocu - Landing Page
                  </h5>
                  <p className="card-text text-justify">
                    Este proyecto fue realizado como practica de Bootstrap4. Se
                    realizo el maquetado de una pagina para un comercio dedicado
                    al rubro de Panaderia.
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

export default Portfolio;
