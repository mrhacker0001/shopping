import React from 'react'
import "./NewArrival.css"
import ply from './imgs/ps5-slim-goedkope-playstation_large 1.png'
import women from "./imgs/attractive-woman-wearing-hat-posing-black-background 1.png"
import gucci from "./imgs/652e82cd70aa6522dd785109a455904c.png"
import speaker from "./imgs/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png"
import deliver from "./imgs/Services.png"
import contact from "./imgs/Services (1).png"
import back from "./imgs/Services (2).png"

function NewArrival() {
    const data = [
        { name: "Women’s Collections", description: "Featured woman collections that give you another vibe.", btn: "Shop now", img: women },
        { name: "Speakers", description: "Amazon wireless speakers", btn: "Shop now", img: speaker },
        { name: "Perfume", description: "GUCCI INTENSE OUD EDP", btn: "Shop now", img: gucci },
    ]

    const icons = [
        { icon: deliver, definition: "FREE AND FAST DELIVERY", span: "Free delivery for all orders over $140" },
        { icon: contact, definition: "24/7 CUSTOMER SERVICE", span: "Friendly 24/7 customer support" },
        { icon: back, definition: "MONEY BACK GUARANTEE", span: "We reurn money within 30 days" }
    ]
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

                <div className="collection-carts">
                    {
                        data.map((item, index) => (
                            <div className="collection" key={index}>
                                <img src={item.img} alt="" />
                                <div className="collect">
                                    <h3>{item.name}</h3>
                                    <span>{item.description}</span>
                                    <button>{item.btn}</button>
                                </div>

                            </div>
                        ))
                    }
                </div>


            </div>

            <div className="icon-cart">
                {
                    icons.map((item, index) => (
                        <div className="icon" key={index}>
                            <img src={item.icon} alt="" />
                            <b>{item.definition}</b>
                            <span>{item.span}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NewArrival