import React from 'react'
import "./Category.css"
import phone from "./assets/Category-CellPhone (2).png"
import computer from "./assets/Category-Computer (2).png"
import smartwatch from "./assets/Category-SmartWatch.png"
import camera from "./assets/Category-Camera.png"
import headphone from "./assets/Category-Headphone.png"
import gaming from "./assets/Category-Gamepad.png"

const btns = [
    { img: phone, name: "Phones" },
    { img: computer, name: "Computers" },
    { img: smartwatch, name: "SmartWatch" },
    { img: camera, name: "Camera" },
    { img: headphone, name: "HeadPhones" },
    { img: gaming, name: "Gaming" },
]

function Category() {
    return (
        <div className='Category'>
            <div className="categories">
                <h2><p></p> Categories</h2>
                <h1>Browse By Category</h1>
                <div className="buttons">
                    {
                        btns.map((item, index) => (
                            <div className="button" key={index}>
                                <img src={item.img} alt="" />
                                <span>{item.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Category