import React from "react";
import axios from "axios"; 

export function Dispositivos() {

  const state={
    form:{
      nameDevice: "",
      locationDescription: ""
    }
  }

  let headers = {
      //"User-Agent": "PostmanRuntime/7.29.0",
      //Accept: "*/*",
      //"Postman-Token":"6476c5e9-f72e-4ef4-841f-ed9a483f328c",
      //Host:"localhost:3000",
      //"Accept-Encoding":"gzip, deflate, br",
      //Connection:"keep-alive"
      //"Accept-Encoding":"keep-alive"
      'Content-type': 'text/html; charset=UTF-8'  
    };

  const urlBase = "http://localhost:3000/controlDevice/";


  const getFetch= async()=>{
    try {
      const response = await fetch(urlBase+"getAll");
      console.log(response);
      const data = await response.data;
      console.log({ data });
    }
    catch (e) {
      console.log(e);
    }
  }

  const getAllDevice = async ()=>{
    const response = await axios.get(urlBase+"getAll");
    return response;
  }

  const getOneByName = async (name)=>{
    const response = await axios.get(urlBase+"getByName/"+name);
    return response;
  }

  const getAllDeviceInOneLocation = ()=>{
    return axios.get(urlBase+"getByLocation/"+this.state.form.locationDescription);
  }

  const createDevice = async (device)=>{
    const response = await axios.post(urlBase + "create", device);
    return response;
  }

  const updateDevice = async (nameDevice, data) =>{
    const response = await axios.put(urlBase+"updateDeviceByName/"+ nameDevice, data);
    return response;
  }

  const deleteDevice = async (name)=>{
    const response = await axios.delete(urlBase + "deleteDeviceByName/:"+name);
    return response;
  }

  return{getAllDevice, getOneByName, createDevice, deleteDevice, updateDevice};
}

/*<Modal>
    <ModalBody>
        Estas seguro que deseas eliminar?
    </ModalBody>
    <ModalFooter>
        <button>si</button>
        <button>no</button>
    </ModalFooter>
</Modal>*/

//const {getAllDevice} = Dispositos();
//const a = getAllDevice();