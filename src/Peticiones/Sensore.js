import {axios} from "axios";

export function Sensore() {
    state={
        form:{
            idSensor: 1,
            tipeSensors: [""],
            device: ""
        },
        tipeSensors: ""
    }

    const urlBase= "localhost:3000/sensores/";

    const getAllCreate = ()=>{
        return axios.get(urlBase+"getAll");
    }

    const getOneFindById = ()=>{
        return axios.get(urlBase+"getOne/"+this.state.form.idSensor);
    }

    const getTypeSensors = ()=>{
        return axios.get(urlBase+"getTypeSensors");
    }

    const getDeviceHaveOneTypeSensor =()=>{
        return axios.get(urlBase+"getAllDeviceaHaveOneTypeSensor?tipeSensors="+this.state.form.tipeSensors);
    }

    const createSensor = async ()=>{
        await axios.post(urlBase + "create", this.state.form).then(response =>{
            //this.getAllDevice
        }).catch(error =>{
            console.log(error);
        })
    }

    const DeleteSensor = ()=>{
        axios.delete(urlBase + "deleteTypeOfOneDevice?idSensors="+ this.state.form.idSensor+"&device="+this.state.form.device).then(response =>{
            
        })
    }
    return{};
}