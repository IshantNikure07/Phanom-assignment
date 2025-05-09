import React from 'react'
import back from "../assets/back.png"

const Home = () => {
  return (
    <section className=' bg-[#6001BE] w-[100vw] h-[100vh]' >
        <div className='w-[100vw] h-[90%]' style={{ backgroundImage: `url(${back})` ,  backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', // or 'contain' based on your need
          backgroundPosition: 'center'}}>

            {/* Navbar */}
            <div>
                <img src="" alt="" />
                <div>
                   <h1>Service</h1>
                   <h1>Hire Indian Talent</h1>
                   <h1>Our Portfolio</h1>
                   <h1>Blog</h1>
                   <h1>Bool a Assighment</h1>
                </div>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    </section>
  )
}

export default Home
