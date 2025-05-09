import React from 'react'
import back from "../assets/back.png"
import logo from "../assets/logo.png"
import { FaChevronDown } from "react-icons/fa6";
import client1 from "../assets/Logo Client 1.png"
import client2 from "../assets/Logo Client 2.png"
import client3 from "../assets/Logo Client 3.png"
import client4 from "../assets/Logo Client 4.png"
import client5 from "../assets/Logo Client 5.png"
import phanom from "../assets/Phanom.png"

const Home = () => {
  return (
    <section className=' bg-[#6001BE] w-[100vw] h-[100vh]' >
      <div className='w-[100vw] h-[85%]' style={{
        backgroundImage: `url(${back})`, backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', // or 'contain' based on your need
        backgroundPosition: 'center'
      }}>

        {/* Navbar */}
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

        {/* Heading */}
        <div className='flex justify-center items-center'>

          <div className='flex flex-col gap-4 w-[80%] mt-10 justify-center items-center'>
<h1 className='text-6xl font-bold text-white'>
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#469AE2] to-[#CE1AE8]">Let’s innovation</span> meets your excellence
</h1>
            <h1 className='text-4xl mb-10 text-white ' >Excellence refined, innovation ignited, the future starts here</h1>
            <div className='bg-white w-fit text-[#6001BE] rounded-full px-10 py-2 items-center justify-center text-2xl font-bold'>
              Book a Appointment
            </div>

          </div>
        </div>

        {/*  */}
        <div className='flex justify-center items-center mt-38'>
          <div className='flex gap-7 text-white'>
            <div className='pr-7'>
              <h1 className='text-6xl font-bold'>24/7</h1>
              <p className='text-2xl font-light'>Online Support</p>
            </div>

            <div className='px-7 border-l border-white'>
              <h1 className='text-6xl font-bold'>100 +</h1>
              <p className='text-2xl font-light'>Web Developed and Application</p>
            </div>

            <div className='pl-7 border-l border-white'>
              <h1 className='text-6xl font-bold'>5+</h1>
              <p className='text-2xl font-light'>Years Experience</p>
            </div>
          </div>
        </div>

        <img className='absolute bottom-[20%] z-0 w-[80%] ml-30  h-[25%]' src={phanom} alt="" />
      </div>

      <div className=''>
          <div className='flex justify-between mx-10 mt-4 '>
             <img src={client1} alt="" />
             <img src={client2} alt="" />
             <img src={client3} alt="" />
             <img src={client4} alt="" />
             <img src={client5} alt="" />
          </div>
      </div>
    </section>
  )
}

export default Home
