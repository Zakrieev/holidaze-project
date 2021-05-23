import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ADMIN_CONTACT_URL } from "../../constants/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import MessagesModal from "../modals/MessagesModal";



const schema = yup.object().shape({
  name: yup.string().required("Full name required").min(5, "Enter minimum 5 characters "),
  email: yup.string().required("Your email required").email("Enter email address"),
  message: yup.string().required("Can not submit empty field").min(8, "Type at least 8 chaaracters"),
});

export default function ContactForm({ formData }) {
  const [showModal, setshowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSend(data) {
    data.feedbacks = formData;

    try {
      await axios.post(ADMIN_CONTACT_URL, data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setshowModal(true);
    }
  }

  return (
    <div className="contact-form">
      <div className="contact-banner">
  <h1>Contact Us</h1>
</div>
    <div className="contact-items">
    <div className="contact-section">
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col className="col-lg-10">
          <div className="contact__col">
            {showModal && <MessagesModal show={showModal} />}
            <Form onSubmit={handleSubmit(onSend)} className="contact__form">
              <Col className="col-lg-12">
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control name="name" placeholder="Name" {...register("name")} />
                  {errors?.name && <span>{errors?.name.message}</span>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control name="email" placeholder="Email" {...register("email")} />
                  {errors?.email && <span>{errors?.email.message}</span>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Message</Form.Label>
                  <Form.Control name="message" className="contact__formControl--text" as="textarea" rows="3" placeholder="Enter your message.." {...register("message")} />
                  {errors?.message && <span>{errors?.message.message}</span>}
                </Form.Group>
                <Button type="submit">Send</Button>
                <MessagesModal
                  show={showModal}
                  onHide={() => {
                    setshowModal(false);
                    window.location.reload();
                  }}
                />
               </Col>
              </Form>
           </div>
          </Col>
        </Row>
     </Container>
    </div>
  </div>
</div>
  
);
}