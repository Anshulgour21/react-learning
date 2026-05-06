import React from 'react'
import { useState } from 'react'
const App = () => {

  const [title, setTitle] = useState('')
  const [detailed, setdetailed] = useState('')
  const [task, settask] = useState([])

  const formsummit = (e) => {
    e.preventDefault()
    const copytask = [...task]
    copytask.push({ title, detailed })
    settask(copytask) 
    console.log(task)  -
  }
  const deletbtn = (idx) => { 
    const copytask = [...task]; 
    copytask.splice(idx, 1) 
    settask(copytask) 
  }
  return (
    <div className='bg-black lg:flex text-white h-screen'>
      <form onSubmit={(e) => {
        formsummit(e) 
      }}
        className='flex lg:w-1/2 gap-4 items-start p-10 flex-col'>
        <h1 className='font-bold text-4xl'>add notes</h1>

        {/* phela input */}
        < input
          type="text"
          placeholder='enter notes title'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        {/* dursa input  */}
        <textarea className='px-5 w-full font-medium py-2 h-32 border-2  items-start flex-row outline-none rounded'
          type="text"
          placeholder='write detail'
          value={detailed}
          onChange={(e) => {
            setdetailed(e.target.value)
          }}
        >
        </textarea>
        <button className='bg-white active:scale-95 text-black w-full outline-none '>add note</button>
      </form>
      <div className='lg:w-1/2  lg:border-l-2 p-10' >
        <h1 className='font-bold text-4xl'>yours notes</h1>
        <div className='flex flex-wrap items-start gap-5 mt-5 h-[90%] overflow-auto'  >
          {task.map((Elem, idx) => {
            return (
              <div key={idx} className='bg-white h-40 flex justify-between  flex-col px-3 py-5   w-40  bg-cover p-4 rounded-xl '>
                <h3 className='text-black leading-tight font-bold'>{Elem.title}</h3>
                <p className='text-black mt-3 leading-tight '>{Elem.detailed}</p> 
                <button onClick={() => { 
                  deletbtn(idx)
                }}
                  className='bg-red-500 w-full rounded-2xl text-xs active:scale-55 size-7'>delet</button>
              </div>)
          })} 
        </div>
      </div>
    </div>
  )
}
export default App 