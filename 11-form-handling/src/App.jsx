import React from 'react'

 const App = () => { 
  const formsumbitted = (e)=>{
    e.preventDefault() 
    console.log("form is summited")
  }
  return ( 
    <div>
      <form onSubmit={(e) =>{
        formsumbitted(e)
      }}>
        <input type="text" placeholder='enter your name' /> 
        <button>sumbit</button>   
      </form>   
    </div> 
  )
}
export default App 