import React from 'react'

export const Navbar = () => {
  return (
    <nav className=' bg-blue-900 flex space-x-4 justify-center  p-4 m-2 rounded-4xl z-10 absolute'>        
    
      <button className='border-2 rounded-2xl p-1 cursor-pointer  ' onClick={
        ()=>{
          alert("Clicked")
        }
      }>Home</button>
      <button className='border-2 rounded-2xl p-1 cursor-pointer   '>Testimonals</button>
      <button className='border-2 rounded-2xl p-1 cursor-pointer   '>Products</button>
      <button className='border-2 rounded-2xl p-1 cursor-pointer   '>About us</button>
      <button className='border-2 rounded-2xl p-1 cursor-pointer   '>Contact us</button>

      </nav>
  )
}
