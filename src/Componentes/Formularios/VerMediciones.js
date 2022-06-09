import React from "react";
import {Modal, Form, Button} from "react-bootstrap";

export function VerMediciones({setShowMenuMeasures, setShowMeasurements, actualDevice, setSensorSelected}) {
  
  const [show, setShow] = React.useState(true);
  const [oneSensorCheck, setOneSensorCheck] = React.useState(false);
  const [allSensorCheck, setAllSensorCheck] = React.useState(true);
  const [actualSelected, setActualSelected] = React.useState({});

  const allSensors = (check) =>{
    if(check){
      setAllSensorCheck(true);
      setOneSensorCheck(false);
    }else{
      setAllSensorCheck(false);
      setOneSensorCheck(false);
    }
  }

  const oneSensors = (check) =>{
    if(check){
      setAllSensorCheck(false);
      setOneSensorCheck(true);
    }else{
      setAllSensorCheck(false);
      setOneSensorCheck(false);
    }
  }

  const onOpenMeasurements = () =>{

    if(oneSensorCheck && !allSensorCheck){
      setSensorSelected({selected: 'One', sensorId: actualSelected.id, sensorType: actualSelected.sensorType})
    } else if (!oneSensorCheck && allSensorCheck){
      setSensorSelected({selected: 'All'});
    }

    setShowMeasurements(true);
  }

  const onValueSelected = (value) =>{
    let id = 'none';
    actualDevice.sensors.map(sens => {
      if(sens.tipeSensors == value){
        id = sens.id;
      }
    });
    if(id === 'none'){
      window.alert('Escoge un sensor!!!');
    }else{
      setActualSelected({id: id, sensorType: value});
    }
    
  }

  const handleClose = () => {
    setShow(false);
    setShowMenuMeasures(false);
  }

  return(
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ver Mediciones</Modal.Title>
      </Modal.Header>
    
      <Modal.Body>
        <Form>
          <Form.Check 
            disabled = {oneSensorCheck === true ? true:false}
            type="switch"
            id="all"
            label="Todos los sensores"
            checked={allSensorCheck}
            onChange={e => allSensors(e.target.checked)}
          />
          <Form.Check
            disabled = {allSensorCheck === true ? true:false}
            type="switch"
            id="one"
            label="Un sensor"
            onChange={e => oneSensors(e.target.checked)}
          />
          <Form.Select 
            aria-label="Default select example" 
            disabled = {!oneSensorCheck}
            onChange={event => onValueSelected(event.target.value)}
          >
            <option>Escoger Sensor</option>
            {actualDevice !== undefined && ( actualDevice.sensors.map(sens => (
              <option value={sens.tipeSensors}> { sens.tipeSensors } </option>
            )))}
          </Form.Select>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-danger" onClick={handleClose}>Cancelar</Button>
        <Button variant="outline-success" onClick={() => onOpenMeasurements()}>Crear</Button>
      </Modal.Footer>
    </Modal>
  );
}