import React from "react";
import {Modal, Form, Button} from "react-bootstrap";

export function VerMediciones({setShowMenuMeasures, setShowMeasurements}) {
  const [show, setShow] = React.useState(true);
  const handleClose = () => {
    setShow(false);
    setShowMenuMeasures(false);
  }
  
  const handleShow = () => setShow(true);
  return(
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ver Mediciones</Modal.Title>
      </Modal.Header>
    
      <Modal.Body>
        <Form>
          <Form.Check 
            type="switch"
            id="custom-switch"
            label="Todos los sensores"
          />
          <Form.Check 
            type="switch"
            id="custom-switch"
            label="Un sensor"
          />
          <Form.Select aria-label="Default select example">
            <option>Escoger Sensor</option>
            <option value="1">Humedad</option>
            <option value="2">Temperatura</option>
            <option value="3">Luminosidad</option>
          </Form.Select>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-danger" onClick={handleClose}>Cancelar</Button>
        <Button variant="outline-success" onClick={() => setShowMeasurements(true)}>Crear</Button>
      </Modal.Footer>
    </Modal>
  );
}