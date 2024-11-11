import React from 'react';
import './Navbar.css';
import search from "../assets/Component 2.png";
import like from "../assets/Wishlist.png";
import cartt from "../assets/Cart1 with buy.png";
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../Components/Redux/navbarSlice';
import { NavLink } from 'react-router-dom';
import profile from '../assets/user.png'
// import bag from '../assets/Group (6).png'
// import cancel from '../assets/icon-cancel.png'
// import review from '../assets/Icon-Reviews.png'
// import logout from '../assets/Icon-logout.png'


function Navbar() {
    const dispatch = useDispatch();

    const handleTagClick = (page) => {
        dispatch(setCurrentPage(page));
    };

    const user = JSON.parse(localStorage.getItem('user'));

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    // const data = [
    //     { img: profile, name: 'Manage My Account' },
    //     { img: bag, name: 'My Order' },
    //     { img: cancel, name: 'My Cancellations' },
    //     { img: review, name: 'My Reviews' },
    //     { img: logout, name: 'Logout' },
    // ]
    return (
        <div className='Navbar'>
            <div className="nav">
                <h1>Exclusive</h1>
                <div className="tags">
                    <NavLink to="/" onClick={() => handleTagClick('Home')}>Home</NavLink>
                    <NavLink to="/Contact" onClick={() => handleTagClick('Contact')}>Contact</NavLink>
                    <NavLink to="/About" onClick={() => handleTagClick('About')}>About</NavLink>
                    <NavLink to="/Signup" onClick={() => handleTagClick('Signup')}>Sign up</NavLink>
                </div>

                <div className="triple">
                    <div className="search-panel">
                        <input type="text" name='text' placeholder='What are you looking for?' />
                        <img src={search} alt="Search Icon" />
                    </div>

                    <button className='wish-btn'>
                        <NavLink to="/Wishlist"> <img src={like} alt="Wishlist Icon" /></NavLink>
                        <p className='quantity'>{totalQuantity}</p>
                    </button>

                    <button>
                        <NavLink to="/Cart"><img src={cartt} alt="" /></NavLink>
                    </button>

                    {user && user.name && (
                        <div className="profile-icon">
                            <button>
                                <NavLink to="/Profile">
                                    <img src={profile || '/default-profile.png'} alt="Profile" className="profile-img" />
                                </NavLink>
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Navbar;
