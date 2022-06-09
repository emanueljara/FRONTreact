import React from "react";
import {Modal,Form, Row, ListGroup, Button } from "react-bootstrap";
import { Sensore } from "../../Peticiones/Sensore";
import { Dispositivos } from "../../Peticiones/Dispositivos";

export function EditarDispositivo({setOpenDetailsModal, actualDevice, setActualDevice, setCreateSensorModal}) {

  const [show, setShow] = React.useState(true);
  const [nameValue, setNameValue] = React.useState(actualDevice.nameDevice);
  const [locValue, setLocValue] = React.useState(actualDevice.locationDescription);

  const {deleteSensor} = Sensore();
  const {updateDevice} = Dispositivos();

  const handleClose = () => {
    setShow(false);
    setOpenDetailsModal(false);
  }

  const onOpenSensor = () => {
    setShow(false);
    setOpenDetailsModal(false);
    setCreateSensorModal(true);
  }

  const confirmEliminacion = (id, name) => {
    const option =  window.confirm("¿Eliminar sensor?");
    if (option){
      deleteSensor(id, name).then(resp => {
        console.log(resp.data);
      });
    } else{
      return;
    }
  };

  const onUpdateDevice = () => {
    const data = {
      nameDevice: nameValue,
      locationDescription: locValue
    }

    updateDevice(actualDevice.nameDevice, data).then(resp => {
      setActualDevice({...actualDevice, nameDevice: resp.data.nameDevice, locationDescription: resp.data.locationDescription});
    });
  }

  return(
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{actualDevice.nameDevice}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3">              
            <Form.Group  controlId="formGridState">
              <Form.Label>
                <h5>Sensores</h5>
              </Form.Label>
              {actualDevice.sensors.map(sensor => (
                <ListGroup.Item action variant="info">
                  {sensor.tipeSensors}
                  <Modal.Footer>
                    <Button 
                      variant="outline-danger" 
                      onClick={() => confirmEliminacion(sensor.id, actualDevice.nameDevice)}
                    >Eliminar</Button>
                  </Modal.Footer>
                </ListGroup.Item>
              ))}
              <Modal.Footer>
                <Button variant="outline-success" onClick={onOpenSensor}>
                Añadir  Sensor</Button>
              </Modal.Footer>
            </Form.Group>
          </Row>

          <Row className="mb-1 d-flex flex-row justify-content-center">
            <Form.Group controlId="formGridEmail">
              <Form.Label>Id</Form.Label>
              <Form.Control 
                type="text" 
                placeholder={actualDevice.id} 
                disabled
              />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control 
                type="text" 
                value={nameValue}
                placeholder="Nombre"
                onChange={event => setNameValue(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formGridEmail" className="mb-3">
              <Form.Label>Localizacion</Form.Label>
              <Form.Control 
                type="text"
                value={locValue}
                placeholder="Localización"
                onChange={event => setLocValue(event.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Button className="" variant="outline-success" onClick={onUpdateDevice}>Actualizar</Button>
            </Form.Group>            
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={handleClose}>Listo</Button>
      </Modal.Footer>
    </Modal>
  );
}