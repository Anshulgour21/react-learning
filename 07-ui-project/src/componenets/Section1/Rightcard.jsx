import React from 'react'
 
const Rightcard = () => { 
  return ( 
    <div className='bg-amber-300 w-75 h-full rounded-4xl relative'>
      <img className="rounded-4xl w-full h-full object-cover" src="https://i.scdn.co/image/ab67616d00001e02a57574d23abae2297f5dfae2" alt="" />
      <div className=' absolute top-0 left-0 bottom-0 h-full w-full flex flex-col justify-between' >
         <div class="absolute inset-0 bg-gradient-to-t from-black/10 via-black/5 to-transparent"></div>
        <h2 className='bg-white text-xl font-semibold rounded-full h-8 w-8 flex justify-center items-center'>1</h2>
        <h1 className='mt-auto font-bold text-white text-4xl'>golden brown</h1>
        <p className='text-sm text-white  opacity-90 mt-1 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident illo excepturi dignissimos. Hic inventore fugit corporis libero, eaque ea sequi eligendi sit fugiat voluptates, nam, ratione iste accusamus nesciunt facere.</p>
        <button className='bg-amber-400 h-10 w-10 rounded-4xl mt-3  px-3 py-1 '>play this</button> 
      </div> 
    </div>   
  )   
}     
export default Rightcard    