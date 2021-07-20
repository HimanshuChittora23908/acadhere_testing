import React from 'react';
import { useState } from 'react';
import "./Classroom.css";

export default function Classroom() {
  const [courses, setCourses] = useState(null);
  console.log(courses);

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
        })
        .catch(err => console.error(err));
}



function execute() {
  const fetchApi = async () => {
  window.gapi.client.classroom.courses.list({ "courseStates": ["ACTIVE"] }).then(data => setCourses(data.result.courses));
  }

    window.gapi.client.classroom.courses.list({
        "courseStates": [
            "ACTIVE"
        ]
    })
        .then(function (res) {
          fetchApi();
        },
            function (err) { console.error("Execute error", err); });
      }

  return (
    <div>
      <button className="login" onClick={() => {authenticate()}}>Signing with Google</button>
      <button className="load" onClick={() => {loadClient().then(execute)}}>Load the Google Classroom</button>

      {courses ? courses.map((item,index) => {return (
        <div className="col-md-4 col-10 mx-auto">
        <div className="card">
            <div className="card-body">
              <h5 className="card-title font-weight-bold">{item.name}</h5>
             </div>
        </div>
      </div>
      )}) : null}

    </div>
  )
}

