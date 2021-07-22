import React, { useEffect } from 'react';
import axios from 'axios';

const url = "https://classroom.googleapis.com/v1/courses/327456695244/announcements"

export const id =  window.location.href.slice(-12);

export default function Subject() {
  const [Announcement, setAnnouncement] = React.useState(null);

  useEffect(() => {
    let webApiUrl = `https://classroom.googleapis.com/v1/courses/${id}/announcements`;
    let tokenStr = localStorage.getItem('user');
    axios.get(webApiUrl, { headers: { "Authorization": `Bearer ${tokenStr}`}}).then(data => data.data.announcements ? setAnnouncement(data.data.announcements) : setAnnouncement(null));
  }, [])

  if (!Announcement) {return (
    <div>Loading ...</div>
  )};

    return (
      <div>
        {Announcement ? Announcement.map((item) => {
          console.log(item)
        return (
        <div key={item.id}>
        <div className="card2">
            <div className="card2-body">
              <h3 className="card2-title font-weight-bold">{item.title}</h3>
              <h5 className="card2-subTitle">{item.text}</h5>
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
