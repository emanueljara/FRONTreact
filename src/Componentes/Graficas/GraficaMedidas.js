import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { Mediciones } from "../../Peticiones/Mediciones";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

let defaultData = [
  {date: '2022-06-08T21:52:27.675Z', measure: '50.1'/*, category: '4'*/},
  {date: '2022-05-01-05:10', measure: 40.1, category: 'Hola'},
  {date: '2022-05-01-05:20', measure: 30.2, category: 'Hola'},
  {date: '2022-06-08T22:52:27.675Z', measure: '20.1'/*, category: '4'*/},
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



const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



export function GraficaMedidas({actualDevice, sensorSelected}) {

  let response = {};
  let labels1 = [];
  const [data, setData] = React.useState({});
  const [ready, setReady] = React.useState(false);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  React.useEffect(() =>{
    const {getAllOneSensor} = Mediciones();
    if(sensorSelected.selected === 'One'){
      getAllOneSensor(sensorSelected.sensorId, actualDevice.nameDevice).then(resp =>{
        response = resp.data;
        labels1 = response.measurements.map(data => data.createDate);
        setData({
          datasets: [
            {
              label: 'Datos',
              data: response.measurements.map(data => data.measurementValue),
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            // {
            //   label: 'Dataset 2',
            //   data: labels1.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            //   borderColor: 'rgb(53, 162, 235)',
            //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
            // },
          ],
          labels: labels1
        });
        setReady(true);
      });
    }
  },[]);

  if(ready === false){
    return (
      <div>
        <h1>
          Cargando...
        </h1>
      </div>
    )
  }else{
    console.log(options);
    console.log(data);
    return(
      <Line options={options} data={data} />
    )
  }
}
