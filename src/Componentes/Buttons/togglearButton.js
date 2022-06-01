import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

function togglearButton() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

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
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

export {togglearButton};