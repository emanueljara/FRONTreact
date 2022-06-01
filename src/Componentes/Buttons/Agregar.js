import React from "react";
import './Agregar.css';

function Agregar() {
    const onCrear = () =>{
        console.log("crear");
    };
    return(
        <button 
        className="AgregarButton"
        onClick={onCrear}
        >
            +
        </button>
    );
}

export {Agregar};