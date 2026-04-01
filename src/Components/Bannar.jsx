import React from 'react';
import { IoMdRadioButtonOn } from 'react-icons/io';
import BannarImage from "../assets/banner.png"
import play from '../assets/Play.png'

const Bannar = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center container mx-auto my-12 gap-10 px-4'>

      {/* Left side of bannar */}
      <div className='w-full md:w-1/2 space-y-5 md:py-20 text-center md:text-left'>

        <button className='flex items-center gap-2 btn rounded-full bg-[#e1e7ff] text-[rgba(149,20,250,1)] mx-auto md:mx-0'>
          <IoMdRadioButtonOn className='bg-[rgba(149,20,250,0.5)] rounded-full'></IoMdRadioButtonOn>
          <span className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent'>New: AI-Powered Tools Available</span>
        </button>

        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
          Supercharge Your Digital Workflow
        </h1>

        <p className='text-base md:text-lg text-[#627382]'>
          Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
        </p>

        <div className='flex flex-row gap-3 justify-center md:justify-start'>
          <button className="btn rounded-full text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] px-6 py-2">
            Explore Products
          </button>

          <button className="btn rounded-full border border-violet-600 flex items-center gap-2 px-4">
            <img src={play} alt="" className="w-5" />
            <span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
              Watch Demo
            </span>
          </button>
        </div>

      </div>

      {/* Right side of bannar */}
      <div className='w-full md:w-1/2'>
        <img className='w-full max-w-md md:max-w-full mx-auto' src={BannarImage} alt="BannarImage" />
      </div>

    </div>
  );
};

export default Bannar;