import React, {useContext, useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import AuctionProduct from './AuctionProduct'
import TopBids from './TopBids'
import { toTitleCase } from '../../utils'
import bids from './bids'
import Header from '../../components/header/Header'
import { Context } from '../../Context'

function Auctions() {
    const {auctionProduct} = useContext(Context)
    const [bidItems, setBidItems] = useState(bids)
    const scrollContainer = useRef()

    function scrollForward(){
        scrollContainer.current.scrollLeft += 200;
    }

    function scrollReverse(){
        scrollContainer.current.scrollLeft -= 200;
    }


    const autions = auctionProduct.map(item => {
        return(
            <AuctionProduct 
                key={item.id}
                id={item.id}
                img={item.url}
            />
        )
    })

    const bidsItems = bidItems.map(item => {
        return(
            <TopBids 
                key={item.id}
                img = {item.url} 
                title = {item.name} 
                creator = {toTitleCase(item.creator)} 
                date = {item.date.day + "/"+ item.date.month + "/" + item.date.year} 
                highestbid = {item.bid.highest.eth}
                currentbid = {item.bid.current.eth}
                isFavorite = {item.isFavorite}
                id={item.id}
                toggleFavorite={toggleFavorite}
            />
        )
    })

    function toggleFavorite(id){
        setBidItems(
            bidItems.map(item => {
                if(item.id == id){
                    return {...item, isFavorite: !item.isFavorite}
                }
                return item
            })
        )
    }

        return (
            <>
                <Header />
                <div className="container mx-auto pb-16">
                    <div className="max-w-[1064px] mx-auto  px-4 md:px-0">
                        <article className='text-lg leading-[200%] font-medium mb-10'>
                            <p className='text-[#BCB7B7] hidden md:block'><Link to="/">Home</Link>/ <span className="text-grey">Auctions</span></p>
                            <p className='text-black leading-[157%]'>Here’s an overview of products actively on auction, explore!</p>
                        </article>
                        <section className='relative'>
                            <div ref={scrollContainer} className='flex gap-8 w-full overflow-x-scroll'>
                                <div className='absolute top-10 left-0 flex w-full justify-between z-10 md:hidden'>
                                    <button onClick={scrollReverse} className='h-10 w-10 rounded-full backdrop-blur-[4.681px] bg-white/[0.2] flex items-center justify-center shadow-6xl'>
                                        <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.04693 4.81002L5.26855 1.5884L4.34828 0.668121L0.206373 4.81002L4.34828 8.95193L5.26855 8.03165L2.04693 4.81002Z" fill="white"/>
                                        </svg>
                                    </button>
                                    <button onClick={scrollForward} className='h-10 w-10 rounded-full backdrop-blur-[4.681px] bg-white/[0.2] flex items-center justify-center shadow-6xl'>
                                        <svg className='rotate-180' width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.04693 4.81002L5.26855 1.5884L4.34828 0.668121L0.206373 4.81002L4.34828 8.95193L5.26855 8.03165L2.04693 4.81002Z" fill="white"/>
                                        </svg>
                                    </button>
                                </div>
                                {autions}
                            </div>
                            <div className='flex justify-center gap-1 my-8'>
                                <div className='h-2 w-2 bg-[#4693ED] rounded-full'></div>
                                <div className='h-2 w-2 bg-[#b8bcb5] rounded-full'></div>
                                <div className='h-2 w-2 bg-[#b8bcb5] rounded-full'></div>
                                <div className='h-2 w-2 bg-[#b8bcb5] rounded-full'></div>
                            </div>
                        </section>
                        <section>
                            <h4 className='text-xl text-black leading-[200%] font-bold'>Top bids from popular creators</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                {bidsItems}
                            </div>
                            <button className='text-xl text-black leading-[157%] flex items-center gap-4 block mx-auto md:hidden mt-10'>
                                <span>Load more</span>
                                <svg width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="27.5" cy="26.5" r="26.25" stroke="black" stroke-width="0.5"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 27C10 26.6759 10.1279 26.3651 10.3556 26.1359C10.5833 25.9067 10.8922 25.7779 11.2142 25.7779H39.8525L32.2103 18.0888C31.9823 17.8593 31.8542 17.5481 31.8542 17.2236C31.8542 16.8991 31.9823 16.5879 32.2103 16.3584C32.4383 16.1289 32.7475 16 33.07 16C33.3924 16 33.7016 16.1289 33.9296 16.3584L43.6433 26.1348C43.7564 26.2483 43.8461 26.3832 43.9073 26.5316C43.9685 26.6801 44 26.8393 44 27C44 27.1607 43.9685 27.3199 43.9073 27.4684C43.8461 27.6168 43.7564 27.7517 43.6433 27.8652L33.9296 37.6416C33.7016 37.8711 33.3924 38 33.07 38C32.7475 38 32.4383 37.8711 32.2103 37.6416C31.9823 37.4121 31.8542 37.1009 31.8542 36.7764C31.8542 36.4519 31.9823 36.1407 32.2103 35.9112L39.8525 28.2221H11.2142C10.8922 28.2221 10.5833 28.0933 10.3556 27.8641C10.1279 27.6349 10 27.3241 10 27Z" fill="#616161"/>
                                </svg>
                            </button>
                        </section>
                    </div>
                </div>
            
            </>
        )
}

export default Auctions
