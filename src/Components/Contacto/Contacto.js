import React from "react";
import ContactMe from "./ContactMe";
import "./contacto.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const Contacto = () => {
  const background = {
    backgroundImage: "url(/background.jpg)",
    minHeight: "calc(100vh - 80px)",
    backgroundSize: "cover",
    paddingBottom: "10px",
  };
  return (
    <div style={background}>
      <div className="container py-5">
        <p className="unicaFont contactTitle col-12">Contacto</p>
        <Accordion className="exoFont" defaultActiveKey="0">
          <Card>
            <Accordion.Toggle
              className="accordionTitle"
              as={Card.Header}
              eventKey="0"
            >
              Enviame un email!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ContactMe></ContactMe>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="mt-2">
            <Accordion.Toggle
              className="accordionTitle"
              as={Card.Header}
              eventKey="1"
            >
              Enviame un WhatsApp!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="text-center">
                <p className="text-left">
                  Si preferis comunicarte mediante WhatsApp, toca
                  el siguiente icono desde tu celular o dispositivo movil para
                  empezar una conversación:{" "}
                </p>
                <a href=" https://wa.me/543816150013" target="_blank">
                  {" "}
                  <img src={process.env.PUBLIC_URL + "wsp.png"} alt="Dibujo de telefono" />
                </a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
};

export default Contacto;
