import React from "react";
import { Table, Container } from "reactstrap"; 
import {Fila} from "./Fila";
import {Columna} from "./Columna"
import {Button} from "react-bootstrap"; 
import {Dispositivos} from "./../../Peticiones/Dispositivos";


const defaulColumn=['id dispositivo','nombre','Localizacion', 'id sensor','sensores'];
const defaultData = [{id:1, nombre:"Name 1", localizacion: "Invernadero 1", sensor:[{id: 1.1, tipo: "Humedad"}, {id: 1.2, tipo: "Temperatura"}, {id: 1.3, tipo: "Intensidad lumínica"}, {id: 1.4, tipo: "Proximidad"}]},
{id:2, nombre:"Name 2", localizacion: "Invernadero 2", sensor:[{id: 2.1, tipo: "Humedad"}, {id: 2.2, tipo: "Temperatura"}, {id: 2.3, tipo: "Intensidad lumínica"}]},
{id:3, nombre:"Name 3", localizacion: "Invernadero 3", sensor:[{id: 3.1, tipo: "Humedad"}, {id: 3.2, tipo: "Temperatura"}, {id: 3.3, tipo: "Intensidad lumínica"}]}];
// var datos;

export function StructureTable({setOpenDetailsModal, setActualDevice, setCreateDeviceModal, setShowMenuMeasures, allDevice}) {
  
  const [devices, setDevices] = React.useState(defaultData);
  const [reload, setReload] = React.useState(false);

  const {getAllDevice} = Dispositivos();
  const onOpenDetailsModal = (details)=>{
    setOpenDetailsModal(true);
    setActualDevice(details);
  }

  const onCreateDevice =  () => {
    setCreateDeviceModal(true);
    console.log(getAllDevice());
  }

  //Eliminar dispositivo
  const deleteDevice = (id) => {
    const option = window.confirm("¿Eliminar dispositivo?");
    if (option) {
      //code
    }
  }

  const objectToList = (data) => {
    let list = [];
    for (let i = 0; i < data.length; i++) {
      list.push(data[i]);
    }

    return list;
  }

  React.useEffect(()=>{
    function fetchData(){
      getAllDevice().then(res =>{
        console.log('Entró');
        if(res.data.length !== 0){
          let datos = objectToList(res.data);
          
          // console.log('-----', datos);
          // console.log(data);
          setDevices({datos1: datos});
          // console.log(devices);
          devices.datos1.map(val => console.log(val.nameDevice));
          // console.log(devices.datos1);
          // console.log(typeof(datos));
        }
      });      
    }
    fetchData();
  }, [reload]);

  setInterval(() => {
    if(!reload){
      setReload(!reload);
    }
  }, 10000);
  
  return(
    <Container className="mt-3">
      <div>
        <Button 
          className="float-end" 
          variant="outline-success"
          onClick={onCreateDevice}
        >Crear Dipositivo</Button>
      </div>
      
      <Table striped>
        <thead>
          <tr>
            {defaulColumn.map(column => (
              <Columna columnName={column}/>
            ))}
          </tr>
        </thead>
        <tbody>
          {devices.datos1.map(data => (
            <tr>
              <td class="align-middle">
                <h5>{data.id}</h5>
              </td>
              <td class="align-middle">
                {data.nombre}
              </td>
              <td class="align-middle">
                {data.localizacion}
              </td>
              <td class="align-middle">
                <Table>
                  <tbody>
                    {data.sensor.map(sensor => (
                      <Fila><td className="d-flex flex-column justify-content-center">{sensor.id}</td></Fila>
                    ))}
                  </tbody>
                </Table>                
              </td>
              <td class="align-middle">
                <Table>
                  <tbody>
                    {data.sensor.map(sensor =>(
                      <Fila><td>{sensor.tipo}</td></Fila>
                    ))}
                  </tbody>
                </Table>
              </td>
              <td class="align-middle">
                <Button
                  variant="outline-info"
                  onClick={() => onOpenDetailsModal(data)}
                >Ver detalle</Button>
              </td>
              <td class="align-middle">
                <Button variant="outline-danger" onClick={() => deleteDevice(data.id)}>Eliminar</Button>
              </td>
              <td class="align-middle">
                <Button variant="outline-warning" onClick={() => setShowMenuMeasures(true)}> Ver Mediciones</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}