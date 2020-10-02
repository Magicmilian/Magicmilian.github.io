import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "emailjs-com";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";

const ContactMeEN = () => {
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
            "Good news!",
            "Your message was sent successfully. I will be answering you shortly!",
            "success"
          );
          form.reset();
          setValidated(false);
        },
        (error) => {
          console.log(error);
          Swal.fire(
            "Ups!",
            "There was a problem sending your message. Please try again.",
            "error"
          );
        }
      );
  }
  return (
    <Form noValidate validated={validated} onSubmit={sendEmail}>
      {error ? (
        <Alert variant={"warning"}>All fields are required</Alert>
      ) : null}
      <input type="hidden" name="contact_number" />
      <Form.Group controlId="fullName">
        <Form.Label>Name and Surname</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Example: John Doe"
          name="user_name"
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Example: john_doe@gmail.com"
          name="user_email"
        />
        <Form.Text className="text-muted">
        I will not share this data with anyone
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="mensaje">
        <Form.Label>Message</Form.Label>
        <Form.Control
          required
          as="textarea"
          rows="5"
          type="text"
          placeholder="In this field enter the body of the message"
          name="message"
        />
      </Form.Group>
      <div className="text-center">
        <Button variant="warning" type="Submit" className="ml-auto">
          Send message
        </Button>
      </div>
    </Form>
  );
};

export default ContactMeEN;
