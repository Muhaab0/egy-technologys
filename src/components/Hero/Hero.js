import React from 'react'
import HeroVideo from "../../assets/video.mp4"
import "./Hero.css" 

export default function Hero() {
  return (
    <div className='heroContainer'>
    <div className='heroVideo'>
        <video  autoPlay muted loop> 
            <source src={HeroVideo} type="video/webm" />
        </video>

    </div>

        {/* <div className='heroTextContainer'>
        <div className='heroText'>
            <h2 className='heroTopText'>For A flat monthly fee</h2>
            <p className='heroDownText'>We can take care of all your IT needs, giving you more time to do what you do best </p>
            <Link to="/contact">
            <div className='btn heroButton flex j-center'>
                Run your business
            </div>
            </Link>
        </div>
        </div> */}
    </div>
  )
}
