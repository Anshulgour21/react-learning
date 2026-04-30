import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("aaman")
  const formsumbitted = (e) => {
    e.preventDefault()  
    console.log("form is summited by",title)  
  }   
  return ( 
    <div>  
      <form onSubmit={(e) => {
        formsumbitted(e)   
      }}>
        <input type="text"
          placeholder='enter your name'
          value={title} 
          onChange={(e) => { 
         setTitle(e.target.value) 
          }} /> 
        <button>sumbit</button>
      </form>
    </div>
  )
}
export default App