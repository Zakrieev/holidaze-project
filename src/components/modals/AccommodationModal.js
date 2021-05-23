import React from 'react'
import { Modal, Button } from "react-bootstrap";

function AccommodationModal(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <p className="modal__header">Establishment Sent!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-primary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default AccommodationModal;
