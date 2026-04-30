import React, { useState } from 'react'

const App = () => {
  const [value, setvalue] = useState(0)

  const increasing = () => {
    setvalue(prev => prev + 1)
  }
  const decreasing = () => {
    setvalue(prev => prev - 1)
    }
    function jumb5() {
      setvalue(value + 5) 
    }
  return (
    <div className='outer'>
    <div className='layout'>
          <h1>COUNTER </h1>
        <h1>{value}</h1>

        <div className='buttons'>
          <button onClick={increasing}>INCREASE</button>
          <button onClick={decreasing}>DECREASE</button>
          <button onClick={jumb5}> +5 </button>
        </div>
      </div>
</div> 
  )
}
export default App 