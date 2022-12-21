import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Products from './Products'
import SideNav from './SideNav'

function ProductPage() {
    return (
    <>
        <Header />
        <div className='md:mt-5'>
            <div className='container mx-auto flex h-calc overflow-y-scroll'>
                <SideNav />
                <main className='px-4 md:px-11 w-full'>
                    <article className='md:hidden text-[#BCB7B7] mb-4'>
                        <p className='text-lg font-medium leading-[51.5px] mb-4'>Home/ Marketplace/ <span>Editorials</span></p>
                        <p className='font-poppin'><i>See 1-6 of 15 results</i></p>
                    </article>
                    <div className='w-full h-[3.75rem] text-black text-lg leading-[150%] rounded-[15px] shadow-5xl md:shadow-4xl border mb-8 flex items-center justify-between px-4'>
                        <p className='hidden md:block'>See 1-6 of 15 results</p>
                        <select name="filter-by" id="filter-by" className='md:hidden md:border border-black md:border-[0.4px] p-2 rounded-lg focus:outline-0'>
                            <option value="">Filter</option>
                        </select>
                        <select name="sort-by" id="sort-by" className='md:border border-black md:border-[0.4px] p-2 md:px-8 rounded-lg focus:outline-0'>
                            <option value="">Sort By</option>
                        </select>
                    </div>
                    
                    <Products />
                </main>
            </div>
            <Footer className="md:hidden"/>
        </div>
    </>
    )
}

export default ProductPage
