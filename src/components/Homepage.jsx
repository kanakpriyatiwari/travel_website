import React from 'react';
import './Homepage.css';
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';

import Slider from 'react-slick';
import { RiSearchLine } from 'react-icons/ri';
import { FaMapMarkerAlt } from 'react-icons/fa';

import pic from '../pictures/tropical_beach_aerial_view.jpg';
import tourist from '../pictures/tourist.jpg';
import whitemahal from '../pictures/water-mahal.jpg';

import kerala from '../pictures/kerala.png'
import maldives from '../pictures/bali.png'
import dubai from '../pictures/dubai.png'
import andaman from '../pictures/andaman.png'
import goa from '../pictures/goa.png'

import j_k from '../pictures/j_k.png'
import jk1 from '../pictures/jk1.png'
import jk2 from '../pictures/jk2.png'
import jk3 from '../pictures/jk3.png'
import jk4 from '../pictures/garden.jpg'

import andam from '../pictures/a&n.png'
import ger from '../pictures/ger.png'
import rj from '../pictures/rj.png'
import usa from '../pictures/usa.png'
import assam from '../pictures/assam.png'
// import hawamahal from './hawa-mahal.jpg';
import hawamahal from '../pictures/vechicle.jpg';

import Navbar from './Navbar';

function Homepage() {
  let navigate = useNavigate(); 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
// ////-----------------------------

const show = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};




  return (
    <>
      <Navbar />
      <div className="image-container-sm">
        <img id='backg-pic' src={pic} alt="background" />
        <div className="text-overlay">
          <h1 id='welcome-msg'>Ignite passion, embrace adventure. Unveil mysteries, redefine wanderlust with us.</h1>
        
          <div className="search-container">
            <input id='textbox' type="text" className='form-control' placeholder='Search for destinations, itineraries or hotels' />
            <RiSearchLine className="search-icon" />
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <h1 id='heading2-homepage'>Safe Passage to Your <br /> Dream Destinations</h1>
      </div>
      <div>
        <h5 id='headin3-homepage'>Experience the magic of travelling… with sustainable travel choices that support the environment and local communities.</h5>
      </div>

      <div className='row'>
        <div className='col-4 different'>
          <h1 id='different1'>How We’re <br /> Different</h1><br />
          <p id='tagline-different1'>We are an ethical company that <br /> supports local businesses and <br /> provides exceptional services.</p>
          <button className='btn btn-different'>FIND OUT MORE</button>

        </div>

        <div className='col-3'>
          <img id='tourist' src={tourist} alt="hawamahal" />

        </div>

        <div className='col-3'>
          <img id='whitemahal' src={whitemahal} alt="whitemahal" />

        </div>
      </div>

      <div className='row'>
        <div className='col-4'>
          <img id='hawamahal' src={hawamahal} alt="pic-antique" />
        </div>

        <div className='col-4 faqs'>
          <h1 id='different1'>FAQ: Please Read</h1><br />
          <p id='tagline-different3'>Please read our FAQ to find out how we work and what you need to know to travel.</p>
          <button className='btn btn-different btn-faqs'>READ OUR FAQ</button>
        </div>
      </div><br />
{/* //////////////////////////////////// */}
<div>
  <h1 id='book-homepage' >Embark on personalized adventures with our curated tour packages, tailor-made just for you!</h1>
</div>

<div><br />
<Slider {...settings}>
        <div className='card'>
          <img id='kerala-img' className='card-img-top' src={kerala} alt='kerala' />
          <div className='card-body'>
            <h4 className='card-title'>kerala package</h4>
            <FaMapMarkerAlt className='icon' /><h3>Kerala</h3>
            <h2>₹ 15,000</h2>
            <button className='btn btn-book-now' onClick={()=> navigate('/Book_now')}>Book Now</button>
          </div>
        </div>
        <div className='card'>
          <img className='card-img-top' src={maldives} alt='maldives' />
          <div className='card-body'>
            <h4 className='card-title'>bali package</h4>
            <FaMapMarkerAlt className='icon' /><h3>bali</h3>
            <h2>₹ 15,000</h2>
            <button className='btn btn-book-now' onClick={()=> navigate('/Book_now')}>Book Now</button>
          </div>
        </div>
        <div className='card'>
          <img className='card-img-top' src={dubai} alt='dubai' />
          <div className='card-body'>
            <h4 className='card-title'>dubai package</h4>
            <FaMapMarkerAlt className='icon' /><h3>dubai</h3>
            <h2>₹ 15000</h2>
            <button className='btn btn-book-now' onClick={()=> navigate('/Book_now')}>Book Now</button>
          </div>
        </div>
        <div className='card'>
          <img className='card-img-top' src={andaman} alt='andaman' />
          <div className='card-body'>
            <h4 className='card-title'>andaman package</h4>
            <FaMapMarkerAlt className='icon' /><h3>andaman</h3>
            <h2>₹ 15000</h2>
            <button className='btn btn-book-now' onClick={()=> navigate('/Book_now')}>Book Now</button>
          </div>
        </div>
        <div className='card'>
          <img className='card-img-top' src={goa} alt='goa' />
          <div className='card-body'>
            <h4 className='card-title'>goa package</h4>
            <FaMapMarkerAlt className='icon' /><h3>goa</h3>
            <h2>₹ 15000</h2>
             <button className='btn btn-book-now'onClick={()=> navigate('/Book_now')}>Book Now</button>
          </div>
        </div>
      </Slider>

</div><br />

{/*  */}

<div id='j_k'>
  <img id='jk_pic' src={j_k} alt="j and k" />
</div>

<div className='row'>

  <div className='col-3'>
    <div className='card'>
      <a href="#">
        <img id='jk1' src={jk1} alt="jk1" />
      </a>
      <div className='card-body'>
        <h4 id='cardtitle1'>A Guide to Explore Bangus Valley, Kashmir</h4>
      </div>
    </div>
  </div>

  <div className='col-3'>
    <div className='card'>
      <a href="#">
        <img id='jk2' src={jk2} alt="jk1" />
      </a>
      <div className='card-body'>
        <h4 className='cardtitle'>Guide: Tarsar Marsar Lake Trek in Kashmir</h4>
      </div>
    </div>
  </div>

  <div className='col-3'>
    <div className='card'>
      <a href="#">
        <img id='jk3' src={jk3} alt="jk1" />
      </a>
      <div className='card-body'>
        <h4 className='cardtitle'>Guide: The Great Lakes Trek in Kashmir</h4>
      </div>
    </div>
  </div>

  <div className='col-3'>
    <div className='card'>
      <a href="#">
        <img id='jk4' src={jk4} alt="jk1" />
      </a>
      <div className='card-body'>
        <h4 id='cardtitle4'>  Spring in Kashmir.</h4>
      </div>
    </div>
  </div>

</div>
{/*  */}
<div className='destination-guides'>
  <h4>Plan Your Next Trip Using DiscoverWanderLust's Complete Destination Guides </h4>
</div>

<div><br />
<Slider {...show}>
        <div className='card'>
          <img id='kerala-img' className='card-img-top' src={andam} alt='kerala' />
          <div className='card-body'>
            <h4 className='card-title'>andaman package</h4>
            <FaMapMarkerAlt className='icon' /><h3>andaman</h3>
            <h2>₹ 15,000</h2>
            <button className='btn btn-book-now'onClick={()=> navigate('/Book_now')}>Book Now</button>
            

          </div>
        </div>
        <div className='card'>
          <img className='card-img-top' src={ger} alt='maldives' />
          <div className='card-body'>
            <h4 className='card-title'>germany package</h4>
            <FaMapMarkerAlt className='icon' /><h3>germany</h3>
            <h2>₹ 15,000</h2>
            <button className='btn btn-book-now'onClick={()=> navigate('/Book_now')}>Book Now</button>
          </div>
        </div>
        <div className='card'>
          <img className='card-img-top' src={rj} alt='dubai' />
          <div className='card-body'>
            <h4 className='card-title'>rajasthan package</h4>
            <FaMapMarkerAlt className='icon' /><h3>rajasthan</h3>
            <h2>₹ 15000</h2>
            <button className='btn btn-book-now'onClick={()=> navigate('/Book_now')}>Book Now</button>
          </div>
        </div>
        <div className='card' style={{position: 'relative'}}>
  <img id='assam-pic' className='card-img-top' src={assam} alt='assam' />
  <b id='assam-pic-heading'>assam</b>
  <div className='card-body'>
    <h4 className='card-title'>assam package</h4>
    <FaMapMarkerAlt className='icon' /><h3>assam</h3>
    <h2>₹ 15000</h2>
    <button className='btn btn-book-now'onClick={()=> navigate('/Book_now')}>Book Now</button>
  </div>
</div>

        <div className='card'>
          <img className='card-img-top' src={usa} alt='goa' />
          <div className='card-body'>
            <h4 className='card-title'>usa package</h4>
            <FaMapMarkerAlt className='icon' /><h3>usa</h3>
            <h2>₹ 15000</h2>
             <button className='btn btn-book-now'onClick={()=> navigate('/Book_now')}>Book Now</button>
          </div>
        </div>
      </Slider>

</div><br /><br />

<Footer/>

    </>
  );
}

export default Homepage;