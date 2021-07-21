import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const url = "https://classroom.googleapis.com/v1/courses/327456695244/announcements"

export const id =  window.location.href.slice(-12);

export default function Subject() {
  const [Announcement, setAnnouncement] = React.useState(null);

  useEffect(() => {
    let webApiUrl = `https://classroom.googleapis.com/v1/courses/${id}/announcements`;
    let tokenStr = localStorage.getItem('user');
    axios.get(webApiUrl, { headers: { "Authorization": `Bearer ${tokenStr}`}}).then(data => data.data.announcements ? setAnnouncement(data.data.announcements) : window.location.replace('/'));
  }, [])

  if (!Announcement) return null;

    return (
      <div>
        {Announcement ? Announcement.map((item) => {
          console.log(item)
        return (
        <div key={item.id}>
        <div className="card">
            <div className="card-body">
              <h3 className="card-title font-weight-bold">{item.title}</h3>
              <h5 className="card-subTitle">{item.text}</h5>
              <a href={"/announcement/"+item.id}><h6>Announcement</h6></a>
             </div>
        </div>
      </div>
      )}) : null}
      </div>
    )
}



/* {courseId: "327456695244", id: "352011875345", text: "Dear IIITians,\n              Please find the safet…for your mid-term exam preparation.\nAll the Best.", materials: Array(3), state: "PUBLISHED", …}
alternateLink: "https://classroom.google.com/c/MzI3NDU2Njk1MjQ0/p/MzUyMDExODc1MzQ1"
courseId: "327456695244"
creationTime: "2021-05-28T06:02:52.187Z"
creatorUserId: "103283608723765371319"
id: "352011875345"
materials: Array(3)
0: {driveFile: {…}}
1:
driveFile: {driveFile: {…}, shareMode: "VIEW"}
__proto__: Object
2:
driveFile:
driveFile:
alternateLink: "https://drive.google.com/file/d/1MXJTum3HgGMgS1A8CS24Cn1vcSzx7F4D/view?usp=drive_web"
id: "1MXJTum3HgGMgS1A8CS24Cn1vcSzx7F4D"
thumbnailUrl: "https://lh3.googleusercontent.com/m8YhWcWNMfmPdT0Oiug-pN-OKWA6XD7eVVmf1CBcBsn2Rc8-D7Q0taVt3_LNR-4QnBwlwdfg07SG5Yk=s200"
title: "Lecture 1.2. Engineering Ethics.pdf"
__proto__: Object
shareMode: "VIEW"
__proto__: Object
__proto__: Object
length: 3
__proto__: Array(0)
state: "PUBLISHED"
text: "Dear IIITians,\n              Please find the safety course materials for your mid-term exam preparation.\nAll the Best."
updateTime: "2021-05-28T06:02:51.153Z" */
