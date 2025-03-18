'use client'
import { useState } from "react"
const ContactUs = () => {
    const [formData,setformData] = useState({
        name:"",
        emailAddress:"",
        phoneNumber : "",

    })
  return (
    <div 
    className='bg-black z-10 min-h-screen flex flex-col items-center justify-center '>
        
            <h1 className="text-xl">Contact Us</h1>
            <div className="p-4 flex flex-col items-center justify-center bg-blue-500 rounded-5xl"> 
            <div className="m-10">
            <label className=" m-5 ">Name</label>
            <input className="bg-white" type="text" value={formData.name} 
            onChange={(e)=>setformData({...formData,name:e.target.value})}/>
            </div>
            <div className="m-10">
            <label className="m-5">Email Address</label>
            <input className="bg-white" type="text" value={formData.emailAddress}
            onChange={(e)=>setformData({...formData,emailAddress:e.target.value})}/>
            </div>
            <div className="m-10">
            <label className="m-5">Phone Number</label>
            <input className="bg-white" type="text" value={formData.phoneNumber}
            onChange={(e)=>setformData({...formData,phoneNumber:e.target.value})}/>
            </div>
            <button className="bg-red-950 text-white p-2 rounded-md">Enter</button>
            </div>
    </div>
  )
}

export default ContactUs