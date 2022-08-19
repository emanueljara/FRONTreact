import axios from "axios"; 

export function Alertas() {

  const urlBase = "http://localhost:3000/alarma/";

  const getOneByIdSensor = async (idSensor)=>{
    const response = await axios.get(urlBase+"getByIdSensor/"+idSensor);
    return response;
  }

  const createAlarm = async (alarm)=>{
    const response = await axios.post(urlBase + "create", alarm);
    return response;
  }

  const updateUmbral = async (data) =>{
    const response = await axios.put(urlBase+"update", data);
    return response;
  }

  const deleteAlarm = async (idAlarm)=>{
    const response = axios.delete(urlBase + "remove/"+idAlarm);
    return response;
  }

  return{getOneByIdSensor, createAlarm, updateUmbral, deleteAlarm};
}