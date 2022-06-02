import React from "react";

export function useModal(){

  const [openDetailsModal, setOpenDetailsModal] = React.useState(false);
  const [deviceDetails, setDeviceDetails] = React.useState({});
  const [createDeviceModal, setCreateDeviceModal] = React.useState(false);

  return {
    openDetailsModal,
    setOpenDetailsModal,
    deviceDetails,
    setDeviceDetails,
    createDeviceModal,
    setCreateDeviceModal
  }
}