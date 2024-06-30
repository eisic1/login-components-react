import React from "react";
import './navigation.css';
import { FiMenu } from "react-icons/fi";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NavigationBar(){

    return(<div className="wrapper">
        <nav className="nav">
            <div className="nav-logo">
                LOGO .
            </div>
            <div className="nav-menu">
                <ul>
                    <li><a href="#" className="link active">Home</a></li>
                    <li><a href="#" className="link">Blog</a></li>
                    <li><a href="#" className="link">Services</a></li>
                    <li><a href="#" className="link">About</a></li>
                </ul>
            </div>
            <div className="nav-button">
                <Link to="/sign-in"><button className="btn white-btn" id="loginBtn">Sign In</button></Link>
                <Link to="/sign-up"><button className="btn" id="registerBtn">Sign Up</button></Link>
            </div>
            <div className="nav-menu-btn">
                <FiMenu />
            </div>
        </nav>
        {/*           Form box              */}
        

            {/*   login form  <SignIn /> */}
            

            {/*   registration form  <SignUp /> */}
            
    </div>);
}

export default NavigationBar