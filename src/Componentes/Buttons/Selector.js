import React from "react";
import { Form } from "react-bootstrap";

function Selector() {
    return(
        <Form.Select aria-label="Default select example">
            <option>Escoger tipo de sensor</option>
            <option value="1">Humedad</option>
            <option value="2">Temperatura</option>
            <option value="3">Luminosidad</option>
        </Form.Select>
    );
}

export {Selector};