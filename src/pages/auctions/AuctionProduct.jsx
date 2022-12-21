import { Link } from "react-router-dom"

function AuctionProduct({img, id}) {
    return (
        <Link to={`/live-bid/${id}`} >
            <div className="auction-card-wrapper shrink-0  h-[316px] w-[388px] ">   
                <div className='auction-card flex items-end relative overflow-hidden rounded-[15px] transition-all duration-300	ease-in-out shadow-[0_0_9px_-1px_rgba(0,0,0,0.25)] h-full w-full '>
                    <img src={img} alt="" className='w-full h-auto'/>
                    <div className="auction-join w-full h-full absolute top-0 bg-black/[0.6] left-0 text-white text-[1.5rem] flex opacity-0 transition-all duration-300	ease-in-out  items-center justify-center gap-4 font-medium ">
                        Join livestream
                        <svg width="48" height="48" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="39" cy="39" r="38.75" stroke="white" strokeWidth="0.5"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M19 39C19 38.617 19.1505 38.2496 19.4184 37.9788C19.6863 37.7079 20.0496 37.5558 20.4285 37.5558H54.1206L45.1298 28.4686C44.8615 28.1974 44.7108 27.8296 44.7108 27.4461C44.7108 27.0625 44.8615 26.6947 45.1298 26.4235C45.398 26.1524 45.7618 26 46.1411 26C46.5205 26 46.8843 26.1524 47.1525 26.4235L58.5803 37.9775C58.7134 38.1116 58.8189 38.271 58.8909 38.4465C58.9629 38.6219 59 38.81 59 39C59 39.19 58.9629 39.3781 58.8909 39.5535C58.8189 39.729 58.7134 39.8884 58.5803 40.0225L47.1525 51.5765C46.8843 51.8476 46.5205 52 46.1411 52C45.7618 52 45.398 51.8476 45.1298 51.5765C44.8615 51.3053 44.7108 50.9375 44.7108 50.5539C44.7108 50.1704 44.8615 49.8026 45.1298 49.5314L54.1206 40.4442H20.4285C20.0496 40.4442 19.6863 40.2921 19.4184 40.0212C19.1505 39.7504 19 39.383 19 39Z" fill="white"/>
                        </svg>
                    </div>
                    <div className='absolute bottom-7 flex items-center justify-center left-1/2 -translate-x-1/2 w-[80%] mx-auto h-[3.5rem] font-stix text-[1.5rem] text-white text-center rounded-[0.5rem] backdrop-blur-[1.5px] border-[0.5] border-white bg-white/[0.24]' >6hr : 40mins: 15s</div>
                </div>
            </div>
        </Link>
    )
}

export default AuctionProduct
