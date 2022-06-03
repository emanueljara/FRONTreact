import {axios} from "axios";

export function Mediciones() {

    state={
        form:{
            measurementValue: "",
            idSensor: 1,
            nameDevice: ""
        },
        Microcontroler: ""
    }

    const urlBase = "localhost:3000/measuremens/";

    const getAllOneSensor = ()=>{
        return axios.get(urlBase+"getAllOfOneSensor?idSensor="+this.state.form.idSensor+ "&nameDevice="+this.state.Microcontroler);
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


    return{};
}