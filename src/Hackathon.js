import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Contest.css'
import ScrollUpButton from "react-scroll-up-button";
import logo from './images/Loader.svg';

const Hackathon = () => {
  const [contest, setContest] = useState(null)
  const [id, setId] = useState(1);

  useEffect(() => {
    getList();
  }, [])

  const getList = () => {
    axios.get(`https://backend-clg-app.herokuapp.com/hackathons?pg=${id}`)
      .then((data) => {
        setContest(data.data)
      })
  }

  const getMoreList = () => {
    setId(id + 1);
    axios.get(`https://backend-clg-app.herokuapp.com/hackathons?pg=${id + 1}`)
      .then((data) => {
        setContest(data.data)
      })
  }

  const getOldList = () => {
    setId(id - 1);
    axios.get(`https://backend-clg-app.herokuapp.com/hackathons?pg=${id - 1}`)
      .then((data) => {
        setContest(data.data)
      })
  }

  const nextprev = (res) => {
    if (res.maxPages == id && id == 1) {
      return null
    }
    else if (id == res.maxPages) {
      return (<div className="pagination"><button onClick={getOldList} className="custom-btn-nav btn-nav">Previous</button></div>)
    }
    else if (id > 1 && id < res.maxPages) {
      return (<div className="pagination">
        <button onClick={getOldList} className="custom-btn-nav btn-nav">Previous</button>
        <button onClick={getMoreList} className="custom-btn-nav btn-nav">Next</button>
      </div>)
    }
    else {
      return (<div className="pagination"><button onClick={getMoreList} className="custom-btn-nav btn-nav">Next</button></div>)
    }
  }

  return (
    <>
      <div className="bg_contest">
        <div className="card_contest_complete">
          {contest ? contest.contest.map((item, ind) =>
            <div key={ind}>
              <div className="card_contest">
                <div className="card_contest-body"></div>
                <h5 className="date">From: {(`${item.reg_start}`).slice(0, 10)}, {new Date(`${item.reg_start}`).toTimeString().slice(0, 8)} <br /> To: {(`${item.reg_end}`).slice(0, 10)}, {new Date(`${item.reg_end}`).toTimeString().slice(0, 8)}</h5>
                <h3 className="name_contest">{item.name}</h3>
                <h6 className="contest_website"><a href={"https://" + `${item.host}`} className="contest_url">{item.host}</a></h6>
                <span className="flip_button"><a href={item.site}></a></span>
              </div>
            </div>
          ) : <div style={{ display: 'flex', background: "transparent", width: '80vw', justifyContent: "center", alignItems: 'center' }}>
            <img style={{ width: '20vw', height: "20vw" }} src={logo} alt="Logo" />
          </div>}
        </div>
        {contest ? nextprev(contest) : null}
        <ScrollUpButton />
      </div>
    </>
  )
}

export default Hackathon;