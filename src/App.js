import './App.css';
import { Header } from './Componentes/Nav/Header';
import { StructureTable } from "./Componentes/Tables/StructureTable"
import {CrearDispositivo} from "./Componentes/Formularios/CrearDispositivo";
import {EditarDispositivo} from "./Componentes/Formularios/EditarDispositivo";
import { CrearSensor } from './Componentes/Formularios/CrearSensor';
import { useModal } from './hooks/useModal';
import { VerMediciones } from './Componentes/Formularios/VerMediciones';

import { GraficaLineas } from "./Componentes/Graficas/GraficaLineas";

function App() {

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
  } = useModal();

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
          setDevices={setDevices}
        />
      </div>
    );
  } else if (showMeasurements){
    return(
      <div>
        <Header/>
        <GraficaLineas
          sensorSelected={sensorSelected}
          actualDevice={actualDevice}
        />
      </div>
    );
  }
}

export default App;
