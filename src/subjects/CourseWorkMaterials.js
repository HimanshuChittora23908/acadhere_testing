import React, { useEffect } from 'react';
import axios from 'axios';
import './Announcement.css';
import google from "../images/Google.png";

export const id =  window.location.href.slice(-12);

export default function CourseWorkMaterials() {
  const [CourseWorkMaterials, setCourseWorkMaterials] = React.useState(null);

  useEffect(() => {
    let webApiUrl = `https://classroom.googleapis.com/v1/courses/${id}/courseWorkMaterials`;
    let tokenStr = localStorage.getItem('user11');
    axios.get(webApiUrl, { headers: { "Authorization": `Bearer ${tokenStr}`}}).then(data => data.data.courseWorkMaterial ? setCourseWorkMaterials(data.data.courseWorkMaterial) : setCourseWorkMaterials(null));
  }, [])

  if (!CourseWorkMaterials) {return (
    <div>Loading ...</div>
  )};

    return (
      <div className="bg">
        {CourseWorkMaterials ? CourseWorkMaterials.map((item,index) => {
          console.log(item)
        return (
        <div key={item.id}>
        <div className="card3">
            <div className="card3-body">
              <h3 className="card3-title font-weight-bold">{item.title}</h3>
              <div className="button_bg">
              <button className="hover_button"><a href={item.alternateLink} className="card3-subTitle announcement_a"><span></span><span></span><span></span><span></span><img src={google} className="google"></img> Classroom</a></button>
              <h6 className="card3-subTitle">Created on: {new Date(`${item.creationTime}`).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}</h6>
              <h6 className="card3-subTitle">Updated on: {new Date(`${item.updateTime}`).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}</h6>
              <div>{item.materials.map((material) => {
                return(
                  <div key={material.id}>
                    <h5>{material.driveFile.driveFile.title}</h5>
                    <a href={material.driveFile.driveFile.alternateLink} className="card3-subTitle"><img class="img_course" src={material.driveFile.driveFile.thumbnailUrl}></img></a>
                  </div>
                )
              })}
             </div>
             </div>
        </div>
      </div>
      </div>
      )}) : window.location.replace("/acadhere_testing/")}
      </div>
    )
}