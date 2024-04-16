// Book_now.jsx

import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios'; // Import Axios
import './Book_now.css';

function Book_now() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    contactnumber: '',
    adults: '',
    children: '',
    checkindate: ''
  });
  const [errorMessage, setErrorMessage] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    adults: '',
    children: '',
    checkInDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrorMessage = {};
    let hasError = false;

    // Validate each field
    if (formData.fullname === '') {
      newErrorMessage.fullName = 'Please enter your full name';
      hasError = true;
    }
    if (formData.email === '') {
      newErrorMessage.email = 'Please enter your email';
      hasError = true;
    }
    if (formData.contactnumber === '') {
      newErrorMessage.contactNumber = 'Please enter your contact number';
      hasError = true;
    }
    if (formData.adults === '') {
      newErrorMessage.adults = 'Please select the number of adults';
      hasError = true;
    }
    if (formData.children === '') {
      newErrorMessage.children = 'Please select the number of children';
      hasError = true;
    }
    if (formData.checkindate === '') {
      newErrorMessage.checkInDate = 'Please select the check-in date';
      hasError = true;
    }

    // If there are errors, set the error message and return
    if (hasError) {
      setErrorMessage(newErrorMessage);
      return;
    }



    if (formData) {
      axios.post("http://localhost:2000/booking_insert", formData)
        .then((response) => {
          console.log(response);
          alert("Congrats! Booking is done");
        })
        .catch((error) => {
          console.log(error);
        });
    }




    // Proceed with booking if no errors
    console.log('Form submitted:', formData);
    // alert('Form submitted');
  };

  return (
    <>
      <Navbar /><br />
      <div className="container-book">
        <h1 id='book_now_heading'>Enter Your Details To Book</h1><hr />
        <form onSubmit={handleSubmit}>

          {/* Full Name and Email */}
          <div className="form-group">
            <div className="row">
              <div className="col">
                <label>Full Name</label>
                <input type="text" className='form-control' name="fullname" value={formData.fullname} onChange={handleChange} placeholder="Full Name" />
                {errorMessage.fullName && <div className="error-message">{errorMessage.fullName}</div>}
              </div>
              <div className="col">
                <label>Email</label>
                <input type="email" className='form-control' name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                {errorMessage.email && <div className="error-message">{errorMessage.email}</div>}
              </div>
            </div>
          </div>

          {/* Contact Number and Adults */}
          <div className="form-group">
            <div className="row">
              <div className="col">
                <label>Contact Number</label>
                <input type="text" className='form-control' name="contactnumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" />
                {errorMessage.contactNumber && <div className="error-message">{errorMessage.contactNumber}</div>}
              </div>
              <div className="col">
                <label>Adults</label>
                <select name="adults" className='form-select' value={formData.adults} onChange={handleChange}>
                  <option value="">select an option</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
                {errorMessage.adults && <div className="error-message">{errorMessage.adults}</div>}
              </div>
            </div>
          </div>

          {/* Children and Check-in Date */}
          <div className="form-group">
            <div className="row">
              <div className="col">
                <label>Children</label>
                <select name="children" className='form-select' value={formData.children} onChange={handleChange}>
                  <option value="">select an option</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                {errorMessage.children && <div className="error-message">{errorMessage.children}</div>}
              </div>
              <div className="col">
                <label>Check-in Date</label>
                <input className='form-control' type="date" name="checkindate" value={formData.checkindate} onChange={handleChange} placeholder="Check-in Date" />
                {errorMessage.checkInDate && <div className="error-message">{errorMessage.checkInDate}</div>}
              </div>
            </div>
          </div>

          <button onClick={handleSubmit} className='btn btn-primary' type="submit">BOOK</button>
        </form>
      </div>
    </>
  );
}

export default Book_now;
