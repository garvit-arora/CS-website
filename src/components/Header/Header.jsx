import React from 'react'
import {Link,NavLink} from 'react-router'
import logo from "../../assets/logo2.png"
// import { motion } from "motion/react"
import { gsap } from "gsap";

export default function Header() {
    return (
        <>
        <header className='shadow sticky z-50 top-0'>
            <nav className='bg-white border-gray-200 px-4 w-full lg:px-6 py-2.5 '>
                <div className="flex w-full justify-between items-center ">
                        <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            className="mr-2 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="hidden justify-between  items-center lg:flex lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mr-4 gap-5 relative mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to=""
                                className={({isActive})=>`block py-2 text-xl pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0 ${isActive ? "text-blue-700" : "text-gray-900"}`}
                                >
                                    Home
                                    </NavLink>
                                    
                            </li>
                            
                            <li>
                                <NavLink
                                to="/contact"
                                className={()=>`block py-2 pr-4 text-xl pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`}
                                >
                                    Contact
                                    </NavLink>
                                    
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}


