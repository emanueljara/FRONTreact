import React from "react";
import { Form } from "react-bootstrap";
import { Sensore } from "../../Peticiones/Sensore";

export function SelecTypeSensors({selecTypeSearch,devices,setDevices}) {

  const [sensorTypes, setSensorTypes] = React.useState({});
  const [reload, setReload] = React.useState(false);

  const {getTypeSensors, getDeviceHaveOneTypeSensor} = Sensore();

  const objectToList = (data) => {
    let list = [];
    for (let i = 0; i < data.length; i++) {
      list.push(data[i]);
    }
    return list;
  }

  const searchDeviceWithType = (typeSensor) => {
    getDeviceHaveOneTypeSensor(typeSensor).then(res => {
      let list = [];
      res.data.map(obj =>  list.push(obj.device));
      setDevices({datos1: list});
    });
  }

  React.useEffect(() => {
    getTypeSensors().then(res =>{
      let datos = objectToList(res.data);
      setSensorTypes({datos1: datos});
    })
  }, []);

  setInterval(() => {
    if(!reload){
      setReload(true);
    }
  }, 1000);
    
  return(
      <Form.Select disabled={selecTypeSearch === '1' ? false: true} onChange={event =>{searchDeviceWithType(event.target.value)}}>
          <option value={"all"}>Escoger tipo de sensor</option>
          {sensorTypes.datos1 !== undefined && (sensorTypes.datos1.map(sens => {
            return(<option value={sens.type_sensors}>{sens.type_sensors}</option>);
          }))}
      </Form.Select>
  );
}
