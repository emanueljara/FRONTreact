import React from "react";
import {Button} from "bootstrap"

function BtnGenerico(props) {
    const typeButton = [
        {Desing: "outline-success", text: "Crear"},
        {Desing: "outline-warning", text: "Advertencia"},
        {Desing: "outline-primary", text: "Editar"},
        {Desing: "outline-danger", text: "Eliminar"}
    ];
    return(
        <Button 
        variant={typeButton.map(btn => (btn.text == props.text ? btn.Desing:"outline-dark"))}
        >
            {props.text}
        </Button>
    );
}

export {BtnGenerico};