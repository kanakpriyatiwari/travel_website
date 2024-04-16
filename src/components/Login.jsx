import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import './Login.css';
import Footer from './Footer';

function Login() {
  const [data, setData] = useState({
    email: '',
    pwd: ''
  });

  const [errEmail, setErrEmail] = useState('');
  const [errPwd, setErrPwd] = useState('');

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitLogin = () => {
    let formValid = true;

    if (data.email === '') {
      setErrEmail('The Email field is required.');
      formValid = false;
    } else {
      setErrEmail('');
    }

    if (data.pwd === '') {
      setErrPwd('The Password field is required.');
      formValid = false;
    } else {
      setErrPwd('');
    }

    if (formValid) {
      axios.post('http://localhost:2000/login', data)
        .then((response) => {
          console.log(response);
         
        })
        .catch((error) => {
          console.log(error);
          
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 id='heading1'>Explore The World...</h1>
            <h2 id='heading2'>Escape the ordinary and embrace the extraordinary <br /> with our travel guides.</h2>
          </div>
          <div className="col-6">
            <div className="login-form">
              <form>
                <h2 id='login1'>LOGIN...</h2>
                <hr />
                <div>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" className="form-control" value={data.email} onChange={handleData} />
                  {errEmail && <div style={{ color: "red" }}>{errEmail}</div>}
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="pwd" className="form-control" value={data.pwd} onChange={handleData} />
                  {errPwd && <div style={{ color: "red" }}>{errPwd}</div>}
                </div>
                <button type="button" onClick={submitLogin} className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
