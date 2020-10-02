import React,{useEffect} from "react";
import "./contacto.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ContactMeEN from "./ContactMeEN";

const ContactoEN = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const background = {
    backgroundImage: "url(/background.jpg)",
    minHeight: "calc(100vh - 80px)",
    backgroundSize: "cover",
    paddingBottom: "10px",
  };
  return (
    <div style={background}>
      <div className="container py-5">
        <p className="unicaFont contactTitle col-12">Contact</p>
        <Accordion className="exoFont" defaultActiveKey="0">
          <Card>
            <Accordion.Toggle
              className="accordionTitle"
              as={Card.Header}
              eventKey="0"
            >
              Send me an email!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ContactMeEN></ContactMeEN>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="mt-2">
            <Accordion.Toggle
              className="accordionTitle"
              as={Card.Header}
              eventKey="1"
            >
              Send me a WhatsApp message!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="text-center">
                <p className="text-left">
                  If you prefer to communicate through WhatsApp, touch the
                  following icon from your cell phone or mobile device to start
                  a conversation:{" "}
                </p>
                <a href=" https://wa.me/543816150013" target="_blank">
                  {" "}
                  <img
                    src={process.env.PUBLIC_URL + "wsp.png"}
                    alt="Dibujo de telefono"
                  />
                </a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
};

export default ContactoEN;
