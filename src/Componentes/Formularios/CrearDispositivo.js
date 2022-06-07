import React from "react";
import {Modal, Form, Button} from "react-bootstrap";
import { Dispositivos } from "../../Peticiones/Dispositivos";

export function CrearDispositivo({setCreateDeviceModal, setCreateSensorModal, setActualDevice}) {
  
  const [show, setShow] = React.useState(true);
  const [nameValue, setNameValue] = React.useState('');
  const [locValue, setLocValue] = React.useState('');
  const [addSensorCheck, setAddSensorCheck] = React.useState(false);

  const {createDevice} = Dispositivos();

  const handleClose = () => {
    setShow(false);
    setCreateDeviceModal(false);
  }

  //Crear dispositivo. Verificar si el check está activado o no y realizar la función correspondiente.
  const onCreateDevice = () => {
    //Petición para crear un nuevo dispositivo
    //code
    const device = {
      form:{
        nameDevice: nameValue,
        locationDescription: locValue
      }
    };
    createDevice(device.form).then(response => {
      console.log(response.data);
      setActualDevice({...response.data, sensors: []})
    });

    if(addSensorCheck){
      setCreateSensorModal(true);
      setShow(false);
      setCreateDeviceModal(false);
    } else {
      handleClose();
    }
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
            onChange={event => setAddSensorCheck(event.target.checked)}
            
          />
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-danger" onClick={handleClose}>Cancelar</Button>
        <Button variant="outline-success" onClick={onCreateDevice}>Crear</Button>
      </Modal.Footer>
    </Modal>
  );
}