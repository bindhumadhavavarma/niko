import React, { useState, useContext } from 'react'
import { Axios, UserContext } from '../../context/UserContext';
import { pushNotify } from '../../services/NotifyService';
// image
import logo from "../../images/logo-full.png";
import loginbg from "../../images/pic1.png";
import { ScaleLoader } from 'react-spinners';
import { Link } from "react-router-dom";

function Registration() {
  const [isLoading, setIsLoading] = useState(false);
  const { signUp, loggedInCheck } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    conf_password: '',
    full_name:''
  });
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:"<>?,./;'[\]\\-]).{8,}$/;

  function validatePassword(password) {
    return passwordRegex.test(password);
  }

  const onChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const submitForm = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    console.log(formData);
    if (!Object.values(formData).every(val => val.trim() !== '')) {
      pushNotify('error', 'Error', 'Please Fill in all Required Fields! in');
      setIsLoading(false);
      return;
    } else if(!validatePassword(formData.password)){
      pushNotify("error","Error","Password must contain atleast one upper case, one lower case, one digit, one special character and is atleast 8 characters long.")
    }
    else if (formData.password !== formData.conf_password) {
      pushNotify("error", "Error", "Password and Confirm Password are not same.")
      setIsLoading(false)
      return;
    }
    else {
      const data = await signUp(formData);
    }
    setIsLoading(false)
  }


  return (
    <div className="authincation d-flex flex-column flex-lg-row flex-column-fluid">
      <div className="login-aside text-center  d-flex flex-column flex-row-auto">
        <div className="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
          <div className="text-center mb-4 pt-5">
            <img src={logo} alt="" width={150} />
          </div>
          <h3 className="mb-2">APTS</h3>
        </div>
        <div className="aside-image" style={{ backgroundImage: "url(" + loginbg + ")" }}></div>
      </div>
      <div className="container flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
        <div className="d-flex justify-content-center h-100 align-items-center">
          <div className="authincation-content style-2">
            <div className="row no-gutters">
              {
                isLoading ? <ScaleLoader cssOverride={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }} /> :
                  (
                    <div className="col-xl-12 tab-content">
                      <div id="sign-in" className="auth-form   form-validation">
                        <form onSubmit={submitForm} className="form-validate">
                          <h3 className="text-center mb-4 text-black">Sign Up</h3>
                          <div className="form-group mb-3">
                            <label className="mb-1" htmlFor="val-email"><strong>Full Name</strong></label>
                            <div>
                              <input type="text" className="form-control"
                                value={formData.full_name}
                                onChange={onChangeInput}
                                placeholder="Type Your Full Name"
                                name="full_name" id="full_name"
                              />
                            </div>
                          </div>
                          <div className="form-group mb-3">
                            <label className="mb-1" htmlFor="val-email"><strong>Email</strong></label>
                            <div>
                              <input type="email" className="form-control"
                                value={formData.username}
                                onChange={onChangeInput}
                                placeholder="Type Your Username"
                                name="username" id="username"
                              />
                            </div>
                          </div>
                          <div className="form-group mb-3">
                            <label className="mb-1"><strong>Password</strong></label>
                            <input
                              type="password" name="password" id="password"
                              className="form-control"
                              value={formData.password}
                              placeholder="Type Your Password"
                              onChange={onChangeInput}
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label className="mb-1"><strong>Confirm Password</strong></label>
                            <input
                              type="password" name="conf_password" id="conf_password"
                              className="form-control"
                              value={formData.conf_password}
                              placeholder="Re-Type Your Password"
                              onChange={onChangeInput}
                            />
                          </div>
                          <div className="text-center form-group mb-3 my-3">
                            <button type="submit" className="btn btn-primary btn-block">
                              Sign Up
                            </button>
                          </div>
                        </form>
                        <div className='text-center'>Already have an account? <Link to="/">Sign In</Link></div>
                      </div>
                    </div>
                  )
              }

            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
export default Registration;
