import React from 'react';
import Navbar from './Navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Packages.css';
import { useNavigate } from 'react-router-dom';
import banner1 from '../pictures/banner1.jpg';
import banner2 from '../pictures/banner2.jpg';
import banner3 from '../pictures/banner3.jpg';

import package1 from '../pictures/package1.jpg';
import package2 from '../pictures/package2.jpg';
import package3 from '../pictures/package3.jpg';

import package4 from '../pictures/package4.jpg';
import package5 from '../pictures/package5.jpg';

import trend_pic1 from '../pictures/trending1.jpeg'
import trend_pic2 from '../pictures/trending2.jpeg'
import trend_pic3 from '../pictures/trending3.jpeg'
import trend_pic4 from '../pictures/trending4.jpeg'
import trend_pic5 from '../pictures/trending5.jpeg'
import Footer from './Footer';

function Packages() {
  let navigate = useNavigate(); 

  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const packages = [
    {
      image: package1,
      name: "European Experience",
      startingPrice: "Starting price: 76000",
    },
    {
      image: package2,
      name: "Singapore Explore",
      startingPrice: "Starting price: 68000",
    },
    {
      image: package3,
      name: "Bali",
      startingPrice: "Starting price: 36000",
    },
    {
      image: package4,
      name: "Kashmir Heaven",
      startingPrice: "Starting price: 40000",
    },
    {
      image: package5,
      name: "Himachal Adventure",
      startingPrice: "Starting price: 30000",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="carousel-container">
        <Slider {...bannerSettings}>
          <div>
            <img src={banner1} alt="banner1" />
          </div>
          <div>
            <img src={banner2} alt="banner2" />
          </div>
          <div>
            <img src={banner3} alt="banner3" />
          </div>
        </Slider>
      </div>
      <div className="package-container">
        <h1>Best Selling Tour Packages</h1><br />
        <h5>Embark on a journey through Himachal's stunning vistas and Kashmir's tranquil landscapes. Indulge in the allure of Singapore and Bali's exotic delights. <br /> Immerse yourself in European charm as you explore West Bengal, Andhra Pradesh, Telangana, and Kerala. <br /> Unwind on pristine beaches reminiscent of Goa and the Andaman Islands.</h5>
        <div className="packages-carousel">
          {packages.map((pkg, index) => (
            <a key={index} onClick={()=> navigate('/Book_now')} className="package-link">
              <div className="package">
                <img src={pkg.image} alt={`package${index + 1}`} />
                <div className="package-info">
                  <h5>{pkg.name}</h5>
                  <b>{pkg.startingPrice}</b>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/*  */}
      <div id='trending_destinations'>
        <h1>Trending destinations</h1>
        <h4>Most popular choices for travellers from India</h4>
      </div><br />
      <div className='row'>
    <div className='col-6' style={{ position: 'relative' }}>
      <a onClick={()=> navigate('/Book_now')} >
        <img  id='trend1' src={trend_pic1} alt="trending1-pic" />
        <h1 style={{ fontFamily:"Georgia, 'Times New Roman', Times, serif", position: 'absolute', top:"12px" , left: '155px', bottom: '10px', color: 'white' }}>NEW DELHI</h1>
      </a>
    </div>
    <div className='col-6' style={{ position: 'relative' }}>
      <a onClick={()=> navigate('/Book_now')}>
        <img  id='trend2' src={trend_pic2} alt="trending2-pic" />
        <h1 style={{ fontFamily:"Georgia, 'Times New Roman', Times, serif", position: 'absolute',top:"12px", left: '35px', bottom: '10px', color: 'white' }}>RAJASTHAN</h1>
      </a>
    </div>
  </div><br />
{/* ///////////////////////////////////////////// */}
  <div className='row'>
    <div className='col-4' style={{ position: 'relative' }}>
    <a onClick={()=> navigate('/Book_now')}>
        <img  id='trend3' src={trend_pic3} alt="trending3-pic" />
        <h1 style={{ fontFamily:"Georgia, 'Times New Roman', Times, serif", position: 'absolute',top:"12px", left: '125px', bottom: '10px', color: 'white' }}>MEGHALAYA</h1>  
      </a></div>
      <div className='col-4' style={{ position: 'relative' }}>
    <a onClick={()=> navigate('/Book_now')}>
        <img  id='trend4' src={trend_pic4} alt="trending4-pic" />
        <h1 style={{ fontFamily:"Georgia, 'Times New Roman', Times, serif", position: 'absolute',top:"12px", left: '125px', bottom: '10px', color: 'white' }}>KASHMIR</h1>  
    
      </a>
      </div>
      <div className='col-4' style={{ position: 'relative' }}>
    <a onClick={()=> navigate('/Book_now')}>
        <img  id='trend5' src={trend_pic5} alt="trending3-pic" />
        <h1 style={{ fontFamily:"Georgia, 'Times New Roman', Times, serif", position: 'absolute',top:"12px", left: '125px', bottom: '10px', color: 'white' }}>KERALA</h1>  
     
      </a>
      </div>
    </div>
<br />
  <Footer/>

    </>
  );
}

export default Packages;
