import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [userdata, setuserdata] = useState([])
  const [index, setindex] = useState(1)

 
  let printuserdata = <h3 className='text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>loading</h3>

  if (userdata.length > 0) {
    printuserdata = userdata.map(function (elem, idx
    ) {
      return <div>
        <div className="h-52 w-52 overflow-hidden rounded-2xl">
          <img className="h-full w-full object-cover" src={elem.download_url} alt="" />
        </div>
        <h2>{elem.author}</h2>
      </div>
    })
  }

  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    setuserdata(response.data)
    console.log(response.data)
  }

  useEffect(function () {
    getdata() 
  }, [index]) 

  return (
      <div className="overflow-auto min-h-screen bg-black text-white"> 
      <h1 className='flex justify-center font-bold '>Atharva Ki Gallery</h1>
      <div className='h-[82%] flex  flex-wrap gap-6 p-4'>
        {printuserdata}
      </div> 

      <div className='flex justify-center gap-6 items-center p-4'>
        <button onClick={() => {
          // console.log("prev is clicked")
          if (index > 1) {
            setindex(index - 1) 
            setuserdata([])  
          }
        } 
        }
 className='bg-yellow-500 h-10 w-15 font-bold rounded-xl active:scale-75 px-4 curs py-2 '>prev
        </button>
        <h4>page{index}</h4>
        <button onClick={() => {
          // console.log("next is clicked")
          setindex(index + 1)
          setuserdata([]) 
        }}
          className='bg-yellow-500 h-10 w-15  py-2 font-bold rounded-xl active:scale-75 px-4'>next
        </button>
      </div>
    </div>
  )
}
export default App 