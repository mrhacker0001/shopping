import React from 'react'
import "./NewArrival.css"
import ply from './imgs/ps5-slim-goedkope-playstation_large 1.png'

function NewArrival() {
    return (
        <div className='NewArrival'>
            <h2><p></p> Featured</h2>
            <h1>New Arrival</h1>
            <div className="triple-cart">
                <div className="playstation-cart">
                    <img src={ply} alt="" />
                    <div className="open-cart">
                        <h3>PlayStation 5</h3>
                        <p>Black and White version of the PS5 coming out on sale.</p>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewArrival