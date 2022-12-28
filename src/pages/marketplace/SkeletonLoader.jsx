import React, { useEffect, useState } from 'react'

function SkeletonLoader() {
    return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center  md:gap-10'>
                <Skeletons />
                <Skeletons />
                <Skeletons />
                <Skeletons />
                <Skeletons />
                <Skeletons />
            </div>
    )
}

function Skeletons(){
    return (
            <div className='skeleton-loader overflow-hidden md:h-[414px] rounded-[15px] md:shadow-[0px_22px_44px_rgba(217,225,244,0.36)] py-5 px-[14px] '>
                <div className='h-[357px] md:h-[280px] w-full rounded-[0.5rem] mb-2.5 bg-[#F4F2F2]' />
                <article className='flex md:block justify-between'>
                    <h4 className='text-[22px] leading-[157%] text-grey mb-[18px]'><span className='block w-2/3 rounded-full h-6 bg-[#F4F2F2]' /></h4>
                    <p className='font-bold font-grey text-[1.25rem] leading-[157%]'><span className='block w-1/3 rounded-full h-4 bg-[#F4F2F2]'/></p>
                </article>
            </div>
    )
}

export default SkeletonLoader
