import React from 'react'
import './Footer.css'
import qrcode from './Home/assets/Qrcode 1.png'
import appstore from './Home/assets/download-appstore.png'
import play from "./Home/assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"

function Footer() {
    const data = [
        { h1: "Support", span: "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.", span1: "exclusive@gmail.com", span2: "+88015-88888-9999" },
        { h1: "Account", span: "My Account", span1: "Login / Register", span2: "Cart", span3: "Wishlist", span4: "Shop" },
        { h1: "Quick Link", span: "Privacy Policy", span1: "Terms Of Use", span2: "FAQ", span3: "Contact" },
    ]
    return (
        <div className='Footer'>
            <div className="exc-cart">
                <h1>Exclusive</h1>
                <b>Subscribe</b>
                <span>Get 10% off your first order</span>
                <input type="text" name='text' placeholder='Enter your email' />
            </div>
            {
                data.map((item, index) => (
                    <div className="sup-cart">
                        <h1>{item.h1}</h1>
                        <span>{item.span}</span>
                        <span>{item.span1}</span>
                        <span>{item.span2}</span>
                        <span>{item.span3}</span>
                        <span>{item.span4}</span>
                    </div>
                ))
            }

            <div className="down-cart">
                <h1>Download</h1>
                <span>Save $3 with App New User Only</span>
                <div className="qr-cart">
                    <img src={qrcode} alt="..." />
                    <span>
                        <img src={play} alt="..." />
                        <img src={appstore} alt="..." />
                    </span>
                </div>

                <div className="icons-card">
                </div>
            </div>

        </div>
    )
}

export default Footer