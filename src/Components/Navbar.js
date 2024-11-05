import React from 'react'
import './Navbar.css'
import search from "../assets/Component 2.png"
import like from "../assets/Wishlist.png"
import cart from "../assets/Cart1 with buy.png"
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/navbarSlice';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const dispatch = useDispatch();

    const handleTagClick = (page) => {
        dispatch(setCurrentPage(page));
    };

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
                    <button>
                        <img src={like} alt="Wishlist Icon" />
                    </button>
                    <button>
                        <NavLink to="Cart"><img src={cart} alt="Cart Icon" /></NavLink>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
