import React from 'react'
import Header from '../../components/header/Header'
import Products from './Products'
import SideNav from './SideNav'

function ProductPage() {
    return (
        <div className='mt-5'>
            <div className='container mx-auto flex h-calc overflow-y-scroll'>
                <SideNav />
                <main className='px-11 w-full'>
                    <div className='w-full h-[3.75rem] rounded-[15px] shadow-4xl border mb-8'></div>
                    <Products />
                </main>
            </div>
        </div>
    )
}

export default ProductPage
