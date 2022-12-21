import React from 'react'

function Bids({img, name, text}) {
    return (
        <div className='flex gap-4 mt-6'>
            <div className='h-fit w-fit p-[1px] bg-black rounded-full bg-gradient-to-r from-[#78A3AD] to-[#C056097D]'>
                <div className='h-[70px] w-[70px] rounded-full overflow-hidden'>
                    <img src={img} alt="" />
                </div>
            </div>
            <article className='flex flex-col justify-between text-grey text-lg'>
                <h5>{name}</h5>
                <p className='font-medium'>{text}</p>
            </article>
        </div>
    )
}



export default Bids
