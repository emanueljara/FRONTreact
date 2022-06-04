import React from "react";
import axios from "axios";
 

export function Dispositivos() {
   const state={
        form:{
            nameDevice: "",
            locationDescription: ""
        }
    }

    let headers = {
        //"User-Agent": "PostmanRuntime/7.29.0",
        //Accept: "*/*",
        //"Postman-Token":"6476c5e9-f72e-4ef4-841f-ed9a483f328c",
        //Host:"localhost:3000",
        //"Accept-Encoding":"gzip, deflate, br",
        //Connection:"keep-alive"
        //"Accept-Encoding":"keep-alive"
        'Content-type': 'text/html; charset=UTF-8'

    };

    const urlBase = "http://localhost:3000/controlDevice/";


    const getFetch= async()=>{
        try {
            const response = await fetch(urlBase+"getAll");
            console.log(response);
            const data = await response.data;
            console.log({ data });
          }
          catch (e) {
            console.log(e);
          }
    } 

    const getAllDevice = async ()=>{
        /*axios.get(urlBase+"getAll").then(response=> {
            console.log(response.data);
            this.setState({data:rensponse.data})
        })*/
        //,{headers: headers}
        await axios.get(urlBase+"getAll").then(res =>{
            console.log(res.data);
        }).catch(error =>{
            console.log(error);
        });
    }

    const getOneByName = ()=>{
        return axios.get(urlBase+"getByName/"+this.state.form.nameDevice);
    }

    const getAllDeviceInOneLocation = ()=>{
        return axios.get(urlBase+"getByLocation/"+this.state.form.locationDescription);
    }

    const createDevice = async ()=>{
        await axios.post(urlBase + "create", this.state.form).then(response =>{
            //this.getAllDevice
        }).catch(error =>{
            console.log(error);
        })
    }

    const updateDevice = () =>{
        axios.put(urlBase+"updateDeviceByName/"+this.state.form.nameDevice, this.state.form).then(respons =>{
            this.getAllDevice()
        })
    }

    const deleteDevice = ()=>{
        axios.delete(urlBase + "deleteDeviceByName/"+ this.state.form.nameDevice).then(response =>{
            
        })
    }


    return{getAllDevice, getFetch};
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