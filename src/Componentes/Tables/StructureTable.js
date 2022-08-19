import React from "react";
import { Table, Container } from "reactstrap"; 
import {Fila} from "./Fila";
import {Columna} from "./Columna"
import {Button} from "react-bootstrap"; 
import {Dispositivos} from "./../../Peticiones/Dispositivos";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

import './StructureTable.css';


const defaulColumn=['id dispositivo','nombre','Localizacion', 'id sensor','sensores'];

export function StructureTable({setOpenDetailsModal, setActualDevice, setCreateDeviceModal, setShowMenuMeasures,devices,setShowModalAlarma,setsensorActual}) {

  const {deleteDevice} = Dispositivos();

  const onOpenDetailsModal = (details)=>{
    setOpenDetailsModal(true);
    setActualDevice(details); 
  }

  const onCreateDevice =  () => {
    setCreateDeviceModal(true);
  }

  const onOpenAlarm =  (idSensorActual) => {
    setsensorActual(idSensorActual);
    setShowModalAlarma(true);
  }

  //Eliminar dispositivo
  const onDeleteDevice = (id) => {
    const option = window.confirm("¿Eliminar dispositivo?");
    if (option) {
      deleteDevice(id).then((resp)=>{
        console.log(resp);
      });
    }
  }

  const onShowMeasuresModal = (details) =>{
    setShowMenuMeasures(true);
    setActualDevice(details);
  }
  
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
          { devices.datos1 !== undefined && (devices.datos1.map(data => (
            <tr>
              <td className="align-middle">
                <h5>{data.id}</h5>
              </td>
              <td className="align-middle">
                {data.nameDevice}
              </td>
              <td className="align-middle">
                {data.locationDescription}
              </td>
              <td className="align-middle">
                <Table>
                  <tbody>
                    {(data !== undefined && data !== null)  && (data.sensors !== undefined && data.sensors !== null) && (data.sensors.map(sensor => (
                      <Fila><td className="d-flex flex-column justify-content-center">{sensor.id}</td></Fila>
                    )))}
                  </tbody>
                </Table>
              </td>
              <td className="align-middle">
                <Table>
                  <tbody>
                    {(data !== undefined && data !== null) && (data.sensors !== undefined && data.sensors !== null) &&(data.sensors.map(sensor =>(
                      <Fila>
                        <td>
                          {sensor.tipeSensors}
                        </td>
                        <td>
                          <FontAwesomeIcon 
                          onClick={() => onOpenAlarm(sensor.id)}
                          icon={faTriangleExclamation} className='iconito'/>
                        </td>
                      </Fila>                      
                    )))}
                  </tbody>
                </Table>
              </td>
              <td className="align-middle">
                <Button
                  variant="outline-info"
                  onClick={() => onOpenDetailsModal(data)}
                >Ver detalle</Button>
              </td>
              <td className="align-middle">
                <Button variant="outline-danger" onClick={() => onDeleteDevice(data.id)}>Eliminar</Button>
              </td>
              <td className="align-middle">
                <Button variant="outline-warning" onClick={() => onShowMeasuresModal(data)}> Ver Mediciones</Button>
              </td>
            </tr>
          )))}
        </tbody>
      </Table>
    </Container>
  );
}