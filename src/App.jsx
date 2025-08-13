import React from 'react'
import { useState,useEffect } from 'react'
import './App.css'
import Loader from './components/Loader/Loader'
import Header from './components/Header/Header'
import { Outlet } from 'react-router'
import Footer from './components/Footer/Footer'
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
      <Header />
      <Outlet />
      <Footer />
    </>}
    </>
  )
}

export default App
