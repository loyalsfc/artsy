import React, { useContext } from 'react'
import illustration1 from '../../assets/Illustration1.png'
import illustration2 from '../../assets/Illustration2.png'
import { Context } from '../../Context'


function Confirmation() {
    const {name} = useContext(Context)
    return (
        <main>
            <div className="container mx-auto">
                <div className={`max-w-[1064px] mx-auto pb-8`}>
                    <div className='-z-10 absolute md:hidden h-[78px] w-[80px] bg-[#006CA2] blur-2xl -left-[21px] top-[112px]'></div>
                    <div className='-z-10 absolute md:hidden h-[112px] w-[129px] bg-[#E27625] blur-[35px] -right-10 top-[296px]'></div>
                    <div className='-z-10 absolute md:hidden h-[90px] w-[80px] bg-[#9B62EC] blur-[30px] right-[125px] top-[96px]'></div>

                    <svg className='absolute top-0 left-0 hidden md:block' width="350" height="423" viewBox="0 0 467 565" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="154.604" cy="241.433" r="234.048" stroke="url(#paint0_linear_43_154)" strokeOpacity="0.49" strokeWidth="28.7763"/>
                        <circle cx="154.605" cy="252.943" r="304.07" stroke="url(#paint1_linear_43_154)" strokeWidth="15.3474"/>
                        <defs>
                            <linearGradient id="paint0_linear_43_154" x1="-201.263" y1="-244.887" x2="487.451" y2="854.369" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#C05609"/>
                                <stop offset="1" stopColor="#C05609" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_43_154" x1="154.605" y1="-58.8003" x2="154.605" y2="564.687" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#006CA2"/>
                                <stop offset="1" stopColor="#006CA2" stopOpacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className='h-[257px] md:h-[50vh] mb-16 md:mb-0 z-10'>
                        <img src={illustration1} alt="" className='h-full block mx-auto' />
                    </div>
                    <article className='text-grey text-center leading-[156%]'>
                        <h4 className='my-4 font-medium text-lg md:text-[1.5rem] '>Hey {name.split(' ')[0]}, thank you for your purchase.</h4>
                        <p className='md:text-xl text-[#616161] md:text-grey flex items-end justify-center'>You are amazing. Cheers to being ARTSY! <img src={illustration2} alt="" className='h-10 hidden md:inline'/></p>
                    </article>
                </div>  
            </div>
        </main>
  )
}

export default Confirmation
