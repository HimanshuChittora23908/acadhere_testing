import React, {useState} from 'react';
import { BrowserRouter as Router, Route, NavLink, useHistory} from "react-router-dom";
import './Navbar.css';
import icon from "../src/images/person_icon.svg";
import triangle_down from "../src/images/triangle-down.svg"

export default function Navbar() {
    const logout = () => {
        localStorage.removeItem("user12")
        window.location.replace("./home")
    };
    return (
        <>
        <div className="navbar_big">
            <div>
                <button className="logo"><NavLink exact className="logo_link" to="./home">AcadHERE</NavLink></button>
            </div>
            <div className="rightside_navbar">
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./about">About</NavLink>
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./team">Team</NavLink>
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./contest">Coding Contests</NavLink>
                <NavLink activeClassName="menu_active" exact className="right_buttons" to="./hackathon">Hackathons</NavLink>
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./noticeboard">Notice Board</NavLink>
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./resources">Resources</NavLink>
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./classroom">Classroom</NavLink>
                <div className="dropdown">
                <img src={icon} alt="" className="icon dropbtn" />
                <img src={triangle_down} alt="" className="triangle_down dropbtn" />
                <div className="dropdown-content">
                  <a href="./contactUs">Contact Us</a>
                  <a href="faq">FAQ</a>
                  {localStorage.getItem('user12') ? <a className="logout" onClick={logout}>Logout</a> : null}
                </div>
                </div>
            </div>
        </div>

        <div class="mobile-container">
        <div class="container">
        <nav class="navbar navbar-light light-blue lighten-4">
        <a class="navbar-brand" href="./home">AcadHERE</a>
        <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i class="fas fa-bars fa-1x"></i></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent1">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active"><a class="nav-link" href="./home">Home</a></li>
        <li class="nav-item active"><a class="nav-link" href="./about">About</a></li>
        <li class="nav-item active"><a class="nav-link" href="./team">Team</a></li>
        <li class="nav-item active"><a class="nav-link" href="./contest">Coding Contests</a></li>
        <li class="nav-item active"><a class="nav-link" href="./hackathon">Hackathons</a></li>
        <li class="nav-item active"><a class="nav-link" href="./noticeboard">Notice Board</a></li>
        <li class="nav-item active"><a class="nav-link" href="./resource">Resource</a></li>
        <li class="nav-item active"><a class="nav-link" href="./classroom">Classroom</a></li>
        <li class="nav-item active"><a class="nav-link" href="./contactUs">Contact Us</a></li>
        <li class="nav-item active"><a class="nav-link" href="./faq">FAQ</a></li>
        <li class="nav-item active"><a class="nav-link" href="./classroom">Logout</a></li>
        </ul>
        </div>
        </nav>
        </div>
        </div>
        </>
    )
}
