import React from 'react';
import Navbar from './Navbar';
import './Explore.css';
import Footer from './Footer'

import pic from '../pictures/explore.jpg';
import explore1 from '../pictures/explore1.png';
import explore2 from '../pictures/explore2.png';
import explore3 from '../pictures/explore3.png';
// import explore4 from '../pictures/explore4.png';
import explore5 from '../pictures/explore5.png';
import explore6 from '../pictures/explore6.jpg';

import story1 from '../pictures/story1.jpg'
import story2 from '../pictures/story2.jpg'
import story3 from '../pictures/story3.jpg'

function Explore() {
  return (
    <>
      <Navbar />
      <div className="explore-container">
        <img id='pic' src={pic} alt="pic1" />
        <div className="explore-text">
          <h1 id='heading-explore'>Explore The Unexplored, With DiscoverWanderLust</h1>
          <h5>Wondering 'Where to travel next?' Our Experts are here to help you choose the destination, plan your next getaway, find the best hotels & resorts to unwind and provide you with all that you need to know for a seamless trip.</h5>
        </div>
      </div><br />
      <h3 id='exploration-heading'>"Exploration is not just about places; it's about the soul-searching journey within."</h3>

      {/* // */}
      <div className='row picrow1'>
        <div className='col-4'>
          <a href="#">
          <img id='exp2' src={explore2} alt="explore1" />
          <b className='taglines'>Historical Places</b>
          </a>
        </div>
        <div className='col-4'>
          <a href="#">
          <img id='exp3' src={explore3} alt="explore1" />
          <b className='taglines'>Hill Stations</b>
          </a>
        </div>
        <div className='col-4'>
          <a href="#">
          <img id='exp5' src={explore5} alt="explore1" />
          <b className='taglines'>Beaches</b>
          </a>
        </div>
      </div><br />

      <div className='row picrow2'>
        <div className='col-4'>
          <a href="#">
          <img id='exp1' src={explore1} alt="explore1" />
          <b className='taglines'>Adventure</b>
          </a>
        </div>

        <div className='col-4'>
          <a href="#">
          <img id='exp6' src={explore6} alt="explore1" />
          <b id='shopping-tagline' className='taglines'>Shopping</b>
          </a>
        </div>

      </div><br />
      {/*  */}
      <div className='travel-diaries'>
      <h5 id='traveldiaries-heading'>Travel Diaries: Wanderlust Chronicles</h5>   
   </div><hr /><br />

<div className='row'>
  <div className='col-5'>
    <h1 id='story-heading1'> 1. "Sands of Splendor: Harry's Rajasthan Adventure"</h1><br />
    <h6 id='story-paragraph1' >Intrigued by the tales of Rajasthan's cultural opulence, Harry, the intrepid explorer from America, embarked on a captivating journey through the desert landscapes. From Jaipur's bustling bazaars to the majestic fortresses of Amber, he unfolded the vibrant tapestry of Rajasthan through vivid imagery and captivating narratives. Venturing into the remote village of Ranakpur, Harry unveiled hidden treasures, weaving enchanting tales to guide fellow wanderers. As the desert sun painted the horizon in hues of gold, Harry bid adieu, leaving behind a legacy of exploration and wonder in Rajasthan.</h6>

  </div>

  <div className='col-3'>
    <img id='storypic1'  src={story1} alt="storypic1" />

  </div>

</div><br /><br />

<div className='row'>

<div className='col-5'>
    <img id='storypic2'  src={story2} alt="storypic2" />

  </div>
  


   <div className='col-5'>
  <h1 id='story-heading2'> 2.  "Solitude's Symphony: A Solo Journey in Haridwar "</h1><br />
    <h6 id='story-paragraph2' >Sarah, a solo traveler from New York, sought solace in the serene embrace of Haridwar. Amidst the Himalayan foothills, she found tranquility by the Ganges. Delving into yoga and meditation in an ashram, she discovered inner peace. Atop Ram Jhula bridge, amidst chants and gentle breezes, she found harmony. Departing, Sarah carried not just memories, but a newfound sense of self.</h6>
  </div> 
</div><br /><br />

{/*  */}
<div className='row'>
  <div className='col-5'>
  <h1 id='story-heading3'> 3."Chill Thrills: A Family's Kashmir Winter Escape"</h1><br />
    <h6 id='story-paragraph3' >The Patel family, from Mumbai, ventured to Kashmir for the first time, seeking winter's embrace. Amidst snow-kissed peaks, they glided on Dal Lake's tranquil waters in a colorful shikara, marveling at nature's canvas. In Pahalgam, they tasted Kashmiri warmth, savoring Wazwan cuisine and stories of tradition. Atop Gulmarg's slopes, laughter danced in snowflakes as they experienced the thrill of skiing and rode the iconic Gulmarg Gondola. With hearts warmed by the beauty of Kashmir's winter wonderland, the Patels bid adieu, carrying cherished memories of their snowy escapade.</h6>
  </div>

  <div className='col-3'>
    <img id='storypic3'  src={story3} alt="storypic3" />

  </div>
</div><br /><br /><br />

<Footer/>

    </>
  );
}

export default Explore;
