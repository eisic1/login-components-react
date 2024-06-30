import React from "react";
import { FaRegUser, FaRegEnvelope } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import './signin.css';

function SignUp(){
    const location = useLocation();
    
    return(
        <div className={`form-box ${location.pathname === '/sign-up' ? 'active' : ''}`}>
            <div className="register-container" id="register">
                <div className="top">
                    <span>Have an account? <a href="#">Login</a></span>
                    <header>Sign Up</header>
                </div>
                <div className="two-forms">
                    <div className="input-box">
                        <input type="text" className="input-field" placeholder="First Name" />
                        <FaRegUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="text" className="input-field" placeholder="Last Name" />
                        <FaRegUser className="icon" />
                    </div>
                </div>
                
                <div className="input-box">
                    <input type="email" className="input-field" placeholder="Email" />
                    <FaRegEnvelope className="icon" />
                </div>
                
                <div className="input-box">
                    <input type="password" className="input-field" placeholder="Password" />
                    <IoLockClosedOutline className="icon" />
                </div>
                
                <div className="input-box">
                    <input type="submit" className="submit" value="Register" />
                </div>

                <div className="two-col">
                    <div className="one">
                        <input type="checkbox" id="register-check" />
                        <label htmlFor="register-check"> Remember me</label>
                    </div>
                    <div className="two">
                        <label><a href="#">Terms & conditions</a></label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp