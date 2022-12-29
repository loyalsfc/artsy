import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Context'

function Recommended({img, title, ethprice, id, setFavorite}) {
    const {favorite} = useContext(Context)
    
    const scrollTop = () => {
        // Scroll to top of window 
        window.scrollTo(0, 0)
    }

    return (
        <div className='w-[350px] border border-grey p-4 flex flex-col gap-2 shrink-0'>
            <svg onClick={()=>setFavorite(id)} className='ml-auto' width="53" height="48" viewBox="0 0 53 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={ favorite.some(item => item.id == id) ? 'fill-red-500 stroke-0' : ''} d="M19.075 10C14.0631 10 10 14.0174 10 18.9728C10 27.9456 20.725 36.1027 26.5 38C32.275 36.1027 43 27.9456 43 18.9728C43 14.0174 38.9369 10 33.925 10C30.856 10 28.1417 11.5066 26.5 13.8126C25.6632 12.6341 24.5515 11.6723 23.259 11.0086C21.9665 10.345 20.5314 9.99898 19.075 10Z" stroke="#333333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <Link to={`/marketplace/${id}`}>
                <div onClick={scrollTop} className='h-[250px] overflow-hidden'>
                    <img src={img} alt="" className='w-full'/>
                </div>
            </Link>
            <div className='flex items-center text-grey text-xl font-medium'>
                <span>{title}</span>
                <svg className='ml-auto' width="44" height="51" viewBox="0 0 44 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.4513 24.8003L22.8988 8.8078C22.792 8.67127 22.6556 8.56085 22.4999 8.48491C22.3442 8.40897 22.1733 8.36951 22.0001 8.36951C21.8269 8.36951 21.656 8.40897 21.5003 8.48491C21.3446 8.56085 21.2082 8.67127 21.1015 8.8078L8.54895 24.8003C8.38916 24.9984 8.302 25.2453 8.302 25.4999C8.302 25.7546 8.38916 26.0015 8.54895 26.1996L21.1015 42.1921C21.2082 42.3286 21.3446 42.439 21.5003 42.515C21.656 42.5909 21.8269 42.6304 22.0001 42.6304C22.1733 42.6304 22.3442 42.5909 22.4999 42.515C22.6556 42.439 22.792 42.3286 22.8988 42.1921L35.4513 26.1996C35.6111 26.0015 35.6982 25.7546 35.6982 25.4999C35.6982 25.2453 35.6111 24.9984 35.4513 24.8003ZM23.1413 29.4409V12.8059L32.7553 25.0573L23.1413 29.4409ZM20.859 29.4409L11.2449 25.0573L20.859 12.8059V29.4409ZM20.859 31.954V38.194L13.2419 28.4843L20.859 31.954Z" fill="#333333"/>
                </svg>
                <span>{ethprice}</span>
            </div>
        </div>
    )
}

export default Recommended
