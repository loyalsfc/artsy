import React from 'react'
import Header from '../../components/header/Header'
import Hero from './Hero'
import Featured from './Featured'

import featured1 from '../../assets/featured/Featured-product-1.png'
import featured2 from '../../assets/featured/Featured-product-2.png'
import featured3 from '../../assets/featured/Featured-product-3.png'
import image from '../../assets/carousel-second/image1.png'
import Explore from './Explore'

function Home() {
    return (
        <div>
            <section>
                <h1 className='mb-[30px] font-semibold font-clash text-center text-[80px] leading-[120%] max-w-[1068px] mx-auto'>Photography is poetry & <br/> beautiful untold stories</h1>
                <p className='text-[1.25rem] text-center max-w-[926px] mx-auto leading-[120%]'>Flip through more than 10,000 vintage shots, old photograghs, historic <br/> images and captures seamlessly in one place. Register to get top access.</p>
                <div className='overflow-x-scroll'>
                    <Hero />
                </div>
            </section>
            <main>
                <section className='mb-[186px]'>
                    <div className='container mx-auto'>
                        <h2 className='font-medium text-[3rem] leading-[4rem] mb-9'>Featured products</h2>
                        <div>
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
                <section className='gradient mb-[190px]'>
                    <div className="container mx-auto py-[25px]">
                        <h2 className='text-[2.5rem] mb-[38px] font-medium leading-[120%] underline text-white underline-offset-[17px] decoration-[0.8px]'>See Upcoming Auctions and Exhibitions</h2>
                        <div className='h-[556px] image-bg text-white px-8 pb-[52px] flex items-end'>
                            <article className='w-3/5 flex items-center'>
                                <h2 className='font-bellefair text-[77px] text-[#E1E1E1] mr-5'>01</h2>
                                <div>
                                    <h3 className='text-[29px] font-bellefair leading-[120%] max-w-[353px]'>MONALISA REDEFINED IN STYLE.</h3>
                                    <p className='text-[13.64px] leading-[20px] font-poppin mt-4 mb-3'>Start on : 08:00 GTS . Monday </p>
                                    <p className='font-medium tracking-[0.065em]'>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.</p>
                                </div>
                            </article>

                            <span className='text-2xl underline mr-[20px] ml-auto mb-3.5'>See more</span>
                            <button className='border rounded-[10px] px-3.5 py-[14px] text-2xl'>Set a reminder</button>
                        </div>
                        <div className='flex items-center justify-between mt-[21px]'>
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
                
                <section className='mb-[180px]'>
                    <Explore content="Explore marketplace" />
                    <Explore content="See auctions" />
                </section>

                <section className='bg-[#e2e2e2] mb-[147px]'>
                    <div className="container font-clash mx-auto py-[75px] relative">
                        <article className='flex justify-between'>
                            <h2 className='font-semibold text-[55px] leading-[155%] text-[#161616] max-w-[535px]'>TOP CREATORS OF THE WEEK</h2>
                            <div className='flex'>
                                <div className='h-[] rounded-full w-2.5 bg-[#AEAEAE] border mr-[34px] overflow-hidden flex items-end'>
                                    <div className="w-full h-1/5 bg-grey-dark rounded-full"></div>
                                </div>
                                <ul className='text-grey text-[2.5rem] leading-[155%] mr-8'>
                                    <li className='mb-5'>Editorial</li>
                                    <li className='mb-5'>Fashion</li>
                                    <li className='mb-5'>Lifestyle</li>
                                    <li className=''>Blueprint</li>
                                </ul>
                            </div>
                        </article>
                        <p className='text-3xl relative leading-[130%] text-black/[0.57] font-[200] mr-[12rem] mt-9'>“Everything always looked better in black and white. Everything always  as if it were the first time; there’s always more people in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden
                            <span className="text-grey text-[3rem] leading-[155%] font-bold absolute bottom-8 right-8">CIRCA</span>
                        </p>
                        <div className='flex my-[75px]'><p className='ml-auto mr-8 font-bold text-[170px] text-[#161616] leading-[150px] line-through decoration-8'>1985</p></div>
                        <div className="absolute -bottom-[56.75px] right-28 w-[826px] h-[835px] max-w-[100%] bg-black/[0.04]">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </section>

                <section className='mb-[3.75rem]'>
                    <div className="container mx-auto">
                        <div className="border border-grey py-[62px] text-grey text-center flex flex-col justify-center gap-[34px]">
                            <h3 className='font-baskerville text-3xl'>NEWSLETTER</h3>
                            <p className='text-[2rem] '>Subscribe to get daily updates on new drops & exciting deals</p>
                            <div className='font-baskerville'>
                                <input type="email" name="email" id="email" className='border border-grey py-5 px-[58px] mr-6 h-[60px] w-[446px]'/>
                                <button className='bg-grey py-4 px-11 text-white'>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
            <footer>
                <div className="container mx-auto text-[26px] leading-[35px] text-[#333333] flex justify-between">
                    <h1 className='font-clash font-semibold leading-[59px] text-grey-dark text-[3rem] flex items-center'>ARTSY.</h1>
                    <ul className=''>
                        <li className='mb-[33px] last:mb-0'>Home</li>
                        <li className='mb-[33px] last:mb-0'>Market Place</li>
                        <li className='mb-[33px] last:mb-0'>Auctions</li>
                        <li className='mb-[33px] last:mb-0'>Drops</li>
                    </ul>
                    <ul className=''>
                        <li className='mb-[33px] last:mb-0'>Blog</li>
                        <li className='mb-[33px] last:mb-0'>Wallets</li>
                        <li className='mb-[33px] last:mb-0'>Rates</li>
                        <li className='mb-[33px] last:mb-0'>High bids</li>
                    </ul>
                    <ul>
                        <li className='flex items-center mb-[30px]'>
                            <svg width="61" height="54" viewBox="0 0 61 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.05 10H48.95C49.4937 10 50.0151 10.199 50.3996 10.5532C50.784 10.9075 51 11.3879 51 11.8889V42.1111C51 42.6121 50.784 43.0925 50.3996 43.4468C50.0151 43.801 49.4937 44 48.95 44H12.05C11.5063 44 10.9849 43.801 10.6004 43.4468C10.216 43.0925 10 42.6121 10 42.1111V11.8889C10 11.3879 10.216 10.9075 10.6004 10.5532C10.9849 10.199 11.5063 10 12.05 10ZM46.9 18.0051L30.6476 31.4162L14.1 17.9636V40.2222H46.9V18.0051ZM15.1476 13.7778L30.625 26.3616L45.8791 13.7778H15.1476Z" fill="#333333"/>
                            </svg> 
                            <span>artsystudios@gmail.com</span>
                        </li>
                        <li className='flex items-center'>
                            <svg width="61" height="78" viewBox="0 0 61 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.5 68L16.0042 51.0121C13.1373 47.6522 11.1849 43.3715 10.3939 38.7112C9.60292 34.0509 10.0089 29.2204 11.5605 24.8306C13.1121 20.4407 15.7396 16.6886 19.1108 14.0488C22.482 11.409 26.4455 10 30.5 10C34.5545 10 38.518 11.409 41.8892 14.0488C45.2604 16.6886 47.8879 20.4407 49.4395 24.8306C50.9911 29.2204 51.3971 34.0509 50.6061 38.7112C49.8151 43.3715 47.8627 47.6522 44.9958 51.0121L30.5 68ZM41.775 47.2376C44.0047 44.6243 45.5231 41.2948 46.1382 37.6702C46.7533 34.0456 46.4374 30.2886 45.2306 26.8744C44.0237 23.4602 41.9801 20.542 39.3581 18.4889C36.7361 16.4357 33.6534 15.3399 30.5 15.3399C27.3466 15.3399 24.2639 16.4357 21.6419 18.4889C19.0199 20.542 16.9763 23.4602 15.7694 26.8744C14.5626 30.2886 14.2467 34.0456 14.8618 37.6702C15.4769 41.2948 16.9953 44.6243 19.225 47.2376L30.5 60.451L41.775 47.2376ZM30.5 39.3629C29.2918 39.3629 28.1331 38.8005 27.2787 37.7992C26.4244 36.798 25.9444 35.4401 25.9444 34.0242C25.9444 32.6083 26.4244 31.2503 27.2787 30.2491C28.1331 29.2479 29.2918 28.6854 30.5 28.6854C31.7082 28.6854 32.8669 29.2479 33.7213 30.2491C34.5756 31.2503 35.0556 32.6083 35.0556 34.0242C35.0556 35.4401 34.5756 36.798 33.7213 37.7992C32.8669 38.8005 31.7082 39.3629 30.5 39.3629Z" fill="#333333"/>
                            </svg>
                            <span>Lagos, Nigeria.</span>
                        </li>
                    </ul>
                </div>
                <p className='text-center -spacing-[0.02em] text-[#333333]/[0.5] text-xl font-medium font-rubik mt-[91px] mb-11'>Artsystudios © 2022. All Rights Reserved.</p>
            </footer>
        </div>
    )
}

export default Home
