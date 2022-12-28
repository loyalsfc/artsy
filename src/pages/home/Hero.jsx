import { useState, useEffect } from 'react'

import image1 from '../../assets/carouselImage/Homepage-carousel-WEB.png'
import image2 from '../../assets/carouselImage/Homepage-carousel-WEB-1.png'
import image3 from '../../assets/carouselImage/Homepage-carousel-WEB-2.png'
import image4 from '../../assets/carouselImage/Homepage-carousel-WEB-3.png'
import image5 from '../../assets/carouselImage/Homepage-carousel-WEB-4.png'
function Hero() {
    const [images, setImages] = useState([image1, image2, image3, image4, image5]);
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        setAnimate(true)
        const interval = setInterval(() => {
            setImages(currentItems => shuffleArray(currentItems));
        }, 5000);
        setTimeout(() => setAnimate(false), 1500);
        return () => clearInterval(interval);
    }, [images]);

    function shuffleArray(originalArray) {
        setAnimate(false)
        let array = [...originalArray];
        let currentIndex = array.length, temporaryValue = null, randomIndex = null;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // Swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

    return array;
    }

    console.log(images)

    const heroImage = images.map((item, index) => {
        return (
            <div key={index} className={`h-[505px] w-[360px] overflow-hidden ${animate ? 'item' : ''}`}>
                <img src={item} alt="image" className='' />
            </div>
        )
    })

    return (
        <div className={`hidden md:grid grid-cols-5 gap-[18px] content-center border-red-500 w-max mt-[50px] mb-[162px]`}>
            {heroImage}
        </div>
    )
}

function CarouselItem({url}){
    return(
        <div className='h-[505px] w-[360px] overflow-hidden'>
            <img src={url} alt="image" className='' />
        </div>
    )
}

export default Hero
