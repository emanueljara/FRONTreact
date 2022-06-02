import React from "react";
import {Modal, Form, Button, Row} from "react-bootstrap";

function CrearSensor({setCreateSensorModal, actualDevice, setOpenDetailsModal}) {

  const [show, setShow] = React.useState(true);
  const [typeSensorValue, setTypeSensorValue] = React.useState('');

  const handleClose = () => {
    setShow(false);
    setCreateSensorModal(false);
  }

  const onOpenDetails = () => {
    setShow(false);
    setCreateSensorModal(false);
    setOpenDetailsModal(true);
  }

  //Desde acá se hacen la peticion al back de los sensores del dispositivo. 
  //Crear una const donde se almacene la info y reemplazar en el return: actualDevice.sensor por la const creada.
  React.useEffect(() => {
    //code
    console.log('Efecto');

  }, []);//Array vacío indica que el efecto se ejecutará una sola vez al iniciar el componente.

  //Agregar nuevo tipo de sensor.
  const saveType = () =>{
    console.log(typeSensorValue);
  }

  //Añadir sensor al dispositivo
  const addSensor = () => {
    //code

    onOpenDetails();
  }
  
  const handleShow = () => setShow(true);
  return(
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>Añadir Sensor</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Form.Group controlId="formGridState">
              <Form.Label>Seleccione el tipo del sensor</Form.Label>
              {actualDevice.sensor.map(sens => (
                <Form.Check 
                  type="switch"
                  id={sens.id}
                  label={sens.tipo}
                />
              ))}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="formGridEmail">
              <Form.Label>Agregar nuevo tipo</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Digite Tipo De Sensor"
                value={typeSensorValue}
                onChange={(event) => setTypeSensorValue(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mt-2" controlId="formGridEmail">              
              <Button variant="outline-success" onClick={saveType}>Agregar</Button>
            </Form.Group>

            {/* <Form.Group controlId="formGridState">
              <Form.Label>Seleccionar dispositivo</Form.Label>
              <Form.Select defaultValue="Choose..." disabled>
                <option>Seleccionar...</option>
                <option>Microcontrolador1</option>
                <option>Microcontrolador2</option>
                <option>Microcontrolador3</option>
              </Form.Select>
            </Form.Group> */}
          </Row>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-danger" onClick={onOpenDetails}>Cancelar</Button>
        <Button variant="outline-success" onClick={addSensor}>Añadir</Button>
      </Modal.Footer>
    </Modal>
  );
}

export {CrearSensor};