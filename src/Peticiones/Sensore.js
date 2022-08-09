import axios from "axios";

export function Sensore() {
    const state={
        form:{
            idSensor: 1,
            tipeSensors: [""],
            device: ""
        },
        tipeSensors: ""
    }

    const urlBase= "http://localhost:3000/sensores/";

    const getAllCreate = ()=>{
        return axios.get(urlBase+"getAll");
    }

    const getOneFindById = ()=>{
        return axios.get(urlBase+"getOne/"+this.state.form.idSensor);
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
    return{getTypeSensors, createSensor, deleteSensor,getDeviceHaveOneTypeSensor};
}