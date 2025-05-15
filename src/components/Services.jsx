import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import digitalMarketing from "../assets/digital-marketing.png"
import design from "../assets/design-dev.png"
import ecom from "../assets/animation.png"
import animation from "../assets/ecom.png"
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";


const cards = [
  {
     image: digitalMarketing,
    //  title: "Digital Marketing",
     title: "Development",
     desc: "Drive growth with data-driven strategies that maximize reach & engagement. Let’s scale your brand!",
     data: [
      {
        img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
        title: "240k+ Appointment Booked Today",
        desc: "Technical SEO | On-Page SEO | Off- Page SEO | Local SEO",
        link: "/articles/ai-revolution"
      },
      {
        img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
        title: "240k+ Appointment Booked Today",
        desc: "Facebook | Instagram | X | Linkedin Pinterest",
        link: "/articles/ai-revolution"
      },
      {
        img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
        title: "240k+ Appointment Booked Today",
        desc: "Search Ads | Display Ads | Demand Gen PMax Ads| Video Ads | Lead Generation ",
        link: "/articles/ai-revolution"
      },
      {
        img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
        title: "240k+ Appointment Booked Today",
        desc: "Channel SEO | Skip-Non Skip able Ads | Increase Subscriber & Views",
        link: "/articles/ai-revolution"
      },
      
    ]
  },
  {
    // title: "Design & Development",
    title: "Marketing",
    image: design,
    desc: "Build stunning, high-performance websites & apps tailored to your vision. Start your project today!",
    data: [
      {
        img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
        title: "240k+ Appointment Booked Today",
        desc: "Create dynamic web apps with Java using Spring and Hibernate.",
        link: "/articles/mental-wellness"
      },
      {
        img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
        title: "240k+ Appointment Booked Today",
        desc: "Create dynamic web apps with Java using Spring and Hibernate.",
        link: "/articles/mental-wellness"
      },
      {
        img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
        title: "240k+ Appointment Booked Today",
        desc: "Create dynamic web apps with Java using Spring and Hibernate.",
        link: "/articles/mental-wellness"
      },
      {
        img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
        title: "240k+ Appointment Booked Today",
        desc: "Custom Theme | Custom E-Commerce | Custom Plugin | Public Plugin",
        link: "/articles/mental-wellness"
      },
      {
        img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
        title: "240k+ Appointment Booked Today",
        desc: "Core PHP | Laravel | Codeigniter | WordPress | Cake | Drupal",
        link: "/articles/mental-wellness"
      },
      
    ]
  },
  {
    // title: "Animation & Graphics",
    title: "Devops",
    image: animation,
    desc: "Build stunning, high-performance websites & apps tailored to your vision. Start your project today!",
    data: [
      {
        img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
        title: "240k+ Appointment Booked Today",
        desc: "Create dynamic web apps with Java using Spring and Hibernate.",
        link: "/articles/mental-wellness"
      },
      {
        img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
        title: "240k+ Appointment Booked Today",
        desc: "Create dynamic web apps with Java using Spring and Hibernate.",
        link: "/articles/mental-wellness"
      },
      {
        img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
        title: "240k+ Appointment Booked Today",
        desc: "Create dynamic web apps with Java using Spring and Hibernate.",
        link: "/articles/mental-wellness"
      },
      {
        img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
        title: "240k+ Appointment Booked Today",
        desc: "Custom Theme | Custom E-Commerce | Custom Plugin | Public Plugin",
        link: "/articles/mental-wellness"
      },
      {
        img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
        title: "240k+ Appointment Booked Today",
        desc: "Core PHP | Laravel | Codeigniter | WordPress | Cake | Drupal",
        link: "/articles/mental-wellness"
      },
      
    ]
  },
  {
    // title: "E-commerce Solution",
    title: "Server Managenent",
    image: ecom,
    desc: "Build stunning, high-performance websites & apps tailored to your vision. Start your project today!",
    data: [
      {
        img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
        title: "240k+ Appointment Booked Today",
        desc: "Create dynamic web apps with Java using Spring and Hibernate.",
        link: "/articles/mental-wellness"
      },
      {
        img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
        title: "240k+ Appointment Booked Today",
        desc: "Create dynamic web apps with Java using Spring and Hibernate.",
        link: "/articles/mental-wellness"
      },
      {
        img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
        title: "240k+ Appointment Booked Today",
        desc: "Create dynamic web apps with Java using Spring and Hibernate.",
        link: "/articles/mental-wellness"
      },
      {
        img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
        title: "240k+ Appointment Booked Today",
        desc: "Custom Theme | Custom E-Commerce | Custom Plugin | Public Plugin",
        link: "/articles/mental-wellness"
      },
      {
        img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
        title: "240k+ Appointment Booked Today",
        desc: "Core PHP | Laravel | Codeigniter | WordPress | Cake | Drupal",
        link: "/articles/mental-wellness"
      },
      
    ]
  }
];

