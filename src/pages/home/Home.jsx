import React from 'react'
import Header from '../../components/header/Header'
import Hero from './Hero'
import Featured from './Featured'

import featured1 from '../../assets/featured/Featured-product-1.png'
import featured2 from '../../assets/featured/Featured-product-2.png'
import featured3 from '../../assets/featured/Featured-product-3.png'
import Explore from './Explore'
import FadeIn from './FadeIn'
import HeroMobile from './HeroMobile'
import Newsletter from '../../components/newsletter/Newsletter'
import Footer from '../../components/footer/Footer'
import Transitions from '../../components/transition/Transition'

function Home() {
    return (
    <Transitions>
        <div>
            <Header />
            <section>
                <h1 className='mb-[30px] font-medium md:font-semibold font-clash text-center md:text-[80px] text-[2rem] px-4 leading-[150%] md:leading-[120%] max-w-[1068px] mx-auto'>Photography is poetry <span className='hidden md:inline'>& <br/></span> <span className='md:hidden'>and</span> beautiful untold stories</h1>
                <p className='md:text-[1.25rem] font-medium px-4 text-center max-w-[926px] mx-auto leading-[156%] md:leading-[120%]'>Flip through more than 10,000 vintage shots, old photograghs, historic <br className='hidden md:inline'/> images and captures seamlessly in one place. Register to get top access.</p>
                <div className='md:overflow-x-scroll'>
                    <Hero />
                    <HeroMobile />
                </div>
            </section>
            <main>
                <section className='mb-[100px] md:mb-[186px]'>
                    <div className='container mx-auto px-4 md:px-0'>
                        <h2 className='font-bold md:font-medium text-[1.75rem] md:text-[3rem] leading-[4rem] md:mb-9'>Featured products</h2>
                        <div className=''>
                            <Featured 
                                img={featured3}
                            />
                            <Featured 
                                img={featured2}
                            />
                            <Featured 
                                img={featured1}
                            />
                        </div>
                    </div>
                </section>
                <section className='gradient mb-[100px] md:mb-[190px]'>
                    <div className="container mx-auto p-[25px] md:px-0">
                        <h2 className='hidden md:block text-[2.5rem] mb-[38px] font-medium leading-[120%] underline text-white underline-offset-[17px] decoration-[0.8px]'>See Upcoming Auctions and Exhibitions</h2>
                        <div className='md:h-[556px] image-bg text-white p-4 md:px-8 md:pb-[52px] flex flex-col md:flex-row md:items-end'>
                            <article className='md:w-3/5 flex items-center'>
                                <h2 className='font-bellefair text-[2.5rem] md:text-[77px] text-[#E1E1E1] mr-5'>01</h2>
                                <div className=''>
                                    <h3 className='text-xl md:text-[29px] font-bellefair leading-[120%] md:max-w-[353px]'>MONALISA REDEFINED IN STYLE.</h3>
                                    <p className='text-xs md:text-[13.64px] leading-[20px] font-poppin mt-4 mb-3'>Start on : 08:00 GTS . Monday </p>
                                    <p className='text-[10px] md:text-base font-medium tracking-[0.065em]'>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.</p>
                                </div>
                            </article>
                            <div className='ml-auto mt-4 md:mt-0 text-sm md:text-2xl'>
                                <span className='underline mr-[20px] mb-3.5'>See more</span>
                                <button className='border rounded-[10px] px-3.5 py-[14px]'>Set a reminder</button>
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-[21px] hidden md:flex'>
                            <div className='w-[295.69px] rounded-full h-2.5 bg-[#AEAEAE] overflow-hidden'>
                                <div className='w-1/5 h-full bg-white rounded-full'></div>
                            </div>
                            <div className='flex'>
                                <button className='rounded-btn shadow-3xl mr-5 bg-white/[0.2]'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_433_222)">
                                            <path d="M10.915 9.85521L7.06873 6.00888L8.16745 4.91016L13.1125 9.85521L8.16745 14.8003L7.06873 13.7015L10.915 9.85521Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_433_222">
                                                <rect width="18.6488" height="18.6488" fill="white" transform="translate(0.679932 0.530762)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                                <button className="rounded-btn shadow-3xl bg-white/[0.2]">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_433_225)">
                                            <path d="M8.94469 9.85521L12.791 6.00888L11.6923 4.91016L6.74724 9.85521L11.6923 14.8003L12.791 13.7015L8.94469 9.85521Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_433_225">
                                                <rect width="18.6488" height="18.6488" fill="white" transform="matrix(-1 0 0 1 19.1798 0.530762)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className='mb-[100px] md:mb-[180px]'>
                    <Explore content="Explore marketplace" link="/marketplace"/>
                    <Explore content="See auctions" link='/auctions'/>
                </section>

                <section className='bg-[#e2e2e2] mb-[66px] md:mb-[147px] overflow-hidden'>
                    <div className="container font-clash mx-auto md:py-[75px] relative">
                        <article className='flex justify-between'>
                            <h2 className='font-semibold mt-[7px] md:mt-0 text-[1.5rem] md:text-[55px] leading-[155%] text-[#161616] max-w-[256px] md:max-w-[535px]'>TOP CREATORS OF THE WEEK</h2>
                            <div className='flex'>
                                <div className='hidden md:block rounded-full w-2.5 bg-[#AEAEAE] border mr-[34px] overflow-hidden flex items-end'>
                                    <div className="w-full h-1/5 bg-grey-dark rounded-full"></div>
                                </div>
                                <ul className='absolute -right-24 md:relative md:right-0  text-grey text-[10px] md:text-[2.5rem] leading-[155%] mr-8 flex md:block gap-4'>
                                    <li className='mb-5'>Editorial</li>
                                    <li className='mb-5'>Fashion</li>
                                    <li className='mb-5'>Lifestyle</li>
                                    <li className=''>Blueprint</li>
                                </ul>
                            </div>
                        </article>
                        <p className='text-[13px] md:text-3xl relative leading-[130%] text-black/[0.57] font-[200] md:mr-[12rem] mt-9'>“Everything always looked better in black and white. Everything always  as if it were the first time; there’s always more people in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden
                            <span className="text-grey text-[2rem] md:text-[3rem] leading-[155%] font-bold absolute bottom-8 right-0 md:right-8">CIRCA</span>
                        </p>
                        <div className='flex md:my-[75px]'><p className='my-4 ml-auto md:mr-8 font-bold text-[4rem] md:text-[170px] text-[#161616] md:leading-[150px] line-through decoration-8'>1985</p></div>
                        <FadeIn />
                    </div>
                </section>

                <Newsletter className="px-4 md:px-0"/>
            </main>
            <div className='px-4 md:px-0'>
                <Footer />
            </div>
        </div>
    </Transitions>
    )
}

export default Home
