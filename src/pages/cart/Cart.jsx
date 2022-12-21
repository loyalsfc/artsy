import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import { Context } from '../../Context'
import CartCheckout from './CartCheckout'
import EmptyCart from './EmptyCart'

function Cart() {
    const {cart} = useContext(Context)

    return (
        <>
            <Header />
            <main className='pb-10'>
                <div className="container mx-auto px-4 md:px-0">
                    <div className="max-w-[1064px] mx-auto">
                        {cart.length ? <CartCheckout width='md:w-2/5' hidden="md:block"/> : <EmptyCart />}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Cart
