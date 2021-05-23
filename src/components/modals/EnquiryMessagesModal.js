import React from "react";
import { Modal, Button } from "react-bootstrap";

function EnquiryMessagesModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <p className="modal__header">Enquiry Sent!</p>
        <p className="modal__paragraph">Thanks for sending us your enquiry!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-primary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EnquiryMessagesModal;