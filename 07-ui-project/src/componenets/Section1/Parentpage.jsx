import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './Rightcontent'

 const Parentpage = () => {
  return (
    <div className='pb-16 pt-6  flex items-center gap-10 h-[90vh] px-18'>
      <Leftcontent/>
      <Rightcontent/>
    </div>
  )
} 
export default Parentpage 