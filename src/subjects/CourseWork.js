import React, { useEffect } from 'react';
import axios from 'axios';
import './Announcement.css';
import google from "../images/google.webp";
import ScrollUpButton from "react-scroll-up-button";
import logo from '../images/Loader.svg';

export const id = window.location.href.slice(-12);

export default function CourseWork() {
  const [CourseWork, setCourseWork] = React.useState(null);

  useEffect(() => {
    let webApiUrl = `https://classroom.googleapis.com/v1/courses/${id}/courseWork`;
    let tokenStr = localStorage.getItem('user12');
    axios.get(webApiUrl, { headers: { "Authorization": `Bearer ${tokenStr}` } }).then(data => data.data.courseWork ? setCourseWork(data.data.courseWork) : setCourseWork(null));
  }, [])

  if (!CourseWork) {
    return (
      <div style={{ display: 'flex', background: "transparent", width: '100vw', justifyContent: "center", alignItems: 'center' }}>
        <img style={{ width: '20vw', height: "20vw" }} src={logo} alt="Logo" />
      </div>
    )
  };

  return (
    <div className="bg">
      {CourseWork ? CourseWork.map((item, index) => {
        // console.log(item)
        return (
          <div key={item.id}>
            <div className="card3">
              <div className="card3-body">
                <h3 className="card3-title font-weight-bold">{item.title}</h3>
                <h6 className="card3-subTitle">Type: {item.workType}</h6>
                <div className="button_bg1">
                  <button className="hover_button_classroom"><a href={item.alternateLink} className="announcement_a"><span></span><span></span><span></span><span></span><img src={google} className="google"></img> Classroom</a></button>
                  <div>{item.materials ? item.materials.map((material, index) => {
                    return (
                      <div key={material.id}>
                        {material.driveFile ? <div><h5 className="material_title">{material.driveFile.driveFile.title}</h5>
                          <a href={material.driveFile.driveFile.alternateLink} className="card3-subTitle"><img src={material.driveFile.driveFile.thumbnailUrl} className="img_course" /></a></div> : <div><h5 className="material_title">{material.form.title}</h5><a href={material.form.formUrl} className="card3-subTitle"><img src={material.form.thumbnailUrl} className="img_course" /></a></div>}
                      </div>
                    )
                  }) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }) : window.location.replace("/acadhere/")}
      <ScrollUpButton />
    </div>
  )
}