import React from 'react'
import { FaChevronDown } from "react-icons/fa6";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className='flex justify-between py-10 px-20'>
              <img src={logo} alt="" />
              <div className='text-white flex gap-16 items-center  mx-3 text-lg'>
                <h1 className='flex items-center gap-2  '>Service <FaChevronDown /></h1>
                <h1 className='flex items-center gap-2  '>Hire Indian Talent <FaChevronDown /></h1>
                <h1>Our Portfolio</h1>
                <h1>Blog</h1>
                <h1>Bool a Assighment</h1>
              </div>
            </div>
  )
}

export default Navbar
