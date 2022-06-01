import './App.css';
import { Header } from './Componentes/Nav/Header';
import { TableBuild } from "./Components/Table/TableBuild";
import { StructureTable } from "./Componentes/Tables/StructureTable"
import {CrearDispositivo} from "./Componentes/Formularios/CrearDispositivo";
import {EditarDispositivo} from "./Componentes/Formularios/EditarDispositivo"
function App() {
  

  return (
    <div className="App">
      <Header/>
      <h1>HOLAAA</h1>
      
      <StructureTable/>
     <EditarDispositivo/>
    </div>
  );
}

export default App;
