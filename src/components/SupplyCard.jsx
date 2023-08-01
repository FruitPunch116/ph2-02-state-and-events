import { useState } from "react"

function SupplyCard() {

  const [ strike, setStrike ] = useState("")

  function handleStrike () {
    setStrike( "strikethrough" )
  }

  return (
    <div className="supply-card">

      <span className={strike}>✏️ Item Name goes here</span>

      <button onClick={handleStrike}>Buy</button>

    </div>
  )

}

export default SupplyCard
