import React from 'react'
import Navbar from './Navbar'
import Parentpage from './Parentpage'
 const Sectionji= (props) => {
  return (
    <div>
      <Navbar/>
     <Parentpage data={props.data}/>
      </div>
  )
}
export default Sectionji 