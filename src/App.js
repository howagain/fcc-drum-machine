import React, { useState } from 'react';
import './App.scss';
import DrumPad from "./Components/DrumPad/DrumPad.component"
import kit from "./soundkeymapping"
const kitKeys = Object.keys(kit)

function App() {
  const [textDisplay, setTextDisplay] = useState('')

  return (
    <div className="App">
      <h1>Drum Machine</h1>
      <h2 id="display">Now Playing: {textDisplay}</h2>
      <div className="dm-container">
        <div id="drum-machine">
          {kitKeys.map((key) => {
            return (<DrumPad key={key} buttonID={key.toUpperCase()} passedSound={kit[key].sound} title={kit[key].title} setTextDisplay={setTextDisplay} />)
          })}
        </div>
      </div>
    </div>
  );
}

export default App;