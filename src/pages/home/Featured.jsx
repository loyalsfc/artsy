import React from 'react'

import eclipse1 from '../../assets/eclipse/Ellipse-14.png'
import eclipse2 from '../../assets/eclipse/Ellipse-15.png'
import eclipse3 from '../../assets/eclipse/Ellipse-16.png'
import eclipse4 from '../../assets/eclipse/Ellipse-17.png'
import eclipse5 from '../../assets/eclipse/Ellipse-18.png'

function Featured({img}) {
    return (
        <div className='relative flex flex-col lg:flex-row border-t border-t-grey border-t-[0.5px] py-8 md:py-[60px] lg:even:flex-row-reverse first:border-t-0 lg:first:border-t last:border-b border-b-grey border-b-[0.5px]  lg:border-b-0'>
            <div className="lg:w-1/2 lg:first:mr-[37px] shrink-0 relative view-overlay">
                <div className='absolute left-0 top-0 h-full w-full bg-black/[0.5] text-[2.5rem] font-clash flex justify-center transition-all lg:opacity-0'>
                    <button className="flex items-end lg:items-center text-white mb-6 ml-auto mr-10 md:m-0">
                        <span className='mr-10 hidden lg:inline'>View  product</span>
                        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="39" cy="39" r="38.75" stroke="white" strokeWidth="0.5"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M19 39C19 38.617 19.1505 38.2496 19.4184 37.9788C19.6863 37.7079 20.0496 37.5558 20.4285 37.5558H54.1206L45.1298 28.4686C44.8615 28.1974 44.7108 27.8296 44.7108 27.4461C44.7108 27.0625 44.8615 26.6947 45.1298 26.4235C45.398 26.1524 45.7618 26 46.1411 26C46.5205 26 46.8843 26.1524 47.1525 26.4235L58.5803 37.9775C58.7134 38.1116 58.8189 38.271 58.8909 38.4465C58.9629 38.6219 59 38.81 59 39C59 39.19 58.9629 39.3781 58.8909 39.5535C58.8189 39.729 58.7134 39.8884 58.5803 40.0225L47.1525 51.5765C46.8843 51.8476 46.5205 52 46.1411 52C45.7618 52 45.398 51.8476 45.1298 51.5765C44.8615 51.3053 44.7108 50.9375 44.7108 50.5539C44.7108 50.1704 44.8615 49.8026 45.1298 49.5314L54.1206 40.4442H20.4285C20.0496 40.4442 19.6863 40.2921 19.4184 40.0212C19.1505 39.7504 19 39.383 19 39Z" fill="white"/>
                        </svg>
                    </button>
                </div>
                <img src={img} alt="image" className='w-full' />
            </div>
            <article className='lg:w-1/2 flex flex-col justify-between text-grey lg:mr-[50px]'>
                <h4 className='text-[30px] md:text-[2.5rem] font-semibold w-full text-center lg:text-left lg:font-bold font-clash lg:font-stix absolute text-white lg:text-grey absolute top-12 md:top-20 lg:relative lg:top-0'>The Boolean Egyptian</h4>
                <p className='text-[15px] md:text-xl mr-9 lg:mr-0 text-[#616161] lg:text-grey my-4 lg:my-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur</p>
                <div className='flex items-center'>
                    <div className='mr-[15px]'>
                        <EllipseImage
                            img={eclipse1}
                        />
                        <EllipseImage
                            img={eclipse2}
                        />
                        <EllipseImage
                            img={eclipse3}
                        />
                        <EllipseImage
                            img={eclipse4}
                        />
                        <EllipseImage
                            img={eclipse5}
                        />
                    </div>
                    <p className='font-medium md:text-xl '>64 major creators</p>
                    <svg className='ml-auto hidden lg:block' width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="39" cy="39" r="38.75" stroke="#333333" strokeWidth="0.5"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M19 39C19 38.617 19.1505 38.2496 19.4184 37.9788C19.6863 37.7079 20.0496 37.5558 20.4285 37.5558H54.1206L45.1298 28.4686C44.8615 28.1974 44.7108 27.8296 44.7108 27.4461C44.7108 27.0625 44.8615 26.6947 45.1298 26.4235C45.398 26.1524 45.7618 26 46.1411 26C46.5205 26 46.8843 26.1524 47.1525 26.4235L58.5803 37.9775C58.7134 38.1116 58.8189 38.271 58.8909 38.4465C58.9629 38.6219 59 38.81 59 39C59 39.19 58.9629 39.3781 58.8909 39.5535C58.8189 39.729 58.7134 39.8884 58.5803 40.0225L47.1525 51.5765C46.8843 51.8476 46.5205 52 46.1411 52C45.7618 52 45.398 51.8476 45.1298 51.5765C44.8615 51.3053 44.7108 50.9375 44.7108 50.5539C44.7108 50.1704 44.8615 49.8026 45.1298 49.5314L54.1206 40.4442H20.4285C20.0496 40.4442 19.6863 40.2921 19.4184 40.0212C19.1505 39.7504 19 39.383 19 39Z" fill="#616161"/>
                    </svg>
                </div>
            </article>
        </div>
    )
}

function EllipseImage({img}){
    return(
        <div className='h-[42px] md:h-[51px] w-[42px] md:w-[51px] inline-block border border-[#78A3AD] rounded-full -ml-[21px] first:ml-0'> 
            <img src={img} alt="Ellipse Image" />
        </div>
    )
}

export default Featured
