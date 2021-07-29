import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Contest.css'
import Clock from "../src/images/Clock.png";
import Hourglass from "../src/images/Hourglass.png";

const Contest = () => {
  const [contest, setContest] = useState(null)
  const [id,setId] = useState(1);

  useEffect(() => {
    getList();
  }, [])

  const getList = async () => {
    axios.get(`https://backend-clg-app.herokuapp.com/cp_reminder?pg=${id}`)
    .then((data) => {
          setContest(data.data)
        })
}

const getMoreList = async () => {
  setId(id+1);
  axios.get(`https://backend-clg-app.herokuapp.com/cp_reminder?pg=${id+1}`)
  .then((data) => {
        setContest(data.data)
      })
}

const getOldList = async () => {
  setId(id-1);
  axios.get(`https://backend-clg-app.herokuapp.com/cp_reminder?pg=${id-1}`)
  .then((data) => {
        setContest(data.data)
      })
}

if(id == 1) {
  return (
    <div className="bg_contest">
      {contest ? contest.contest.map((item,ind) => 
      <div key={ind}>
        <div className="card_contest">
        <div className="card_contest-body"></div>
        <h2>{item.event_name}</h2>
        <h5><img src={Clock} className="Clock"></img> {(`${item.start_time}`).slice(0,15)}, {new Date(`${item.start_time}`).toTimeString().slice(0,8)}</h5>
        <h5><img src={Hourglass} className="Hourglass"></img> {new Date(`${item.duration}`*1000).toISOString().substr(11,8)}</h5>
        <h6 className="contest_website"><a href={"https://"+`${item.resource_website}`} className="contest_url">{item.resource_website}</a></h6>
        <span className="flip_button"><a href={item.contest_url}></a></span>
        </div>
      </div>
      ) : null}
      <button onClick={getMoreList} className="custom-btn-nav btn-nav">Next</button>
    </div>
  )
}

if(id == contest.maxPages) {
  return(
    <div className="bg_contest">
  {contest ? contest.contest.map((item,ind) => 
  <div key={ind}>
    <div className="card_contest">
    <div className="card_contest-body"></div>
    <h2>{item.event_name}</h2>
    <h5><img src={Clock} className="Clock"></img> {(`${item.start_time}`).slice(0,15)}, {new Date(`${item.start_time}`).toTimeString().slice(0,8)}</h5>
    <h5><img src={Hourglass} className="Hourglass"></img> {new Date(`${item.duration}`*1000).toISOString().substr(11,8)}</h5>
    <h6 className="contest_website"><a href={"https://"+`${item.resource_website}`} className="contest_url">{item.resource_website}</a></h6>
    <span className="flip_button"><a href={item.contest_url}></a></span>
    </div>
  </div>
  ) : null}
  <button onClick={getOldList} className="custom-btn-nav btn-nav">Previous</button>
</div>
  )
}
if(id > 1 && id < contest.maxPages){
  return (
    <div className="bg_contest">
      {contest ? contest.contest.map((item,ind) => 
      <div key={ind}>
        <div className="card_contest">
        <div className="card_contest-body"></div>
        <h2>{item.event_name}</h2>
        <h5><img src={Clock} className="Clock"></img> {(`${item.start_time}`).slice(0,15)}, {new Date(`${item.start_time}`).toTimeString().slice(0,8)}</h5>
        <h5><img src={Hourglass} className="Hourglass"></img> {new Date(`${item.duration}`*1000).toISOString().substr(11,8)}</h5>
        <h6 className="contest_website"><a href={"https://"+`${item.resource_website}`} className="contest_url">{item.resource_website}</a></h6>
        <span className="flip_button"><a href={item.contest_url}></a></span>
        </div>
      </div>
      ) : null}
      <div className="pagination">
      <button onClick={getOldList} className="custom-btn-nav btn-nav">Previous</button>
      <button onClick={getMoreList} className="custom-btn-nav btn-nav">Next</button>
      </div>
    </div>
  )
}
}

export default Contest;

