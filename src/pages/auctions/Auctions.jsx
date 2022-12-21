import React, {useContext, useState} from 'react'
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
                    <div className="max-w-[1064px] mx-auto ">
                        <article className='text-lg leading-[200%] font-medium mb-10'>
                            <p className='text-[#BCB7B7]'><Link to="/">Home</Link>/ <span className="text-grey">Auctions</span></p>
                            <p className='text-black'>Here’s an overview of products actively on auction, explore!</p>
                        </article>
                        <section>
                            <div className='flex gap-8 w-full overflow-x-scroll'>
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
                            <div className="grid grid-cols-2 gap-16">
                                {bidsItems}
                            </div>
                        </section>
                    </div>
                </div>
            
            </>
        )
}

export default Auctions
