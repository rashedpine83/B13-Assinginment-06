import React, { useState } from 'react';
import FeatureCards from './FeatureCards';
import { toast } from 'react-toastify';

const Products = ({card, carts, setCarts}) => {
    const [isBuy, setIsBuy] = useState(false)

    const handleBuy = () => {
        setIsBuy(true)
        

    const isFound = carts.find(item => item.id === card.id)
    if(isFound){
        toast.error("Item already in Cart")
        return
    }

        setCarts([...carts, card])
        toast.success("Buy Successfully")
    }
    return (
        <div>
            <div className='shadow-[0_4px_20px_rgba(0,0,0,0.25)] p-5 flex flex-col h-full hover:scale-105'>
                            
                            <div className='flex justify-end'>
                                
                                <p className={`px-5 py-2 rounded-full text-center font-bold 
                                    ${card.tag === "popular" && "bg-[#e1e7ff] text-violet-600"}
                                    ${card.tag === "new" && "bg-[#dbfce7] text-[#0a883e]"}
                                    ${card.tag === "best seller" && "bg-[#fef3c6] text-[#bb4d00]"}`}>
                                    {card.tag}
                                </p>
                            </div>
                            <img className='w-10 mb-3' src={card.icon} alt="" />
                            <div className='space-y-5 flex flex-col flex-1'>
                                <h2 className='text-2xl font-bold'>{card.name}</h2>
                                <p className='text-[#627382]'>{card.description}</p>
                                <p><span className='text-2xl font-bold'>$ {card.price}</span> / 
                                <span className='text-[#627382]'>{card.period}</span></p>
                                <div>
                                    {
                                        card.features.map((feature, index) => <FeatureCards key={index} feature={feature}></FeatureCards>
                                        
                                        )
                                    }
                                </div>
                                <div className="mt-auto">
                                    <button onClick={handleBuy} className={`${isBuy
                                        ? "bg-green-500 text-white w-full rounded-full px-4 py-2"
                                        : "btn w-full rounded-full text-white bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] px-4 py-2"}`}>
                                      
                                        {isBuy ? "Purchased" : "Buy Now"}
                                    </button>
                                </div>
                            </div>
                        </div>

        </div>
    );
};

export default Products;