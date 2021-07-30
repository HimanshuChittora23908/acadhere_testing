import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Contest.css'
import Clock from "../src/images/Clock.png";

const Contest = () => {
  const [contest, setContest] = useState(null)
  const [id,setId] = useState(1);

  useEffect(() => {
    getList();
  }, [])

  const getList = async () => {
    axios.get(`https://backend-clg-app.herokuapp.com/notice_board?pg=${id}`,{headers: {'email': '2020kucp1023@iiitkota.ac.in', "Access-Control-Allow-Origin": "*"}})
    .then((data) => {
          setContest(data.data)
        })
}

const getMoreList = async () => {
  setId(id+1);
  axios.get(`https://backend-clg-app.herokuapp.com/notice_board?pg=${id+1}`,{headers: {'email': '2020kucp1023@iiitkota.ac.in', "Access-Control-Allow-Origin": "*"}})
  .then((data) => {
        setContest(data.data)
      })
}

const getOldList = async () => {
  setId(id-1);
  axios.get(`https://backend-clg-app.herokuapp.com/notice_board?pg=${id-1}`,{headers: {'email': '2020kucp1023@iiitkota.ac.in', "Access-Control-Allow-Origin": "*"}})
  .then((data) => {
        setContest(data.data)
      })
}

const nextprev = (res) => {
  if(res.maxPages == id && id == 1) {
      return null
  }
  else if (res.maxPages == id){
      return (<button onClick={getOldList} className="custom-btn-nav btn-nav">Previous</button>)
  }
  else if (id > 1 && id < res.maxPages){
      return(<div className="pagination">
          <button onClick={getOldList} className="custom-btn-nav btn-nav">Previous</button>
          <button onClick={getMoreList} className="custom-btn-nav btn-nav">Next</button>
          </div>)
  }
  else {
      return(<button onClick={getMoreList} className="custom-btn-nav btn-nav">Next</button>)
  }
}

  return (
    <div className="bg_contest">
      {contest ? contest.messages.map((item,ind) => 
      <div key={ind}>
        <div className="card_contest">
        <div className="card_contest-body"></div>
        <h2>{item.Message}</h2>
        <h5><img src={Clock} className="Clock"></img>{item.Post_Time}</h5>
        <h6 className="contest_website">{item.Status}</h6>
        </div>
      </div>
      ) : null}
      {contest ? nextprev(contest) : null}
    </div>
  )
      }
export default Contest;
