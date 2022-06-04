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
    setSelecTypeSearch
  } = useModal();

  if(!showMeasurements){
    return (
      <div className="App">
        <Header selecTypeSearch={selecTypeSearch}
         setSelecTypeSearch={setSelecTypeSearch}/>

        {openDetailsModal &&(
          <EditarDispositivo 
            setOpenDetailsModal={setOpenDetailsModal}
            actualDevice={actualDevice}
            setCreateSensorModal={setCreateSensorModal}
          />
        )}
        
        {createDeviceModal && (
          <CrearDispositivo
            setCreateDeviceModal={setCreateDeviceModal}
          />
        )}

        {createSensorModal && (
          <CrearSensor 
            setCreateSensorModal={setCreateSensorModal}
            actualDevice={actualDevice}
            setOpenDetailsModal={setOpenDetailsModal}
          />
        )}

        {showMenuMeasures && (
          <VerMediciones
            setShowMenuMeasures={setShowMenuMeasures}
            setShowMeasurements={setShowMeasurements}
          />
        )}

        <StructureTable 
          setOpenDetailsModal={setOpenDetailsModal}
          setActualDevice={setActualDevice}
          setCreateDeviceModal={setCreateDeviceModal}
          setShowMenuMeasures={setShowMenuMeasures}
        />

        {/* <GraficaLineas/> */}
      </div>
    );
  } else if (showMeasurements){
    return(
      <div>
        <Header/>
        <GraficaLineas/>
      </div>
    );
  }
}

export default App;
