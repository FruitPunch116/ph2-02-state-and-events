import { useState } from "react"

function HypeLevel() {

  const [ currentHype, setCurrentHype ] = useState( 0 )

  function handleHype() {
    setCurrentHype(currentHype +1)
  }

  return (
    <button onClick={handleHype} >Hype Level {currentHype}</button>
  )

}

export default HypeLevel
