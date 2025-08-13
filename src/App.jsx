import React from 'react'
import { useState,useEffect } from 'react'
import './App.css'
import Loader from './components/Loader/Loader'

function App() {
 const [loader,setLoader] = useState(false)
  useEffect(()=>{
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  },[])
  return (
    <>
    {loader?<Loader />:<>
    
    </>}
    </>
  )
}

export default App
