import React from "react";
import {Line} from "@ant-design/charts";

function GraficaLineas() {
    const data = [
        {fecha: '2022-05-1-5:00', medicion: '50.1', categoria: '1'},
        {fecha: '2022-05-1-5:10', medicion: '40.1', categoria: '1'},
        {fecha: '2022-05-1-5:20', medicion: '30.1', categoria: '1'},
        {fecha: '2022-05-1-5:30', medicion: '20.1', categoria: '1'},
        {fecha: '2022-05-1-5:40', medicion: '10.1', categoria: '1'},
        {fecha: '2022-05-1-5:50', medicion: '60.1', categoria: '1'},
        {fecha: '2022-05-1-6:00', medicion: '70.1', categoria: '2'},
        {fecha: '2022-05-1-6:10', medicion: '80.1', categoria: '2'},
        {fecha: '2022-05-1-6:20', medicion: '90.1', categoria: '1'},
        {fecha: '2022-05-1-6:20', medicion: '90.1', categoria: '1'},
        {fecha: '2022-05-1-6:20', medicion: '90.1', categoria: '1'},
        {fecha: '2022-05-1-6:30', medicion: '100.1', categoria: '2'},
        {fecha: '2022-05-1-6:40', medicion: '50.1', categoria: '2'},
        {fecha: '2022-05-1-6:50', medicion: '40.1', categoria: '3'},
        {fecha: '2022-05-1-7:00', medicion: '100.1', categoria: '3'},
        {fecha: '2022-05-1-7:10', medicion: '20.1', categoria: '3'},
        {fecha: '2022-05-1-7:20', medicion: '30.1', categoria: '3'},
        {fecha: '2022-05-1-7:30', medicion: '50.1', categoria: '3'},
        {fecha: '2022-05-1-7:40', medicion: '50.1', categoria: '3'},
    ];

    const configuracion={
        data,
        title:{
            visible:true,
            text:"temperatura"
        },
        xField: 'fecha',
        yField: 'medicion',
        //color: '#2593fc',
        seriesField: 'categoria',
        point:{
            visible:true,
            size: 5,
            shape: 'circle',
            style:{
                fill:'white',
                stroke: '#2593fc',
                lineWidth:2
            }
        }
    }

    return(
        <Line {...configuracion}/>
    );
}

export {GraficaLineas}