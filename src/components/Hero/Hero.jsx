import React from 'react'
import './Hero.css'
import hand from '../Assets/clapping-hands.png';
import girl from '../Assets/girl-image.png';
import arrow from '../Assets/arrow.png';

export const Hero = () => {
  return (
    <div>
        <div>
        <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand} alt="" />
                </div>
                <p>collenctions</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={girl} alt="" />
        </div>
    </div>
    </div>
    </div>
  )
}

export default Hero;
