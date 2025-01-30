import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import im2 from './assets/Screenshot_4-Photoroom.png'
import './App.css'

export default function Banner1() {
  return (
    <div>
    <div className='grid grid-cols-1 lg:grid-cols-2 justify-center p-10 lg:p-25 gap-x-50 relative'>

      {/* Left Section */}
      <div className='relative z-20'>
        <p className='text-3xl lg:text-4xl font-bold text-[#D7C4FC]'>Hi, I'm Bibek</p>
        <p className='text-4xl lg:text-6xl font-bold text-[#8953F7] mt-5'>
          Next Level <span className='text-[#D7C4FC]'> Web Developer</span>
        </p>
        
        {/* Move this text to appear on top (z-20) */}
        <p className='text-[#D7C4FC] font-bold text-1xl lg:text-2xl mt-5 relative '>
          I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
        </p>

        <div className='flex gap-3'>
          <button className='btn btn-outline text-[#8953F7] rounded-full p-4 mt-5'>Download CV <MdOutlineFileDownload /></button>
          <button className='btn btn-outline text-[#8953F7] rounded-full p-4 mt-5'><FaFacebookF /></button>
          <button className='btn btn-outline text-[#8953F7] rounded-full p-4 mt-5'><FaLinkedinIn /></button>
          <button className='btn btn-outline text-[#8953F7] rounded-full p-4 mt-5'><FaGithub /></button>
        </div>
      </div>

      
      <p className='pookie animate__animated animate__heartBeat animate__infinite animate__slower animate__delay-0.5s font-bold text-[#550b56] [font-size:280px] absolute lg:top-36 lg:left-[480px] z-10'>
        HI
      </p>

      
      <div className='h-[400px] w-[300px] lg:h-[500px] lg:w-[400px] mt-8 relative z-30'>
        <img className="rounded-3xl border-4 border-[#8953F7]" src={im2} alt="Profile" />
      </div>

      <div className=''>
        <span className='text-[#D7C4FC] [font-size:70px] font-extrabold '>2+ <span className='text-2xl text-[#D7C4FC]  '>Years of Experience</span></span>
      
      </div>


      <div className=''>
        <span className='text-[#D7C4FC] [font-size:70px] font-extrabold '>20+ <span className='text-2xl text-[#D7C4FC]  '>Projects Completed</span></span>
      
      </div>


    </div>


    


    </div>
  )
}
