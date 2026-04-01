import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';

const PricingCards = ({card}) => {
    return (
         <div className="shadow-[0_4px_20px_rgba(0,0,0,0.25)] p-8 flex flex-col relative ">
            <div className='flex justify-center w-fit mx-auto absolute -top-5 left-[30%] rounded-lg'>
                {card.popular &&<span className="text-[#bb4d00] bg-[#fef3c6] rounded-full px-4 py-2 font-bold ">Most Popular</span>}
            </div>
            <h2 className='text-2xl font-bold'>{card.name}</h2>
            <p className='text-[#627382] my-5'>{card.description}</p>
            <p><span className='text-4xl font-bold'>$ {card.price}</span> / 
                <span className='text-[#627382] text-xl'>{card.period}</span>
            </p>
                            
            {
                card.features.map(feature =>
                    <div key={feature.id} className=''>
                        <p className='flex gap-2 mt-3 items-center text-[#627382]'> <FaRegCheckCircle className='text-green-600' />{feature}</p>
                    </div>
            )};

            <button className='mt-auto btn w-full rounded-full text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] px-4 py-2 text-xl my-5'>{card.button}</button>
        </div>
    );
};

export default PricingCards;