import React, { useEffect, useState } from 'react'
import './Resources.css'
import Clock from "../src/images/clock.webp";
import ScrollUpButton from "react-scroll-up-button";
import axios from 'axios'
import logo from './images/Loader.svg';
import "./Classroom.css";

export default function Resources() {
  const [VideosMaterial, setVideosMaterial] = useState(null)
  const [NotesMaterial, setNotesMaterial] = useState(null)
  const [BooksMaterial, setBooksMaterial] = useState(null)
  const [ExtraMaterial, setExtraMaterial] = useState(null)
  const [video, setVideo] = useState(false)
  const [notes, setNotes] = useState(false)
  const [book, setBook] = useState(false)
  const [extra, setExtra] = useState(false)

  const [q, setQ] = useState("");
  const [q2, setQ2] = useState("");

  const [searchParam] = useState(["Message", "Subject_Code"]);
  const [searchParam2] = useState(["Message", "Subject_Code"]);

  useEffect(() => {
    Videos_list();
    Notes_list();
    Books_list();
    Extra_list();
  }, [])

  const Videos_list = () => {
    axios.get(`https://backend-clg-app.herokuapp.com/resources/videos/`)
      .then((data) => {
        setVideosMaterial(data.data)
      })
  }

  const Notes_list = () => {
    axios.get(`https://backend-clg-app.herokuapp.com/resources/notes/`)
      .then((data) => {
        setNotesMaterial(data.data)
      })
  }

  const Books_list = () => {
    axios.get(`https://backend-clg-app.herokuapp.com/resources/ebooks/`)
      .then((data) => {
        setBooksMaterial(data.data)
      })
  }

  const Extra_list = () => {
    axios.get(`https://backend-clg-app.herokuapp.com/resources/courses/`)
      .then((data) => {
        setExtraMaterial(data.data)
      })
  }

  function Videos() {
    if(localStorage.getItem('user12')) {
  return (
      <>
        <div className="card_contest_complete">
          {VideosMaterial ? VideosMaterial.map((item, ind) =>
            <div key={ind}>
              <div className="card_contest">
                <div className="card_contest-body"></div>
                <h5 className="date"><img src={Clock} className="Clock"></img> {(`${item.Post_Time}`).slice(0, 10)}, {new Date(`${item.Post_Time}`).toTimeString().slice(0, 8)}</h5>
                <h3 className="name_contest">{item.Message}</h3>
                <span className="flip_button"><a href={item.url}></a></span>
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

  function Notes() {
    return (
      <>
        <div className="card_contest_complete">
          {NotesMaterial ? NotesMaterial.map((item, ind) =>
            <div key={ind}>
              <div className="card_contest">
                <div className="card_contest-body"></div>
                <h5 className="date"><img src={Clock} className="Clock"></img> {(`${item.Post_Time}`).slice(0, 10)}, {new Date(`${item.Post_Time}`).toTimeString().slice(0, 8)}</h5>
                <h3 className="name_contest">{item.Message}</h3>
                <span className="flip_button"><a href={item.url}></a></span>
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

  function Books() {
    function search(items) {
      return items.filter((item) => {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          );
        });
      });
    }
    return (
      <>
        <div className="search-wrapper">
          <label htmlFor="search-form" className="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search with Book Name or Course Code"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </label>
        </div>
        <div className="card_contest_complete">
          {BooksMaterial ? search(BooksMaterial).map((item, ind) =>
            <div key={ind}>
              <div className="card_contest">
                <div className="card_contest-body"></div>
                <h5 className="date"><img src={Clock} className="Clock"></img> {(`${item.Post_Time}`).slice(0, 10)}, {new Date(`${item.Post_Time}`).toTimeString().slice(0, 8)}</h5>
                <h3 className="name_contest">{item.Message}</h3>
                <h5 className="card3-subTitle">{item.Subject_Code}</h5>
                <span className="flip_button"><a href={item.Url}></a></span>
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


  function Extra() {
    function search(items) {
      return items.filter((item) => {
        return searchParam2.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(q2.toLowerCase()) > -1
          );
        });
      });
    }
    return (
      <>
        <div className="search-wrapper">
          <label htmlFor="search-form" className="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search with Book Name or Course Code"
              value={q2}
              onChange={(e) => setQ2(e.target.value)}
            />
          </label>
        </div>
        <div className="card_contest_complete">
          {ExtraMaterial ? search(ExtraMaterial).map((item, ind) =>
            <div key={ind}>
              <div className="card_contest">
                <div className="card_contest-body"></div>
                <h5 className="date"><img src={Clock} className="Clock"></img> {(`${item.Post_Time}`).slice(0, 10)}, {new Date(`${item.Post_Time}`).toTimeString().slice(0, 8)}</h5>
                <h3 className="name_contest">{item.Message}</h3>
                <h5 className="card3-subTitle">{item.Subject_Code}</h5>
                <span className="flip_button"><a href={item.Url}></a></span>
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

  function Videos_True() {
    setVideo(true);
    setNotes(false);
    setBook(false);
    setExtra(false);
  }

  function Notes_True() {
    setVideo(false);
    setNotes(true);
    setBook(false);
    setExtra(false);
  }

  function Books_True() {
    setVideo(false);
    setNotes(false);
    setBook(true);
    setExtra(false);
  }

  function Extra_True() {
    setVideo(false);
    setNotes(false);
    setBook(false);
    setExtra(true);
  }

  return (
    <>
      <div className="bg_contest">
        <div className="buttons_resources">
          <div className="pagination2">
            <button onClick={() => Videos_True()} className="custom-btn-nav btn-nav">Videos</button>
            <button onClick={() => Notes_True()} className="custom-btn-nav btn-nav">Notes</button>
            <button onClick={() => Books_True()} className="custom-btn-nav btn-nav">E-Books</button>
            <button onClick={() => Extra_True()} className="custom-btn-nav btn-nav">Extra</button>
          </div>
        </div>
        <div>
          {video ? Videos() : null}
          {notes ? Notes() : null}
          {book ? Books() : null}
          {extra ? Extra() : null}
        </div>
      </div>
    </>
  )
}