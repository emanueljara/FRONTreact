import React from "react";
import {Form, FormControl, Button} from 'react-bootstrap';
import {Dispositivos} from '../../Peticiones/Dispositivos';

export function SearchDevice({selecTypeSearch,setDevices}) {

    const {getOneByName, getAllDeviceInOneLocation} = Dispositivos();
    const [inputValue, setInputValue] = React.useState("");

    const saveValue = (value) => {
        setInputValue(value);
    }
    const findByLocation = () => {
        getAllDeviceInOneLocation(inputValue).then(res =>{
            let list = [];
            res.data.map(obj =>  list.push(obj));
            setDevices({datos1: list});
        });
    }
    const findByName = () =>{
        getOneByName(inputValue).then(res =>{
            let list = [];
            list.push(res.data);
            setDevices({datos1: list});
        });
    }
    const isValid = () => {
        if (inputValue.length !=0) {
            if (selecTypeSearch === '3') {
                findByLocation();
            }
            if (selecTypeSearch === '4') {
                findByName();
            }
        }

    }
    return(
        <Form className="d-flex">
            <FormControl
            type="search"
            placeholder={
                selecTypeSearch === '3' ? "Digite Localización": selecTypeSearch === '4' ? "Digite Nombre":"Buscar" 
            }
            className="me-2"
            aria-label="Search"
            disabled={
                (selecTypeSearch === '3' || selecTypeSearch === '4') ? false: true
            }
            onChange={event => {saveValue(event.target.value)}}
            />
            <Button variant="outline-success" onClick={() => isValid()}>Buscar</Button>
        </Form>
    );
  }