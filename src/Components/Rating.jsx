import React from 'react';

const Rating = () => {
    return (
        <div className='text-white bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] py-10 px-30 flex gap-10 flex-col md:flex-row justify-between text-center mb-28'>
            <div >
                <h1 className='text-7xl font-extrabold'>50K+</h1>
                <p className='text-2xl font-medium'>Active Users</p>
            </div>
            <div className='border-b md:border-r border-white'></div>
            <div>
                <h1 className='text-7xl font-extrabold'>200+</h1>
                <p className='text-2xl font-medium'>premium Tools</p>
            </div>
            <div className='border-b md:border-r border-white'></div>
            <div>
                <h1 className='text-7xl font-extrabold'>4.9</h1>
                <p className='text-2xl font-medium'>Rating</p>
            </div>
        </div>
    );
};

export default Rating;