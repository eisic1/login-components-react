import React from "react";
import { FaRegUser, FaRegEnvelope } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import './signin.css';

function SignIn(){
    return(
        <div className={`form-box ${location.pathname === '/sign-in' ? 'active' : ''}`}>
            <div className="login-container" id="login">
                <div className="top">
                    <span>Don't have an account? <a href="#">Sign Up</a></span>
                    <header>Login</header>
                </div>
                
                <div className="input-box">
                    <input type="text" className="input-field" placeholder="Username or Email" />
                    <FaRegUser className="icon" />
                </div>
                
                <div className="input-box">
                    <input type="password" className="input-field" placeholder="Password" />
                    <IoLockClosedOutline className="icon" />
                </div>
                
                <div className="input-box">
                    <input type="submit" className="submit" value="Sign In" />
                </div>

                <div className="two-col">
                    <div className="one">
                        <input type="checkbox" id="login-check" />
                        <label htmlFor="login-check"> Remember me</label>
                    </div>
                    <div className="two">
                        <label><a href="#"> Forgot password?</a></label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn