import axios from "axios"; 

export function Dispositivos() {

  const urlBase = "http://localhost:3000/controlDevice/";


  const getAllDevice = async ()=>{
    const response = await axios.get(urlBase+"getAll");
    return response;
  }

  const getOneByName = async (name)=>{
    const response = await axios.get(urlBase+"getByName/"+name);
    return response;
  }

  const getAllDeviceInOneLocation = (location)=>{
    return axios.get(urlBase+"getByLocation/"+location);
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

  return{getAllDevice, getOneByName, createDevice, deleteDevice, updateDevice, getAllDeviceInOneLocation};
}