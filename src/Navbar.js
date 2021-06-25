import React, {useState} from 'react';
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import './Navbar.css';
import icon from "../src/images/person_icon.svg";
import triangle_down from "../src/images/triangle-down.svg"

export default function Navbar() {

    return (
        <div>
        <>
        <div class="navbar">
            <div>
                <button className="SignOut">Logout</button>
            </div>
            <div>
                <NavLink activeClassName="menu_active" className="right_buttons" exact to="./home">Main</NavLink>
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./about">About</NavLink>
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./team">Team</NavLink>
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./contest">Contest</NavLink>
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./notes">Notes</NavLink>
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./resources">Resources</NavLink>
                <div class="dropdown">
                <img src={icon} alt="" className="icon dropbtn" />
                <img src={triangle_down} alt="" className="triangle_down dropbtn" />
                <div class="dropdown-content">
                  <a href="#">Profile</a>
                  <a href="#">Settings</a>
                  <a href="#">Logout</a>
                </div>
                </div>
            </div>
        </div>
        </>
        </div>
    )
}
