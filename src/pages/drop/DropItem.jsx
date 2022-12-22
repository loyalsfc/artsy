import React, { useEffect, useState } from 'react'
import { toTitleCase } from '../../utils'

function DropItem({img, title, creator, status, time}) {
    const [color, setColor] = useState('[#999EA5]')
    const [linkText, setLinkText] = useState('View')

    useEffect(()=>{
        if(status == "upcoming"){
            setColor('blue')
            setLinkText('Get notified')
        } else if(status == "live now"){
            setColor('[#3EA03B]')
            setLinkText('Join now')
        }
    },[])

    return (
        <div className='flex flex-col md:flex-row gap-10 mt-10 first:mb-0 md:mb-20 '>
            <div className='md:w-1/2 custom-h shrink-0 relative px-4 md:px-8 pb-4 rounded-[10px] overflow-hidden flex justify-end flex-col'>
                <img src={img} alt="" className='absolute w-full left-0 bottom-0'/>
                <button className={`absolute md:hidden text-white top-4 right-4 rounded-[15px] bg-${status == "ended" ? '[#B8BABC]' : 'blue'} font-medium leading-[95%] text-sm py-1.5 px-10`}>{status == "ended" ? 'View' : 'Join'}</button>
                <div className="w-full text-white backdrop-blur-[1.5px] lightbg md:flex items-end justify-between rounded-[0.5rem] border-[0.5px] border-white pt-4 pr-2 pl-4 md:pl-8 pb-2">
                    <article className='flex flex-col gap-3'>
                        <p className='text-lg leading-[175.5%]'>{status == "ended" ? 'Auction ended' : 'Time remaining'}</p>
                        <h4 className='text-[2rem]  font-stix'>{time}</h4>
                    </article>
                    <button className={`hidden md:block top-0 right-1 rounded-[15px] bg-${status == "ended" ? '[#B8BABC]' : 'blue'} font-medium leading-[95%] text-sm py-1.5 px-6`}>{status == "ended" ? 'View' : 'Join'}</button>
                </div>
            </div>
            <article className='flex flex-col items-start gap-4 md:gap-8'>
                <p className={`text-white font-inter text-sm py-1 rounded-[10px] px-8 uppercase bg-${color}`}>{status}</p>
                <p className='text-black'>November 21 at 11 am WAT</p>
                <h4 className='text-[1.5rem] text-black font-medium '>{toTitleCase(title)}</h4>
                <p className='text-[#616161] leading-[157%]'>Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.</p>
                <p className='text-black text-xl md:text-base font-medium'>Creator: <span className='text-[#006CA2]'>{toTitleCase(creator)}</span> </p>
                <span className='text-[#006CA2] underline  md:text-sm'>{linkText}</span>
            </article>
        </div>
    )
}

export default DropItem
