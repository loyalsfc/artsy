import React from 'react'

function Newsletter({className}) {
    return (
        <section className={'mb-[30px] md:mb-[3.75rem] ' + className}>
            <div className="container mx-auto px-4 md:px-0">
                <div className="md:border border-grey pt-[4rem] md:py-[62px] text-grey md:text-center flex flex-col justify-center md:gap-[34px]">
                    <h3 className='font-baskerville text-[1.5rem] text-3xl'>NEWSLETTER</h3>
                    <p className='text-[11.64px] md:text-[2rem] mt-3 mb-6 md:py-0'>Subscribe to get daily updates on new drops & exciting deals</p>
                    <div className='font-baskerville flex flex-col gap-6 md:block'>
                        <input type="email" name="email" id="email" className='border border-grey py-5 px-[58px] mr-6 h-[60px] md:w-[446px]'/>
                        <button className='bg-grey py-4 px-11 text-white w-fit'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
