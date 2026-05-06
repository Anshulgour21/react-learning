import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [A, setA] = useState(0)
  const [B, setB] = useState(0)

  function Achanging() {
    console.log("a ki value changed")
  }

  function Bchanging() {
    console.log("b ki value changed")
  }

  useEffect(function(){
    console.log("use effect is running!!!!")
  })
  return (
    <div>
      <h3>a is {A}</h3>
      <h3>b is  {B}</h3>
      <button onClick={() => {
        setA(A +1)
      }}>Achange</button>
      <button onClick={() => {
        setB(B -1) 
      }}>Bchange</button>
    </div> 
  )
}
export default App
