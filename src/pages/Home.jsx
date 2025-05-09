import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import back from "../assets/back.png"
import client1 from "../assets/Logo Client 1.png"
import client2 from "../assets/Logo Client 2.png"
import client3 from "../assets/Logo Client 3.png"
import client4 from "../assets/Logo Client 4.png"
import client5 from "../assets/Logo Client 5.png"
import phanom from "../assets/Phanom.png"
import Navbar from '../components/Navbar'

const Home = () => {

   const sliderRef = useRef(null);
   const textRef = useRef(null);

  useEffect(() => {

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 80, rotateX: 90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 2,
        ease: 'power4.out',
        stagger: 0.1,
      }
    );
  }, []);


  useEffect(() => {
    gsap.to(sliderRef.current, {
      x: '-200%', 
      duration: 40,
      repeat: -1,
      ease: 'linear',
    });
  }, []);
  
  useEffect(() => {
    gsap.to(sliderRef.current, {
      x: '-200%', 
      duration: 40,
      repeat: -1,
      ease: 'linear',
    });
  }, []);
  
  return (
    <section className=' bg-[#6001BE] w-[100vw] h-[100vh] overflow-hidden' >
      <div className='w-[100vw] h-[83%]' style={{
        backgroundImage: `url(${back})`, backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', // or 'contain' based on your need
        backgroundPosition: 'center'
      }}>

        {/* Navbar */}
        <Navbar />

        {/* Heading */}
        <div className='flex justify-center items-center'>

          <div className='flex flex-col gap-1 w-[80%] mt-10 justify-center items-center'>
            <h1 ref={textRef} className='text-[48px] font-bold text-white'>
              <span className=" text-[48px]  text-transparent bg-clip-text bg-gradient-to-r  from-[#469AE2] to-[#CE1AE8]">Let’s innovation</span> meets your excellence
            </h1>
            <h1 className='text-[28px] mb-10 text-white ' >Excellence refined, innovation ignited, the future starts here</h1>
            <div className='bg-white w-fit text-[#6001BE] text-[18px] rounded-full px-10 py-2 items-center justify-center text-2xl font-bold'>
              Book a Appointment
            </div>

          </div>
        </div>

        {/*  */}
       <div className='absolute bottom-[20%] left-1/2 transform -translate-x-1/2 mt-38'>
  <div className='flex gap-7 text-white'>
    <div className='pr-5'>
      <h1 className='text-[50px] font-bold leading-none m-0'>24/7</h1>
      <p className='text-[15px] font-light whitespace-nowrap m-0 pl-3'>Online Support</p>
    </div>

    <div className='pr-2 pl-10 border-l border-white'>
      <h1 className='text-[50px] font-bold leading-none pl-1'>100+</h1>
      <p className='text-[15px] font-light whitespace-nowrap m-0'>Web Developed and Application</p>
    </div>

    <div className='pl-7 border-l border-white'>
      <h1 className='text-[50px] font-bold leading-none pl-2'>5+</h1>
      <p className='text-[15px] font-light whitespace-nowrap m-0'>Years Experience</p>
    </div>
  </div>
</div>


       <img
  className='absolute bottom-[24%] z-0 w-[76%] h-[25%] left-1/2 transform -translate-x-1/2'
  src={phanom}
  alt=""
/>

      </div>

      <div className=''>
        <div ref={sliderRef} className='flex gap-20  mx-10 mt-4 '>
          <img src={client1} alt="" />
          <img src={client2} alt="" />
          <img src={client3} alt="" />
          <img src={client4} alt="" />
          <img src={client5} alt="" />
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
