import React from 'react'

function Bids({img, name, text}) {
    return (
        <div className='flex gap-4 mt-3 md:mt-6'>
            <div className='h-fit w-fit p-[1px] bg-blue rounded-full md:bg-gradient-to-r from-[#78A3AD] to-[#C056097D]'>
                <div className='h-9 md:h-[70px] w-9 md:w-[70px] rounded-full overflow-hidden'>
                    <img src={img} alt="" />
                </div>
            </div>
            <article className='flex flex-col justify-between text-white md:text-grey text-[13px] md:text-lg'>
                <h5>{name}</h5>
                <p className='font-medium'>{text}</p>
            </article>
        </div>
    )
}



export default Bids
