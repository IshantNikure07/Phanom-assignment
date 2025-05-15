import React from 'react'
import { FaChevronDown } from "react-icons/fa6";
import logo from "../assets/logo.png"

const Navbar = () => {
  
  return (
    <div className='flex justify-between py-8 px-20 text-[16px] z-50'>
              <img src={logo} alt="" />
              <div className=' flex gap-8 font-medium items-center  mx-3 text-[16px]'>
                <h1 className='flex items-center gap-2  '>Service <FaChevronDown /></h1>
                <h1 className='flex items-center gap-2  '>Hire Indian Talent <FaChevronDown /></h1>
                <h1>Our Portfolio</h1>
                <h1>Blog</h1>
                <h1 className=' text-white rounded-lg bg-gradient-to-r  from-[#469AE2] to-[#CE1AE8] py-1 px-3'>Bool an Appointment</h1>
              </div>
            </div>
  )
}

export default Navbar
