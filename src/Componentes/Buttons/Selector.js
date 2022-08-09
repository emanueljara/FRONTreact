import React from "react";
import { Form } from "react-bootstrap";
import { Sensore } from "../../Peticiones/Sensore";

export function Selector({selecTypeSearch,devices,setDevices}) {

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
    console.log("ENTRADA TIPO SENSOR", typeSensor);
    getDeviceHaveOneTypeSensor(typeSensor).then(res => {
      console.log("RESPONSE", res.data);
      let list = [];
      res.data.map(obj => {
        console.log("OBJETO TO LIST",obj.device );
        return list.push(obj.device);
      });
      console.log("LA LISTA ES", list);
      //objectToList(res.data[0].device);
      console.log("SALIDA TIPO SENSOR", list);
      setDevices({datos1: list});
      console.log("DEVICES", devices);
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
          {sensorTypes.datos1 !== undefined && (Object.entries(sensorTypes.datos1).map(sens => {
            return(<option value={sens[1].type_sensors}>{sens[1].type_sensors}</option>);
          }))}
      </Form.Select>
  );
}
