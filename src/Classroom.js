import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./Classroom.css";
import Bg from '../src/Bg_array';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import google from "./images/Google.png";
import ScrollUpButton from "react-scroll-up-button";

export default function Classroom() {
  const [courses, setCourses] = useState(null);

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
          if (res) {
            console.log(res.Zb);
            localStorage.setItem('user12',res.Zb.access_token);
          }
        })
        .catch(err => console.error(err));
}



function execute() {
  const fetchApi = async () => {
  window.gapi.client.classroom.courses.list({ "courseStates": ["ACTIVE"] }).then(data => setCourses(data.result.courses));
  }

    window.gapi.client.classroom.courses.list({"courseStates": ["ACTIVE"]})
        .then(function () {
          fetchApi();
        },
            function (err) { console.error("Execute error", err); });
      }

      useEffect(() => {
        function test(){
            let webApiUrl = 'https://classroom.googleapis.com/v1/courses';
            let tokenStr = localStorage.getItem('user12');
            axios.get(webApiUrl,{ headers: { "Authorization": `Bearer ${tokenStr}`}}).then(data => setCourses(data.data.courses));
        }
        if(localStorage.getItem('user12'))
        test();
        console.log(localStorage.getItem('user12'));
      }, [])

      function bg_image(){
        for (let i = 0; i < Bg.length; i++) {
            var back = document.getElementsByClassName("card").style.backgroundImage = `url('${Bg[i]}')`;
          }
        }



  return (
    <div className="bg_class">
      <div className="google_button">
      <button className="login neumorphic variation" onClick={() => {authenticate()}}><span><strong>Signing with <img src={google} className="google2"></img></strong></span></button>
      <button className="load neumorphic variation" onClick={() => {loadClient().then(execute)}}><span><strong>Load Google Classroom</strong></span></button>
      </div>
      <div className="card_classroom_complete">
      {courses ? courses.map((item,index) => {
        return (
        <div key={item.id}>
        <div className="card">
            <div className="card-body">
              <h3 className="card-title font-weight-bold">{item.name}</h3>
              <h5 className="card-subTitle">{item.section}</h5>
              <div className="button_bg">
              <button className="hover_button"><a href={"/acadhere_testing/announcement/"+item.id} className="announcement_a"><span></span><span></span><span></span><span></span>Announcement</a></button>
              <button className="hover_button"><a href={"/acadhere_testing/coursework/"+item.id} className="announcement_a"><span></span><span></span><span></span><span></span>Class Work</a></button>
              <button className="hover_button"><a href={"/acadhere_testing/materials/"+item.id} className="announcement_a"><span></span><span></span><span></span><span></span>Material</a></button>
              </div>
             </div>
        </div>
      </div>
      )}) : "Loading ..."}
      </div>
      <ScrollUpButton />
      </div>
  )
}