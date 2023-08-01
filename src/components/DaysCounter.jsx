import { useState } from "react"

function DaysCounter() {

  const [ numDays, setNumDays ] = useState( 7 )

  function handleDays () {
   setNumDays(numDays - 1)
  }

  return (

    <button onClick={handleDays} >{numDays > 0 ? `${numDays} Days Until School Starts!` : "School has started"} </button>

  )

}

export default DaysCounter
