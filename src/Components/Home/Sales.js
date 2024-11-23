import React, { useState } from 'react';
import './Sales.css';
import Countdown from 'react-countdown';
import play from './assets/Frame 611.png';
import yulduz from './assets/Vector (14).png';
import klaviatura from './assets/ak-900-01-500x500 1.png'
import televizor from './assets/g27cq4-500x500 1.png'
import stul from './assets/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png'
import heart from './assets/heart small.png'
import vision from './assets/Group (5).png'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

function Sales() {
    const data = [
        { img: play, discount: 40, name: 'HAVIT HV-G92 Gamepad', price: 120, discount2: 160, star: yulduz, count: 1 },
        { img: klaviatura, discount: 35, name: 'AK-900 Wired Keyboard', price: 960, discount2: 1160, star: yulduz, count: 1 },
        { img: televizor, discount: 30, name: 'IPS LCD Gaming Monitor', price: 370, discount2: 400, star: yulduz, count: 1 },
        { img: stul, discount: 25, name: 'S-Series Comfort Chair ', price: 375, discount2: 400, star: yulduz, count: 1 },
        { img: play, discount: 40, name: 'HAVIT HV-G92 Gamepad', price: 120, discount2: 160, star: yulduz, count: 1 },
        { img: klaviatura, discount: 35, name: 'AK-900 Wired Keyboard', price: 960, discount2: 1160, star: yulduz, count: 1 },
        { img: televizor, discount: 30, name: 'IPS LCD Gaming Monitor', price: 370, discount2: 400, star: yulduz, count: 1 },
        { img: stul, discount: 25, name: 'S-Series Comfort Chair ', price: 375, discount2: 500, star: yulduz, count: 1 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 4;
    const totalCards = data.length;

    const handleNext = () => {
        if (currentIndex < totalCards - cardsToShow) {
            setCurrentIndex(currentIndex + 2);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 2);
        }
    };

    const endDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 20 * 60 * 1000 + 56 * 1000);

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span>Time is up!</span>;
        } else {
            return (
                <span>
                    0{days} : {hours} : {minutes} : {seconds}
                </span>
            );
        }
    };

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
        <div className='Sales'>
            <h1><p>.</p> Today’s</h1>

            <div className='first-part'>
                <h2>
                    Flash Sales <span><Countdown date={endDate} renderer={renderer} /></span>
                </h2>

                <div className='btnbest'>
                    <button onClick={handlePrev} disabled={currentIndex === 0}>
                        <KeyboardArrowLeft />
                    </button>
                    <button onClick={handleNext} disabled={currentIndex >= totalCards - cardsToShow}>
                        <KeyboardArrowRight />
                    </button>
                </div>
            </div>

            <div className='carousel-part' style={{ transform: `translateX(-${currentIndex * 50 / cardsToShow}%)` }}>
                {data.map((item, index) => (
                    <div className='card' key={index}>
                        <div className='img-card'>
                            <img src={item.img} alt='...' />
                            <span>- {item.discount}%</span>
                            <button className='add-btn' onClick={() => addToCart(item)}>
                                Add To Cart
                            </button>
                            <div className="wish-card">
                                <button onClick={() => addToWishlist(item)} ><img src={heart} alt="" /></button>
                                <button><img src={vision} alt="" /></button>
                            </div>
                        </div>
                        <b>{item.name}</b>
                        <p>
                            ${item.price} <s>${item.discount2}</s>
                        </p>
                        <h2>
                            {[...Array(5)].map((_, i) => (
                                <img src={item.star} alt='star' key={i} />
                            ))}
                            (89)
                        </h2>
                    </div>
                ))}
            </div>
            <button className='view'>View All Products</button>
        </div>
    );
}

export default Sales;
