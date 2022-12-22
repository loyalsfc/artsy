import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Newsletter from '../../components/newsletter/Newsletter'
import DropItem from './DropItem'
import drops from './drops'

function Drop() {

    const dropItems = drops.map(item=> {
        console.log(item)
        return(
            <DropItem
                key={item.id}
                img={item.image}
                title={item.title}
                creator={item.creator}
                status={item.status}
                time={item.timeRemaining}
            />
        )
    })

    return (
        <>
            <Header />
            <main>
                <div className="container mx-auto pt-10 ">
                    <div className="max-w-[1064px] mx-auto ">
                        <p className='text-[#BCB7B7]'><Link to="/">Home</Link>/ <Link to="/auctions">Auctions</Link>/ <span className="text-grey">Live bid</span> </p>
                        <section className='flex flex-col items-center justify-center text-center gap-4 mb-10'>
                            <h1 className='text-[2rem] leading-[165%] text-black font-medium'>Upcoming drops</h1>
                            <p className='text-xl text-[#616161] leading-[200%]'>Turn on notification so that no drop will miss you</p>
                            <button className="h-[3.5rem] rounded-[10px] border text-black border-black font-medium text-xl leading-[160%] px-12 hover:bg-blue hover:border-0 hover:text-white">Notify Me</button>
                        </section>
                        <section className='my-16'>
                            {dropItems}
                            <button className='border border-grey rounded-[10px] h-[3.5rem] px-10 mx-auto block text-grey font-medium text-xl'>See more</button>
                        </section>
                        <Newsletter />
                        <Footer />
                    </div>
                </div>
            </main>
        </>
  )
}

export default Drop
