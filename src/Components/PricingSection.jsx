import React, { use } from 'react';

import PricingCards from './PricingCards';
import PopularCard from './PopularCard';

const PricingSection = ({pricingPromise}) => {
    const cards = use(pricingPromise)
    
    
    return (
        <div className='max-w-6xl mx-auto my-10'>
            <div className='text-center'>
                <h1 className='text-5xl font-extrabold mb-5'>Simple, Transparent Pricing</h1>
                <p className='text-[#627382] mb-20'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                {
                    cards.map(card => {
                        return card.popular 
                            ? <PopularCard key={card.id} card={card} /> 
                            : <PricingCards key={card.id} card={card} />
                        })
                }
            </div>
        </div>
    );
};

export default PricingSection;