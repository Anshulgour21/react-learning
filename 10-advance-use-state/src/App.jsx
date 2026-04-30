import React from 'react'
import { useState } from 'react'
 const App = () => {
  const [num, setnum] = useState([10,20,30]) 

    function click(){ 
setnum([40,50,60])
    }

    return ( 
      
    <div>
<h1>{num[0]}</h1>
        <button onClick={click}>click</button>  
    </div>
  )
}
export default App 