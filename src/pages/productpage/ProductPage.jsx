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
                    <div className='w-full h-[3.75rem] text-black text-lg leading-[150%] rounded-[15px] shadow-4xl border mb-8 flex items-center justify-between px-4'>
                        <p>See 1-6 of 15 results</p>
                        <select name="sort-by" id="sort-by" className='border border-black border-[0.4px] p-2 px-8 rounded-lg'>
                            <option value="">Sort By</option>
                        </select>
                    </div>
                    
                    <Products />
                </main>
            </div>
        </div>
    )
}

export default ProductPage
