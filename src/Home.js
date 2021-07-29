import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import Card from "./Cards";
import Sdata from "./Sdata" 
import arrow_right from "../src/images/arrow-right.svg";
import triangle_right from "../src/images/triangle_right.svg";
import code_img from "../src/images/code_img.svg";
import about_quote from "../src/images/about_quote.svg";
import notes_book from "../src/images/notes_book.svg";
import open_book from "../src/images/openbook.svg";

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
      <p className="notes">Notes</p>
      <p className="notes_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae integer dignissim vel nisl. Faucibus ornare ultricies id eros dui. Volutpat dignissim neque, laoreet nunc lorem sit dolor. Aliquam, sit amet eu massa eget. Integer ultricies consequat convallis enim et massa nisi, proin. Feugiat faucibus morbi facilisis cras risus. At cursus eget in mi adipiscing. Eget dui, ultrices aliquet vitae aliquet et aliquet ac, duis. Gravida velit vitae nisi vestibulum amet nec nisl, sit.</p>
      <div className="container-fluid notes_bg mb-5">
            <div className="row row_notes">
                <div className="col-5">
                    <div className="row row_foot">
                        {
                            Sdata.map((val, ind) => {
                                return <Card 
                                    key = {ind} 
                                    imgsrc = {val.imgsrc}
                                    title = {val.title}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        <img src={notes_book} alt="" className="notes_book" />
    </div>
    <img src={open_book} alt="" className="openbook" />
    <div className="study-bg">
      <div className="left_main">
      <p className="study">Study Material</p>
      <p className="study_left">ECT 102</p>
      <p className="study_left">MAT 102</p>
      <p className="study_left">CST 104</p>
      <p className="study_left">CST 102</p>
      </div>
      <div className="right_main">
      <p className="study_right">HST 104</p>
      <p className="study_right">HST 102</p>
      <p className="study_right">ECP 102</p>
      <p className="study_right">CSP 102</p>
      <p className="study_right">CSP 112</p>
      </div>
    </div>
    </>
  );
}