import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Context'
import CartCheckout from './CartCheckout'
import EmptyCart from './EmptyCart'

function Cart() {
    const {cart} = useContext(Context)

    return (
        <main className='pb-10'>
            <div className="container mx-auto">
                <div className="max-w-[1064px] mx-auto">
                    {cart.length ? <CartCheckout /> : <EmptyCart />}
                </div>
            </div>
        </main>
    )
}

export default Cart
