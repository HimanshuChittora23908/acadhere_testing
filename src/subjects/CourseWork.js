import React, { useEffect } from 'react';
import axios from 'axios';
import './Announcement.css';
import google from "../images/Google.png";

export const id =  window.location.href.slice(-12);

export default function CourseWork() {
  const [CourseWork, setCourseWork] = React.useState(null);

  useEffect(() => {
    let webApiUrl = `https://classroom.googleapis.com/v1/courses/${id}/courseWork`;
    let tokenStr = localStorage.getItem('user12');
    axios.get(webApiUrl, { headers: { "Authorization": `Bearer ${tokenStr}`}}).then(data => data.data.courseWork ? setCourseWork(data.data.courseWork) : setCourseWork(null));
  }, [])

  if (!CourseWork) {return (
    <div>Loading ...</div>
  )};

    return (
      <div className="bg">
        {CourseWork ? CourseWork.map((item,index) => {
          console.log(item)
        return (
        <div key={item.id}>
        <div className="card3">
            <div className="card3-body">
              <h3 className="card3-title font-weight-bold">{item.title}</h3>
              <h6 className="card3-subTitle">Type: {item.workType}</h6>
              <div className="button_bg">
              <button className="hover_button"><a href={item.alternateLink} className="card3-subTitle announcement_a"><span></span><span></span><span></span><span></span><img src={google} className="google"></img> Classroom</a></button>
              <div>{item.materials.map((material,index) => {
                return(
                  <div key={material.id}>
                    <h5>{material.driveFile.driveFile.title}</h5>
                    <a href={material.driveFile.driveFile.alternateLink} className="card3-subTitle"><img src={material.driveFile.driveFile.thumbnailUrl} className="img_course"></img></a>
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