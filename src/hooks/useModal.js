import React from "react";

export function useModal(){

  const [openDetailsModal, setOpenDetailsModal] = React.useState(false);
  const [idDetails, setIdDetails] = React.useState(0);

  return {
    openDetailsModal,
    setOpenDetailsModal,
    idDetails,
    setIdDetails
  }
}