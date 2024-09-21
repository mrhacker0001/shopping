import React from 'react'
import './Navbar.css'
import search from "../assets/Component 2.png"
import like from "../assets/Wishlist.png"
import cart from "../assets/Cart1 with buy.png"
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/navbarSlice';

function Navbar() {
    const dispatch = useDispatch();



    const handleTagClick = (page) => {
        dispatch(setCurrentPage(page));
    };

    return (
        <div className='Navbar'>
            <div className="nav">
                <h1>Excusive</h1>
                <div className="tags">
                    <a href=".#" onClick={() => handleTagClick('Home')}>Home</a>
                    <a href=".#" onClick={() => handleTagClick('Contact')}>Contact</a>
                    <a href=".#" onClick={() => handleTagClick('About')}>About</a>
                    <a href=".#" onClick={() => handleTagClick('Sign up')}>Sign up</a>
                </div>

                <div className="triple">
                    <div className="search-panel">
                        <input type="text" name='text' placeholder='What are you looking ?' />
                        <img src={search} alt="..." />
                    </div>
                    <button >
                        <img src={like} alt="..." />
                    </button>
                    <button><img src={cart} alt="..." /></button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
