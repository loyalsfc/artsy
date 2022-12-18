import React from 'react'
import { Link } from 'react-router-dom'

function Explore({content, link}) {
    return (
        <div className='text-[48px] font-medium pt-[59px] pb-7 border-y border-y-grey color-grey last:border-t-[0]'>
            <div className="container mx-auto flex items-center justify-between">
                <span>{content}</span>
                <Link to={link}>
                    <svg className='md:mr-[150px]' width="101" height="91" viewBox="0 0 101 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M51.9839 11.4862C52.9332 10.5346 54.2207 10 55.5631 10C56.9055 10 58.193 10.5346 59.1423 11.4862L89.5178 41.9419C90.4668 42.8938 91 44.1847 91 45.5306C91 46.8766 90.4668 48.1675 89.5178 49.1193L59.1423 79.5751C58.1875 80.4997 56.9087 81.0114 55.5813 80.9998C54.2539 80.9882 52.9842 80.4544 52.0455 79.5133C51.1069 78.5722 50.5745 77.299 50.5629 75.9681C50.5514 74.6372 51.0617 73.355 51.9839 72.3977L73.7175 50.6066H15.0626C13.7199 50.6066 12.4322 50.0718 11.4828 49.1199C10.5334 48.168 10 46.8769 10 45.5306C10 44.1844 10.5334 42.8933 11.4828 41.9414C12.4322 40.9895 13.7199 40.4547 15.0626 40.4547H73.7175L51.9839 18.6636C51.0348 17.7117 50.5016 16.4208 50.5016 15.0749C50.5016 13.7289 51.0348 12.4381 51.9839 11.4862Z" fill="#4693ED"/>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default Explore
