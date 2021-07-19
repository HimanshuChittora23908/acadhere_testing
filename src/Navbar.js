import React, {useState} from 'react';
import { BrowserRouter as Router, Route, NavLink, useHistory} from "react-router-dom";
import './Navbar.css';
import icon from "../src/images/person_icon.svg";
import triangle_down from "../src/images/triangle-down.svg"

export default function Navbar() {

window.gapi.load("client:auth2", function () {
    window.gapi.auth2.init({ client_id: "1051900366163-uug3fp44cmthn7d2o9pmtprtjs9o53mo.apps.googleusercontent.com" });
});

  function loadClient() {
    window.gapi.client.setApiKey("AIzaSyCVj_naD42lS6dvS93bes74UfP8IKGeU3A");
    return window.gapi.client.load("https://classroom.googleapis.com/$discovery/rest?version=v1")
        .then(function () { console.log("GAPI client loaded for API"); },
            function (err) { console.error("Error loading GAPI client for API", err); });
}
function authenticate() {
    return window.gapi.auth2.getAuthInstance()
        .signIn({ scope: "https://www.googleapis.com/auth/classroom.courses.readonly https://www.googleapis.com/auth/classroom.coursework.me.readonly https://www.googleapis.com/auth/classroom.announcements.readonly https://www.googleapis.com/auth/classroom.student-submissions.me.readonly https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly" })
        .then(res => {
            console.log("Signin successfull!\n", res.getBasicProfile());
            console.log(res.getAuthResponse().id_token);
        })
        .catch(err => console.error(err));
}
function execute() {
    window.gapi.client.classroom.courses.list({
        "courseStates": [
            "ACTIVE"
        ]
    })
        .then(function (res) {
            let para = document.getElementById("render");
            para.innerHTML += res.body;
            console.log("Response", res.body);
        },
            function (err) { console.error("Execute error", err); });
      }

    return (
        <>
        <div className="navbar">
            <div>
                <button className="SignOut" onClick={() => {authenticate().then(loadClient().then(execute))}}>Login</button>
            </div>
            <div>
                <NavLink activeClassName="menu_active" className="right_buttons" exact to="./home">Main</NavLink>
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./about">About</NavLink>
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./team">Team</NavLink>
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./contest">Contest</NavLink>
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./notes">Notes</NavLink>
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./resources">Resources</NavLink>
                <NavLink activeClassName='menu_active' exact className="right_buttons" to="./classroom">Classroom</NavLink>
                <div className="dropdown">
                <img src={icon} alt="" className="icon dropbtn" />
                <img src={triangle_down} alt="" className="triangle_down dropbtn" />
                <div className="dropdown-content">
                  <a to="#">Profile</a>
                  <a to="#">Forms</a>
                  <a to="#">Settings</a>
                  <a to="#">Logout</a>
                </div>
                </div>
            </div>
        </div>
        <p id="render"></p>
        </>
    )
}
