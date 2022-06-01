import React from "react";
import { ListGroupItem, ListGroup, Button } from "react-bootstrap";
import { Table, Container, Modal, ModalBody, FormGroup, ModalFooter } from "reactstrap";
import { Columna } from "./Columna";
import { Fila } from "./Fila";
const defaulColumn=['id','nombre','sensores'];
const defaultData = [{id:1, nombre:"hiii",sensor:["humedad"]},{id:1, nombre:"hiii",sensor:["humedad"]},
{id:1, nombre:"hiii",sensor:["humedad"]},{id:1, nombre:"hiii",sensor:["humedad", "temperatura"]} ]

function TableBuild() {
    const onComplete = () =>{
        alert('Ya completaste el todo');
    };
    return(
        <Container>
            <ListGroup>
            <ListGroup.Item action variant="dark" onClick={onComplete}>
                                        {defaulColumn[0]}
                                        <Button variant="outline-success">Success</Button>
                                    </ListGroup.Item>
            <ListGroup.Item action variant="dark" onClick={onComplete}>
                {defaulColumn[0]}
                <Button variant="outline-success">Success</Button>
            </ListGroup.Item>
                                    </ListGroup>
            <Table >
               
               
                <thead><tr>{defaulColumn.map(column => (
                    <Columna columnName={column}/>
                ))}</tr></thead>
                <tbody>
                
                        {defaultData.map(data => (
                            <Fila>

                                 <td>
                                    <ListGroup.Item action variant="dark" onClick={onComplete}>
                                        {data.nombre}
                                        <Button variant="outline-success">Success</Button>
                                    </ListGroup.Item>
                                  </td>
                                <td>
                                    <ListGroupItem action variant="dark">
                                        
                                        <tr>
                                        <th>

                                        {data.id}
                                        </th>
                                        </tr>
                                        <tr>

                                        <th>

                                        <ListGroupItem>
                                            eooooo
                                        </ListGroupItem>
                                        </th>
                                        </tr>
                                        
                                    </ListGroupItem>
                                </td>
                               
                                <td>{data.sensor.map(sensor =>(
                                    <Fila><td>{sensor}</td></Fila>
                                ))}</td>
                            </Fila>
                        ))}
                   
                </tbody>
              
            </Table>
        </Container>
    );
}

export {TableBuild};