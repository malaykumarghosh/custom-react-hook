import { useState } from 'react';
import UseToggle from './UseToggle';

function ToggleButton() {
  const [isToggled, toggle] = UseToggle(false);
  
  return (
    <div>
      <h1>Toggle Button</h1>
      <button onClick={toggle}>
        {isToggled ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default ToggleButton;