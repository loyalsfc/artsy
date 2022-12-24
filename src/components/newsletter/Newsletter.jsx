import React from 'react'

function Newsletter({className}) {
    return (
        <section className={'mb-[30px] md:mb-[3.75rem] ' + className}>
            <div className="container mx-auto">
                <div className="md:border border-grey pt-[4rem] md:py-[62px] text-grey md:text-center flex flex-col justify-center md:gap-4">
                    <h3 className='font-baskerville text-[1.5rem] text-3xl'>NEWSLETTER</h3>
                    <p className='text-sm md:text-[1.5rem] my-2 md:mt-3 md:mb-6 md:py-0'>Subscribe to get daily updates on new drops & exciting deals</p>
                    <div className='font-baskerville flex flex-col gap-4 md:gap-6 md:block'>
                        <input type="email" name="email" id="email" className='border border-grey py-5 px-[58px] mr-6 h-[60px] md:h-10 md:w-[446px] bg-transparent'/>
                        <button className='bg-grey h-[60px] md:h-10 px-11 text-white w-fit'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
