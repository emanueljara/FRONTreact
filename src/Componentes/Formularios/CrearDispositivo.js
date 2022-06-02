import React from "react";
import {Modal, Form, Button} from "react-bootstrap";

export function CrearDispositivo({setCreateDeviceModal}) {
  
  const [show, setShow] = React.useState(true);
  const [nameValue, setNameValue] = React.useState('');
  const [locValue, setLocValue] = React.useState('');

  const handleClose = () => {
    setShow(false);
    setCreateDeviceModal(false);
  }
  const handleShow = () => setShow(true);
  return(
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Crear Dispositivo</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Nombre del dispositivo</Form.Label>
            <Form.Control 
              type="email" 
              value={nameValue}
              placeholder="Digite Nombre"
              onChange={event => setNameValue(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupLocalizacion">
            <Form.Label>Localización</Form.Label>
            <Form.Control 
              type="email"
              value={locValue}
              placeholder="Digite Localización"
              onChange={event => setLocValue(event.target.value)}
            />
          </Form.Group>
          <Form.Check 
            type="switch"
            id="custom-switch"
            label="Añadir Sensores"
          />
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-danger" onClick={handleClose}>Cancelar</Button>
        <Button variant="outline-success" onClick={handleClose}>Crear</Button>
      </Modal.Footer>
    </Modal>
  );
}