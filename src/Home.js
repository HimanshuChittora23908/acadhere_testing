import React from 'react';
import './Home.css';
import arrow_right from "../src/images/arrow-right.svg";
import triangle_right from "../src/images/triangle_right.svg";
import code_img from "../src/images/code_img.svg";
import about_quote from "../src/images/about_quote.svg";
import notes_book from "../src/images/notes_book.svg";
import classroom from "../src/images/Google_Classroom_Logo.png"

export default function Home() {
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
    <p className="team_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae integer dignissim vel nisl. Faucibus ornare ultricies id eros dui. Volutpat dignissim neque, laoreet nunc lorem sit dolor. Aliquam, sit amet eu massa eget. Integer ultricies consequat convallis enim et massa nisi, proin. Feugiat faucibus morbi facilisis cras risus. At cursus eget in mi adipiscing. Eget dui, ultrices aliquet vitae aliquet et aliquet ac, duis. Gravida velit vitae nisi vestibulum amet nec nisl, sit.</p>
    <div className="team_foot">
    <p className="team_tagline">Have a look</p>
    <img src={arrow_right} alt="" className="arrow_r" />
    </div>
    </div>
    </div>
    <div className="about_bg">
      <p className="about">About</p>
      <p className="about_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae integer dignissim vel nisl. Faucibus ornare ultricies id eros dui. Volutpat dignissim neque, laoreet nunc lorem sit dolor. Aliquam, sit amet eu massa eget. Integer ultricies consequat convallis enim et massa nisi, proin. Feugiat faucibus morbi facilisis cras risus. At cursus eget in mi adipiscing. Eget dui, ultrices aliquet vitae aliquet et aliquet ac, duis. Gravida velit vitae nisi vestibulum amet nec nisl, sit.</p>
      <img src={about_quote} alt="" className="about_quote" />
      <div className="about_foot">
        <p className="about_tagline">About Us</p>
        <img src={triangle_right} alt="" className="triangle_right"/>
      </div>
    </div>
    <div className="contest_bg">
      <div>
        <p className="contest">Contests</p>
        <p className="contest_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae integer dignissim vel nisl. Faucibus ornare ultricies id eros dui. Volutpat dignissim neque, laoreet nunc lorem sit dolor. Aliquam, sit amet eu massa eget. Integer ultricies consequat convallis enim et massa nisi, proin. Feugiat faucibus morbi facilisis cras risus. At cursus eget in mi adipiscing. Eget dui, ultrices aliquet vitae aliquet et aliquet ac, duis. Gravida velit vitae nisi vestibulum amet nec nisl, sit.</p>
        <div className="contest_foot">
        <p className="contest_tagline">Check Out</p>
        <img src={triangle_right} alt="" className="triangle_right"/>
      </div>
      </div>
      <div>
        <img src={code_img} alt="" className="code_img" />
      </div>
    </div>
    <div className="notes_bg">
      <p className="notes">Notice Board</p>
      <p className="notes_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae integer dignissim vel nisl. Faucibus ornare ultricies id eros dui. Volutpat dignissim neque, laoreet nunc lorem sit dolor. Aliquam, sit amet eu massa eget. Integer ultricies consequat convallis enim et massa nisi, proin. Feugiat faucibus morbi facilisis cras risus. At cursus eget in mi adipiscing. Eget dui, ultrices aliquet vitae aliquet et aliquet ac, duis. Gravida velit vitae nisi vestibulum amet nec nisl, sit.</p>
      <a className="bn31" href="/"><span className="bn31span">Stay Updated</span></a>
    </div>
    <div className="notes_bg">
      <p className="notes">Resources <img src={notes_book} alt="" className="notes_book" /></p>
      <p className="notes_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae integer dignissim vel nisl. Faucibus ornare ultricies id eros dui. Volutpat dignissim neque, laoreet nunc lorem sit dolor. Aliquam, sit amet eu massa eget. Integer ultricies consequat convallis enim et massa nisi, proin. Feugiat faucibus morbi facilisis cras risus. At cursus eget in mi adipiscing. Eget dui, ultrices aliquet vitae aliquet et aliquet ac, duis. Gravida velit vitae nisi vestibulum amet nec nisl, sit.</p>
        <a className="bn31" href="/"><span className="bn31span">Boost Grades</span></a>
    </div>
    <div className="notes_bg">
      <p className="notes"><img src={classroom} className="classroom_logo" /> Google Classroom</p>
      <p className="notes_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae integer dignissim vel nisl. Faucibus ornare ultricies id eros dui. Volutpat dignissim neque, laoreet nunc lorem sit dolor. Aliquam, sit amet eu massa eget. Integer ultricies consequat convallis enim et massa nisi, proin. Feugiat faucibus morbi facilisis cras risus. At cursus eget in mi adipiscing. Eget dui, ultrices aliquet vitae aliquet et aliquet ac, duis. Gravida velit vitae nisi vestibulum amet nec nisl, sit.</p>
      <a className="bn31" href="/"><span className="bn31span">See Courses</span></a>
    </div>
    </>
  );
}
