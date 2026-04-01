import React from 'react';
import { CiYoutube } from 'react-icons/ci';
import { MdFacebook } from 'react-icons/md';
import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='bg-[#101727] px-8 pt-28  text-white'>
            <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 place-items-center'>
                <div>
                    <h1 className='text-4xl font-extrabold'>DigiTools</h1>
                    <p className='text-xs mt-5'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div>
                    <p className='text-xl font-medium'>Product</p>
                    <ul>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Templates</a></li>
                        <li><a href="">Integrations</a></li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium'>Company</p>
                    <ul>
                       <li><a href="">About</a></li> 
                       <li><a href="">Blog</a></li> 
                       <li><a href="">Careers</a></li> 
                       <li><a href="">press</a></li> 
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium'>Resources</p>
                    <ul>
                        <li><a href="">Documentation</a></li>
                        <li><a href="">Help Center</a></li>
                        <li><a href="">Community</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium'>Social Links</p>
                    <ul className='flex items-center gap-2 mt-5'>
                        <li><a className='' href=""><CiYoutube className='bg-white text-black rounded-full p-2 text-4xl'/></a></li>
                        <li><a href=""><MdFacebook  className='bg-white text-black rounded-full p-2 text-4xl'/></a></li>
                        <li><a href=""><RiTwitterXFill  className='bg-white text-black rounded-full p-2 text-4xl'/></a></li>
                    </ul>
                </div>
            </div>
            <div className='border-t border-gray-800 my-8'></div>
                <div className='flex justify-between max-w-6xl mx-auto'>
                    <div>
                        <p className='mb-8'>© 2026 Digitools. All rights reserved.</p>
                    </div>
                    <div>
                        <ul className='flex flex-col md:flex-row gap-7'>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Service</a></li>
                        <li><a href="">Cookies</a></li>
                    </ul>
                    </div>
                </div>
        </div>
    );
};

export default Footer;