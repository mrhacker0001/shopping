import React from 'react'
import "./BestSellingProducts.css"
import cloth from './assets/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png'
import bag from './assets/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png'
import speaker from './assets/gammaxx-l240-argb-1-500x500 1.png'
import bookshelf from './assets/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png'
import star from './assets/Vector (14).png'
function BestSellingProducts() {

    const data = [
        { img: cloth, name: "The north coat", price: 260, discount: 360, star: star },
        { img: bag, name: "Gucci duffle bag", price: 960, discount: 1160, star: star },
        { img: speaker, name: "RGB liquid CPU Cooler", price: 160, discount: 170, star: star },
        { img: bookshelf, name: "Small BookSelf", price: 460, discount: 530, star: star },
    ]

    return (
        <div className='BestSellingProducts'>
            <h2><p></p>This Month</h2>
            <div className="best">
                <h1>Best Selling Products</h1>
                <button>View All</button>
            </div>
            <div className="products">
                {
                    data.map((item, index) => (
                        <div className="product" key={index}>
                            <div className="img-sale">
                                <img src={item.img} alt="" />
                                <button className='btnsale'>Add To Cart</button>

                            </div>
                            <h1>{item.name}</h1>
                            <span>${item.price} <s>${item.discount}</s> </span>
                            <h3>
                                {[...Array(5)].map((_, i) => (
                                    <img src={item.star} alt='star' key={i} />
                                ))}
                                (65)
                            </h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BestSellingProducts