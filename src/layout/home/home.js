import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='home-container' >
            <div className='content-container'>
                <div className='content'>
                    <h1>Transform Your Event </h1>
                    <h1> Stunning Decorations for</h1>
                    <h1> every Occasions</h1>
                    <div className='button-container' >
                        <Link to="/contact" className="main-button">Try Now</Link>
                        <Link to="/gallary" className="second-button">gallary</Link>
                    </div>
                </div>
            </div>
            <div className='image-slider' >

            </div>
            <div></div>
        </div>
    )
}

export default Home