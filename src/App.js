import './App.css';
import { Header } from './Componentes/Nav/Header';
//import { TableBuild } from "./Components/Table/TableBuild";
import { StructureTable } from "./Componentes/Tables/StructureTable"
//import {CrearDispositivo} from "./Componentes/Formularios/CrearDispositivo";
import {EditarDispositivo} from "./Componentes/Formularios/EditarDispositivo";
import { useModal } from './hooks/useModal';

import { GraficaLineas } from "./Componentes/Graficas/GraficaLineas";

function App() {

  const {
    openDetailsModal,
    setOpenDetailsModal,
    setIdDetails,
    idDetails
  } = useModal();

  return (
    <div className="App">
      <Header/>

      {openDetailsModal &&(
        <EditarDispositivo 
          setOpenDetailsModal={setOpenDetailsModal}
          idDetails={idDetails}
        />
      )}

      <StructureTable 
        setOpenDetailsModal={setOpenDetailsModal}
        setIdDetails={setIdDetails}
      />

      <GraficaLineas/>
    </div>
  );
}

export default App;
