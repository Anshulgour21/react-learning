import React from 'react'

const App = () => {

  function scrolling(elem) {
    if (elem > 0) {
      console.log("scrolling is seedi ")}
else {
      console.log("scrolling is ulti")
    }
  } 
return (
  <div onWheel={(elem) => {
    scrolling(elem.deltaY)
  }}>
    <div className='page1'></div>
    <div className='page2'></div>
    <div className='page3'></div>
  </div>
) 
}
export default App 
