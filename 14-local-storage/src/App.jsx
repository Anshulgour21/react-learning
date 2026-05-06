import { User } from 'lucide-react' 
import React, { use } from 'react'

const App = () => {

const user={
  username:'anshul',  
  city:'ujjain',  
  age:18 
}  
localStorage.setItem('user',JSON.stringify(user))  
localStorage.clear   
  return (    
    <div></div>   
  ) 
}    
export default App       
