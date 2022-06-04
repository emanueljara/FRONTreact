import React from "react";
import { Form } from "react-bootstrap";

export function Selector({selecTypeSearch}) {

    
    return(
        <Form.Select disabled={selecTypeSearch === '1' ? false: true}>
            <option>Escoger tipo de sensor</option>
            <option value="1">Humedad</option>
            <option value="2">Temperatura</option>
            <option value="3">Luminosidad</option>
        </Form.Select>
    );
}
