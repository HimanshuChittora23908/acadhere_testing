import React, { useEffect, useState } from 'react'
import './Resources.css'
import Clock from "../src/images/clock.webp";
import ScrollUpButton from "react-scroll-up-button";
import axios from 'axios'
import logo from './images/Loader.svg';

export default function TimeTable() {
  var d = new Date();
  var n = d.getDay()

  const [A1Material, setA1Material] = useState(null)
  const [A2Material, setA2Material] = useState(null)
  const [A3Material, setA3Material] = useState(null)
  const [A4Material, setA4Material] = useState(null)
  const [B1Material, setB1Material] = useState(null)
  const [B2Material, setB2Material] = useState(null)
  const [a1, setA1] = useState(false)
  const [a2, setA2] = useState(false)
  const [a3, setA3] = useState(false)
  const [a4, setA4] = useState(false)
  const [b1, setB1] = useState(false)
  const [b2, setB2] = useState(false)

  useEffect(() => {
    A1_List();
    A2_List();
    A3_List();
    A4_List();
    B1_List();
    B2_List();
  }, [])

  const A1_List = () => {
    axios.get(`https://backend-clg-app.herokuapp.com/timetable?lb=A1&day=${n}`)
      .then((data) => {
        setA1Material(data.data)
      })
  }

  const A2_List = () => {
    axios.get(`https://backend-clg-app.herokuapp.com/timetable?lb=A2&day=${n}`)
      .then((data) => {
        setA2Material(data.data)
      })
  }

  const A3_List = () => {
    axios.get(`https://backend-clg-app.herokuapp.com/timetable?lb=A3&day=${n}`)
      .then((data) => {
        setA3Material(data.data)
      })
  }

  const A4_List = () => {
    axios.get(`https://backend-clg-app.herokuapp.com/timetable?lb=A4&day=${n}`)
      .then((data) => {
        setA4Material(data.data)
      })
  }

  const B1_List = () => {
    axios.get(`https://backend-clg-app.herokuapp.com/timetable?lb=B1&day=${n}`)
      .then((data) => {
        setB1Material(data.data)
      })
  }

  const B2_List = () => {   
    axios.get(`https://backend-clg-app.herokuapp.com/timetable?lb=B2&day=${n}`)
      .then((data) => {
        setB2Material(data.data)
      })
  }


  function A1() {
    if(localStorage.getItem('user12')) {
    return (
      <>
        <div className="card_contest_complete">
          {A1Material ? A1Material.map((item, ind) =>
            <div key={ind}>
              <div className="card_contest">
                <div className="card_contest-body"></div>
                <h5 className="date"><img src={Clock} className="Clock"></img> {item.Time}</h5>
                <h3 className="name_contest">{item.Subject}</h3>
                <h3 className="message">{item.Teacher}</h3>
                <span className="flip_button"><a href={"https://" + `${item.Link}`}></a></span>
              </div>
            </div>
          ) : <div style={{ display: 'flex', background: "transparent", width: '80vw', justifyContent: "center", alignItems: 'center' }}>
            <img style={{ width: '20vw', height: "20vw" }} src={logo} alt="Logo" />
          </div>}
        </div>
        <ScrollUpButton />
      </>
    )
  }
  else{
    return(
      <>
      <br />
      <button className="hover_button_classroom"><a href="/acadhere/classroom" className="linktoClassroom"><span></span><span></span><span></span><span></span>Go to Classroom to Login</a></button>
    </>
    )
  }
}

  function A2() {
    if(localStorage.getItem('user12')) {
    return (
      <>
        <div className="card_contest_complete">
          {A2Material ? A2Material.map((item, ind) =>
            <div key={ind}>
              <div className="card_contest">
                <div className="card_contest-body"></div>
                <h5 className="date"><img src={Clock} className="Clock"></img> {item.Time}</h5>
                <h3 className="name_contest">{item.Subject}</h3>
                <h3 className="message">{item.Teacher}</h3>
                <span className="flip_button"><a href={"https://" + `${item.Link}`}></a></span>
              </div>
            </div>
          ) : <div style={{ display: 'flex', background: "transparent", width: '80vw', justifyContent: "center", alignItems: 'center' }}>
            <img style={{ width: '20vw', height: "20vw" }} src={logo} alt="Logo" />
          </div>}
        </div>
        <ScrollUpButton />
      </>
    )}
    else{
      return(
        <>
        <br />
        <button className="hover_button_classroom"><a href="/acadhere/classroom" className="linktoClassroom"><span></span><span></span><span></span><span></span>Go to Classroom to Login</a></button>
      </>
      )
    }
  }

  function A3() {
    if(localStorage.getItem('user12')) {
    return (
      <>
        <div className="card_contest_complete">
          {A3Material ? A3Material.map((item, ind) =>
            <div key={ind}>
              <div className="card_contest">
                <div className="card_contest-body"></div>
                <h5 className="date"><img src={Clock} className="Clock"></img> {item.Time}</h5>
                <h3 className="name_contest">{item.Subject}</h3>
                <h3 className="message">{item.Teacher}</h3>
                <span className="flip_button"><a href={"https://" + `${item.Link}`}></a></span>
              </div>
            </div>
          ) : <div style={{ display: 'flex', background: "transparent", width: '80vw', justifyContent: "center", alignItems: 'center' }}>
            <img style={{ width: '20vw', height: "20vw" }} src={logo} alt="Logo" />
          </div>}
        </div>
        <ScrollUpButton />
      </>
    )}
    else{
      return(
        <>
        <br />
        <button className="hover_button_classroom"><a href="/acadhere/classroom" className="linktoClassroom"><span></span><span></span><span></span><span></span>Go to Classroom to Login</a></button>
      </>
      )
    }
  }

    function A4() {
      if(localStorage.getItem('user12')) {
      return (
        <>
          <div className="card_contest_complete">
            {A4Material ? A4Material.map((item, ind) =>
              <div key={ind}>
                <div className="card_contest">
                  <div className="card_contest-body"></div>
                  <h5 className="date"><img src={Clock} className="Clock"></img> {item.Time}</h5>
                <h3 className="name_contest">{item.Subject}</h3>
                <h3 className="message">{item.Teacher}</h3>
                <span className="flip_button"><a href={"https://" + `${item.Link}`}></a></span>
                </div>
              </div>
            ) : <div style={{ display: 'flex', background: "transparent", width: '80vw', justifyContent: "center", alignItems: 'center' }}>
              <img style={{ width: '20vw', height: "20vw" }} src={logo} alt="Logo" />
            </div>}
          </div>
          <ScrollUpButton />
        </>
        )}
      else{
        return(
          <>
          <br />
          <button className="hover_button_classroom"><a href="/acadhere/classroom" className="linktoClassroom"><span></span><span></span><span></span><span></span>Go to Classroom to Login</a></button>
        </>
        )
      }}

      function B1() {
        if(localStorage.getItem('user12')) {
        return (
          <>
            <div className="card_contest_complete">
              {B1Material ? B1Material.map((item, ind) =>
                <div key={ind}>
                  <div className="card_contest">
                    <div className="card_contest-body"></div>
                    <h5 className="date"><img src={Clock} className="Clock"></img> {item.Time}</h5>
                <h3 className="name_contest">{item.Subject}</h3>
                <h3 className="message">{item.Teacher}</h3>
                <span className="flip_button"><a href={"https://" + `${item.Link}`}></a></span>
                  </div>
                </div>
              ) : <div style={{ display: 'flex', background: "transparent", width: '80vw', justifyContent: "center", alignItems: 'center' }}>
                <img style={{ width: '20vw', height: "20vw" }} src={logo} alt="Logo" />
              </div>}
            </div>
            <ScrollUpButton />
          </>
        )}
        else{
          return(
            <>
            <br />
            <button className="hover_button_classroom"><a href="/acadhere/classroom" className="linktoClassroom"><span></span><span></span><span></span><span></span>Go to Classroom to Login</a></button>
          </>
          )
        }}

        function B2() {
          if(localStorage.getItem('user12')) {
          return (
            <>
              <div className="card_contest_complete">
                {B2Material ? B2Material.map((item, ind) =>
                  <div key={ind}>
                    <div className="card_contest">
                      <div className="card_contest-body"></div>
                      <h5 className="date"><img src={Clock} className="Clock"></img> {item.Time}</h5>
                <h3 className="name_contest">{item.Subject}</h3>
                <h3 className="message">{item.Teacher}</h3>
                <span className="flip_button"><a href={"https://" + `${item.Link}`}></a></span>
                    </div>
                  </div>
                ) : <div style={{ display: 'flex', background: "transparent", width: '80vw', justifyContent: "center", alignItems: 'center' }}>
                  <img style={{ width: '20vw', height: "20vw" }} src={logo} alt="Logo" />
                </div>}
              </div>
              <ScrollUpButton />
            </>
          )}
          else{
            return(
              <>
              <br />
              <button className="hover_button_classroom"><a href="/acadhere/classroom" className="linktoClassroom"><span></span><span></span><span></span><span></span>Go to Classroom to Login</a></button>
            </>
            )
          }}

  function A1_True() {
    setA1(true);
    setA2(false);
    setA3(false);
    setA4(false);
    setB1(false);
    setB2(false);
  }

  function A2_True() {
    setA1(false);
    setA2(true);
    setA3(false);
    setA4(false);
    setB1(false);
    setB2(false);
  }

  function A3_True() {
    setA1(false);
    setA2(false);
    setA3(true);
    setA4(false);
    setB1(false);
    setB2(false);
  }

  function A4_True() {
    setA1(false);
    setA2(false);
    setA3(false);
    setA4(true);
    setB1(false);
    setB2(false);
  }

  function B1_True() {
    setA1(false);
    setA2(false);
    setA3(false);
    setA4(false);
    setB1(true);
    setB2(false);
  }

  function B2_True() {
    setA1(false);
    setA2(false);
    setA3(false);
    setA4(false);
    setB1(false);
    setB2(true);
  }

  return (
    <>
      <div className="bg_contest">
        <div className="buttons_resources">
          <div className="pagination2">
            <button onClick={() => A1_True()} className="custom-btn-nav btn-nav">A1</button>
            <button onClick={() => A2_True()} className="custom-btn-nav btn-nav">A2</button>
            <button onClick={() => A3_True()} className="custom-btn-nav btn-nav">A3</button>
            <button onClick={() => A4_True()} className="custom-btn-nav btn-nav">A4</button>
            <button onClick={() => B1_True()} className="custom-btn-nav btn-nav">B1</button>
            <button onClick={() => B2_True()} className="custom-btn-nav btn-nav">B2</button>
          </div>
        </div>
        <div>
          {a1 ? A1() : null}
          {a2 ? A2() : null}
          {a3 ? A3() : null}
          {a4 ? A4() : null}
          {b1 ? B1() : null}
          {b2 ? B2() : null}
        </div>
      </div>
    </>
  )
}
