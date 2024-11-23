import React from 'react';
import '../Home/Sales.css';
import deleteicon from './assets/icon-delete.png';

function Wishlist() {
    // Wishlistni localStorage'dan olish
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // Umumiy mahsulot sonini hisoblash
    const totalQuantity = wishlist.reduce((total, item) => total + (item.quantity || 0), 0);

    // Mahsulotni o'chirish funksiyasi
    const handleDelete = (index) => {
        wishlist.splice(index, 1); // Wishlistdan mahsulotni o'chiradi
        localStorage.setItem('wishlist', JSON.stringify(wishlist)); // Lokalni yangilaydi
        window.location.reload(); // Sahifani qayta yuklaydi
    };

    return (
        <div className='Wishlist'>
            <div className="wishlist-card">
                <h2>Wishlist ({totalQuantity})</h2>
                <button>Move All To Bag</button>
            </div>
            <div className="shop-cards">
                {
                    wishlist.length > 0 ? (
                        wishlist.map((item, index) => (
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
                                        <button>{item.quantity || 0}</button>
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
                    ) : (
                        <p className="empty-wishlist">Your wishlist is empty!</p>
                    )
                }
            </div>
        </div>
    );
}

export default Wishlist;
