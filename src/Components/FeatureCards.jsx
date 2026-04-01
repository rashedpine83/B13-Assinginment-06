import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';

const FeatureCards = ({feature}) => {
    return (
        <div>
            {
            <p className='flex gap-2 mt-3 items-center'><FaRegCheckCircle className='text-green-600' />{feature}</p>
           }
        </div>
    );
};

export default FeatureCards;