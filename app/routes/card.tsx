import React from 'react'
import { useSelector } from 'react-redux'
const Card = () => {
    const showdata=useSelector((state)=>state.counter.loginDetails)
  return (
    <>
<div className="flex items-center justify-center h-screen bg-[#fefce8]">
   <div className="bg-black font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
     <img className="border-8 border-white mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="https://pics.craiyon.com/2023-06-20/89f79a8dee744596981e7417b8a7ea1d.webp" alt="product designer"/>
     <h1 className="text-2xl text-blue-500"> {showdata.userName} </h1>
     <h3 className="text-sm text-gray-400 "> Frontend Developer </h3>
     <p className="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam incidunt ex nisi quas provident accusamus deleniti at aliquid molestias laboriosam!. </p>
     <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold tracking-wide">Save</button>
   </div>
 </div>
    </>
  )
}

export default Card
