import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm fixed-top ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">DiscoverWanderLust</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  justify-content-end " id="collapsibleNavbar">
            <ul className="navbar-nav">

          

   <li className="nav-item"> <Link className="link_items" to={'/Explore'} >Explore</Link></li>
   {/* <li className="nav-item"> <Link className="link_items" to={'/Activity'} >Activity</Link></li> */}
   <li className="nav-item"> <Link className="link_items" to={'/Packages'} >Packages</Link></li>
   <li className="nav-item"> <Link className="link_items" to={'/Login'} >Login</Link></li>
   <li className="nav-item"> <Link className="link_items btn btn-info1" id="register_link" to={'/Register'} >Register</Link></li>
             
            
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
