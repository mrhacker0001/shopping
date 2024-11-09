import React from 'react'
import './Contact.css'
import phone from './assets/icons-phone.png'
import mail from './assets/icons-mail.png'

function Contact() {
  return (
    <div className='Contact'>
      <div className="call-card">
        <h1><img src={phone} alt="..." />Call To Us</h1>
        <span>We are available 24/7, 7 days a week.</span>
        <span>Phone: +8801611112222</span>
        <b></b>

        <h1><img src={mail} alt="..." />Call To Us</h1>
        <span>Fill out our form and we will contact you within 24 hours.</span>
        <span>Emails: customer@exclusive.com</span>
        <span>Emails: support@exclusive.com</span>
      </div>

      <div className="input-card">
        <div className="in-card">
          <input type="text" name='text' placeholder='Your Name *' />
          <input type="text" name='text' placeholder='Your Email *' />
          <input type="text" name='text' placeholder='Your Phone *' />
        </div>
        <input type="text" name='text' placeholder='Your Massage' className='message' />
        <button>Send Massage</button>
      </div>
    </div>
  )
}

export default Contact