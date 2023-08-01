import { useState } from "react"

function LunchPacked() {

  const [ lunch, setLunch ] = useState( false )
  
  function togglePacked () {
    setLunch(!lunch)
  }

  return (
    <button onClick={togglePacked} >{lunch ? "Enjoy your lunch" : "Lunch Not Packed"}</button>
  )

}

export default LunchPacked
