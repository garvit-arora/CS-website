import React, { useEffect, useState } from 'react'
import chachu from "../../assets/chachu.jpg"
function Contact() {
    // let intro = "Hi, there !!"
    const [intro,setIntro] = useState("Hi, There")
    const [tagline,setTagline]= useState("")
    useEffect(()=>{
        setTimeout(() => 
        setIntro("Chandan, This Side")
        
    , 3000)
    setTimeout(() => {
        setTagline("CS Practitioner")
    }, 4000)
    },[])
    
    return (
        <>
        <div className="flex flex-row gap-40 font-semibold">
        
        <img src={chachu}  className='w-60 h-60 ml-40 mt-40 rounded-full' alt="My Pic" />
        <h1 className='text-5xl mt-30'>
            <span className={`block transform transition-all duration-1000 ${intro?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`}></span>
            {intro} <br /><div className='text-2xl'>
                <span className={`block text-2xl transform transition-all duration-2000 delay-500 ${
            tagline ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}></span>
                {tagline}</div></h1>
        
        </div>
        
        </>        
    )
}

export default Contact
