import React from "react";
import {Form} from "react-bootstrap";
import {Sensore} from "../../Peticiones/Sensore";


export function SelectorTipoSensores({onCheckedSensor}) {
  const [sensorTypes, setSensorTypes] = React.useState({});
  const {getTypeSensors} = Sensore();

  const objectToList = (data) => {
    let list = [];
    for (let i = 0; i < data.length; i++) {
      list.push(data[i]);
    }

    return list;
  }

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

  return(
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
  );
    
}