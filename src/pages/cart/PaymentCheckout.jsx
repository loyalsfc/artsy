import React, {useContext, useEffect, useState} from 'react'
import { Context } from '../../Context'
import InputWrapper from './InputWrapper'
import { Link, useNavigate,  } from 'react-router-dom'
import Phantom from '../../assets/wallets/Phantom.png'
import WalletConnect from '../../assets/wallets/WalletConnect.png'
import Coinbase from '../../assets/wallets/Coinbase.png'
import MetaMask from '../../assets/wallets/MetaMask.png'
import PhantomRounded from '../../assets/wallets/Phantom-rounded.png'
import WalletConnectRounded from '../../assets/wallets/WalletConnect-rounded.png'
import CoinbaseRounded from '../../assets/wallets/Coinbase-rounded.png'
import MetaMaskRounded from '../../assets/wallets/MetaMask-rounded.png'
import Loader from '../../components/loader/Loader'
import Transitions from '../../components/transition/Transition'

function PaymentCheckout() {
    const navigate = useNavigate()
    const {setCart} = useContext(Context)

    const [formData, setFormData] = useState({
        saveWallet: false,
        walletType: '',
        walletTypeKey: '',
    })

    const {cart} = useContext(Context)
    const [totalPrice, setTotalPrice] = useState(0)
    const [paymentConfirm, setPaymentConfirm] = useState(false)

    useEffect(()=>{
        //loop through cart items to calculate the total price
        cart.forEach(item => {
            setTotalPrice(prevPrice => prevPrice + (item.price.usd * item.qty))
        })
    }, [])

    function handleSubmit(e){
        e.preventDefault()
        //set payment confirm to true and showloader
        setPaymentConfirm(true)
        setCart([])
        //wait for three seconds and navigate to success page
        setTimeout(()=>{navigate('/checkout-success')}, 3000)

    }

    function handleChange(e){
        setFormData(prevItem => {
            return {...prevItem, [e.target.id]: e.target.value}
        })
    }

    function handleSwitch(e){
        setFormData(prevItem => {
            return {...prevItem, [e.target.id]: !formData.saveWallet}
        })
    }

    return (
        <Transitions>
            {paymentConfirm && <Loader />}
            <div className={`max-w-[1064px] mx-auto pb-8 px-4 md:px-0`}>
                <div className='w-3/5 mx-auto mb-8 hidden md:block'>
                    <button className='cart-btn'><Link to="/cart">Shopping cart </Link></button>
                    <button className='cart-btn'><Link to="/shipping-details">Shipping details </Link></button>
                    <button className='cart-btn active-cart-btn'>Payment details</button>
                </div>
                <main>
                    <div className='flex  items-center justify-between mb-8'>
                        <h3 className='text-grey-dark text-xl leading-[150%] hidden md:block'>Payment Method</h3>
                        <p className='text-[#747474] text-lg flex items-center'>
                            <svg width="40" height="47" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.3333 21.8125H26.6667V16.75C26.6667 13.0375 23.6667 10 20 10C16.3333 10 13.3333 13.0375 13.3333 16.75V21.8125H11.6667C10.8333 21.8125 10 22.6562 10 23.5V35.3125C10 36.1562 10.8333 37 11.6667 37H28.3333C29.1667 37 30 36.1562 30 35.3125V23.5C30 22.6562 29.1667 21.8125 28.3333 21.8125ZM21.6667 33.625H18.3333L19 29.9125C18.1667 29.575 17.5 28.5625 17.5 27.7188C17.5 26.3687 18.6667 25.1875 20 25.1875C21.3333 25.1875 22.5 26.3687 22.5 27.7188C22.5 28.7313 22 29.575 21 29.9125L21.6667 33.625ZM23.3333 21.8125H16.6667V16.75C16.6667 14.8938 18.1667 13.375 20 13.375C21.8333 13.375 23.3333 14.8938 23.3333 16.75V21.8125Z" fill="#747474"/>
                            </svg>
                            <span>Secure server</span>
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <form onSubmit={handleSubmit} className=" md:w-1/2">
                            <section className='md:shadow-[0px_0px_5px_rgba(0,0,0,0.25)] rounded-[0.5rem] md:p-8'>
                                <div className='flex items-center'>
                                    <input type="radio" name="select-wallet" id="select-wallet" checked={true} className='mr-3 accent-[#28A814]'/>
                                    <label htmlFor="select-wallet" className='text-grey-dark text-xl'>Select your wallet</label>
                                    <div className='ml-auto hidden md:flex h-10 '>
                                        <img src={Phantom} alt="" />
                                        <img src={WalletConnect} alt="" />
                                        <img src={Coinbase} alt="" />
                                        <img src={MetaMask} alt="" />
                                    </div>
                                </div>
                                <p className='text-[#616161] text-lg leading-[157%] mt-3 mb-4'>Connect with one of our available wallet providers or add and connect a new wallet.  </p>
                                <div className='ml-auto flex items-center justify-around h-[42px] my-4 md:hidden'>
                                    <img src={PhantomRounded} alt="" />
                                    <img src={WalletConnectRounded} alt="" />
                                    <img src={CoinbaseRounded} alt="" />
                                    <img src={MetaMaskRounded} alt="" />
                                    <div className="h-[42px] w-[42px] rounded-full border-[0.5px] border-grey flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.57143 20V11.4286H0V8.57143H8.57143V0H11.4286V8.57143H20V11.4286H11.4286V20H8.57143Z" fill="#333333"/>
                                        </svg>
                                    </div>
                                </div>
                                <InputWrapper>
                                    <label htmlFor="walletType">Choose a wallet</label>
                                    <select name="walletType" id="walletType" required onChange={handleChange} value={formData.walletType} className='inputStyle'>
                                        <option value=""></option>
                                        <option value="metamask">Metamask</option>
                                        <option value="coinbase">Coinbase</option>
                                        <option value="trust">Trust Wallet</option>
                                        <option value="phantom">Phantom Wallet</option>
                                    </select>
                                </InputWrapper>
                                <InputWrapper>
                                    <label htmlFor="walletKey">Key</label>
                                    <div className='inputStyle flex '>
                                        <input 
                                            type="text" 
                                            name="walletKey" 
                                            id="walletKey" 
                                            value={formData.walletKey}
                                            onChange={handleChange}
                                            className="bg-transparent w-full focus:outline-0"
                                            placeholder='Please enter your key'
                                            required
                                        />
                                        <img src={Phantom} alt="" className='h-8'/>
                                    </div>
                                </InputWrapper>
                                <InputWrapper>
                                    <input type="checkbox" className='bg-transparent' name="saveWallet" id="saveWallet" value={formData.saveWallet} onChange={handleSwitch} />
                                    <label htmlFor="saveWallet" className='text-sm ml-3 mt-3 md:inline-block'>Save my wallet details & information for future transactions</label>
                                </InputWrapper>
                            </section>
                            <button className='bg-blue h-[3.5rem] px-8 text-xl mb-5 font-medium text-white block w-full mt-10 w-[80%] mx-auto md:w-full'>Confirm</button>
                        </form>
                        <aside className='w-1/2 p-8 hidden md:block'>
                            <h3 className='text-grey-dark text-lg font-medium border-b border-b-[0.3px] pb-6 border-b-[#747474]'>Payment Summary</h3>
                            <article className='py-8 border-b-[0.3px] border-b-[#747474]'>
                                <p className='text-grey-dark'>Metamask wallet : {formData.walletKey}</p>
                                <p className='text-sm text-[#616161] mt-4'>Actively linked to Yaba, Lagos Nigeria.</p>
                            </article>
                            <article className='leading-[150%] text-grey-dark leading-[157%] py-6 border-b-[0.3px] border-b-[#747474]'>
                                <p>Expected arrival date: Between 22nd January and 26th January 2023</p>
                            </article>
                            <article className='text-lg flex flex-col mt-8 gap-6 leading-[100%]'>
                                <p className='text-grey-light flex'><span>Products in cart :</span> <span className='text-grey-dark ml-auto'>{cart.length} item{cart.length > 1 ? 's' : ''}</span></p>
                                <p className='text-grey-light flex'><span>Shipping :</span> <span className='text-grey-dark ml-auto'>${(totalPrice * 0.1).toFixed(2)}</span></p>
                                <p className='text-grey-light flex'><span>Total :</span> <span className='text-grey-dark ml-auto'>${(totalPrice + totalPrice * 0.1).toFixed(2)}</span></p>
                            </article>
                        </aside>
                    </div>
                </main>
            </div>
        </Transitions>
    )
}

export default PaymentCheckout
