import React from "react";
import {axios} from "axios";
 

export function Dispositos() {
    state={
        form:{
            nameDevice: "",
            locationDescription: ""
        }
    }
    const urlBase = "localhost:3000/controlDevice/";
    const getAllDevice = ()=>{
        /*axios.get(urlBase+"controlDevice/getAll").then(response=> {
            console.log(response.data);
            this.setState({data:rensponse.data})
        })*/
        return axios.get(urlBase+"getAll");
    }

    const crearDispositivo = async ()=>{
        await axios.post(urlBase + "create", this.state.form).then(response =>{
            //this.getAllDevice
        }).catch(error =>{
            console.log(error);
        })
    }

    const ActualizarDispositivo = () =>{
        axios.put(urlBase+"updateDeviceByName/"+this.state.form.nameDevice, this.state.form).then(respons =>{
            this.getAllDevice()
        })
    }

    const EliminarDispositivo = ()=>{
        axios.delete(urlBase + "deleteDeviceByName/"+ this.state.form.nameDevice).then(response =>{
            
        })
    }


    return{getAllDevice};
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