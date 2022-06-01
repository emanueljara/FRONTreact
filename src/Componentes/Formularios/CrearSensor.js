import React from "react";
import {Modal, Form, Button} from "react-bootstrap";

function CrearSensor(props) {
  const [show, setShow] = React.useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>Crear Sensor</Modal.Title>
      </Modal.Header>

      <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Tipo de sensor</Form.Label>
                <Form.Control type="text" placeholder="Digite Tipo De Sensor" />
                
              </Form.Group>
              
              <Form.Group as={Col} controlId="formGridEmail">
              
                <Button variant="outline-success">Agregar</Button>
              </Form.Group>
               
            </Row>
            
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
                
                
                <Form.Check 
                type="switch"
                id="custom-switch"
                label="Humedad"
                />
                
                <Form.Check 
                type="switch"
                id="custom-switch"
                label="Temperatura"
                />
                
                <Form.Check 
                type="switch"
                id="custom-switch"
                label="Luminocidad"
                />
              </Form.Group>
            
        
               <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Seleccionar dispositivo</Form.Label>
                <Form.Select defaultValue="Choose..." disabled>
                  <option>Seleccionar...</option>
                  <option>Microcontrolador1</option>
                  <option>Microcontrolador2</option>
                  <option>Microcontrolador3</option>
                </Form.Select>
              </Form.Group>
            </Row>
          </Form>
      </Modal.Body>

      <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>Cancelar</Button>
          <Button variant="outline-success" onClick={handleClose}>Crear</Button>
      </Modal.Footer>
      </Modal>
  );
}

export {CrearSensor};