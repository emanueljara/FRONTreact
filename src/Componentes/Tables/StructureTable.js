import React from "react";
import { Table, Container, Modal, ModalBody, FormGroup, ModalFooter } from "reactstrap";
import {Fila} from "./Fila";
import {Columna} from "./Columna"
import { Agregar } from "./../Buttons/Agregar";
import {ListGroup, Button} from "react-bootstrap";

const defaulColumn=['id dispositivo','nombre','Localizacion', 'id sensor','sensores'];
const defaultData = [{id:1, nombre:"hiii", localizacion: "invernadero1", sensor:[{id: 1, tipo: "humedad"}, {id: 1, tipo: "temperatura"}, {id: 1, tipo: "intencidad luminica"}]},
{id:1, nombre:"hiii", localizacion: "invernadero1", sensor:[{id: 1, tipo: "humedad"}, {id: 1, tipo: "temperatura"}, {id: 1, tipo: "intencidad luminica"}]},
{id:1, nombre:"hiii", localizacion: "invernadero1", sensor:[{id: 1, tipo: "humedad"}, {id: 1, tipo: "temperatura"}, {id: 1, tipo: "intencidad luminica"}]} ];


function StructureTable(props) {
    return(
        <Container>
                <Button variant="outline-success">Crear Dipositivo</Button>
            <Table>
                <thead>
                    <tr>
                    {defaulColumn.map(column => (
                        <Columna columnName={column}/>
                    ))}
                    </tr>
                </thead>
                <tbody>
                {defaultData.map(data => (
                        <Fila>
                            <td>
                                {data.id}
                            </td>
                            
                            <td>
                                {data.nombre}
                            </td>
                            <td>
                                {data.localizacion}
                            </td>
                            <td>

                            </td>
                            {data.sensor.map(sensor =>(
                                <Fila><td>{sensor.id}</td>{"  "}<td>{sensor.tipo}</td></Fila>
                            ))}
                            <td>
                                <Button variant="outline-info">Ver detalle</Button>
                            </td>
                            <td>
                                <Button variant="outline-danger">Eliminar</Button>
                            </td>
                            <td>
                                <Button variant="outline-warning"> Ver Mediciones</Button>
                            </td>
                        </Fila>
                    ))}
                </tbody>
            </Table>
        </Container>

    );
}

export {StructureTable};