import React, { useEffect, useState } from 'react'

function Products() {
    const url = 'https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/products.json'
    const [products, setProducts] = useState([])
    const [showAll, setShowAll] = useState(false)

    useEffect(()=>{
        fetch(url)
        .then(result => result.json())
        .then(data =>setProducts(data.products))    
    },[])
    console.log(products)

    const productItems = products.map((item, index)=>{
        if(index <= 8){
            return(
                <ProductItem
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
            <ProductItem
                key={item.id}
                img={item.url} 
                title={item.name}
                price={item.price.usd}
            />
        )
    })


    return (
        <>
            <div className='grid grid-cols-3 content-center gap-5'>
                {showAll ? productItemsAll : productItems}
            </div>
            {!showAll && <button onClick={() => setShowAll(true)} className='border border-grey rounded-[10px] py-4 px-[3.75rem] text-2xl font-medium text-grey block mx-auto my-[160px]'>See more</button>}
        </>
    )
}

function ProductItem({img, title, price}){
    return(
        <div className='w-[269px] h-[414px] rounded-[15px] shadow-[0px_34px_68px_rgba(217,225,244,0.36)] py-5 px-[14px] last:mb-[100px]'>
            <img src={img} alt="" className='h-[280px] w-full rounded-[0.5rem] mb-2.5' />
            <h4 className='text-[22px] leading-[157%] text-grey mb-[18px]'>{title}</h4>
            <p className='font-bold font-grey text-[1.75rem] leading-[157%]'>${price}</p>
        </div>
    )
}

export default Products
