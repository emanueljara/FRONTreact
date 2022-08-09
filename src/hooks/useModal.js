import React from "react";
const defaultData = [{id:1, nombre:"Name 1", localizacion: "Invernadero 1", sensor:[{id: 1.1, tipo: "Humedad"}, {id: 1.2, tipo: "Temperatura"}, {id: 1.3, tipo: "Intensidad lumínica"}, {id: 1.4, tipo: "Proximidad"}]},
{id:2, nombre:"Name 2", localizacion: "Invernadero 2", sensor:[{id: 2.1, tipo: "Humedad"}, {id: 2.2, tipo: "Temperatura"}, {id: 2.3, tipo: "Intensidad lumínica"}]},
{id:3, nombre:"Name 3", localizacion: "Invernadero 3", sensor:[{id: 3.1, tipo: "Humedad"}, {id: 3.2, tipo: "Temperatura"}, {id: 3.3, tipo: "Intensidad lumínica"}]}];
export function useModal(){

  const [devices, setDevices] = React.useState(defaultData);
  const [openDetailsModal, setOpenDetailsModal] = React.useState(false);
  const [actualDevice, setActualDevice] = React.useState({});
  const [createDeviceModal, setCreateDeviceModal] = React.useState(false);
  const [createSensorModal, setCreateSensorModal] = React.useState(false);
  const [showMenuMeasures, setShowMenuMeasures] = React.useState(false);
  const [showMeasurements, setShowMeasurements] = React.useState(false);
  const [selecTypeSearch, setSelecTypeSearch ] = React.useState('2');
  const [sensorSelected, setSensorSelected] = React.useState({});

  return {
    openDetailsModal,
    setOpenDetailsModal,
    actualDevice,
    setActualDevice,
    createDeviceModal,
    setCreateDeviceModal,
    createSensorModal,
    setCreateSensorModal,
    showMenuMeasures,
    setShowMenuMeasures,
    showMeasurements,
    setShowMeasurements,
    selecTypeSearch,
    setSelecTypeSearch,
    sensorSelected,
    setSensorSelected,
    devices,
    setDevices
  }
}