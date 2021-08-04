import React, {useState} from 'react';
import { BrowserRouter as Router, Route, NavLink, useHistory} from "react-router-dom";
import './Navbar.css';
import icon from "../src/images/person_icon.svg";
import triangle_down from "../src/images/triangle-down.svg"

export default function Navbar() {

    function myFunction() {
        var x = document.getElementsByClassName("right_buttons");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }

    return (
        <>
        <div className="navbar">
            <div>
                <button className="logo">AcadHERE</button>
            </div>
            <div>
                <NavLink activeClassName="menu_active" className="right_buttons" exact to="./home">Main</NavLink>
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./about">About</NavLink>
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./team">Team</NavLink>
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./contest">Contest</NavLink>
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./noticeboard">Notice Board</NavLink>
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./resources">Resources</NavLink>
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./classroom">Classroom</NavLink>
                <div className="dropdown">
                <img src={icon} alt="" className="icon dropbtn" />
                <img src={triangle_down} alt="" className="triangle_down dropbtn" />
                <div className="dropdown-content">
                  <a href="#">Profile</a>
                  <a href="#">Forms</a>
                  <a href="#">Settings</a>
                  <a href="#">Logout</a>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
