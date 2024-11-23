import React, { useState, useEffect } from 'react';
import './Cart.css';
import plus from './assets/plus (1).png';
import minus from './assets/minus (1).png';

function Cart() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    const incrementCount = (index) => {
        const updatedCart = [...cart];
        updatedCart[index].count += 1;
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const decrementCount = (index) => {
        const updatedCart = [...cart];
        if (updatedCart[index].count > 1) {
            updatedCart[index].count -= 1;
        } else {
            updatedCart.splice(index, 1); 
        }
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const calculateSubtotal = (price, count) => {
        return (price * count); 
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <div className='Cart'>
            <div className="cart-part">
                <div className="pro-part">
                    <span>Product</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Subtotal</span>
                </div>

                {cart.map((item, index) => (
                    <div className="product-cart" key={index}>
                        <h1>
                            <img src={item.img} alt="" /> {item.name}
                        </h1>
                        <span>${item.price}</span>
                        <div className="quantity-part">
                            <b>{item.count}</b>
                            <div className="btns-part">
                                <button className='btn-plus' onClick={() => incrementCount(index)}>
                                    <img src={plus} alt="Increase" />
                                </button>
                                <button className='btn-minus' onClick={() => decrementCount(index)}>
                                    <img src={minus} alt="Decrease" />
                                </button>
                            </div>
                        </div>
                        <p className='subtotal-amount'>${calculateSubtotal(item.price, item.count)}</p>
                    </div>
                ))}

                {cart.length === 0 && <p className="empty-cart">Your cart is empty!</p>}
            </div>
        </div>
    );
}

export default Cart;
