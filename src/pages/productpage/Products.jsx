import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Context'

function Products() {
    const {products} = useContext(Context)
    const [showAll, setShowAll] = useState(false)

    const productItems = products.map((item, index)=>{
        if(index <= 8){
            return(
                <ProductItems
                    id={item.id}
                    key={item.id}
                    img={item.url} 
                    title={item.name}
                    price={item.price.usd}
                />
            )
        }
    })

    const productItemsAll = products.map((item, index)=>{
        return(
            <ProductItems
                id={item.id}
                key={item.id}
                img={item.url} 
                title={item.name}
                price={item.price.usd}
            />
        )
    })


    return (
        <>
            <div className='grid grid-cols-3 content-center gap-10'>
                {showAll ? productItemsAll : productItems}
            </div>
            {!showAll && <button onClick={() => setShowAll(true)} className='border border-grey rounded-[10px] py-4 px-[3.75rem] text-2xl font-medium text-grey block mx-auto my-[100px]'>See more</button>}
        </>
    )
}

function ProductItems({img, title, price, id}){
    return(
        <Link to={`/marketplace/${id}`}>
            <div className=' overflow-hidden h-[414px] rounded-[15px] shadow-[0px_22px_44px_rgba(217,225,244,0.36)] py-5 px-[14px] '>
                <img src={img} alt="" className='h-[280px] w-full rounded-[0.5rem] mb-2.5' />
                <h4 className='text-[22px] leading-[157%] text-grey mb-[18px]'>{title}</h4>
                <p className='font-bold font-grey text-[1.25rem] leading-[157%]'>${price}</p>
            </div>
        </Link>
    )
}

export default Products
