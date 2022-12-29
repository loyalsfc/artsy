import React from 'react'
import { toggleContent } from '../../utils'
function ProductSubs({title, content}) {
    return (
        <>    
            <div onClick={toggleContent} className='cursor-pointer flex items-center justify-between'>
                <span className='text-lg md:text-xl font-medium'>{title}</span>
                <svg className='transition-all' width="46" height="35" viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9177 24.0044L10.3021 11.8328C10.1082 11.6297 10 11.3599 10 11.0793C10 10.7987 10.1082 10.5289 10.3021 10.3258L10.3152 10.3127C10.4092 10.2139 10.5224 10.1352 10.6478 10.0815C10.7732 10.0277 10.9083 9.99997 11.0447 9.99997C11.1812 9.99997 11.3163 10.0277 11.4417 10.0815C11.5671 10.1352 11.6803 10.2139 11.7743 10.3127L22.7118 21.7745L33.6449 10.3127C33.7389 10.2139 33.8521 10.1352 33.9775 10.0815C34.1029 10.0277 34.2379 9.99997 34.3744 9.99997C34.5109 9.99997 34.646 10.0277 34.7714 10.0815C34.8968 10.1352 35.01 10.2139 35.104 10.3127L35.1171 10.3258C35.311 10.5289 35.4192 10.7987 35.4192 11.0793C35.4192 11.3599 35.311 11.6297 35.1171 11.8328L23.5015 24.0044C23.3993 24.1114 23.2765 24.1967 23.1403 24.2549C23.0042 24.3131 22.8577 24.3431 22.7096 24.3431C22.5615 24.3431 22.415 24.3131 22.2788 24.2549C22.1427 24.1967 22.0199 24.1114 21.9177 24.0044Z" fill="#333333"/>
                </svg>
            </div>
            <div className='overflow-hidden transition-all h-0'>
                <p className='leading-[130%] pt-3'>{content}</p>
            </div>
        </>
    )
}

export default ProductSubs