const Services = () => {

  const [index, setIndex] = useState(0); // show first card set by default
  const current = cards[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % cards.length); // loop back to 0
  };

    // const data = new Array(6).fill({
    //     img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
    //     title: "240k+ Appointment Booked Today",
    //     desc: "Technical SEO | On-Page SEO | Off- Page SEO | Local SEO",
    // });

    const SamplePrevArrow = (props) => (
  <div {...props} className="z-10 absolute -left-6 top-1/2 -translate-y-1/2 bg-blue-500 p-2 rounded-full cursor-pointer text-white">
    <FaArrowLeft />
  </div>
);

const SampleNextArrow = (props) => (
  <div {...props} className="z-10 absolute -right-6 top-1/2 -translate-y-1/2 bg-blue-500 p-2 rounded-full cursor-pointer text-white">
    <FaArrowRight />
  </div>
);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 3 at once on desktop
    slidesToScroll: 1,
    arrows: true, 
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024, // Below 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Below 640px (mobile)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className='h-[592px] px-[80px] py-[50px]  flex gap-4'>
                <div className='w-[30%] gap-8 flex flex-col '>
                    <h1 className='text-[48px] text-[#8E59E2] font-semibold text-left leading-tight'>Explore Our Services</h1>
                    <p className='text-[18px]'>Explore our service and discover solutions designed to meet your unique needs. With a focus on quality and innovation, we turn your vision into reality.</p>
                    <div className='bg-[#8E59E2] w-fit text-white text-[18px] rounded-full px-7 py-2 items-center justify-center text-2xl font-bold'>
                        Book an Appointment
                    </div>
                </div>
                <div className='rounded-md w-[70%]'>
                    <div className='shadow-md flex flex-col gap-2 px-9 p2-4 pb-7 '>
                        <div className='flex gap-3'>
                            <img className='w-14 h-12' src={current.image} alt="" />
                            <h1 className='text-[#8E59E2] text-[28px]'>{current.title}</h1>
                        </div>
                        <p>{current.desc}</p>
                        <div className="grid grid-cols-1 gap-4   ">
                             <Slider {...settings}>

                            {current?.data?.map((item, i) => (
                                <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-sm  flex flex-col h-[230px] ">
                                    {/* Image - 40% height */}
                                    <div className="h-[40%]">
                                        <img src={item.img} alt="Card" className="rounded-t-lg w-full h-full object-cover" />
                                    </div>

                                    {/* Content - 60% height */}
                                    <div className="p-2 flex flex-col justify-between h-[60%]">
                                        <div>
                                            <h5 className="mb-1 text-[10px] font-bold tracking-tight text-gray-400">
                                                {item.title}
                                            </h5>
                                            <p className="text-[12px] text-black ">
                                                {item.desc}
                                            </p>
                                        </div>
                                        <div className='border rounded-full w-fit text-[9px] px-2'>Learn More</div>
                                    </div>
                                </div>
                            ))}
                             </Slider>

                        </div>
                    </div>
                    <div className='flex justify-end my-5 mx-2 cursor-pointer'>
                         <FaArrowRight onClick={()=>handleNext()} className='scale-125'/>
                    </div>
                </div>
            </section>

  )
}

export default Services
