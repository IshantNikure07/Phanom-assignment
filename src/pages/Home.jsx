import React from 'react'
import back from "../assets/back.png"

const Home = () => {
  return (
    <div className=' bg-[#6001BE] w-[100vw] h-[100vh]' >
        <div className='w-[100vw] h-[90%]' style={{ backgroundImage: `url(${back})` ,  backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', // or 'contain' based on your need
          backgroundPosition: 'center'}}>
            
        </div>
    </div>
  )
}

export default Home
