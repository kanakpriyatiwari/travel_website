import React from 'react';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <>
    <div className="footer">
          <div className="container subscribe-container">
        <form className="subscribe-form">
        <h2>Stay in the know </h2>
<h5> Sign up to get marketing emails from Booking.com, including promotions, rewards, travel experiences and information about Booking.com’s and Booking.com Transport Limited’s products and services.</h5>
          <input className="subscribe-input" type="email" placeholder="Your email address" />
          <button className="subscribe-button" type="submit">Subscribe</button>
        </form>
      </div>



      <div className="container1">
        <h2>Contact Us</h2>
        <p>Email: info@discoverwanderlust.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <div className="container2">
        <h2>Follow Us</h2>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
         
        </ul>
      </div>
    
      <div className="container copyright">
        <p>&copy; 2024 DiscoverWanderLust. All rights reserved.</p>
      </div>
    </div>
    </>
  );
}

export default Footer;
