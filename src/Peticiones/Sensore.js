import axios from "axios";

export function Sensore() {
    
    const urlBase= "http://localhost:3000/sensores/";

    const getAllCreate = ()=>{
        return axios.get(urlBase+"getAll");
    }

    const getOneFindById = (idSensor)=>{
        return axios.get(urlBase+"getOne/"+idSensor);
    }

    const getTypeSensors = async ()=>{
        const response = await axios.get(urlBase+"getTypeSensors");
        return response;
    }

    const getDeviceHaveOneTypeSensor =(nombreTipoSensor)=>{
        return axios.get(urlBase+"getAllDeviceaHaveOneTypeSensor?tipeSensors="+nombreTipoSensor);
    }

    const createSensor = async (sensors)=>{
        const response = await axios.post(urlBase + "create", sensors);
        return response;
    }

    const deleteSensor = async (id, nameDevice)=>{
        const response = axios.delete(urlBase + "deleteTypeOfOneDevice?idSensors="+ id +"&device="+nameDevice);
        return response;
    }
    return{
        getTypeSensors,
        createSensor, 
        deleteSensor,
        getDeviceHaveOneTypeSensor,
        getAllCreate,
        getOneFindById
    };
}