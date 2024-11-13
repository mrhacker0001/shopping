import React from 'react';
import './Profile.css';

let cart = JSON.parse(localStorage.getItem('user')) || {};

function Profile() {
    return (
        <div className='Profile'>
            <div className="edit-card">
                <h1>Edit Your Profile</h1>
                <div className="top-card">
                    <label>
                        First Name
                        <input
                            type="text"
                            placeholder={cart.name || ''}
                            value={cart.name || ''}
                            readOnly
                        />
                    </label>
                    <label>
                        Last Name
                        <input
                            type="text"
                            placeholder={cart.lastname || ''}
                            value={cart.lastname || ''}
                            readOnly
                        />
                    </label>
                    <label>
                        Email
                        <input
                            type="text"
                            placeholder={cart.emailorPhone || ''}
                            value={cart.emailorPhone || ''}
                            readOnly
                        />
                    </label>
                    <label>
                        Address
                        <input
                            type="text"
                            name='text'
                            placeholder='Adress'
                        />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Profile;
