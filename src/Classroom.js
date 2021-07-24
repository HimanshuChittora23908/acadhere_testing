import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./Classroom.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

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
            localStorage.setItem('user4',res.Zb.access_token);
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
            let tokenStr = localStorage.getItem('user4');
            axios.get(webApiUrl,{ headers: { "Authorization": `Bearer ${tokenStr}`}}).then(data => setCourses(data.data.courses));
        }
        if(localStorage.getItem('user4'))
        test();
        console.log(localStorage.getItem('user4'));
      }, [])



  return (
    <div className="bg_class">
      <button className="login" onClick={() => {authenticate()}}>Signing with Google</button>
      <button className="load" onClick={() => {loadClient().then(execute)}}>Load the Google Classroom</button>
      {courses ? courses.map((item,index) => {
        return (
        <div key={item.id}>
        <div className="card">
            <div className="card-body">
              <h3 className="card-title font-weight-bold">{item.name}</h3>
              <h5 className="card-subTitle">{item.section}</h5>
              <a href={"/announcement/"+item.id}><h6>Announcement</h6></a>
              <a href={"/coursework/"+item.id}><h6>Class Work</h6></a>
              <a href={"/materials/"+item.id}><h6>Material</h6></a>
             </div>
        </div>
      </div>
      )}) : "Loading ..."}
      </div>
  )
}