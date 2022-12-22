import React from 'react'

function TopBids({img, title, creator, date, highestbid, currentbid, isFavorite, id, toggleFavorite}) {
  return (
        <div>
            <div className='rounded-[15px] gap-6 shadow-[0_0_9px_-1px_rgba(0,0,0,0.25)] flex flex-col py-6 mb-8'>
                <div className='h-12 ml-auto mr-6 w-12 flex items-center justify-center border border-black rounded-full'>
                    <svg onClick={()=>toggleFavorite(id)} width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={isFavorite ? "fill-[#F44336]" : "fill-[#DDBAB7]"} d="M24 0C20.85 0 18.075 1.575 16.5 4.05C14.925 1.575 12.15 0 9 0C4.05 0 0 4.05 0 9C0 17.925 16.5 27 16.5 27C16.5 27 33 18 33 9C33 4.05 28.95 0 24 0Z"/>
                    </svg>
                </div>
                <div className='w-full h-[278px] overflow-hidden'> 
                    <img src={img} alt="" className='w-full'/>
                </div>
                <h4 className='text-black text-2xl leading-[160%] px-6 font-bold'>{title}</h4>
            </div>
            <article>
                <table>
                    <tbody>
                        <tr className='leading-[200%] text-lg'>
                            <td className='text-[#616161] font-medium '>Creator:</td>
                            <td className='text-grey font-bold px-4'>{creator}</td>
                        </tr>
                        <tr className='leading-[200%] text-lg'>
                            <td className='text-[#616161] font-medium '>Date:</td>
                            <td className='text-grey font-bold px-4'>{date}</td>    
                        </tr>
                        <tr className='leading-[200%] text-lg'>
                            <td className='text-[#616161] font-medium '>Highest bid:</td>
                            <td className='text-grey font-bold px-4'>{highestbid}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='flex items-center justify-between bg-[#F7F4F4] mt-8 rounded-[10px] p-4'>
                    <h5 className='flex flex-col gap-4 font-bold'>
                        <span className='text-[#616161]'>Current Bid</span>
                        <span className='text-black'>{currentbid}</span>
                    </h5>
                    <button className='h-[3rem] color-blue px-8 md:px-16 text-white font-medium bg-[#3341C1] hover:bg-[#051076]'>Place bid</button>
                </div>
            </article>
        </div>
  )
}

export default TopBids
