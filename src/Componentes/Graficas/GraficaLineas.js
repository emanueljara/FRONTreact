import React from "react";
import { Line } from "@ant-design/charts";
import { Mediciones } from "../../Peticiones/Mediciones";


function GraficaLineas({sensorSelected, actualDevice}) {

  let data = [
    // {date: '2022-06-08T21:52:27.675Z', medicion: '50.1'/*, category: '4'*/},
    {date: '2022-05-01-05:10', measure: 40.1, category: 'Hola'},
    {date: '2022-05-01-05:20', measure: 30.2, category: 'Hola'},
    // {date: '2022-06-08T22:52:27.675Z', medicion: '20.1'/*, category: '4'*/},
    {date: '2022-05-01-05:40', measure: 10.3, category: 'Hola'},
    {date: '2022-05-01-05:50', measure: 60.55, category: 'Hola'},
    {date: '2022-05-01-06:00', measure: 70.1, category: '2'},
    {date: '2022-05-01-06:10', measure: 80.1, category: '2'},
    {date: '2022-05-01-06:20', measure: 90.3, category: 'Hola'},
    {date: '2022-05-01-06:20', measure: 90.1, category: 'Hola'},
    {date: '2022-05-01-06:20', measure: 90.1, category: 'Hola'},
    {date: '2022-05-01-06:30', measure: 100.5, category: '2'},
    {date: '2022-05-01-06:40', measure: 50.1, category: '2'},
    {date: '2022-05-01-06:50', measure: 40.1, category: '3'},
    {date: '2022-05-01-07:00', measure: 100.9, category: '3'},
    {date: '2022-05-01-07:10', measure: 20.1, category: '3'},
    {date: '2022-05-01-07:20', measure: 30.8, category: '3'},
    {date: '2022-05-01-07:30', measure: 50.1, category: '3'},
    {date: '2022-05-01-07:40', measure: 50.1, category: '3'}
  ];

  const [ready, setReady] = React.useState(false);
  const {getAllOneSensor} = Mediciones();

  React.useEffect(() => {
    if(sensorSelected.selected === 'One'){
      getAllOneSensor(sensorSelected.sensorId, actualDevice.nameDevice).then(resp => {
        formatOneSensorMeasures(resp.data.measurements);
      });
    }
  }, []);

  const formatOneSensorMeasures = (measurements) =>{
    
    Object.entries(measurements).map(val => {
      const formatDate = val[1].createDate.replace('T', '-');
      const newData = {
        date: formatDate.substring(0,16), 
        measure: parseFloat(val[1].measurementValue), 
        category: sensorSelected.sensorType
      };
      // console.log(formatDate.substring(0,16));
      data.push(newData);
    });
    console.log(data);
    setTimeout(() => setReady(true), 2000);
    
  }

  // const configuracion={
  //   data,
  //   title:{
  //     visible:true,
  //     text:'temperatura'
  //   },
  //   xField: 'year',
  //   yField: 'value',
  //   seriesField: 'category',
  //   point:{
  //     visible:true,
  //     size: 5,
  //     shape: 'circle',
  //     style:{
  //       fill:'white',
  //       stroke: '#2593fc',
  //       lineWidth:2
  //     }
  //   }
  // }

  const config = {
    data,
    height: 400,
    xField: 'date',
    yField: 'measure',
    seriesField: 'category',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  
  return(
    <React.Fragment>
      <h2>{actualDevice.nameDevice}</h2>
      {ready && (
        <Line {...config}/>
      )}      
    </React.Fragment>    
  );
  
}

export {GraficaLineas}