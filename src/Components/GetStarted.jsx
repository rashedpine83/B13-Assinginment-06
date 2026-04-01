import React from 'react';
import user from '../assets/user.png'
import packageimg from '../assets/package.png'
import rocket from '../assets/rocket.png'


const GetStarted = () => {
    return (
        <div className='max-w-6xl mx-auto my-15'> 
           <div className=' text-center'>
                <h1 className='text-5xl font-extrabold px-10'>Get Started in 3 Steps</h1>
                <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8 '>
                <div className='shadow-[0_4px_20px_rgba(0,0,0,0.25)] p-10 space-y-5 rounded-lg'>
                    <div className='flex justify-end'>
                        <span className='bg-violet-600 px-2 rounded-full text-white font-bold'>1</span>
                    </div>
                    <div className='flex justify-center'>
                        <a href=""> <img className='bg-gray-200 rounded-full p-2' src={user} alt="user" /></a>
                       
                    </div>
                    <div className='text-center'>
                        <a href=""><h3 className='text-2xl font-bold mb-5'>Create Account</h3></a>
                        <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
                <div className='shadow-[0_4px_20px_rgba(0,0,0,0.25)] p-10 space-y-5 rounded-lg'>
                    <div className='flex justify-end'>
                        <span className='bg-violet-600 px-2 rounded-full text-white font-bold'>2</span>
                    </div>
                    <div className='flex justify-center'>
                        <a href=""> <img className='bg-gray-200 rounded-full p-2' src={packageimg} alt="user" /></a>
                    </div>
                    <div className='text-center'>
                        <a href=""><h3 className='text-2xl font-bold mb-5'>Choose Products</h3></a>
                        <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>
                <div className='shadow-[0_4px_20px_rgba(0,0,0,0.25)] p-10 space-y-5 rounded-lg'>
                    <div className='flex justify-end'>
                        <span className='bg-violet-600 px-2 rounded-full text-white font-bold'>3</span>
                    </div>
                    <div className='flex justify-center'>
                        <a href=""> <img className='bg-gray-200 rounded-full p-2' src={rocket} alt="user"/></a>
                    </div>
                    <div className='text-center'>
                        <a href=""><h3 className='text-2xl font-bold mb-5'>Start Creating</h3></a>
                        <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default GetStarted;