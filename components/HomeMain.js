import React, { useEffect } from 'react'
import HomeImageGallery from './HomeImageGallery'
import { MdLocationOn } from "react-icons/md";
import {BsFillCalendarCheckFill} from "react-icons/bs";
import gradients from "../styles/customGradient.module.css";
import Lottie from "lottie-react";
import research from "../lottieFiles/research.json"
import {useRouter} from 'next/router';
import Map from './Map';
import TechCollabGallery from './TechCollabGallery';
import Link from 'next/link';
import Sponsors from "../components/Sponsors";
import {IoMdNotifications} from "react-icons/io"

const HomeMain = () => {

  const router  = useRouter();

  const navigate = (dest)=>{
    router.push(dest);
  };

  return (
 <>
       <div className='h-[60vh] md:h-[95vh] mt-[55px] relative'>
        <HomeImageGallery/>
        {/* <div className='absolute top-10 md:top-[20%] lg:top-[10%] xl:top-[20%] left-0 z-10 w-full md:w-[65%] lg:w-[60%] backdrop-blur-md md:border-2 md:pt-8 md:mx-4 rounded-2xl md:px-10'>
            <div className='font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center md:text-left pt-4'>
                <span className='text-orange-400'></span> <span className='text-white'>2nd International Conference on</span> <span className='text-orange-400'>Microwave</span> <span className='text-white'>, Antenna and</span> <span className='text-green-500'>Communication </span> <span className='text-white'>2024 </span>
            </div>
          <div className='w-full my-12 sm:pl-0 flex flex-col justify-center gap-4 lg:justify-start lg:gap-10 font-semibold'>
            <div className='flex w-full max-w-[600px] justify-around md:justify-between'>
                  
         <div>
         <p className='flex items-center gap-3'>
        <Link href='/registration'>
        <span className='bg-purple-200 rounded-full p-[13px] cursor-pointer'>
          <BsFillCalendarCheckFill className='w-3 h-3 md:w-5 md:h-5 text-lime-600'/>
          </span>
        </Link>
         <span className='text-sm lg:text-lg text-white'> October 10-11, 2024</span></p>
         </div>

         <div>
         <p className='flex items-center justify-end gap-2'>
         <Link href='/#venue'>
         <span className='bg-purple-200 rounded-full p-2 cursor-pointer'>
          <MdLocationOn className='w-5 h-5 md:w-8 md:h-8 text-blue-500'/>
          </span>
         </Link>
         <span className='text-sm lg:text-lg text-white'> Dehradun, Uttarakhand, India</span></p>
         </div>

              </div>   
            <div className='w-full lg:px-32'>
           
            </div>
          </div>
        </div> */}
    </div>

    <div className={`w-full text-black ${gradients.homePage}`}>
    <section className="pt-6 w-full">
  <div className=" container mx-auto flex md:px-5 py-2 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 px-6 lg:pr-24 md:pr-16 relative flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      
      <h1 className="relative title-font text-4xl md:text-6xl mb-4 font-bold border-b-4 pb-4 px-8 md:px-0 md:pr-24 border-cyan-600"><span className='text-red-400'>Welcome</span>
      </h1>
      <br/>
      <p className="md:mb-8 leading-relaxed font-semibold text-lg text-justify">
      The nucleus of the educational citadel B.H.U. is C.H.S. It is the “Tapobhumi” of mother Annie Besent and Mahamana Madan Mohan Malviya ji. This institution has proudly assimilated the history of educational development. Founded on 7th July 1898 as Central Hindu College, the present C.H.S. is situated at Kamachha, spread capaciously and housed in magnificent and glorious buildings.
    </p>
 
      
    </div>
    
    <div className="w-full lg:w-[40%] bg-red-100">
      <img className="object-cover object-center" alt="hero" src="/infra1.png"/>
    </div>
  </div>
</section>

<section id="callforpaper" className="body-font">
  <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 order-last md:order-first mt-8 md:mt-0">
    <Lottie animationData={research} loop={true} />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h1  className="title-font text-4xl md:text-[5vw] lg:text-6xl mb-4 font-bold border-b-4 pb-4 border-cyan-600">
    <span className='pr-6'>
    Our Vision
    </span>
      </h1>
      <h2 className='text-orange-600 font-bold text-xl mb-6'>
      To become an excellent center for education which provides
scientific knowledge, modern skill and strong value based
character to the young minds.
      </h2>
      {/* <p className='text-lg font-semibold'>
        The accepted and presented papers of the conference by duly registered authors will be submitted to IEEE Xplore Digital Library for possible publication after quality check.
      </p>
      <div className="my-8 leading-relaxed">
      <p className='text-lg'>
      The technical sessions will have four tracks covering recent and emerging research topics in the field of Microwave, Antenna and Communication. Every track will have the
        following events:
      </p>
        <ul className='pl-6 font-semibold pt-4 text-left text-lg'>
            <li className='list-disc'>Paper Presentations and best paper awards</li>
            <li className='list-disc'>Key Note Lectures</li>
            <li className='list-disc'>Special Sessisons</li>
            <li className='list-disc'>Panel Discussions</li>
            <li className='list-disc'>Technical/Industrial Workshop</li>
        </ul>
        </div> */}
      
    </div>
  </div>
</section>

<Map/>


{/* <section className="p-6">
  <div className=" container mx-auto flex md:px-5 py-2 flex-col">
     <h1 className="relative title-font mb-4 font-bold border-b-4 pb-4 text-2xl md:text-4xl lg:pr-24 border-cyan-600 w-full md:w-[60%]">Technical Co Sponsors
      </h1>
    <Sponsors/>
  </div>
</section> */}

    </div>
 </>
  )
}

export default HomeMain