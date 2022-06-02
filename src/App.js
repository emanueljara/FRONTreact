import './App.css';
import { Header } from './Componentes/Nav/Header';
//import { TableBuild } from "./Components/Table/TableBuild";
import { StructureTable } from "./Componentes/Tables/StructureTable"
import {CrearDispositivo} from "./Componentes/Formularios/CrearDispositivo";
import {EditarDispositivo} from "./Componentes/Formularios/EditarDispositivo";
import { useModal } from './hooks/useModal';

import { GraficaLineas } from "./Componentes/Graficas/GraficaLineas";

function App() {

  const {
    openDetailsModal,
    setOpenDetailsModal,
    setDeviceDetails,
    deviceDetails,
    createDeviceModal,
    setCreateDeviceModal
  } = useModal();

  return (
    <div className="App">
      <Header/>

      {openDetailsModal &&(
        <EditarDispositivo 
          setOpenDetailsModal={setOpenDetailsModal}
          deviceDetails={deviceDetails}
        />
      )}
      
      {createDeviceModal && (
        <CrearDispositivo
          setCreateDeviceModal={setCreateDeviceModal}
        />
      )}

      <StructureTable 
        setOpenDetailsModal={setOpenDetailsModal}
        setDeviceDetails={setDeviceDetails}
        setCreateDeviceModal={setCreateDeviceModal}
      />

      <GraficaLineas/>
    </div>
  );
}

export default App;
