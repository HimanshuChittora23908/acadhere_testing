import React from 'react'
import './About.css'
import bg_books from "./images/bg_books.jpg"
import blink from "./videos/blink.gif"
import idea from "./images/lightbulb.png"
import brainstorming from "./images/brainstorming.png"
import team from "./images/team.png"
import ui from "./images/ui.png"
import api from "./images/api.png"
import finish from "./images/finish.png"

export default function About() {
    return (
        <>
        <div className="about_bg_main">
            <div className="img_bg">
            <img src={bg_books} className="bg_books"></img>
            <p className="bg_tagline">" One Stop for <p className="green_about">Every Need !!! "</p></p>
            </div>
        <h1 className="about_head_main">Vision</h1>
        <img src={blink} className="blink"></img>
        <p className="about_content_main">Empowering students by creating solutions for tommorow's challenges. AcadHere provide an integrated place to manage all your classeswork, projects, and assignments so as to save your time from roaming on different platforms to get the information.</p>
        <h1 className="start">How Project AcadHERE Started?</h1>
        <div className="box_left">
        <img src={idea} className="icon_about"/>
        <div className="content_box">
        <h1 className="contentHead1">Idea</h1>
        <p className="content1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, harum amet quidem deserunt ab nisi minima vel voluptatum iure. Sint sequi dolor reprehenderit non maxime officiis illo? Aut, reprehenderit in!</p>
        </div>
        </div>
        <div className="box_right">
        <div className="content_box">
        <h1 className="contentHead1">Brainstorming</h1>
        <p className="content1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, harum amet quidem deserunt ab nisi minima vel voluptatum iure. Sint sequi dolor reprehenderit non maxime officiis illo? Aut, reprehenderit in!</p>
        </div>
        <img src={brainstorming} className="icon_about"/>
        </div>
        <div className="box_left">
        <img src={team} className="icon_about"/>
        <div className="content_box">
        <h1 className="contentHead1">Finding a Team</h1>
        <p className="content1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, harum amet quidem deserunt ab nisi minima vel voluptatum iure. Sint sequi dolor reprehenderit non maxime officiis illo? Aut, reprehenderit in!</p>
        </div>
        </div>
        <div className="box_right">
        <div className="content_box">
        <h1 className="contentHead1">Features and UI</h1>
        <p className="content1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, harum amet quidem deserunt ab nisi minima vel voluptatum iure. Sint sequi dolor reprehenderit non maxime officiis illo? Aut, reprehenderit in!</p>
        </div>
        <img src={ui} className="icon_about"/>
        </div>
        <div className="box_left">
        <img src={api} className="icon_about"/>
        <div className="content_box">
        <h1 className="contentHead1">Google and Custom APIs</h1>
        <p className="content1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, harum amet quidem deserunt ab nisi minima vel voluptatum iure. Sint sequi dolor reprehenderit non maxime officiis illo? Aut, reprehenderit in!</p>
        </div>
        </div>
        <div className="box_right">
        <div className="content_box">
        <h1 className="contentHead1">Finishing and Launching </h1>
        <p className="content1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, harum amet quidem deserunt ab nisi minima vel voluptatum iure. Sint sequi dolor reprehenderit non maxime officiis illo? Aut, reprehenderit in!</p>
        </div>
        <img src={finish} className="icon_about"/>
        </div>
        </div>
        </>
    )
}
