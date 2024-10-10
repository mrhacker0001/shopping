import React, { useState } from 'react';
import './Sales.css';
import Countdown from 'react-countdown';
import play from './assets/Frame 611.png';
import yulduz from './assets/Vector (14).png';
import klaviatura from './assets/ak-900-01-500x500 1.png'
import televizor from './assets/g27cq4-500x500 1.png'
import stul from './assets/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

function Sales() {
    // `data` massivi komponentdan oldin e'lon qilinishi kerak
    const data = [
        { img: play, discount: 40, name: 'HAVIT HV-G92 Gamepad', price: 120, discount2: 160, star: yulduz },
        { img: klaviatura, discount: 35, name: 'AK-900 Wired Keyboard', price: 960, discount2: 1160, star: yulduz },
        { img: televizor, discount: 30, name: 'IPS LCD Gaming Monitor', price: 370, discount2: 400, star: yulduz },
        { img: stul, discount: 25, name: 'S-Series Comfort Chair ', price: 375, discount2: 400, star: yulduz },
        { img: play, discount: 40, name: 'HAVIT HV-G92 Gamepad', price: 120, discount2: 160, star: yulduz },
        { img: klaviatura, discount: 35, name: 'AK-900 Wired Keyboard', price: 960, discount2: 1160, star: yulduz },
        { img: televizor, discount: 30, name: 'IPS LCD Gaming Monitor', price: 370, discount2: 400, star: yulduz },
        { img: stul, discount: 25, name: 'S-Series Comfort Chair ', price: 375, discount2: 500, star: yulduz },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 4;
    const totalCards = data.length;

    // Carouselni o'ngga va chapga siljitish
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

    // Skidka tugash sanasi
    const endDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 20 * 60 * 1000 + 56 * 1000);

    // Countdown renderer
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

    return (
        <div className='Sales'>
            <h1><p>.</p> Today’s</h1>

            {/* Flash Sales va Countdown */}
            <div className='first-part'>
                <h2>
                    Flash Sales <span><Countdown date={endDate} renderer={renderer} /></span>
                </h2>

                {/* Chap va O'ng tugmalar */}
                <div className='btn'>
                    <button onClick={handlePrev} disabled={currentIndex === 0}>
                        <KeyboardArrowLeft />
                    </button>
                    <button onClick={handleNext} disabled={currentIndex >= totalCards - cardsToShow}>
                        <KeyboardArrowRight />
                    </button>
                </div>
            </div>

            {/* Carousel qismi */}
            <div className='carousel-part'
                style={{
                    transform: `translateX(-${currentIndex * 50 / cardsToShow}%)`,
                }}>

                {data.map((item, index) => (
                    <div className='card' key={index}>
                        <div className='img-card'>
                            <img src={item.img} alt='...' />
                            <span>- {item.discount}%</span>
                            <button>Add To Cart</button>
                        </div>
                        <b>{item.name}</b>
                        <p>
                            ${item.price}
                            <s>${item.discount2}</s>
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
