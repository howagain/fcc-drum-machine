import React, {useState, useRef} from 'react'
import useSound from "use-sound"
import useEventListener from '@use-it/event-listener'

import "./DrumPad.styles.scss"

const DrumPad = ({buttonID, passedSound, title, setTextDisplay}) => {
  const [active, setActive] = useState(false)
  const soundRef = useRef(null);
  
  const playSound = () => {
    setActive(true)
    soundRef.current.play()
    setTextDisplay(title)
    setTimeout(()=>setActive(false), 100)
  };
  
  useEventListener('keydown', (e)=>{
    if(e.key.toUpperCase()==buttonID) {
      console.log(e.key)
      playSound()
    }
  })

  return (
    <div className={`${active ? 'active' : ''} drum-pad`} id={`${buttonID.toLowerCase()}Sound`} onClick={playSound}>
      <label>{buttonID}</label>
      <audio src={passedSound} ref={soundRef} className="clip" id={buttonID}>{buttonID}</audio>
    </div>
  )
}

export default DrumPad
