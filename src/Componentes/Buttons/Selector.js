import React from "react";
import { Form } from "react-bootstrap";
import { Sensore } from "../../Peticiones/Sensore";

export function Selector({selecTypeSearch}) {

  const [sensorTypes, setSensorTypes] = React.useState({});
  const [reload, setReload] = React.useState(false);

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
  }, []);

  setInterval(() => {
    if(!reload){
      setReload(true);
    }
  }, 1000);
    
  return(
      <Form.Select disabled={selecTypeSearch === '1' ? false: true}>
          <option>Escoger tipo de sensor</option>
          {/* {console.log(sensorTypes.datos1)} */}
          {sensorTypes.datos1 !== undefined && (Object.entries(sensorTypes.datos1).map(sens => {
            <option>{sens.type_sensors}</option>
          }))}
      </Form.Select>
  );
}
