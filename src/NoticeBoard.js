import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Contest.css'
import Clock from "../src/images/clock.webp";
import ScrollUpButton from "react-scroll-up-button";
import logo from './images/Loader.gif';

const Contest = () => {
  const [contest, setContest] = useState(null)
  const [id, setId] = useState(1);

  useEffect(() => {
    getList();
  }, [])

  const getList = async () => {
    axios.get(`https://backend-clg-app.herokuapp.com/notice_board?pg=${id}`, { headers: { 'email': '2020kucp1023@iiitkota.ac.in', 'Access-Control-Allow-Origin': '*' } })
      .then((data) => {
        setContest(data.data)
      })
  }

  const getMoreList = async () => {
    setId(id + 1);
    axios.get(`https://backend-clg-app.herokuapp.com/notice_board?pg=${id + 1}`, { headers: { 'email': '2020kucp1023@iiitkota.ac.in', 'Access-Control-Allow-Origin': '*' } })
      .then((data) => {
        setContest(data.data)
      })
  }

  const getOldList = async () => {
    setId(id - 1);
    axios.get(`https://backend-clg-app.herokuapp.com/notice_board?pg=${id - 1}`, { headers: { 'email': '2020kucp1023@iiitkota.ac.in', 'Access-Control-Allow-Origin': '*' } })
      .then((data) => {
        setContest(data.data)
      })
  }

  const nextprev = (res) => {
    if (res.maxPages == id && id == 1) {
      return null
    }
    else if (res.maxPages == id) {
      return (<button onClick={getOldList} className="custom-btn-nav btn-nav">Previous</button>)
    }
    else if (id > 1 && id < res.maxPages) {
      return (<div className="pagination">
        <button onClick={getOldList} className="custom-btn-nav btn-nav">Previous</button>
        <button onClick={getMoreList} className="custom-btn-nav btn-nav">Next</button>
      </div>)
    }
    else {
      return (<button onClick={getMoreList} className="custom-btn-nav btn-nav">Next</button>)
    }
  }

  return (
    <div className="bg_contest">
      <div className="card_contest_complete">
        {contest ? contest.messages.map((item, ind) =>
          <div key={ind}>
            <div className="card_contest">
              <div className="card_contest-body"></div>
              <h5 className="date"><img src={Clock} className="Clock"></img> {new Date(`${item.Post_Time}`).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</h5>
              <h6 className="Status">{item.Status}</h6>
              <h3 className="name_contest">{item.Heading}</h3>
              <h5 className="message">{item.Message}</h5>
              {item.Link ? <h6 className="contest_website"><a href={"https://" + `${item.Link}`} className="contest_url">{item.Link}</a></h6> : null}
              {item.Other ? <h6 className="contest_website"><a href={"https://" + `${item.Other}`} className="contest_url">{item.Other}</a></h6> : null}
            </div>
          </div>
        ) : <div style={{ display: 'flex', background: "transparent", width: '80vw', justifyContent: "center", alignItems: 'center' }}>
          <img style={{ width: '20vw', height: "20vw" }} src={logo} alt="Logo" />
        </div>}
      </div>
      {contest ? nextprev(contest) : null}
      <ScrollUpButton />
    </div>
  )
}
export default Contest;
