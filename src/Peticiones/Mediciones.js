import axios from "axios";

export function Mediciones() {

    const urlBase = "http://localhost:3000/measuremens/";

    const getAllOneSensor = async (id, nameDevice)=>{
        const response = await  axios.get(urlBase+"getAllOfOneSensor?idSensor="+id+ "&nameDevice="+nameDevice);
        return response;
    }

    const getAllMeassurementOfAllSensorOfOneDevice = (Microcontroller)=>{
        return axios.get(urlBase+"getAllOfAllSensor?nameDevice="+Microcontroller);
    }

    const getOneFindById = (idSensor)=>{
        return axios.get(urlBase+"getOne/"+idSensor);
    }


    const deleteAllMeassurement = (idSensor)=>{
        axios.delete(urlBase + "AllOfSensorOfOneDevice?idSensors="+ idSensor).then(response =>{
            
        })
    }


    return{
        getAllOneSensor,
        getAllMeassurementOfAllSensorOfOneDevice,
        getOneFindById,
        deleteAllMeassurement
    };
}