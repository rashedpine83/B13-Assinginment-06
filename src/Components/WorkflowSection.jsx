import React from 'react';

const WorkflowSection = () => {
    return (
        <div className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white p-10 md:p-28 text-center mt-28'>
           <div>
                <h1 className='text-4xl font-bold'>Ready to Transform Your Workflow?</h1>
                <p className='my-5'>Join thousands of professionals who are already using Digitools to work smarter. <br/> Start your free trial today.</p>
           </div>
           <div className='flex gap-5 justify-center'>
                <button className=' btn rounded-full bg-white'><span className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-transparent bg-clip-text'>Explore Products</span></button>
                <button className='btn rounded-full text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] border-white'>View Pricing</button>
           </div>
           <p className='mt-5'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default WorkflowSection;