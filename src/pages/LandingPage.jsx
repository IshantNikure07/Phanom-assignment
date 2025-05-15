import React, { useState } from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import hero1 from "../assets/heroLogo1.png"
import hero2 from "../assets/heroLogo2.png"
import Navbar from '../components/Navbar'
import { TextPlugin } from "gsap/TextPlugin";
import leftAbstract from "../assets/AbstractDesignLeft.png"
import RightAbstract from "../assets/AbstractDesignRight.png"
import companyLogo1 from "../assets/image 132.png"
import { compileAst } from 'tailwindcss';
import google from "../assets/google.svg"
import trustPilot from "../assets/trustPilot.png"
import { FaStar } from "react-icons/fa6";
import assets from "../assets/assets"
import CounterBox from '../components/CounterBox';
import Services from '../components/Services';
import { ImCross } from "react-icons/im";
import { MdOutlineDone } from "react-icons/md";
import whyClientImage from "../assets/why-client-image.png"
import OverlayLeft from "../assets/OverlayLeft.png"
import OverlayRight from "../assets/OverlayRight.png"
import LightsOverlayLeft from "../assets/LightsOverlayLeft.png"
import LightsOverlayRight from "../assets/LightsOverlayRight.png"
import AdarshSir from "../assets/Adarsh_sir.png"

