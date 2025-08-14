import chachu from "../../assets/chachu.gif"
import React from "react"
export default function Loader(){
    return( 
    <>
    <div className="flex items-center justify-center h-screen">
    <img src={chachu} alt="preloader" /> 
    </div> 
    </>
    )
}