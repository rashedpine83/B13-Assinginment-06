import React, { use} from 'react';
import Products from './Products';


const ToolsCards = ({ToolsPromise, carts, setCarts,}) => {
    
    const cards = use(ToolsPromise)

    return (
        <div>
            
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto py-20'>
                {
                    cards.map(card => <Products
                         key={card.id}
                        card={card} 
                        carts={carts}
                        setCarts={setCarts}></Products>
                    
                    )
                };
            </div>
            
        </div>
    );
};

export default ToolsCards;