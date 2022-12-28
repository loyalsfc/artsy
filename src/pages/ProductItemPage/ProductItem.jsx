import React, { useContext, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Context } from '../../Context'
import Recommended from './Recommended'
import { toTitleCase } from '../../utils'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SwiperItem from '../../components/swiper/Swiper'
import Header from '../../components/header/Header'

function ProductItem() {
    const {productId} = useParams()
    const {products, setCart, cart, toggleFavorite, favorite} = useContext(Context)
    const [qty, setQty] = useState(1)
    const [disableButton, setDisableButton] = useState(false)
    const navigate = useNavigate()
    
    const openProduct = products.find(item => item.id == productId)

    useState(()=>{
        if(cart.some(item => item.id == productId)){
            setDisableButton(true)
        }
    },[])

    const recommendedItems = products.map((item, index)=>{
        if(index >= 10 && index <= 13){
            return(
                <Recommended
                    id={item.id}
                    key={item.id}
                    img={item.url} 
                    title={item.name}
                    ethprice={item.price.eth}
                    setFavorite={toggleFavorite}
                />
            )
        }
    })
    

    const handleClick = (e) => {
        const id = e.currentTarget.getAttribute('data-id')
        const product = products.find(item => item.id == id)
        product.qty = qty
        setCart(prevCart => {
            return [...prevCart, product]
        })
        setDisableButton(true)
        toast("Product Added Successfuly!", {type: 'success'});
        navigate('/cart')
    }

    function decreaseQty(){
        if(qty > 1){
            setQty(prevValue => prevValue-1)
        } 
    }

    return (
        <div>
            <ToastContainer />
            <Header />
            <div className="container mx-auto px-4 md:px-0 pb-20 md:mb-0">
                <div className="max-w-[1064px] mx-auto">
                    <section className='font-medium md:leading-[200%] mb-8 md:mb-10 border-b-[0.5px] md:border-b-0 border-b-grey leading-[52px]'>
                        <span className='text-[#BCB7B7]'>Home/ Marketplace/ Editorial/</span>
                        <span className='text-black'>{openProduct && toTitleCase(openProduct.name)}</span>
                    </section>

                    <main className='md:border flex-col md:flex-row border-grey flex text-grey leading-[97%]'>
                        <div className='md:w-2/5 shrink-0 md:border-r border-r-grey md:py-5 md:px-3'>
                            <img src={openProduct && openProduct.url} alt="" />
                        </div>
                        <div className='w-full flex flex-col'>
                            <div className='flex md:border-b border-b-grey md:px-5 pt-4 md:py-3 justify-between items-center'>
                                <h2 className='md:text-[2rem] font-medium md:font-bold '>{openProduct && toTitleCase(openProduct.name)}</h2>
                                <div className='hidden md:block text-xl font-medium flex items-center'>
                                    <svg width="53" height="62" viewBox="0 0 53 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M42.7025 29.9475L27.5825 10.8396C27.4539 10.6765 27.2896 10.5445 27.102 10.4538C26.9145 10.3631 26.7086 10.3159 26.5 10.3159C26.2914 10.3159 26.0855 10.3631 25.8979 10.4538C25.7104 10.5445 25.5461 10.6765 25.4175 10.8396L10.2975 29.9475C10.105 30.1842 10 30.4792 10 30.7835C10 31.0877 10.105 31.3827 10.2975 31.6194L25.4175 50.7273C25.5461 50.8904 25.7104 51.0224 25.8979 51.1131C26.0855 51.2038 26.2914 51.251 26.5 51.251C26.7086 51.251 26.9145 51.2038 27.102 51.1131C27.2896 51.0224 27.4539 50.8904 27.5825 50.7273L42.7025 31.6194C42.895 31.3827 43 31.0877 43 30.7835C43 30.4792 42.895 30.1842 42.7025 29.9475ZM27.8746 35.4922V15.6166L39.4552 30.2546L27.8746 35.4922ZM25.1254 35.4922L13.5448 30.2546L25.1254 15.6166V35.4922ZM25.1254 38.4949V45.9503L15.9503 34.3491L25.1254 38.4949Z" fill="#333333"/>
                                    </svg>
                                    {openProduct && openProduct.price.eth}
                                </div>
                                <span className="font-medium md:hidden">${openProduct && openProduct.price.usd}</span>
                            </div>
                            <div className='md:px-5 py-6 grow-1  '>
                                    <p className='mb-3 text-lg text-black md:text-[#616161]'>Creator : <span className='text-[#4693ED]'>{openProduct && toTitleCase(openProduct.creator)}</span></p>
                                    <p className='mb-3 md:text-black'>{openProduct && toTitleCase(openProduct.origin)}</p>
                                    <p className='mb-4 md:text-black text-lg font-medium'>Total views: <span>{openProduct && openProduct.views}</span></p>
                                    <div className='mb-6 text-2xl md:text-xl font-medium'>
                                        <button onClick={decreaseQty} className='mr-3'>-</button>
                                        <span className='w-4 inline-block text-center'>{qty}</span>
                                        <button onClick={()=> setQty(prevValue => prevValue+1)} className='ml-3'>+</button>
                                    </div>
                                    <div className='flex'>
                                        <button disabled={disableButton ? true : false} id='add-to-cart' onClick={handleClick} data-id={`${openProduct && openProduct.id}`} className='bg-blue disabled:bg-blue/[0.5] rounded-[3px] px-8 h-[3.5rem] flex items-center text-white font-medium'>
                                            <span>Add to Cart</span>
                                            <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M10 16.7403C10 16.5417 10.079 16.3512 10.2197 16.2108C10.3603 16.0703 10.5511 15.9914 10.75 15.9914H28.4395L23.719 11.2799C23.5782 11.1393 23.4991 10.9486 23.4991 10.7498C23.4991 10.5509 23.5782 10.3602 23.719 10.2196C23.8598 10.079 24.0508 10 24.25 10C24.4492 10 24.6402 10.079 24.781 10.2196L30.781 16.2101C30.8508 16.2797 30.9063 16.3623 30.9441 16.4533C30.9819 16.5442 31.0013 16.6418 31.0013 16.7403C31.0013 16.8388 30.9819 16.9363 30.9441 17.0273C30.9063 17.1182 30.8508 17.2009 30.781 17.2704L24.781 23.2609C24.6402 23.4015 24.4492 23.4805 24.25 23.4805C24.0508 23.4805 23.8598 23.4015 23.719 23.2609C23.5782 23.1203 23.4991 22.9296 23.4991 22.7308C23.4991 22.5319 23.5782 22.3412 23.719 22.2006L28.4395 17.4891H10.75C10.5511 17.4891 10.3603 17.4102 10.2197 17.2697C10.079 17.1293 10 16.9389 10 16.7403Z" fill="#F5F4F4"/>
                                            </svg>
                                        </button>
                                        <button className='border h-[3.5rem] border-grey px-3 ml-4'>
                                            <svg onClick={()=>toggleFavorite(productId)} className="h-[25px] w-[27px] md:h-[42px] w-[34px]" width="49" height="34" viewBox="0 0 49 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className={ favorite.some(item => item.id == productId) ? 'fill-red-500' : 'stroke-grey-dark'} d="M24.1161 5.95214L24.514 6.47514L24.9119 5.95214C27.0609 3.12763 30.8802 1.29517 35.2617 1.29517C42.1664 1.29517 47.6589 6.00547 47.6589 11.5823C47.6589 14.0997 46.2744 16.6813 44.0884 19.1745C41.9107 21.6583 38.993 23.9908 36.0541 26.002C33.1184 28.0109 30.1799 29.6869 27.9736 30.8612C26.871 31.4481 25.9525 31.909 25.3104 32.2228C24.9894 32.3797 24.7375 32.4999 24.5663 32.5806C24.5483 32.5891 24.5311 32.5972 24.5148 32.6048C24.4985 32.5971 24.4812 32.5889 24.463 32.5802C24.2918 32.4989 24.0399 32.3778 23.7189 32.2198C23.0767 31.9036 22.1582 31.4395 21.0555 30.8491C18.8491 29.6678 15.9103 27.9833 12.9745 25.9687C10.0353 23.9517 7.11733 21.6162 4.93933 19.1363C2.75267 16.6464 1.36914 14.0763 1.36914 11.5823C1.36914 6.00547 6.86164 1.29517 13.7663 1.29517C18.1478 1.29517 21.9671 3.12763 24.1161 5.95214Z" />
                                            </svg>
                                        </button>
                                    </div>
                            </div>
                            <div className="px-5 mt-auto py-5 md:py-6 flex border-y border-y-grey items-center justify-between rounded-">
                                <span className='text-lg md:text-xl font-medium'>Description </span>
                                <svg width="46" height="35" viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.9177 24.0044L10.3021 11.8328C10.1082 11.6297 10 11.3599 10 11.0793C10 10.7987 10.1082 10.5289 10.3021 10.3258L10.3152 10.3127C10.4092 10.2139 10.5224 10.1352 10.6478 10.0815C10.7732 10.0277 10.9083 9.99997 11.0447 9.99997C11.1812 9.99997 11.3163 10.0277 11.4417 10.0815C11.5671 10.1352 11.6803 10.2139 11.7743 10.3127L22.7118 21.7745L33.6449 10.3127C33.7389 10.2139 33.8521 10.1352 33.9775 10.0815C34.1029 10.0277 34.2379 9.99997 34.3744 9.99997C34.5109 9.99997 34.646 10.0277 34.7714 10.0815C34.8968 10.1352 35.01 10.2139 35.104 10.3127L35.1171 10.3258C35.311 10.5289 35.4192 10.7987 35.4192 11.0793C35.4192 11.3599 35.311 11.6297 35.1171 11.8328L23.5015 24.0044C23.3993 24.1114 23.2765 24.1967 23.1403 24.2549C23.0042 24.3131 22.8577 24.3431 22.7096 24.3431C22.5615 24.3431 22.415 24.3131 22.2788 24.2549C22.1427 24.1967 22.0199 24.1114 21.9177 24.0044Z" fill="#333333"/>
                                </svg>
                            </div>
                            <div className="px-5 py-5 md:py-6 flex border-b border-b-grey items-center justify-between">
                                <span className='text-lg md:text-xl font-medium'>Listings </span>
                                <svg width="46" height="35" viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.9177 24.0044L10.3021 11.8328C10.1082 11.6297 10 11.3599 10 11.0793C10 10.7987 10.1082 10.5289 10.3021 10.3258L10.3152 10.3127C10.4092 10.2139 10.5224 10.1352 10.6478 10.0815C10.7732 10.0277 10.9083 9.99997 11.0447 9.99997C11.1812 9.99997 11.3163 10.0277 11.4417 10.0815C11.5671 10.1352 11.6803 10.2139 11.7743 10.3127L22.7118 21.7745L33.6449 10.3127C33.7389 10.2139 33.8521 10.1352 33.9775 10.0815C34.1029 10.0277 34.2379 9.99997 34.3744 9.99997C34.5109 9.99997 34.646 10.0277 34.7714 10.0815C34.8968 10.1352 35.01 10.2139 35.104 10.3127L35.1171 10.3258C35.311 10.5289 35.4192 10.7987 35.4192 11.0793C35.4192 11.3599 35.311 11.6297 35.1171 11.8328L23.5015 24.0044C23.3993 24.1114 23.2765 24.1967 23.1403 24.2549C23.0042 24.3131 22.8577 24.3431 22.7096 24.3431C22.5615 24.3431 22.415 24.3131 22.2788 24.2549C22.1427 24.1967 22.0199 24.1114 21.9177 24.0044Z" fill="#333333"/>
                                </svg>
                            </div>
                            <div className="px-5 py-5 md:py-6 flex items-center justify-between border-b border-b-grey md:border-b-0">
                                <span className='text-lg md:text-xl font-medium'>Status </span>
                                <svg width="46" height="35" viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.9177 24.0044L10.3021 11.8328C10.1082 11.6297 10 11.3599 10 11.0793C10 10.7987 10.1082 10.5289 10.3021 10.3258L10.3152 10.3127C10.4092 10.2139 10.5224 10.1352 10.6478 10.0815C10.7732 10.0277 10.9083 9.99997 11.0447 9.99997C11.1812 9.99997 11.3163 10.0277 11.4417 10.0815C11.5671 10.1352 11.6803 10.2139 11.7743 10.3127L22.7118 21.7745L33.6449 10.3127C33.7389 10.2139 33.8521 10.1352 33.9775 10.0815C34.1029 10.0277 34.2379 9.99997 34.3744 9.99997C34.5109 9.99997 34.646 10.0277 34.7714 10.0815C34.8968 10.1352 35.01 10.2139 35.104 10.3127L35.1171 10.3258C35.311 10.5289 35.4192 10.7987 35.4192 11.0793C35.4192 11.3599 35.311 11.6297 35.1171 11.8328L23.5015 24.0044C23.3993 24.1114 23.2765 24.1967 23.1403 24.2549C23.0042 24.3131 22.8577 24.3431 22.7096 24.3431C22.5615 24.3431 22.415 24.3131 22.2788 24.2549C22.1427 24.1967 22.0199 24.1114 21.9177 24.0044Z" fill="#333333"/>
                                </svg>
                            </div>
                        </div>
                    </main>

                    <div className='hidden md:flex my-16 p-4 shadow-4xl'>
                        <span className='text-xl font-medium'>Explore more from this collection</span>
                        <button className='h-8 w-8 mr-4 rounded-full border border-grey ml-auto inline-flex items-center justify-center'>
                            <svg width="10" height="16" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.339233 13.5015L12.5109 25.1171C12.714 25.311 12.9838 25.4192 13.2644 25.4192C13.5449 25.4192 13.8148 25.311 14.0179 25.1171L14.031 25.104C14.1298 25.01 14.2084 24.8968 14.2622 24.7714C14.3159 24.646 14.3437 24.5109 14.3437 24.3744C14.3437 24.238 14.3159 24.1029 14.2622 23.9775C14.2084 23.8521 14.1298 23.7389 14.031 23.6449L2.56913 12.7074L14.031 1.77429C14.1298 1.68029 14.2084 1.56714 14.2622 1.44172C14.3159 1.31631 14.3437 1.18125 14.3437 1.04476C14.3437 0.908278 14.3159 0.773218 14.2622 0.647802C14.2084 0.522387 14.1298 0.409235 14.031 0.315231L14.0179 0.302105C13.8148 0.108194 13.5449 2.09808e-05 13.2644 2.09808e-05C12.9838 2.09808e-05 12.714 0.108194 12.5109 0.302105L0.339233 11.9177C0.232188 12.0199 0.146969 12.1427 0.0887411 12.2789C0.0305131 12.415 0.000488281 12.5615 0.000488281 12.7096C0.000488281 12.8577 0.0305131 13.0042 0.0887411 13.1404C0.146969 13.2765 0.232188 13.3993 0.339233 13.5015Z" fill="#616161"/>
                            </svg>
                        </button>
                        <button className='h-8 w-8 rounded-full border border-grey inline-flex items-center justify-center'>
                            <svg width="10" height="16" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.0045 11.9177L1.83288 0.302084C1.62979 0.108173 1.35997 0 1.07939 0C0.798805 0 0.528989 0.108173 0.325899 0.302084L0.312794 0.315209C0.213999 0.409213 0.13533 0.522364 0.0815735 0.64778C0.0278158 0.773196 9.34601e-05 0.908255 9.34601e-05 1.04474C9.34601e-05 1.18122 0.0278158 1.31628 0.0815735 1.4417C0.13533 1.56712 0.213999 1.68027 0.312794 1.77427L11.7746 12.7118L0.312794 23.6449C0.213999 23.7389 0.13533 23.8521 0.0815735 23.9775C0.0278158 24.1029 9.34601e-05 24.2379 9.34601e-05 24.3744C9.34601e-05 24.5109 0.0278158 24.646 0.0815735 24.7714C0.13533 24.8968 0.213999 25.01 0.312794 25.104L0.325899 25.1171C0.528989 25.311 0.798805 25.4192 1.07939 25.4192C1.35997 25.4192 1.62979 25.311 1.83288 25.1171L14.0045 13.5015C14.1116 13.3993 14.1968 13.2765 14.255 13.1403C14.3132 13.0042 14.3433 12.8577 14.3433 12.7096C14.3433 12.5615 14.3132 12.415 14.255 12.2788C14.1968 12.1427 14.1116 12.0199 14.0045 11.9177Z" fill="#333333"/>
                            </svg>
                        </button>
                    </div>

                    
                    <h4 className='font-medium text-[1.5rem] text-grey-dark mt-[100px] mb-[30px] md:hidden'>More from this collection</h4>
                    <section className='overflow-x-scroll flex-nowrap gap-9 hidden md:flex'>
                        {recommendedItems}
                    </section>
                    <section className=' md:hidden'>
                        <SwiperItem />
                    </section>
                    <Link to="/marketplace" className='hidden md:block'>
                        <div className='my-[100px] border-img w-fit p-[2px] rounded-[1rem] overflow-hidden mx-auto'>
                            <button className=' h-[3.5rem] px-8 text-[26px] rounded-[1rem] font-medium leading-[25px] bg-white'><span className='text-gradient'>Explore All</span></button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default ProductItem
