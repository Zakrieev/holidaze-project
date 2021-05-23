import React, {useContext} from 'react';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ACCOMMODATIONS_URL } from "../../../../constants/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthContext from "../../../../context/AuthContext";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import AccommodationModal from "../../../modals/AccommodationModal";
import axios from 'axios';


const schema = yup.object().shape({
  Name: yup.string().required("Full name required").min(5, "Enter minimum 5 characters "),
  Price: yup.number().required("Choose your price").min(2,"Must be more than one digit"),
  Type:yup.string().required("Hotel, B&B or GuestHouse?"),
  Description:yup.string().required("Write about your accommodation"),
    });

export default function AddEstablishment() {
  const [showModal, setshowModal] = useState(false);
  const [image, setImage] = useState(null);
  const [auth] = useContext(AuthContext);


  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSend(data) {
    const formData = new FormData()
    formData.append("data", JSON.stringify(data));
    formData.append("files.Image", image, image.name);
    try {
       await axios.post(ACCOMMODATIONS_URL, formData, {
        headers: {
            'Authorization': `Bearer ${auth.jwt}`
        },
    })
    } catch (error) {
      console.log("error", error);
    } finally {
      setshowModal(true);
    }
  }

  return (
    <>
    <div className='establishment-container'>
      <h1>Add an establishment</h1>
    </div>
    <div className="establishment-form">
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col className="col-lg-10">
          <div className="contact__col">
            {showModal && <AccommodationModal show={showModal} />}
            <Form onSubmit={handleSubmit(onSend)} className="enquiry__form">
              <Col className="col-lg-12">
                <Form.Group>
                  <Form.Label className="label_heading">Full Name</Form.Label>
                  <Form.Control name="Name" placeholder="Name" {...register("Name")} />
                  {errors?.Name && <span>{errors?.Name.message}</span>}
                </Form.Group>
                <Form.Group>
                  <Form.Label className="label_heading">Price:</Form.Label>
                  <Form.Control type="number" name="Price" placeholder="Price" {...register("Price")} />
                  {errors?.Price && <span>{errors?.Price.message}</span>}
                </Form.Group>
                <Form.Group>
                    <Form.Label className="label_heading">Make your choice</Form.Label>
                  <Form.Control as="select" name="Type" placeholder="Make your choice" {...register("Type")}>
                  <option value="Hotel">Hotel</option>
                  <option value="B and B">B and B</option>
                  <option value="Guesthouse">GuestHouse</option>
                  </Form.Control>
                  {errors?.Type && <span>{errors?.Type.message}</span>}
                </Form.Group>
                <Form.Group className="checkbox-form">
                      <Form.Check 
                            type="checkbox"
                            label="Featured"
                            {...register("Featured")}
                        />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="label_heading">Describe your establishment</Form.Label>
                  <Form.Control name="Description" as="textarea" rows="6" placeholder="Describe.." {...register("Description")} />
                  {errors?.Description && <span>{errors?.Description.message}</span>}
                </Form.Group>
                <Form.Group>
                  <Form.Label className="label_heading">Image</Form.Label>
                  <Form.Control type="file" name="Image" onChange={(e) => setImage(e.target.files[0])} />
                </Form.Group>
                  
                <Button type="submit">Send</Button>
                <AccommodationModal
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
    </>
  
);
}