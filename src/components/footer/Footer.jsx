import React from 'react'
import { Link } from 'react-router-dom'

function Footer({className}) {
    return (
            <footer className={className}>
                <div className="container mx-auto text-xl leading-[35px] pb-4 text-[#333333] flex justify-between">
                    <h1 className='hidden md:block font-clash font-semibold leading-[59px] text-grey-dark text-2xl flex items-center'>ARTSY.</h1>
                    <ul className='hidden md:block'>
                        <li className='mb-4 last:mb-0'><Link to="/">Home</Link></li>
                        <li className='mb-4 last:mb-0'><Link to="/marketplace">Market Place</Link></li>
                        <li className='mb-4 last:mb-0'><Link to="/auctions">Auctions</Link></li>
                        <li className='mb-4 last:mb-0'><Link to="/drop">Drops</Link></li>
                    </ul>
                    <ul className='hidden md:block'>
                        <li className='mb-4 last:mb-0'>Blog</li>
                        <li className='mb-4 last:mb-0'>Wallets</li>
                        <li className='mb-4 last:mb-0'>Rates</li>
                        <li className='mb-4 last:mb-0'>High bids</li>
                    </ul>
                    <ul className='text-sm md:text-xl'>
                        <li className='md:hidden mb-[14px]'>REACH US</li>
                        <li className='flex items-center mb-[14px] md:mb-4'>
                            <svg className='h-6 w-6 md:h-[61px] md:w-[54px]' width="61" height="54" viewBox="0 0 61 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.05 10H48.95C49.4937 10 50.0151 10.199 50.3996 10.5532C50.784 10.9075 51 11.3879 51 11.8889V42.1111C51 42.6121 50.784 43.0925 50.3996 43.4468C50.0151 43.801 49.4937 44 48.95 44H12.05C11.5063 44 10.9849 43.801 10.6004 43.4468C10.216 43.0925 10 42.6121 10 42.1111V11.8889C10 11.3879 10.216 10.9075 10.6004 10.5532C10.9849 10.199 11.5063 10 12.05 10ZM46.9 18.0051L30.6476 31.4162L14.1 17.9636V40.2222H46.9V18.0051ZM15.1476 13.7778L30.625 26.3616L45.8791 13.7778H15.1476Z" fill="#333333"/>
                            </svg> 
                            <span>artsystudios@gmail.com</span>
                        </li>
                        <li className='flex items-center'>
                            <svg className='h-6 w-6 md:h-[61px] md:w-[54px]' width="61" height="78" viewBox="0 0 61 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.5 68L16.0042 51.0121C13.1373 47.6522 11.1849 43.3715 10.3939 38.7112C9.60292 34.0509 10.0089 29.2204 11.5605 24.8306C13.1121 20.4407 15.7396 16.6886 19.1108 14.0488C22.482 11.409 26.4455 10 30.5 10C34.5545 10 38.518 11.409 41.8892 14.0488C45.2604 16.6886 47.8879 20.4407 49.4395 24.8306C50.9911 29.2204 51.3971 34.0509 50.6061 38.7112C49.8151 43.3715 47.8627 47.6522 44.9958 51.0121L30.5 68ZM41.775 47.2376C44.0047 44.6243 45.5231 41.2948 46.1382 37.6702C46.7533 34.0456 46.4374 30.2886 45.2306 26.8744C44.0237 23.4602 41.9801 20.542 39.3581 18.4889C36.7361 16.4357 33.6534 15.3399 30.5 15.3399C27.3466 15.3399 24.2639 16.4357 21.6419 18.4889C19.0199 20.542 16.9763 23.4602 15.7694 26.8744C14.5626 30.2886 14.2467 34.0456 14.8618 37.6702C15.4769 41.2948 16.9953 44.6243 19.225 47.2376L30.5 60.451L41.775 47.2376ZM30.5 39.3629C29.2918 39.3629 28.1331 38.8005 27.2787 37.7992C26.4244 36.798 25.9444 35.4401 25.9444 34.0242C25.9444 32.6083 26.4244 31.2503 27.2787 30.2491C28.1331 29.2479 29.2918 28.6854 30.5 28.6854C31.7082 28.6854 32.8669 29.2479 33.7213 30.2491C34.5756 31.2503 35.0556 32.6083 35.0556 34.0242C35.0556 35.4401 34.5756 36.798 33.7213 37.7992C32.8669 38.8005 31.7082 39.3629 30.5 39.3629Z" fill="#333333"/>
                            </svg>
                            <span>Lagos, Nigeria.</span>
                        </li>
                    </ul>
                </div>
                <p className='hidden md:block text-center -spacing-[0.02em] text-[#333333]/[0.5] text-sm font-medium font-rubik mt-10 mb-11'>Artsystudios © 2022. All Rights Reserved.</p>
            </footer>
    )
}

export default Footer
