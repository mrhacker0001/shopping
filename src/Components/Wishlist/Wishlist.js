import React from 'react';
import '../Home/Sales.css';
import deleteicon from './assets/icon-delete.png';

function Wishlist() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    const handleDelete = (index) => {
        cart.splice(index, 1);

        localStorage.setItem('cart', JSON.stringify(cart));

        window.location.reload();
    };

    return (
        <div className='Wishlist'>
            <div className="wishlist-card">
                <h2>Wishlist ({totalQuantity})</h2>
                <button>Move All To Bag</button>
            </div>
            <div className="shop-cards">
                {
                    cart.map((item, index) => (
                        <div className='card' key={index}>
                            <div className='img-card'>
                                <img src={item.img} alt='...' />
                                <span>- {item.discount}%</span>
                                <button className='add-btn'>
                                    Add To Cart
                                </button>
                                <div className="wish-card">
                                    <button onClick={() => handleDelete(index)}>
                                        <img src={deleteicon} alt="delete" />
                                    </button>
                                    <button>{item.quantity}</button>
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
                    ))
                }
            </div>
        </div>
    );
}

export default Wishlist;
