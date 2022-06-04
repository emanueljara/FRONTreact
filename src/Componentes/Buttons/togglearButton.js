import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

function TogglearButton({selecTypeSearch,setSelecTypeSearch}) {
  //const [checked, setChecked] = React.useState(false);
  //const [radioValue, setRadioValue] = React.useState('1');

  const radios = [
    { name: 'Tipo Sensor', value: '1' },
    { name: 'Todos', value: '2' },
    { name: 'Localizacion', value: '3' },
    { name: 'Nombre', value: '4' },
  ];

  return (
    <>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-success'}
            name="radio"
            value={radio.value}
            checked={selecTypeSearch === radio.value}
            onChange={(e) => setSelecTypeSearch(e.currentTarget.value)}
          >
            {radio.name}
            
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

export {TogglearButton};