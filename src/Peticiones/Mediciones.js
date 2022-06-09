import axios from "axios";

export function Mediciones() {

    const state={
        form:{
            measurementValue: "",
            idSensor: 1,
            nameDevice: ""
        },
        Microcontroler: ""
    }

    const urlBase = "http://localhost:3000/measuremens/";

    const getAllOneSensor = async (id, nameDevice)=>{
        const response = await  axios.get(urlBase+"getAllOfOneSensor?idSensor="+id+ "&nameDevice="+nameDevice);
        return response;
    }

    const getAllMeassurementOfAllSensorOfOneDevice = ()=>{
        return axios.get(urlBase+"getAllOfAllSensor?nameDevice="+this.state.Microcontroler);
    }

    const getOneFindById = ()=>{
        return axios.get(urlBase+"getOne/"+this.state.form.idSensor);
    }


    const deleteAllMeassurement = ()=>{
        axios.delete(urlBase + "AllOfSensorOfOneDevice?idSensors="+ this.state.form.idSensor).then(response =>{
            
        })
    }


    return{getAllOneSensor};
}