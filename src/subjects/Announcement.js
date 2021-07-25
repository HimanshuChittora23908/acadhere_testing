import React, { useEffect } from 'react';
import axios from 'axios';
import './Announcement.css';
import google from "../images/Google.png";

export const id =  window.location.href.slice(-12);

export default function Announcement() {
  const [Announcement, setAnnouncement] = React.useState(null);

  useEffect(() => {
    let webApiUrl = `https://classroom.googleapis.com/v1/courses/${id}/announcements`;
    let tokenStr = localStorage.getItem('user8');
    axios.get(webApiUrl, { headers: { "Authorization": `Bearer ${tokenStr}`}}).then(data => data.data.announcements ? setAnnouncement(data.data.announcements) : setAnnouncement(null));
  }, [])

  if (!Announcement) {return (
    <div>Loading ...</div>
  )};

    return (
      <div className="bg">
        {Announcement ? Announcement.map((item) => {
          console.log(item)
        return (
        <div key={item.id}>
        <div className="card3">
            <div className="card3-body">
              <h3 className="card3-title font-weight-bold">{item.title}</h3>
              <h5 className="card3-subTitle">{item.text}</h5>
              <div className="button_bg">
              <button className="hover_button"><a href={item.alternateLink} className="card3-subTitle announcement_a"><span></span><span></span><span></span><span></span><img src={google} className="google"></img> Classroom</a></button>
              </div>
             </div>
        </div>
      </div>
      )}) : window.location.replace("/")}
      </div>
    )
}
