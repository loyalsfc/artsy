import { toTitleCase } from '../../utils'
import { Link } from 'react-router-dom'

function CartItem({img, name, creator, size, price, qty, handleClick, id, increaseQty, decreaseQty}) {

    return (
        <div className='md:border-t-[0.3px] border-t-[#747474] last:border-b-[#747474] md:last:border-b-[0.3px]  py-6 flex gap-5 md:gap-8'>
            <div className="h-[7.875rem] md:h-[10rem] shrink-0 w-[7.8125rem] md:w-[11rem] overflow-hidden">
                <Link to={`/marketplace/${id}`} ><img src={img} alt="" className='w-full '/></Link>
            </div>
            <div className='flex flex-col justify-between'>
                <span className='text-grey-dark text-xl'>{toTitleCase(name)}</span>
                <span className='text-grey-light text-xl'>{toTitleCase(creator)}</span>
                <span className='text-grey-light hidden md:inline'>Size <span className='text-grey-dark'>{size}ft</span></span>
                <div className='text-xl font-medium border-[0.5px] md:border-0 border-black flex justify-between px-2 md:px-0 rounded-[10px] w-fit'>
                    <button onClick={()=>decreaseQty(id)} className={qty <= 1 ? " opacity-25 mr-3" : "mr-3"}>-</button>
                    <span id={id} className="border-x-[0.5px] md:border-x-0 border-black px-1.5">{qty}</span>
                    <button className='ml-3' onClick={()=>increaseQty(id)}>+</button>
                </div>
            </div>
            <div className='flex flex-col justify-between ml-auto'>
                <svg onClick={()=>handleClick(id)} width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.8306 27L15.8306 15M27.8306 15L15.8306 27" stroke="#888888" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M21.8306 41C32.8763 41 41.8306 32.0457 41.8306 21C41.8306 9.9543 32.8763 1 21.8306 1C10.7849 1 1.83057 9.9543 1.83057 21C1.83057 32.0457 10.7849 41 21.8306 41Z" stroke="#888888" strokeWidth="2"/>
                </svg>
                <span className='text-grey-dark text-xl font-cardo'>${(price * qty).toFixed(2)}</span>
            </div>
        </div>
    )
}

export default CartItem 