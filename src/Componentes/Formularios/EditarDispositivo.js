import React from "react";
import {Modal,Form, Row, ListGroup, Button } from "react-bootstrap"

export function EditarDispositivo({setOpenDetailsModal, deviceDetails}) {
  var option = null;
  const Col = "hola";

  const [show, setShow] = React.useState(true);
  const [nameValue, setNameValue] = React.useState(deviceDetails.nombre);
  const [locValue, setLocValue] = React.useState(deviceDetails.localizacion);

  const handleClose = () => {
    setShow(false);
    setOpenDetailsModal(false);
  }

  const handleShow = () => setShow(true);
  const confimEliminacion = () => {
    option =  window.confirm("¿Seguro que desea eliminar los elementos?");
    if (option){
      console.log(option);
    }
  };

  return(
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{deviceDetails.nombre}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3">              
            <Form.Group  controlId="formGridState">
              <Form.Label>
                <h5>Sensores</h5>
              </Form.Label>
              {deviceDetails.sensor.map(sensor => (
                <ListGroup.Item action variant="info">
                  {sensor.tipo}
                  <Modal.Footer>
                    <Button variant="outline-danger" onClick={confimEliminacion}>Eliminar</Button>
                  </Modal.Footer>
                </ListGroup.Item>
              ))}
              <Modal.Footer>
                <Button variant="outline-success" onClick={handleClose}>
                Añadir  Sensor</Button>
              </Modal.Footer>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Id</Form.Label>
              <Form.Control 
                type="text" 
                placeholder={deviceDetails.id} 
                disabled
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control 
                type="text" 
                value={nameValue}
                placeholder="Nombre"
                onChange={event => setNameValue(event.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Localizacion</Form.Label>
              <Form.Control 
                type="text"
                value={locValue}
                placeholder="Localización"
                onChange={event => setLocValue(event.target.value)}
              />
            </Form.Group>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={handleClose}>Cancelar</Button>
        <Button variant="outline-success" onClick={handleClose}>Guardar Cambios</Button>
      </Modal.Footer>
    </Modal>
  );
}