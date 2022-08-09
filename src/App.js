import React from "react";
import './App.css';
import { Header } from './Componentes/Nav/Header';
import { StructureTable } from "./Componentes/Tables/StructureTable"
import {CrearDispositivo} from "./Componentes/Formularios/CrearDispositivo";
import {EditarDispositivo} from "./Componentes/Formularios/EditarDispositivo";
import { CrearSensor } from './Componentes/Formularios/CrearSensor';
import { useHookState } from './hooks/useHookState';
import { VerMediciones } from './Componentes/Formularios/VerMediciones';
import {Dispositivos} from './Peticiones/Dispositivos';

import { GraficaLineas } from "./Componentes/Graficas/GraficaLineas";

function App() {

  const [reload, setReload] = React.useState(false);
  const {
    openDetailsModal,
    setOpenDetailsModal,
    setActualDevice,
    actualDevice,
    createDeviceModal,
    setCreateDeviceModal,
    createSensorModal,
    setCreateSensorModal,
    showMenuMeasures,
    setShowMenuMeasures,
    showMeasurements,
    setShowMeasurements,
    selecTypeSearch,
    setSelecTypeSearch,
    sensorSelected,
    setSensorSelected,
    devices,
    setDevices
  } = useHookState();

  const {getAllDevice} = Dispositivos();

  const objectToList = (data) => {
    let list = [];
    for (let i = 0; i < data.length; i++) {
      list.push(data[i]);
    }

    return list;
  }

  React.useEffect(()=>{    
    getAllDevice().then(res =>{
      let datos = objectToList(res.data);
      setDevices({datos1: datos});
    });
  }, [reload]);

  setInterval(() => {
    setReload(!reload);
  }, 10000);

  if(!showMeasurements){
    return (
      <div className="App">
        <Header selecTypeSearch={selecTypeSearch}
         setSelecTypeSearch={setSelecTypeSearch}
         devices={devices}
         setDevices={setDevices}
         />

        {openDetailsModal &&(
          <EditarDispositivo 
            setOpenDetailsModal={setOpenDetailsModal}
            actualDevice={actualDevice}
            setActualDevice={setActualDevice}
            setCreateSensorModal={setCreateSensorModal}
          />
        )}
        
        {createDeviceModal && (
          <CrearDispositivo
            setCreateDeviceModal={setCreateDeviceModal}
            setCreateSensorModal={setCreateSensorModal}
            setActualDevice={setActualDevice}
          />
        )}

        {createSensorModal && (
          <CrearSensor 
            setCreateSensorModal={setCreateSensorModal}
            actualDevice={actualDevice}
            setOpenDetailsModal={setOpenDetailsModal}
            setActualDevice={setActualDevice}
          />
        )}

        {showMenuMeasures && (
          <VerMediciones
            setShowMenuMeasures={setShowMenuMeasures}
            setShowMeasurements={setShowMeasurements}
            actualDevice={actualDevice}
            setSensorSelected={setSensorSelected}
          />
        )}

        <StructureTable 
          setOpenDetailsModal={setOpenDetailsModal}
          setActualDevice={setActualDevice}
          setCreateDeviceModal={setCreateDeviceModal}
          setShowMenuMeasures={setShowMenuMeasures}
          devices={devices}
        />
      </div>
    );
  } else if (showMeasurements){
    return(
      <div>
        <Header/>        
        <GraficaMedidas
          actualDevice={actualDevice}
          sensorSelected={sensorSelected}
        />
      </div>
    );
  }
}

export default App;