const LandingPage = () => {

    const sliderRef = useRef(null);
    const textRef = useRef(null);
    const { howItWorks } = assets()
    gsap.registerPlugin(TextPlugin);

    useEffect(() => {
        const phrases = ["From Idea To Execution", "From Idea To Execution", "From Idea To Execution"];
        let index = 0;

        const type = () => {
            gsap.to(textRef.current, {
                duration: 1,
                text: phrases[index],
                ease: "none",
                onComplete: () => {
                    gsap.to(textRef.current, {
                        delay: 1,
                        duration: 1,
                        text: "",
                        ease: "none",
                        onComplete: () => {
                            index = (index + 1) % phrases.length;
                            type(); // loop again
                        },
                    });
                },
            });
        };

        type();
    }, []);


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
            duration: 120,
            repeat: -1,
            ease: 'linear',
        });
    }, []);

    return (
        <div>
            <div className='w-full h-[100%] absolute top-0 justify-between z-0'>
                <img className='w-[40%] h-full absolute left-0 z-0' src={leftAbstract} alt="" />
                <img className='w-[40%] h-full absolute right-0 z-0' src={RightAbstract} alt="" />
            </div>

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#F2E7FE] via-[#EEE7FE] to-[#FFFFFF] w-[100vw] h-[1185px] overflow-hidden">

                <div className='w-[100vw] h-[83%]'>

                    {/* Navbar */}
                    <div className="relative z-50">
                        <Navbar />
                    </div>

                    {/* Heading */}
                    <div className='flex justify-center items-center'>

                        <div className='flex flex-col gap-1 w-[80%] mt-10 justify-center items-center text-black'>
                            <h1 className="text-[48px] font-bold w-[80%] text-center relative leading-tight">
                                <span className="relative inline-block min-w-[530px]">
                                    <span className="invisible absolute ">From Idea To Execution</span>
                                    {/* Animated text span */}
                                    <span
                                        ref={textRef}
                                        className="text-[48px] text-transparent bg-clip-text bg-gradient-to-r from-[#469AE2] to-[#CE1AE8]"
                                    ></span>
                                </span>{" "}
                                - We Build
                                <br />
                                <span>& Sell it for you</span>
                            </h1>
                            <h1 className='text-[14px] mt-2'>We Build , We Scale , We Sell - For You</h1>
                            <div className='flex my-10 justify-center items-center gap-5'>
                                <h1 className='text-[20px] font-bold '>Backed By</h1>
                                <img src={hero1} alt="" />
                                <img src={hero2} alt="" />
                            </div>
                            <div className='bg-[#8E59E2] w-fit text-white text-[18px] rounded-full px-7 py-3 items-center justify-center text-2xl font-bold'>
                                Book an Appointment
                            </div>

                        </div>
                    </div>

                    {/* Cards */}
                    <div className='mx-20 mt-20 border border-white grid grid-cols-2 sm:grid-cols-4 gap-5 pt-10 p-4 rounded-3xl '>
                        <CounterBox target={300} label="Projects completed" />
                        <CounterBox target={16} label="Award Received" />
                        <CounterBox target={12} label="Years Of Experience" />
                        <CounterBox target={34} label="Team Members" />

                    </div>

                    {/* Trusted By */}
                    <div className='flex flex-col justify-center items-center my-10'>
                        <h1 className='text-[#4D4D4D] mb-6'>
                            Trusted by 5,000+ businesses for innovative design and growth.
                        </h1>

                        {/* Blur container */}
                        <div className='relative w-[1000px] overflow-hidden mx-auto'>
                            {/* Left Blur */}
                            {/* Left Blur */}
                            {/* <div className='absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#F2E7FE] to-transparent pointer-events-none z-10'></div> */}

                            {/* Right Blur */}
                            {/* <div className='absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#F2E7FE] to-transparent pointer-events-none z-10'></div> */}


                            {/* Scrollable Content */}
                            <div className='flex whitespace-nowrap' ref={sliderRef}>
                                {/* Duplicated logos for smooth loop */}
                                {[...Array(2)].flatMap(() =>
                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, i) => (
                                        <div
                                            key={i + Math.random()}
                                            className='flex items-center justify-center gap-2 w-[200px] shrink-0 px-4 py-2 scale-75'
                                        >
                                            <img
                                                src={companyLogo1}
                                                alt={`Company ${i + 1}`}
                                                className='w-14 h-14 object-cover rounded-full'
                                            />
                                            <p className='text-lg text-black'>Square</p>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>


                        <hr className='w-[50%] text-[#EDEFF3] my-10' />

                        <div className='flex gap-6'>
                            <div className='flex gap-3 '>
                                <img className='p-3 bg-white border border-[#EDEFF3] rounded-2xl' src={trustPilot} alt="" />
                                <div className=''>
                                    <div className='bg-[#EDEFF3] rounded-full flex p-0.5 w-[60%]'>
                                        <div className='bg-white rounded-l-full rounded-r-sm w-[60%] flex justify-center items-center gap-1 ' >
                                            <FaStar className='text-yellow-300 ' />     4.6
                                        </div>
                                        <h1 className='text-[#666666] px-2'>127</h1>

                                    </div>
                                    <p className='text-[#4C4C4C]'>
                                        Rating by Trusted users
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-3 '>
                                <img className='p-3 bg-white border border-[#EDEFF3] rounded-2xl' src={google} alt="" />
                                <div className=''>
                                    <div className='bg-[#EDEFF3] rounded-full flex p-0.5 w-[70%]'>
                                        <div className='bg-white rounded-l-full  w-[60%] flex justify-center items-center gap-1' >
                                            <FaStar className='text-yellow-300 ' />  4.8
                                        </div>
                                        <h1 className='text-[#666666] px-2'>932</h1>

                                    </div>
                                    <p className='text-[#4C4C4C]'>
                                        on Google Reviews
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Services */}
            <Services />

            {/* Why Clients Trust Us */}
            <section className='flex flex-col h-[550px] px-[80px] py-[46px] '>
                <div className='flex justify-between h-[46%]'>
                    <div>

                        <h1 className='text-[18px]'>Problem vs Solution -</h1>
                        <h1 className="text-[48px] text-[#8E59E2] font-semibold text-left mb-10 w-[80%] ">Why Clients Trust Us</h1>
                    </div>
                    <img className='scale-150 hidden sm:block pr-18' src={whyClientImage} alt="" />

                </div>
                <div className=' flex gap-10 '>
                    <div className='w-[35%] '>

                        <h2 className='text-[38px] text-[#8E59E2] font-medium'>Common Clients Problem</h2>
                        <p className='my-8 flex items-center gap-3'><ImCross className='text-red-600' /> Project stuck with no clarity</p>
                        <p className='my-8 flex items-center gap-3'><ImCross className='text-red-600' /> Not getting leading even after lunch</p>
                        <p className='my-8 flex items-center gap-3'><ImCross className='text-red-600' /> No one helping with server or post-sales</p>
                    </div>

                    <div className='h-[50%] '>

                        <h2 className='text-[38px] text-[#8E59E2] font-medium'>Our Proven Solutions</h2>
                        <p className='my-8 flex items-center gap-3'><MdOutlineDone className='text-white bg-green-500' /> we build with a clear process and defined roadmap</p>
                        <p className='my-8 flex items-center gap-3'><MdOutlineDone className='text-white  bg-green-500' /> we bring targeted campaigns to bring real,quality leads</p>
                        <p className='my-8 flex items-center gap-3'><MdOutlineDone className='text-white  bg-green-500' /> We manage servers and tech support long-term—even post-launch</p>
                    </div>

                </div>
            </section>

            {/* How it Works */}
            <section className="py-16 px-20 bg-gradient-to-b from-[#FFFFFF] via-[#EEE7FE] to-[#F2E7FE] ">
                <h1 className="text-[48px] text-[#8E59E2] font-semibold text-left mb-10">How It Works</h1>

                <div className="relative flex items-start justify-between w-[90%] mx-auto py-20 px-10 bg-white shadow-md rounded-md">
                    {/* Horizontal Line Behind Images */}
                    <div className="absolute top-[39%] left-16 w-[85%] h-1 bg-gray-300 z-0" />

                    {howItWorks.map((item, index) => (
                        <div key={index} className="flex flex-col items-center z-10 w-[100px]">
                            {/* Step Circle with Image */}
                            <div className="bg-[#8E59E2] w-16 h-16 rounded-full flex items-center justify-center mb-2">
                                <img
                                    src={item.img}
                                    alt={`Step ${index + 1}`}
                                    className="w-8 h-8 object-contain"
                                />
                            </div>

                            {/* Step Text */}
                            <p className="text-sm text-center text-[#8E59E2]">{item.title}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Proof and Results Section */}
            <section className="relative w-full h-[790px]">
                {/* Gradient Background (layer 0) */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#DFD6FA] to-[#F8F6FE] z-0"></div>

                {/* Overlay Images (layer 10) */}
                <div className="absolute inset-0 flex justify-between z-10 pointer-events-none">
                    <img className="w-[40%] h-full object-cover" src={OverlayLeft} alt="" />
                    <img className="w-[40%] h-full object-cover" src={OverlayRight} alt="" />
                </div>

                {/* Content (layer 20) */}
                <div className="relative z-20 w-full h-full px-[80px] pb-[46px] pt-[25px]">
                    {/* Heading */}
                    <h1 className="text-[48px] text-[#8E59E2] font-semibold mb-4">Proof & Results Section</h1>

                    {/* Subtext */}
                    <p className="text-gray-600 max-w-xl mb-10">Results That Matter</p>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {/* Card 1 */}
                        <div className="bg-gradient-to-br flex flex-col from-[#ffffff] to-[#B487FC] p-6 rounded-2xl  shadow-md hover:shadow-lg transition-all duration-300 ">
                            <h2 className="text-xl font-semibold mb-2">UI / UX</h2>
                            <p className="text-3xl font-semibold">Kabby</p>
                            <p className="font-semibold mt-3 mb-2">Problem</p>
                            <p>The client faced high ride cancellations and user drop-offs due to poor UX and slow app performance, especially during peak hours.</p>
                            <p className='font-semibold mt-3 mb-2'>Result </p>
                            <p>The client faced high ride cancellations and user drop-offs due to poor UX and slow app performance, especially during peak hours.</p>
                            <p className='font-semibold mt-3 mb-2'>Tools Used </p>
                            <p>The client faced high ride cancellations and user drop-offs due to poor UX and slow app performance, especially during peak hours.</p>
                            <div className='bg-[#8E59E2] w-full text-white text-[18px] rounded-xl mt-14 px-7 py-3 flex items-center justify-center  text-2xl font-bold'>
                                Let's have a Look
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-gradient-to-br from-[#ffffff] to-[#B487FC] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                            <h2 className="text-xl font-semibold mb-2">Development</h2>
                            <p className="text-3xl font-semibold">Busy Bucket</p>
                            <p className="font-semibold mt-3 mb-2">Problem</p>
                            <p>The business had no online presence and was managing inventory manually, leading to frequent stock errors and missed sales opportunities.</p>
                            <p className='font-semibold mt-3 mb-2'>Result </p>
                            <p>We developed a full-stack e-commerce platform with real-time inventory sync and payment integration, which helped the client achieve a 60% increase in online sales within 2 months.</p>
                            <p className='font-semibold mt-3 mb-2'>Tools Used </p>
                            <p>React.js, Laravel, MySQL, Razorpay API, AWS S3</p>
                            <div className='bg-[#8E59E2] w-full text-white text-[18px] rounded-xl mt-20 px-7 py-3 items-center justify-center text-2xl font-bold'>
                                Let's have a Look
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-gradient-to-br from-[#ffffff] to-[#B487FC] p-6 rounded-2xl  shadow-md hover:shadow-lg transition-all duration-300">
                            <h2 className="text-xl font-semibold mb-2">Development</h2>
                            <p className="text-3xl font-semibold">Kabby</p>
                            <p className="font-semibold mt-3 mb-2">Problem</p>
                            <p>The client was investing heavily in ads but wasn’t seeing quality leads or conversions, primarily due to poor targeting and lack of landing page optimization.</p>
                            <p className='font-semibold mt-3 mb-2'>Result </p>
                            <p>We restructured the ad strategy with precise targeting, A/B tested landing pages, and implemented lead scoring — resulting in 220+ qualified leads in just 3 weeks.</p>
                            <p className='font-semibold mt-3 mb-2'>Tools Used </p>
                            <p>Meta Ads, Google Ads, Canva, Google Analytics, Mailchimp</p>
                            <div className='bg-[#8E59E2] w-full text-white text-[18px] rounded-xl mt-8 px-7 py-3 items-center justify-center text-2xl font-bold'>
                                Let's have a Look
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Testi */}
            <section className='h-[720px] bg-gradient-to-b from-[#FFFFFF] to-[#8E59E2] '>

            </section>

            {/* Why Choose Us  */}
            <section className='h-[400px] bg-[#8E59E1] text-white  px-[80px]  py-[46px] '>
                <h1 className="text-[48px] font-semibold text-left mb-10">Why Choose Us</h1>


                <div className='flex gap-7 text-white justify-between'>
                    <div className='pr-5 w-[25%] '>
                        <h1 className='text-[50px] font-bold leading-none m-0  mb-3'>5+</h1>
                        <p className='text-[24px] font-light  m-0'>Years of Experience</p>
                    </div>

                    <div className='pr-2 pl-10 border-l border-white w-[25%]'>
                        <h1 className='text-[50px] font-bold leading-none mb-3'>100+</h1>
                        <p className='text-[24px] font-light whitespace-nowrap m-0'>Project Delivered</p>
                    </div>

                    <div className='pl-7 border-l border-white w-[25%]'>
                        <h1 className='text-[50px] font-bold leading-none mb-3 '>60+</h1>
                        <p className='text-[24px] font-light m-0 w-[80%]'>India's Fastest Growing Tech Marketing Agency</p>
                    </div>
                    <div className='pl-7 border-l border-white w-[25%]'>
                        <h1 className='text-[50px] font-bold leading-none mb-3 '>100%</h1>
                        <p className='text-[24px] font-light m-0 w-[80%]'>Money-Back Lead Guarantee</p>
                    </div>
                </div>

            </section>

            {/* Connect With us */}
            <section className="w-full min-h-screen flex bg-[#8E59E2]  px-[80px] py-[46px]">
                {/* Left Side */}
                <div className="w-[55%] flex flex-col items-start justify-between rounded-xl">
                    <div className="relative h-[90%] w-auto">
                        <img
                            src={AdarshSir}
                            alt="Contact Illustration"
                            className="h-full w-auto object-contain"
                        />
                        <div className="absolute rounded-xl bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/60 to-transparent backdrop-blur-[4px] pointer-events-none"></div>
                    </div>


                    <div className='bg-white w-fit text-black text-[18px] rounded-full px-7 py-3 items-center justify-center text-2xl font-bold'>
                        connect with us
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className='w-[45%] justify-center flex item-center '>
                    <div className=" w-[90%]  flex flex-col justify-center items-center rounded-xl bg-[#F2E7FE]">
                        <div className='w-[80%] '>

                            <h2 className="text-3xl font-bold text-[#8E59E2] mb-6">Ready to Grow 3X in 90 Days</h2>
                            <form class=" ">
                                <div class="mb-5">
                                    <label for="email" class="block mb-2 text-sm font-medium text-[#353535]">Name</label>
                                    <input type="email" id="email" class=" text-[#353535] text-sm rounded-lg bg-white block w-full p-2.5" placeholder="name@flowbite.com" required />
                                </div>
                                <div class="mb-5">
                                    <label for="email" class="block mb-2 text-sm font-medium text-[#353535]">Email</label>
                                    <input type="email" id="email" class=" text-[#353535] text-sm rounded-lg bg-white block w-full p-2.5 border border-[#353535]" placeholder="name@flowbite.com" required />
                                </div>
                                <div class="mb-5">
                                    <label for="phone" class="block mb-2 text-sm font-medium text-[#353535]">Contact</label>
                                    <div class="flex">
                                        {/* <!-- Country Code Select (20%) --> */}
                                        <select id="country-code" name="country-code" class="w-1/5 text-[#353535] text-sm rounded-l-lg bg-white p-2.5 border border-[#353535] border-r-0">
                                            <option value="+91">IND (+91)</option>
                                            <option value="+1">USA (+1)</option>
                                            <option value="+44">UK (+44)</option>
                                            <option value="+61">AUS (+61)</option>
                                            {/* <!-- aur bhi add kar sakte ho --> */}
                                        </select>

                                        {/* <!-- Phone Number Input (80%) --> */}
                                        <input type="tel" id="phone" name="phone" class="w-4/5 text-[#353535] text-sm rounded-r-lg bg-white p-2.5 border border-[#353535]" placeholder="Enter your number" required />
                                    </div>
                                </div>

                                <div class="mb-5">
                                    <label for="email" class="block mb-2 text-sm font-medium text-[#353535]">Schedule Your Meeting</label>
                                    <input type="email" id="email" class=" text-[#353535] text-sm rounded-lg bg-white block w-full p-2.5 border border-[#353535]" placeholder="name@flowbite.com" required />
                                </div>
                                <div class="mb-5">
                                    <label for="service" class="block mb-2 text-sm font-medium text-[#353535]">Select Service</label>
                                    <select id="service" name="service" class="text-[#353535] text-sm rounded-lg bg-white block w-full p-2.5 border border-[#353535]" required>
                                        <option value="">-- Select Service --</option>
                                        <option value="development">Development</option>
                                        <option value="marketing">Marketing</option>
                                        <option value="devops">DevOps</option>
                                        <option value="server-management">Server Management</option>
                                    </select>
                                </div>

                                <div class="mb-5">
                                    <label for="password" class="block mb-2 text-sm font-medium text-[#353535]">Your password</label>
                                    <input type="password" id="password" class=" text-[#353535] text-sm rounded-lg bg-white block w-full p-2.5 border focus:border-[#353535]" required />
                                </div>
                                {/* <div class="flex items-start mb-5">
                                <div class="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                </div>
                                <label for="remember" class="ms-2 text-sm font-medium text-[#353535] dark:text-gray-300">Remember me</label>
                            </div> */}
                                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book Strategy Call Now</button>
                            </form>
                        </div>

                    </div>
                </div>

            </section>


        </div>
    )
}

export default LandingPage
