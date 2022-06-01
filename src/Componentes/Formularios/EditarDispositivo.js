import React from "react";
import {Modal,Form, Row, ListGroup, Button } from "react-bootstrap"

export function EditarDispositivo({setOpenDetailsModal, idDetails}) {
  var option = null;
  const Col = "hola";
  const [show, setShow] = React.useState(true);

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
        <Modal.Title>Ver Detalle {idDetails}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3">              
            <Form.Group  controlId="formGridState">
              <Form.Label>Sensores</Form.Label>
              <ListGroup.Item action variant="info">
                sensor1
                <Modal.Footer>
                  <Button variant="outline-danger" onClick={confimEliminacion}>Eliminar</Button>
                </Modal.Footer>
              </ListGroup.Item>
              <ListGroup.Item action variant="info">
                sensor2
                <Modal.Footer>
                  <Button variant="outline-danger" onClick={confimEliminacion}>Eliminar</Button>
                </Modal.Footer>
              </ListGroup.Item>
              <ListGroup.Item action variant="info">
                sensor3
                <Modal.Footer>
                  <Button variant="outline-danger" onClick={confimEliminacion}>Eliminar</Button>
                </Modal.Footer>
              </ListGroup.Item>
              <Modal.Footer>
                <Button variant="outline-success" onClick={handleClose}>
                Añadir  Sensor</Button>
              </Modal.Footer>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Id</Form.Label>
              <Form.Control type="text" placeholder="Id" disabled />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Dispositivo" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Localizacion</Form.Label>
              <Form.Control type="text" placeholder="Localizacion" />            
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