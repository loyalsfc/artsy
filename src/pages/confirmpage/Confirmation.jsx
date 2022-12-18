import React from 'react'
import illustration1 from '../../assets/Illustration1.png'
import illustration2 from '../../assets/Illustration2.png'


function Confirmation() {
  return (
        <main>
            <div className="container mx-auto">
                <div className={`max-w-[1064px] mx-auto pb-8`}>
                    <svg className='absolute top-0 left-0' width="350" height="423" viewBox="0 0 467 565" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <div className='h-[50vh]'>
                        <img src={illustration1} alt="" className='h-full block mx-auto' />
                    </div>
                    <article className='text-black text-center leading-[156%]'>
                        <h4 className='my-4 font-medium text-[1.5rem] '>Hey Celestina, thank you for your purchase.</h4>
                        <p className='text-xl flex items-end justify-center'>You are amazing. Cheers to being ARTSY! <img src={illustration2} alt="" className='h-10'/></p>
                    </article>
                </div>  
            </div>
        </main>
  )
}

export default Confirmation
