import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ENQUIRIES_URL } from "../../constants/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import EnquiryMessagesModal from "../modals/EnquiryMessagesModal";


const schema = yup.object().shape({
  name: yup.string().required("Full name required").min(5, "Enter minimum 5 characters "),
  email: yup.string().required("Your email required").email("Enter email address"),
  checkin: yup.date().required("Need a check-in date"),
  checkout: yup.date().required("Need a check-out date"),
    });

export default function Enquiries({ formData }) {
  const [showModal, setshowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSend(data) {
    data.enquiries = formData;

    try {
      await axios.post(ENQUIRIES_URL, data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setshowModal(true);
    }
  }

  return (
    <div className="contact-form-enquiry">
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col className="col-lg-10">
          <div className="contact__col">
            {showModal && <EnquiryMessagesModal show={showModal} />}
            <Form onSubmit={handleSubmit(onSend)} className="enquiry__form">
              <Col className="col-lg-12">
                <Form.Group>
                  <Form.Label className="label_heading">Full Name</Form.Label>
                  <Form.Control name="name" placeholder="Name" {...register("name")} />
                  {errors?.name && <span>{errors?.name.message}</span>}
                </Form.Group>
                <Form.Group>
                  <Form.Label className="label_heading">Email</Form.Label>
                  <Form.Control name="email" placeholder="Email" {...register("email")} />
                  {errors?.email && <span>{errors?.email.message}</span>}
                </Form.Group>
                <Form.Group>
                    <Form.Label className="label_heading">Check in</Form.Label>
                  <Form.Control type="date" placeholder="Enter your check-in.." {...register("checkin")} />
                  {errors?.checkin && <span>{errors?.checkin.message}</span>}
                </Form.Group>
                <Form.Group>
                    <Form.Label className="label_heading">Check out</Form.Label>
                  <Form.Control type="date" placeholder="Enter your check-out.." {...register("checkout")} />
                  {errors?.checkout && <span>{errors?.checkout.message}</span>}
                </Form.Group>
                  
                <Button type="submit">Send</Button>
                <EnquiryMessagesModal
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
  
);
}