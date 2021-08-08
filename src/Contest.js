import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Contest.css'
import Clock from "../src/images/clock.webp";
import Hourglass from "../src/images/hourglass.webp";
import ScrollUpButton from "react-scroll-up-button";

const Contest = () => {
  const [contest, setContest] = useState(null)
  const [id,setId] = useState(1);

  useEffect(() => {
    getList();
  }, [])

  const getList = () => {
    axios.get(`https://backend-clg-app.herokuapp.com/cp_reminder?pg=${id}`)
    .then((data) => {
          setContest(data.data)
        })
}

const getMoreList = () => {
  setId(id+1);
  axios.get(`https://backend-clg-app.herokuapp.com/cp_reminder?pg=${id+1}`)
  .then((data) => {
        setContest(data.data)
      })
}

const getOldList = () => {
  setId(id-1);
  axios.get(`https://backend-clg-app.herokuapp.com/cp_reminder?pg=${id-1}`)
  .then((data) => {
        setContest(data.data)
      })
}

const nextprev = (res) => {
  if(res.maxPages == id && id == 1) {
      return null
  }
  else if (id == res.maxPages){
      return (<div className="pagination"><button onClick={getOldList} className="custom-btn-nav btn-nav">Previous</button></div>)
  }
  else if (id > 1 && id < res.maxPages){
      return(<div className="pagination">
          <button onClick={getOldList} className="custom-btn-nav btn-nav">Previous</button>
          <button onClick={getMoreList} className="custom-btn-nav btn-nav">Next</button>
          </div>)
  }
  else {
      return(<div className="pagination"><button onClick={getMoreList} className="custom-btn-nav btn-nav">Next</button></div>)
  }
}

function secondsToDhms(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600*24));
  var h = Math.floor(seconds % (3600*24) / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 60);
  
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
  }

  return (
    <>
    <div className="bg_contest">
      <div className="card_contest_complete">
      {contest ? contest.contest.map((item,ind) =>
      <div key={ind}>
        <div className="card_contest">
        <div className="card_contest-body"></div>
        <h5 className="date"><img src={Clock} className="Clock"></img> {(`${item.start_time}`).slice(0,10)}, {new Date(`${item.start_time}`).toTimeString().slice(0,8)}</h5>
        <h3 className="name_contest">{item.event_name}</h3>
        {item.duration<86400 ? <h5 className="time_contest"><img src={Hourglass} className="Hourglass"></img> {new Date(`${item.duration}`*1000).toISOString().substr(11,8)}</h5> : <h5 className="time_contest"><img src={Hourglass} className="Hourglass" />{secondsToDhms(`${item.duration}`)}</h5>}
        <h6 className="contest_website"><a href={"https://"+`${item.resource_website}`} className="contest_url">{item.resource_website}</a></h6>
        <span className="flip_button"><a href={item.contest_url}></a></span>
        </div>
      </div>
      ) : "Loading ..."}
      </div>
    {contest ? nextprev(contest) : null}
    <ScrollUpButton />
    </div>
    </>
  )
}

export default Contest;

