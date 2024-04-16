import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios'; // Import Axios
import regist from '../pictures/regist.jpg';
import './Register.css';
import Footer from './Footer';

function Register() {
  // Initialize state inside the functional component
  const [data, setData] = useState({
    ename: "",
    gender: "",
    mobile: "",
    email:"",
    pwd: "",
    cpwd: ""
  });

  // For error --------------------------------------------------------------------
  let [Err_ename, E_setename] = useState("");
  let [Err_gender, E_setgender] = useState("");
  let [Err_mobile, E_setmobile] = useState("");
  let [Err_email, E_setemail] = useState("");
  let [Err_pwd, E_setpwd] = useState("");
  let [Err_cpwd, E_setcpwd] = useState("");

  // Function to handle data changes
  let handleData = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  function submit(e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Reset error messages
    E_setename("");
    E_setgender("");
    E_setmobile("");
    E_setemail("");
    E_setpwd("");
    E_setcpwd("");

    let formCompleted = true;

    if (data.ename === "") {
      E_setename("The name field is required.");
      formCompleted = false;
    } else if (data.ename.length <= 2) {
      E_setename("Please write your full name");
      formCompleted = false;
    }

    if (data.gender === "") {
      E_setgender("The gender field is required.");
      formCompleted = false;
    }

    if (data.mobile === "") {
      E_setmobile("The mobile field is required.");
      formCompleted = false;
    } else if (data.mobile.length < 10) {
      E_setmobile("Invalid mobile number.");
      formCompleted = false;
    }

    if (data.email === "") {
      E_setcity("The email field is required.");
      formCompleted = false;
    }

    if (data.pwd === "") {
      E_setpwd("The password field is required.");
      formCompleted = false;
    }

    if (data.cpwd === "") {
      E_setcpwd("The confirm password field is required.");
      formCompleted = false;
    }

    if (data.pwd !== data.cpwd) {
      E_setcpwd("Passwords do not match.");
      formCompleted = false;
    }

    
    if (formCompleted) {
      axios.post("http://localhost:2000/register_insert", data)
        .then((response) => {
          console.log(response);
          alert("Congrats! Register is done");
        })
        .catch((error) => {
          console.log(error);
        });
    }

  }

  return (
    <>
      <Navbar /><br /><br />
      <div className='row'>
        <div className='col-6'>
          <img src={regist} id='register-pic' alt="Registration" />
        </div>
        <div className='col-6'>
          <form>
            <h1 id='register-form'>Register</h1><hr />
            <div className="form-group row">
              <div className="col-sm-6">
                <label htmlFor="fullname">Full Name</label>
                <input type="text" name='ename' value={data.ename} onChange={handleData} className="form-control" id="fullname" placeholder="Enter your full name" />
                {Err_ename && <div style={{ color: "red" }}>{Err_ename}</div>}
              </div>
              <div className="col-sm-6">
                <label htmlFor="gender">Gender</label>
                <select name='gender' value={data.gender} onChange={handleData} className="form-control" id="gender">
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                {Err_gender && <div style={{ color: "red" }}>{Err_gender}</div>}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-6">
                <label htmlFor="mobile">Mobile Number</label>
                <input type="text" value={data.mobile} onChange={handleData} name="mobile" className="form-control" id="mobile" placeholder="Enter your mobile number" />
                {Err_mobile && <div style={{ color: "red" }}>{Err_mobile}</div>}
              </div>
              <div className="col-sm-6">
                <label htmlFor="email">email</label>
                <input type="text" value={data.email} onChange={handleData} name="email" className="form-control" id="email" placeholder="Enter your email" />
                {Err_email && <div style={{ color: "red" }}>{Err_email}</div>}
              </div>
              <div className="col-sm-6">
                <label htmlFor="password">Password</label>
                <input name='pwd' value={data.pwd} onChange={handleData} type="password" className="form-control" id="password" placeholder="Enter your password" />
                {Err_pwd && <div style={{ color: "red" }}>{Err_pwd}</div>}
              </div>
              <div className="col-sm-6">
                <label htmlFor="cpwd">Confirm Password</label>
                <input name="cpwd" value={data.cpwd} onChange={handleData} type="password" className="form-control" id="cpwd" placeholder="Enter your confirm password" />
                {Err_cpwd && <div style={{ color: "red" }}>{Err_cpwd}</div>}
                {data.pwd === data.cpwd && data.cpwd.length > 0 && <div style={{ color: "green" }}>Passwords match</div>}
                {data.pwd !== data.cpwd && data.cpwd.length > 0 && <div style={{ color: "red" }}>Passwords do not match</div>}
              </div>
            </div>
            <button type="submit" onClick={submit} id='register-btn1' className="btn btn">Register</button>
          </form>
        </div>
      </div><br /><br />
      <Footer/>
    </>
  );
}

export default Register;
