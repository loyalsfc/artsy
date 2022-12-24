import React from 'react'
import Rectangle242 from '../../assets/mobileHero/Rectangle242.png'
import Rectangle240 from '../../assets/mobileHero/Rectangle240.png'
import Rectangle241 from '../../assets/mobileHero/Rectangle241.png'

function HeroMobile() {
    return (
        <div className='mt-8 mb-[100px] md:hidden '>
            <div className='relative h-[300px] px-'>
                <img src={Rectangle240} alt="" className='absolute top-0 left-1/2 h-full -translate-x-1/2 -rotate-[9.31deg]'/>
                <img src={Rectangle241} alt="" className='absolute top-0 left-1/2 h-full -translate-x-1/2 rotate-[7.75deg]'/>
                <img src={Rectangle242} alt="" className='absolute top-0 left-1/2 h-full -translate-x-1/2'/>
                <div className='blurBox bg-[#C05609] left-0 bottom-0'></div>
                <div className='blurBox bg-[#F44336] right-0 bottom-0'></div>
                <div className='blurBox bg-[#006CA2] right-0 top-0'></div>
            </div>
        </div>
    )
}

export default HeroMobile
