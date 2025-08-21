import React from 'react'
import {Link,NavLink} from 'react-router'
import logo from "../../assets/logo2.png"


function Footer() {
    return (
        <>
        <footer className='bg-black border-y'>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className='flex items-center'>
                        <img src={logo} alt="Logo" />
                        </Link>    
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        
                         </div>
                </div>
            </div>
        </footer>



        
        </>
    )
}

export default Footer
