import Bids from './LiveBidders'
import biddersList from './biddersList'
import { useEffect, useRef, useState } from 'react'
import Toast from './Likes'

function Bidders({classes}) {
    const [bidLists, setBidLists] =  useState(biddersList)
    const bidContainer = useRef()
    const inputBox = useRef()
    const likesContainer = useRef()

    const variousLikes = [
                    `<svg class='mb-4 absolute bottom-0 right-4' width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M18.7331 0C16.3944 0 14.334 1.20357 13.1647 3.09489C11.9953 1.20357 9.93496 0 7.59621 0C3.92103 0 0.914062 3.09489 0.914062 6.87753C0.914062 13.6978 13.1647 20.6326 13.1647 20.6326C13.1647 20.6326 25.4153 13.7551 25.4153 6.87753C25.4153 3.09489 22.4083 0 18.7331 0Z" fill="#4693ED"/>
                    </svg>`,
                    `<svg class='mb-4 absolute bottom-0 right-4' width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M8.64287 3.49951C7.23049 5.61763 7.07627 8.21043 8.08297 10.4117C5.66388 10.3285 3.32961 11.4677 1.91722 13.5858C-0.302239 16.9142 0.684755 21.5065 4.11054 23.7909C10.2873 27.9097 23.9662 21.0028 23.9662 21.0028C23.9662 21.0028 25.1357 5.75452 18.907 1.60114C15.4812 -0.683222 10.8623 0.171046 8.64287 3.49951Z" fill="#E31616"/>
                    </svg>`,

                    `<svg class='mb-4 absolute bottom-0 right-4' width="40" height="33" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.6" d="M29.1276 0.2948C25.4245 0.2948 22.1624 2.20045 20.3109 5.19504C18.4593 2.20045 15.1972 0.2948 11.4941 0.2948C5.67509 0.2948 0.914062 5.19504 0.914062 11.1842C0.914062 21.9829 20.3109 32.9631 20.3109 32.9631C20.3109 32.9631 39.7076 22.0736 39.7076 11.1842C39.7076 5.19504 34.9466 0.2948 29.1276 0.2948Z" fill="#4693ED"/>
                    </svg>`,

                    `<svg class='mb-4 absolute bottom-0 right-4' width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1756 0.96175C13.7153 2.25027 12.211 4.65149 12.0229 7.28534C9.75077 5.94001 6.92029 5.80902 4.46002 7.09754C0.593873 9.12234 -0.864234 14.0347 1.21978 18.0139C4.97732 25.1885 21.6852 25.7343 21.6852 25.7343C21.6852 25.7343 30.7832 11.7501 26.9941 4.51517C24.9101 0.535978 20.0417 -1.06306 16.1756 0.96175Z" fill="#36F46B"/>
                    </svg>`,

                    `<svg class='mb-4 absolute bottom-0 right-4' width="38" height="35" viewBox="0 0 38 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.4284 1.55182C19.0909 3.15608 16.9763 6.28688 16.6049 9.78798C13.6389 7.89113 9.87313 7.58686 6.53565 9.19111C1.29104 11.7121 -0.877081 18.1912 1.7176 23.5892C6.39588 33.3218 28.6348 34.8149 28.6348 34.8149C28.6348 34.8149 41.3992 16.5972 36.6817 6.78272C34.087 1.38476 27.673 -0.96914 22.4284 1.55182Z" fill="#9747FF"/>
                    </svg>`,

                    `<svg class='mb-4 absolute bottom-0 right-4' width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.2873 1.93895C12.9726 3.47365 11.7232 6.01685 11.8069 8.65609C9.40849 7.55155 6.57955 7.71236 4.26484 9.24706C0.627428 11.6587 -0.317748 16.695 2.16445 20.4388C6.63991 27.1889 23.3153 26.0135 23.3153 26.0135C23.3153 26.0135 30.9269 11.1678 26.4138 4.36093C23.9316 0.617164 18.9247 -0.472725 15.2873 1.93895Z" fill="#F44336"/>
                    </svg>`,
    ]

    useEffect(()=>{
        bidContainer.current.scrollTop = bidContainer.current.scrollHeight
    },[bidLists])

    const listOfBidders = bidLists.map(bidder => {
        return(
            <Bids 
                key={bidder.id}
                name={bidder.name}
                text={bidder.text}
                img={bidder.image}
            />
        )
    })

    function submitBid(){
        let bid = inputBox.current.value
        const imageUrl =  'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        if(bid != ''){
            setBidLists(prevItems => {
                return[...prevItems,
                    {
                        id: 'bidder' + bidLists + 1,
                        name: "You",
                        text: bid,
                        image: imageUrl
                    }
                ]
            })
            bidContainer.current.scrollTop = bidContainer.current.scrollHeight
            inputBox.current.value = ''
        }
    }

    function like(){
        let randomIndex = Math.floor(Math.random() * 6)
        likesContainer.current.innerHTML += variousLikes[randomIndex]
        // `
        // <svg class=' mb-4 absolute bottom-0 right-4 transition-all' width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <path opacity="0.5" d="M18.7331 0C16.3944 0 14.334 1.20357 13.1647 3.09489C11.9953 1.20357 9.93496 0 7.59621 0C3.92103 0 0.914062 3.09489 0.914062 6.87753C0.914062 13.6978 13.1647 20.6326 13.1647 20.6326C13.1647 20.6326 25.4153 13.7551 25.4153 6.87753C25.4153 3.09489 22.4083 0 18.7331 0Z" fill="#4693ED"/>
        // </svg>
        // `
    }


    return (
        <>
            <Toast />
            <div className='h-[calc(100%_-_85.11px)] overflow-y-scroll pb-4' ref={bidContainer}>
                {listOfBidders}
                <div ref={likesContainer} className={'like-container absolute border h-1/3 border-blue ' + classes}>
                    
                </div>
            </div>
            <div>
                <p className='text-[#BAB9B9] leading-[157%] font-medium italic mb-1 hidden md:block'>Creator : Stormi Rylie</p>
                <div className='flex justify-between items-center'>
                    <div className='h-9 md:h-[3.5rem] w-[80%] bg-transparent md:bg-gradient-to-r from-[#78A3AD] to-[#C056097D] flex items-center justify-center rounded-[1.25rem]'>
                        <div className="h-[calc(100%_-_2px)] w-[calc(100%_-_2px)]  md:bg-white rounded-[1.25rem] overflow-hidden pl-4 pr-2 flex items-enter border border-white md:border-0">
                            <input ref={inputBox} type="text" className='h-full w-full focus:outline-0 font-medium text-white md:text-[#616161] text-sm md:text-lg bg-transparent' placeholder='Place a bid...'/>
                            <svg onClick={submitBid} className='h-9 w-9 md:w-[54px] md:h-[51px] mr-4 md:mr-0' width="54" height="51" viewBox="0 0 54 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-white md:fill-grey-dark' d="M43.6074 10.3762C43.416 10.2027 43.1742 10.0825 42.9104 10.0299C42.6465 9.97729 42.3717 9.99435 42.1182 10.0791L10.9153 20.4119C10.6462 20.5048 10.4145 20.6701 10.251 20.8858C10.0876 21.1016 10 21.3574 10 21.6195C10 21.8816 10.0876 22.1375 10.251 22.3532C10.4145 22.5689 10.6462 22.7342 10.9153 22.8272L23.0986 27.2574L32.0907 19.0428L34.0905 20.864L25.0559 29.0914L29.9349 40.1863C30.04 40.4266 30.2219 40.6327 30.4571 40.7777C30.6923 40.9228 30.9699 41.0002 31.2539 41C31.5405 40.9946 31.8186 40.9103 32.0516 40.7581C32.2845 40.606 32.4613 40.3931 32.5588 40.1475L43.9053 11.7323C44.0019 11.5038 44.0252 11.255 43.9725 11.0149C43.9197 10.7748 43.7931 10.5532 43.6074 10.3762Z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="w-[29px] md:h-[3.5rem] h-[29px] md:w-[3.5rem] bg-white/[0.35] md:border rounded-full border-black flex items-center justify-center">
                        <svg onClick={like} className='h-5 w-5 md:w-[40px] md:h-[33px]' width="40" height="33" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_i_560_201)">
                                <path d="M28.4215 0.29248C24.7185 0.29248 21.4563 2.19813 19.6048 5.19272C17.7533 2.19813 14.4911 0.29248 10.7881 0.29248C4.96904 0.29248 0.208008 5.19272 0.208008 11.1819C0.208008 21.9806 19.6048 32.9608 19.6048 32.9608C19.6048 32.9608 39.0016 22.0713 39.0016 11.1819C39.0016 5.19272 34.2406 0.29248 28.4215 0.29248Z" fill="#E31616"/>
                            </g>
                            <defs>
                                <filter id="filter0_i_560_201" x="0.208008" y="0.29248" width="38.7939" height="40.8353" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="8.16707"/>
                                    <feGaussianBlur stdDeviation="4.08353"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_560_201"/>
                                </filter>
                            </defs>
                        </svg>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Bidders
