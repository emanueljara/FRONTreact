import React from "react";
import {Modal, Form, Button, Row} from "react-bootstrap";
import {Sensore} from "../../Peticiones/Sensore";

function CrearSensor({setCreateSensorModal, actualDevice, setOpenDetailsModal, setActualDevice}) {

  const [show, setShow] = React.useState(true);
  const [typeSensorValue, setTypeSensorValue] = React.useState('');
  const [sensorTypes, setSensorTypes] = React.useState({});
  const [sensorsAdded, setSensorsAdded] = React.useState([]);
  const [reload, setReload] = React.useState(false);

  const {getTypeSensors, createSensor} = Sensore();

  const handleClose = () => {
    setShow(false);
    setCreateSensorModal(false);
  }

  const onOpenDetails = () => {
    setShow(false);
    setCreateSensorModal(false);
    setOpenDetailsModal(true);
  }

  const objectToList = (data) => {
    let list = [];
    for (let i = 0; i < data.length; i++) {
      list.push(data[i]);
    }

    return list;
  }

  //Desde acá se hacen la peticion al back de los sensores del dispositivo. 
  //Crear una const donde se almacene la info y reemplazar en el return: actualDevice.sensor por la const creada.
  React.useEffect(() => {
    getTypeSensors().then(res =>{
      let datos = objectToList(res.data);
      setSensorTypes({datos1: datos});
    })
  }, [reload]);

  setInterval(() => {
    if(!reload){
      setReload(true);
    }
  }, 1000);

  //Agregar nuevo tipo de sensor.
  const saveType = () =>{
    const newType = {
      "type_sensors": typeSensorValue
    }
    setSensorTypes({datos1: [...sensorTypes.datos1, newType]})
  }

  const onCheckedSensor = (check, sensor) => {
    if(check){
      const sens = [...sensorsAdded, sensor];
      setSensorsAdded(sens);
    }else{
      const newSensors = sensorsAdded.filter((name) => name !== sensor);
      setSensorsAdded(newSensors);
    }
  }

  //Añadir sensor al dispositivo
  const addSensor = () => {
    const data = {
      tipeSensors: sensorsAdded,
      device: actualDevice.nameDevice
    }
    createSensor(data).then(response => {
      console.log(response.data);
      //setActualDevice({...response.data, sensors: [...data]})
    });
    // onOpenDetails();
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
              { sensorTypes.datos1 !== undefined && (Object.entries(sensorTypes.datos1).map(sens => (
                <Form.Check 
                  type="switch"
                  id={sens[1].type_sensors}
                  label={sens[1].type_sensors}
                  onChange={event => {onCheckedSensor(event.target.checked, sens[1].type_sensors)}}
                />
              )))}
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