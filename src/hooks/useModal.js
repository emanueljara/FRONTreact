import React from "react";

export function useModal(){

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
    setSensorSelected
  }
}