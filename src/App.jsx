import React from 'react';
import FetchData from './Components/FetchData';

//import FetchYogaData from './Components/FetchYogaData';
//import SideEffect from './Components/SideEffect';
import ToggleButton from './Components/ToggleButton';

function App() {
  return (
    <>
      <FetchData/>

      {/* <FetchYogaData /> */}

      {/* === Practice / Test Start=== */}

      {/* <SideEffect /> */}

      {/* Toggle Button using UseToggle custom hook */}
      <ToggleButton />

      {/* === Practice / Test End === */}

      <br /><br />
    </>
  );
}

export default App