import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../../Context'

import Bidders from './Bidders'

function Livebid() {
    const {productId} = useParams()
    const {auctionProduct} = useContext(Context)

    const currentBid = auctionProduct.find(item => item.id == productId)

    return (
        <div className="container mx-auto md:pb-16">
            <div className="max-w-[1064px] mx-auto ">
                <p className='text-[#BCB7B7] hidden md:block my-8'><Link to="/">Home</Link>/ <Link to="/auctions">Auctions</Link>/ <span className="text-grey">Live bid</span> </p>
                <main className='h-screen w-full border border-black flex'>
                    <div className='w-full md:w-1/2 overflow-hidden h-full flex flex-col justify-between relative text-white p-4 md:p-8'>
                        <img src={currentBid && currentBid.url} alt="" className='w-full min-h-full absolute -z-10 top-0 left-0'/>

                        <div className='hidden md:flex justify-between items-center w-full'>
                            <Link to='/auctions'>
                                <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.3299 12.9229C11.2253 12.8183 11.1424 12.6941 11.0857 12.5575C11.0291 12.4208 11 12.2743 11 12.1264C11 11.9785 11.0291 11.832 11.0857 11.6954C11.1424 11.5587 11.2253 11.4345 11.3299 11.3299C11.4345 11.2253 11.5587 11.1424 11.6954 11.0857C11.832 11.0291 11.9785 11 12.1264 11C12.2743 11 12.4208 11.0291 12.5575 11.0857C12.6941 11.1424 12.8183 11.2253 12.9229 11.3299L24.5014 22.9107L36.0799 11.3299C36.1845 11.2253 36.3087 11.1424 36.4454 11.0857C36.582 11.0291 36.7285 11 36.8764 11C37.0243 11 37.1708 11.0291 37.3075 11.0857C37.4441 11.1424 37.5683 11.2253 37.6729 11.3299C37.7775 11.4345 37.8605 11.5587 37.9171 11.6954C37.9737 11.832 38.0028 11.9785 38.0028 12.1264C38.0028 12.2743 37.9737 12.4208 37.9171 12.5575C37.8605 12.6941 37.7775 12.8183 37.6729 12.9229L26.0922 24.5014L37.6729 36.0799C37.7775 36.1845 37.8605 36.3087 37.9171 36.4454C37.9737 36.582 38.0028 36.7285 38.0028 36.8764C38.0028 37.0243 37.9737 37.1708 37.9171 37.3075C37.8605 37.4441 37.7775 37.5683 37.6729 37.6729C37.5683 37.7775 37.4441 37.8605 37.3075 37.9171C37.1708 37.9737 37.0243 38.0028 36.8764 38.0028C36.7285 38.0028 36.582 37.9737 36.4454 37.9171C36.3087 37.8605 36.1845 37.7775 36.0799 37.6729L24.5014 26.0922L12.9229 37.6729C12.8183 37.7775 12.6941 37.8605 12.5575 37.9171C12.4208 37.9737 12.2743 38.0028 12.1264 38.0028C11.9785 38.0028 11.832 37.9737 11.6954 37.9171C11.5587 37.8605 11.4345 37.7775 11.3299 37.6729C11.2253 37.5683 11.1424 37.4441 11.0857 37.3075C11.0291 37.1708 11 37.0243 11 36.8764C11 36.7285 11.0291 36.582 11.0857 36.4454C11.1424 36.3087 11.2253 36.1845 11.3299 36.0799L22.9107 24.5014L11.3299 12.9229Z" fill="white"/>
                                    <circle cx="24.5" cy="24.5" r="24.5" fill="#B8B4B4" fillOpacity="0.49"/>
                                </svg>
                            </Link>
                            <span className='bg-[#4693ED] text-xl rounded-[1.25rem] py-1 px-8 font-inter font-medium '>LIVE</span>
                        </div>

                        <div className="flex items-center gap-2 md:hidden text-medium text-white leading-[157%]">
                            <p className='mr-auto'>Tag: Lost or Wither</p>
                            <span className='bg-[#006CA2] rounded-[5px] text-[13px] py-1 px-3'>LIVE</span>
                            <span className='bg-white/[0.4] text-[13px] rounded-[5px] py-1 px-2 flex items-center'>
                                <svg className='mr-1' width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.59961 7.19998C8.70418 7.19998 9.59961 6.30455 9.59961 5.19998C9.59961 4.09541 8.70418 3.19998 7.59961 3.19998C6.49504 3.19998 5.59961 4.09541 5.59961 5.19998C5.59961 6.30455 6.49504 7.19998 7.59961 7.19998Z" fill="white"/>
                                    <path d="M14.9698 5.33C14.3817 3.80882 13.3608 2.49331 12.0332 1.54604C10.7056 0.598778 9.12953 0.0612865 7.49979 0C5.87005 0.0612865 4.29398 0.598778 2.96639 1.54604C1.6388 2.49331 0.617868 3.80882 0.0297873 5.33C-0.00992909 5.43985 -0.00992909 5.56015 0.0297873 5.67C0.617868 7.19118 1.6388 8.50669 2.96639 9.45396C4.29398 10.4012 5.87005 10.9387 7.49979 11C9.12953 10.9387 10.7056 10.4012 12.0332 9.45396C13.3608 8.50669 14.3817 7.19118 14.9698 5.67C15.0095 5.56015 15.0095 5.43985 14.9698 5.33ZM7.49979 8.75C6.857 8.75 6.22864 8.55939 5.69418 8.20228C5.15972 7.84516 4.74316 7.33758 4.49718 6.74372C4.25119 6.14986 4.18683 5.49639 4.31223 4.86596C4.43764 4.23552 4.74717 3.65642 5.20169 3.2019C5.65621 2.74738 6.2353 2.43785 6.86574 2.31245C7.49618 2.18705 8.14965 2.25141 8.74351 2.49739C9.33737 2.74338 9.84495 3.15994 10.2021 3.6944C10.5592 4.22886 10.7498 4.85721 10.7498 5.5C10.7485 6.36155 10.4056 7.18743 9.79642 7.79664C9.18722 8.40584 8.36133 8.74868 7.49979 8.75Z" fill="white"/>
                                </svg>
                                295
                            </span>
                            <Link to='/auctions'>
                                <svg className='ml-3' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.18327 1.06818C0.125166 1.01007 0.079076 0.941094 0.0476304 0.865178C0.0161849 0.789261 6.12223e-10 0.707895 0 0.625724C-6.12223e-10 0.543552 0.0161849 0.462186 0.0476304 0.38627C0.079076 0.310353 0.125166 0.241374 0.18327 0.18327C0.241374 0.125166 0.310353 0.079076 0.38627 0.0476304C0.462186 0.0161849 0.543552 -6.12223e-10 0.625724 0C0.707895 6.12223e-10 0.789261 0.0161849 0.865178 0.0476304C0.941094 0.079076 1.01007 0.125166 1.06818 0.18327L7.5 6.61634L13.9318 0.18327C13.9899 0.125166 14.0589 0.079076 14.1348 0.0476304C14.2107 0.0161849 14.2921 0 14.3743 0C14.4564 0 14.5378 0.0161849 14.6137 0.0476304C14.6896 0.079076 14.7586 0.125166 14.8167 0.18327C14.8748 0.241374 14.9209 0.310353 14.9524 0.38627C14.9838 0.462186 15 0.543552 15 0.625724C15 0.707895 14.9838 0.789261 14.9524 0.865178C14.9209 0.941094 14.8748 1.01007 14.8167 1.06818L8.38366 7.5L14.8167 13.9318C14.8748 13.9899 14.9209 14.0589 14.9524 14.1348C14.9838 14.2107 15 14.2921 15 14.3743C15 14.4564 14.9838 14.5378 14.9524 14.6137C14.9209 14.6896 14.8748 14.7586 14.8167 14.8167C14.7586 14.8748 14.6896 14.9209 14.6137 14.9524C14.5378 14.9838 14.4564 15 14.3743 15C14.2921 15 14.2107 14.9838 14.1348 14.9524C14.0589 14.9209 13.9899 14.8748 13.9318 14.8167L7.5 8.38366L1.06818 14.8167C1.01007 14.8748 0.941094 14.9209 0.865178 14.9524C0.789261 14.9838 0.707895 15 0.625724 15C0.543552 15 0.462186 14.9838 0.38627 14.9524C0.310353 14.9209 0.241374 14.8748 0.18327 14.8167C0.125166 14.7586 0.079076 14.6896 0.0476304 14.6137C0.0161849 14.5378 0 14.4564 0 14.3743C0 14.2921 0.0161849 14.2107 0.0476304 14.1348C0.079076 14.0589 0.125166 13.9899 0.18327 13.9318L6.61634 7.5L0.18327 1.06818Z" fill="white"/>
                                </svg>
                            </Link>
                        </div>

                        <p className='font-inter font-semibold text-3xl -mt-20 md:mt-0 leading-[157%] w-full text-center'>Current bid $4500</p>

                        <p className='text-xl leading-[157%] hidden md:block'>Tag: Lost or Wither</p>
                        <p className='md:hidden'></p>
                        <div className='absolute h-1/2 px-4 bottom-3 w-full left-0 md:hidden flex flex-col justify-end'>
                            <Bidders classes='bottom-8 right-4'/>
                        </div>
                    </div>
                    <div className='hidden w-1/2 shrink-0 grow-0 px-8 pb-4 md:flex flex-col justify-between relative'>
                        <Bidders classes="right-10 bottom-[90px]"/>
                    </div>                    
                </main>
                <section className='mt-8 hidden md:block'>
                    <Link to="drop">
                        <button className='flex  items-center gap-4 text-2xl text-black leading-[178%] font-medium'>See upcoming drops 
                            <svg width="60" height="60" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="39" cy="39" r="38.75" stroke="black" strokeWidth="0.5"/>
                                <path filRule="evenodd" clipRule="evenodd" d="M19 39C19 38.617 19.1505 38.2496 19.4184 37.9788C19.6863 37.7079 20.0496 37.5558 20.4285 37.5558H54.1206L45.1298 28.4686C44.8615 28.1974 44.7108 27.8296 44.7108 27.4461C44.7108 27.0625 44.8615 26.6947 45.1298 26.4235C45.398 26.1524 45.7618 26 46.1411 26C46.5205 26 46.8843 26.1524 47.1525 26.4235L58.5803 37.9775C58.7134 38.1116 58.8189 38.271 58.8909 38.4465C58.9629 38.6219 59 38.81 59 39C59 39.19 58.9629 39.3781 58.8909 39.5535C58.8189 39.729 58.7134 39.8884 58.5803 40.0225L47.1525 51.5765C46.8843 51.8476 46.5205 52 46.1411 52C45.7618 52 45.398 51.8476 45.1298 51.5765C44.8615 51.3053 44.7108 50.9375 44.7108 50.5539C44.7108 50.1704 44.8615 49.8026 45.1298 49.5314L54.1206 40.4442H20.4285C20.0496 40.4442 19.6863 40.2921 19.4184 40.0212C19.1505 39.7504 19 39.383 19 39Z" fill="#616161"/>
                            </svg>
                        </button>
                    </Link>
                </section>
            </div>
        </div>
    )
}

export default Livebid
