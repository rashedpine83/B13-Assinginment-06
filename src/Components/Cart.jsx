import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';

const Cart = ({carts, setCarts}) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0 )

    const handlepayment = () => {
        setCarts([]);
        toast.success("Your Payment Successfull")
    }

    const handleDelete = (cart) =>{
        const filterCarts = carts.filter(item => item.id !== cart.id)
        setCarts(filterCarts)
         toast.success("Item deleted")
    }


    return (
        <div>
            <div className='max-w-6xl mx-auto text-2xl font-bold my-4'>
                <h1>Your Cart</h1>
            </div>
            <div>
                
                {
                    
                    carts.length === 0 
                    ? <div className='mb-5 max-w-6xl mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.25)] rounded-lg'>
                        <div className='flex justify-center'>
                        <IoCartOutline className='text-8xl'></IoCartOutline>
                        </div>
                        <p className=' p-10 pt-5 font-bold text-2xl text-center text-red-600'>Your Cart is Empty</p>
                     </div> 
                    : <div>
                {
                    carts.map(cart => 
                    <div className='shadow-[0_4px_20px_rgba(0,0,0,0.25)] p-10 max-w-6xl mx-auto flex justify-between items-center rounded-lg'>
                        <div className='flex gap-6'>
                            <img className='w-10' src={cart.icon} alt="" />
                            <div>
                                <h2 className='text-2xl font-medium'>{cart.name}</h2>
                                <p><span className='text-2xl font-bold'>$ {cart.price}</span> / 
                                <span className='text-[#627382]'>{cart.period}</span></p>
                            </div>
                        </div>
                        <button onClick={() => handleDelete(cart)} className='btn text-red-600 font-bold'>Remove</button>
                    </div>
                    )
                }
            </div>
                }
            </div>
            
            
            <div className='flex justify-between items-center text-2xl font-bold max-w-6xl mx-auto my-5'>
                <p>Total</p>
                <p>$ {totalPrice}</p>
            </div>
            <div className='max-w-6xl mx-auto '>
                <button onClick={handlepayment} className='btn w-full rounded-full text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] px-4 py-2 text-xl my-5'>Proceed Checkout</button>
            </div>
        </div>
    );
};

export default Cart;