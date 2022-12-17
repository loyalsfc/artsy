import React from 'react'

function Loader() {
    return (
            <div className="h-screen fixed top-0 bg-black/[0.3] w-full flex items-center justify-center">
                <svg className='rotate-anim' width="200" height="241" viewBox="0 0 467 565" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="154.605" cy="252.943" r="304.07" stroke="url(#paint0_linear_43_156)" strokeWidth="15.3474"/>
                    <defs>
                        <linearGradient id="paint0_linear_43_156" x1="154.605" y1="-58.8003" x2="154.605" y2="564.687" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#006CA2"/>
                            <stop offset="1" stopColor="#006CA2" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                </svg>
                <svg className='absolute rotate-anim1' width="150" height="180.75" viewBox="0 0 404 490" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="154.604" cy="241.433" r="234.048" stroke="url(#paint0_linear_43_155)" strokeOpacity="0.49" strokeWidth="28.7763"/>
                        <defs>
                            <linearGradient id="paint0_linear_43_155" x1="-201.263" y1="-244.887" x2="487.451" y2="854.369" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#C05609"/>
                                <stop offset="1" stopColor="#C05609" stopOpacity="0"/>
                            </linearGradient>
                        </defs>
                </svg>
            </div>
    )
}

export default Loader
