import React from "react";
import {Modal, Form, Button} from "react-bootstrap";
import { Alertas } from "../../Peticiones/Alertas";
import { useHookState } from "../../hooks/useHookState";

export function CrearAlertas({setShowModalAlarma,showModalAlarma,sensorActual}) {
  const { umbral, setUmbral}=useHookState();
  const {createAlarm, updateUmbral, deleteAlarm, getOneByIdSensor} = Alertas();

  const handleClose = () => {
    setShowModalAlarma(false);
  }

  const onDeleteAlarm = () => {
    deleteAlarm(umbral.id);
  }

  const getUmbral = () => {
    getOneByIdSensor(sensorActual).then(res => {
      setUmbral(res.data);
      console.log("GET",res);
    })
  }

  const onUpdateAlarm = () => {
    if(umbral.length > 0){
      const alarm = {
        form:{
          umbral: Number(umbral),
          idSensors: sensorActual
        }
      };
      updateUmbral(alarm.form).then(response => {
        const umbralActual = {
          umbral: response.data.umbral,
          id: response.data.id
        }
        setUmbral(umbralActual);
      });
    }else{
      window.alert('Debes ingresar todos los valores!!!');
    }
  }

  const onCreateAlarm = () => {
    if(umbral.length > 0){
      const alarm = {
        form:{
          umbral: Number(umbral),
          idSensors: sensorActual
        }
      };
      createAlarm(alarm.form).then(response => {
        const umbralActual = {
          umbral: response.data.umbral,
          id: response.data.id
        }
        setUmbral(umbralActual);
      });
    }else{
      window.alert('Debes ingresar todos los valores!!!');
    }
  }

  const handleShow = () => setShowModalAlarma(true);
  return(
    <Modal show={showModalAlarma} onHide={handleClose}>
      {/*showModalAlarma && this.getUmbral()*/}
      <Modal.Header closeButton>
        <Modal.Title>Crear Alertas</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupUmbral">
            <Form.Label>Umbral</Form.Label>
            <Form.Control 
              type="number"
              value={umbral}
              placeholder="Digite Umbral"
              onChange={event => setUmbral(event.target.value)}
            />
            <Button variant="outline-success" onClick={onCreateAlarm}>Crear</Button>
            <Button variant="outline-success" onClick={onUpdateAlarm}>actualizar</Button>
            <Button variant="outline-success" onClick={onDeleteAlarm}>Eliminar</Button>
            <Button variant="outline-success" onClick={getUmbral}>Leer</Button>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-danger" onClick={handleClose}>Cancelar</Button>
        {/*<Button variant="outline-success" onClick={onCreateAlarm}>Crear</Button>*/}
      </Modal.Footer>
    </Modal>
  );
}