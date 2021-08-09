import React, { useEffect, useState } from 'react';
import './Home.css';
import arrow_right from "../src/images/arrow-right.svg";
import triangle_right from "../src/images/triangle_right.svg";
import code_img from "../src/images/code_img.svg";
import about_quote from "../src/images/about_quote.svg";
import notes_book from "../src/images/notes_book.svg";
import classroom from "../src/images/Google_Classroom_Logo.webp"
import ScrollUpButton from "react-scroll-up-button";
import logo from './images/Ripple.svg';

export default function Home() {
  const [Load, setLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 1000);
  }, [])

  if (Load)
    return <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100vw", height: '100vh' }}>
      <img src={logo} alt="Logo" />
    </div>
  return (
    <>
    <div className="Home">
      <div className="head_name">Acad<p className="green_color">HERE</p></div>
      <br />
      <br />
      <div className="tagline">Destination for various type of <p className="black_color">academic support</p> !!!</div>
    </div>
    <div>
      <div className="rec">
    <p className="rectangle1"></p>
    <p className="rectangle2"></p>
    <p className="rectangle3"></p>
    <p className="rectangle4"></p>
    </div>
    <div className="team_main">
    <p className="team">Our Team</p>
    <p className="team_content">A team plays a major role in deciding the future of any project and luckily we formed a perfect team of 5 friends in which each of us contributed independently in different domains. We have a balanced team consisting of a frontend developer, backend developer, android developer, content writer and a tester. Apart from this every member in our team remains keen to solve each other's doubts, which increases the efficiency of other teammates also. </p>
    <div className="team_foot"><a href="/acadhere/team" className="team_link">
    <p className="team_tagline">Have a look</p>
    <img src={arrow_right} alt="" className="arrow_r" />
    </a>
    </div>
    </div>
    </div>
    <div className="about_bg">
      <p className="about">About</p>
      <p className="about_content">We are the team of five people from IIIT Kota know as Team Aztecs. This was the project we made to simplify the work of students that are studying hard to achieve their goal but their time and money are getting wasted by using various apps and websites for different purposes.</p>
      <img src={about_quote} alt="" className="about_quote" />
      <div className="about_foot"><a href="/acadhere/about" className="team_link">
        <p className="about_tagline">About Us</p>
        </a>
        <img src={triangle_right} alt="" className="triangle_right"/>
      </div>
    </div>
    <div className="contest_bg">
      <div>
        <p className="contest">Contests</p>
        <p className="contest_content">Are you among those who miss to checkout Contest on different sites. AcadHERE brings you a solution for this by providing all contests and hackathons happening around the globe by major hosting websites at one place. Making it easier for you to access. <br />Now you will not miss any chance to grow and showcase your talent.</p>
        <div className="contest_foot">
        <a href="/acadhere/contest" className="team_link">
        <p className="contest_tagline">Check Out</p>
        </a>
        <img src={triangle_right} alt="" className="triangle_right"/>
      </div>
      </div>
      <div>
        <img src={code_img} alt="" className="code_img" />
      </div>
    </div>
    <div className="notes_bg">
      <p className="notes">Notice Board</p>
      <p className="notes_content">Using Whatsapp to see what CR has posted, looking out for mails by teachers, searching for classroom posts, these things are hectic and pretty old fashioned. For this AcadHERE provides a dedicated section named notice board, so that you never miss a announcement that is important to you.</p>
      <a className="bn31" href="/acadhere/noticeboard"><span className="bn31span">Stay Updated</span></a>
    </div>
    <div className="notes_bg">
      <p className="notes">Resources <img src={notes_book} alt="" className="notes_book" /></p>
      <p className="notes_content">Want to Study Hard but not getting videos, notes and books? AcadHERE also provides you with video lectures of live classes, notes of good students so that you can also score good marks and most important a whole lot of books, so your knowledge can keep growing and growing. By this we are not letting you make an excuse that I didn't have resources to study or I missed something in class.</p>
        <a className="bn31" href="/acadhere/resources"><span className="bn31span">Boost Grades</span></a>
    </div>
    <div className="notes_bg">
      <p className="notes"><img src={classroom} className="classroom_logo" /> Google Classroom</p>
      <p className="notes_content">At AcadHERE we believe that classroom things are not organized properly and UI also is pretty old fashioned with no clear things shown to user. So we decided to give a new look and arranged it for convenience of the students. </p>
      <a className="bn31" href="/acadhere/classroom"><span className="bn31span">See Courses</span></a>
    </div>
    <ScrollUpButton />
    </>
  );
}
