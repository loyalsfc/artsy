import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Newsletter from '../../components/newsletter/Newsletter'
import Transitions from '../../components/transition/Transition'
import DropItem from './DropItem'
import drops from './drops'

function Drop() {

    const dropItems = drops.map(item=> {
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
        <Transitions>
            <main>
                <div className="container mx-auto md:pt-10 ">
                    <div className="max-w-[1064px] mx-auto px-4 md:px-0">
                        <p className='text-[#BCB7B7] hidden md:block'><Link to="/">Home</Link>/ <span className="text-grey">Drop</span> </p>
                        <section className='flex flex-col items-center justify-center text-center gap-4 mb-10 w-[80%] md:w-full mx-auto'>
                            <h1 className='text-[2rem] leading-[165%] text-black font-medium'>Upcoming drops</h1>
                            <p className='text-xl text-[#616161] leading-[200%]'>Turn on notification so that no drop will miss you</p>
                            <button className="h-[3.5rem] w-full md:w-fit rounded-[10px] border text-black border-black font-medium text-xl leading-[160%] px-12 hover:bg-blue hover:border-0 hover:text-white">Notify Me</button>
                        </section>
                        <section className='md:my-16'>
                            {dropItems}
                            <button className='hidden md:block border border-grey rounded-[10px] h-[3.5rem] px-10 mx-auto block text-grey font-medium text-xl'>See more</button>
                        </section>
                        <Newsletter />
                        <Footer />
                    </div>
                </div>
            </main>
        </Transitions>
  )
}

export default Drop
