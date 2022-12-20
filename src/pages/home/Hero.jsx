import image1 from '../../assets/carouselImage/Homepage-carousel-WEB.png'
import image2 from '../../assets/carouselImage/Homepage-carousel-WEB-1.png'
import image3 from '../../assets/carouselImage/Homepage-carousel-WEB-2.png'
import image4 from '../../assets/carouselImage/Homepage-carousel-WEB-3.png'
import image5 from '../../assets/carouselImage/Homepage-carousel-WEB-4.png'
function Hero() {
            
    return (
        <div className='hidden md:grid grid-cols-5 gap-[18px] content-center  border-red-500 w-max mt-[50px] mb-[162px]'>
            <CarouselItem url={image1} />
            <CarouselItem url={image2} />
            <CarouselItem url={image3} />
            <CarouselItem url={image4} />
            <CarouselItem url={image5} />
        </div>
    )
}

function CarouselItem({url}){
    return(
        <div className='h-[505px] w-[360px]'>
            <img src={url} alt="image" className='' />
        </div>
    )
}

export default Hero
