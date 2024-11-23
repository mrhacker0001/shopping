import React from 'react'
import './OurProducts.css'
import food from './imgs/71RdoeXxtrL 1.png'
import camera from './imgs/eos-250d-03-500x500 1.png'
import laptop from './imgs/ideapad-gaming-3i-01-500x500 1.png'
import curology from './imgs/curology-j7pKVQrTUsM-unsplash 1.png'
import car from './imgs/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png'
import boot from './imgs/Copa_Sense 1.png'
import game from './imgs/GP11_PRD3 1.png'
import kit from './imgs/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png'
import star from './assets/Vector (14).png'
import heart from './assets/heart small.png'
import vision from './assets/Group (5).png'



function OurProducts() {
  const data = [
    { img: food, name: "Breed Dry Dog Food", price: 100, star: star, rank: 65, count: 1 },
    { img: camera, name: "CANON EOS DSLR Camera", price: 360, star: star, rank: 95, count: 1 },
    { img: laptop, name: "ASUS FHD Gaming Laptop", price: 700, star: star, rank: 325, count: 1 },
    { img: curology, name: "Curology Product Set ", price: 500, star: star, rank: 145, count: 1 },
    { img: car, name: "Kids Electric Car", price: 960, star: star, rank: 65, count: 1 },
    { img: boot, name: "Jr. Zoom Soccer Cleats", price: 1160, star: star, rank: 35, count: 1 },
    { img: game, name: "GP11 Shooter USB Gamepad", price: 660, star: star, rank: 55, count: 1 },
    { img: kit, name: "Quilted Satin Jacket", price: 660, star: star, rank: 55, count: 1 },
  ]
  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItem = cart.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));

  };

  const addToWishlist = (item) => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const existingItem = wishlist.find((wishlistItem) => wishlistItem.name === item.name);
    if (!existingItem) {
      wishlist.push(item);
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  };
  return (
    <div className='OurProducts'>
      <h1><p>.</p>Our Products</h1>
      <h2>Explore Our Products</h2>

      <div className="all-cards">
        <div className="all-cart">
          {
            data.map((item, index) => (
              <div className="th-carts" key={index}>
                <div className="img-carts">
                  <img src={item.img} alt="" />
                  <button className='th-btn' onClick={() => addToCart(item)}>Add To Cart</button>
                  <div className="wish-card">
                    <button onClick={() => addToWishlist(item)} ><img src={heart} alt="" /></button>
                    <button><img src={vision} alt="" /></button>
                  </div>
                </div>
                <h3>{item.name}</h3>
                <div className="textss">
                  <span>${item.price}</span>
                  <b>{[...Array(5)].map((_, i) => (
                    <img src={item.star} alt='star' key={i} />
                  ))} ({item.rank})
                  </b>

                </div>
              </div>
            ))
          }

        </div>
      </div>
      <button className='view-btn'>View All Products</button>
    </div>
  )
}

export default OurProducts