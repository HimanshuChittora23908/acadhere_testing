import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./Classroom.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import google from "./images/google.webp";
import ScrollUpButton from "react-scroll-up-button";
import logo from './images/Loader.svg';

export default function Classroom() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);

  window.gapi.load("client:auth2", function () {
    window.gapi.auth2.init({ client_id: process.env.REACT_APP_CLIENT_ID });
  });

  function loadClient() {
    window.gapi.client.setApiKey(process.env.REACT_APP_API_KEY);
    return window.gapi.client.load("https://classroom.googleapis.com/$discovery/rest?version=v1")
      .then(function () {},
        function (err) {});
  }

  function authenticate() {
    return window.gapi.auth2.getAuthInstance()
      .signIn({ scope: "https://www.googleapis.com/auth/classroom.courses.readonly https://www.googleapis.com/auth/classroom.coursework.me.readonly https://www.googleapis.com/auth/classroom.announcements.readonly https://www.googleapis.com/auth/classroom.student-submissions.me.readonly https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly" })
      .then(res => {
        if (res) {
          // console.log(res.Zb);
          setToken(res.Zb.access_token)
          localStorage.setItem('user12', res.Zb.access_token);
        }
      })
      .catch(err => console.error(err));
  }

   // localStorage.setItem('user12', null)
  //  console.log(token);

  function execute() {
    setLoading(true);
    const fetchApi = async () => {
      window.gapi.client.classroom.courses.list({ "courseStates": ["ACTIVE"] }).then(data => setCourses(data.result.courses));
    }
    window.gapi.client.classroom.courses.list({ "courseStates": ["ACTIVE"] })
      .then(function () {
        fetchApi();
      },
        function (err) { console.error("Execute error", err); });
  }

  useEffect(() => {
    if (localStorage.getItem('user12'))
      setToken(localStorage.getItem('user12'))
  }, [])

  useEffect(() => {
    function test() {
      
      let webApiUrl = 'https://classroom.googleapis.com/v1/courses';
      axios.get(webApiUrl, { headers: { "Authorization": `Bearer ${token}` } }).then(data => setCourses(data.data.courses));
    }
    if (localStorage.getItem('user12'))
      test();
  }, [token])

  return (
    <div className="bg_class">
      <div className="google_button">
        {!token 
          ? <button className="login neumorphic variation" onClick={() => { authenticate() }}><span><strong>Signing with <img src={google} className="google2"></img></strong></span></button>
          : <button className="load neumorphic variation" onClick={() => { loadClient().then(execute) }}><span><strong>Load Google Classroom</strong></span></button>}
      </div>
      <div className="card_classroom_complete">
        {courses ? courses.map((item, index) => {
          return (
            <div key={item.id}>
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title font-weight-bold name_classroom">{item.name}</h3>
                  <h5 className="card-subTitle section_classroom">{item.section}</h5>
                  <div className="button_bg">
                    <button className="hover_button_classroom"><a href={"/acadhere/announcement/" + item.id} className="announcement_a"><span></span><span></span><span></span><span></span>Announcement</a></button>
                    <button className="hover_button_classroom"><a href={"/acadhere/coursework/" + item.id} className="announcement_a"><span></span><span></span><span></span><span></span>Class Work</a></button>
                    <button className="hover_button_classroom"><a href={"/acadhere/materials/" + item.id} className="announcement_a"><span></span><span></span><span></span><span></span>Material</a></button>
                  </div>
                </div>
              </div>
            </div>
          )
        }) : token  ? <div style={{ display: 'flex', background: "transparent", width: '85vw', justifyContent: "center", alignItems: 'center' }}>
          <img style={{ width: '20vw', height: "20vw" }} src={logo} alt="Logo" />
        </div> : null}
      </div>
      <ScrollUpButton />
    </div>
  )
}