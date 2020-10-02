import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "emailjs-com";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";

const ContactMe = () => {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);
  function sendEmail(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setError(true);
      setValidated(true);
      e.stopPropagation();
      return;
    } else {
      setError(false);
      setValidated(true);
    }
    emailjs
      .sendForm(
        "maximiliano_diaz",
        "template_00buj5b",
        e.target,
        "user_iY4lINs2ME45WAfgyAm13"
      )
      .then(
        (result) => {
          console.log(result);
          Swal.fire(
            "Enhorabuena!",
            "Tu mensaje fue enviado correctamente. En breve te estare respondiendo!",
            "success"
          );
          form.reset();
          setValidated(false);
        },
        (error) => {
          console.log(error);
          Swal.fire(
            "Ups!",
            "Hubo un problema al enviar tu mensaje. Por favor intentalo nuevamente.",
            "error"
          );
        }
      );
  }
  return (
    <Form noValidate validated={validated} onSubmit={sendEmail}>
      {error ? (
        <Alert variant={"warning"}>Todos los campos son obligatorios</Alert>
      ) : null}
      <input type="hidden" name="contact_number" />
      <Form.Group controlId="fullName">
        <Form.Label>Apellido y Nombre</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Ejemplo: Perez Nahuel"
          name="user_name"
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Ejemplo: perez_nahuel@gmail.com"
          name="user_email"
        />
        <Form.Text className="text-muted">
          No compartiremos estos datos con nadie
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="mensaje">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control
          required
          as="textarea"
          rows="5"
          type="text"
          placeholder="En este campo introduzca el cuerpo del mensaje"
          name="message"
        />
      </Form.Group>
      <div className="text-center">
        <Button variant="warning" type="Submit" className="ml-auto">
          Enviar mensaje
        </Button>
      </div>
    </Form>
  );
};

export default ContactMe;
