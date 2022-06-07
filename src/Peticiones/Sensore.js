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

    const getDeviceHaveOneTypeSensor =()=>{
        return axios.get(urlBase+"getAllDeviceaHaveOneTypeSensor?tipeSensors="+this.state.form.tipeSensors);
    }

    const createSensor = async (sensors)=>{
        const response = await axios.post(urlBase + "create", sensors);
        return response;
    }

    const DeleteSensor = ()=>{
        axios.delete(urlBase + "deleteTypeOfOneDevice?idSensors="+ this.state.form.idSensor+"&device="+this.state.form.device).then(response =>{
            
        })
    }
    return{getTypeSensors, createSensor};
}