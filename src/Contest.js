import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Contest.css'
import Clock from "../src/images/Clock.png";
import Hourglass from "../src/images/Hourglass.png";

const Contest = () => {
  const [contest, setContest] = useState(null)

  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    axios.get("https://backend-clg-app.herokuapp.com/cp_reminder?pg=1")
    .then((data) => {
          setContest(data.data)
        })
}



  return (
    <div className="bg_contest">
      {contest ? contest.contest.map((item,ind) => 
      <div key={ind}>
        <div className="card_contest">
        <div className="card_contest-body"></div>
        <h2>{item.event_name}</h2>
        <h5><img src={Clock} className="Clock"></img> {(`${item.start_time}`).slice(0,15)}, {new Date(`${item.start_time}`).toTimeString().slice(0,8)}</h5>
        <h5><img src={Hourglass} className="Hourglass"></img> {new Date(`${item.duration}`*1000).toISOString().substr(11,8)}</h5>
        <h6 className="contest_website">{item.resource_website}</h6>
        <span className="flip_button"><a href={item.contest_url}></a></span>
        </div>
      </div>
      ) : null}
    </div>
  )
}

export default Contest;

