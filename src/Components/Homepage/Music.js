import React from 'react'
import './Music.css'
import speaker from './assets/Frame 694.png'

function Music() {
    return (
        <div className='Music'>
            <div className="black-card">
                <div className="cate">
                    <h1>Categories</h1>
                    <h2>Enhance Your Music Experience</h2>
                    <div className="time">
                        <button>23 <br />hours</button>
                        <button>05 <br />days</button>
                        <button>59 <br />minutes</button>
                        <button>35 <br />seconds</button>
                    </div>
                    <button className='tort'>Buy Now!</button>
                </div>
                <img src={speaker} alt="" className='speaker'/>
            </div>
        </div>
    )
}

export default Music