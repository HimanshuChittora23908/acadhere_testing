import React from 'react'
import './About.css'
import bg_books from "./images/bg_books.webp"
import blink from "./videos/blink.gif"
import idea from "./images/lightbulb.webp"
import brainstorming from "./images/brainstorming.webp"
import team from "./images/team.webp"
import ui from "./images/ui.webp"
import api from "./images/api.webp"
import finish from "./images/finish.webp"
import target from "./videos/target.gif"
import ScrollUpButton from "react-scroll-up-button";

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
        <p className="about_content_main">" Our vision is to make students much more focussed by reducing their load of checking different applications to access information related to their college education. On AcadHere, students can access their assignments, important notices, study material etc. through a single platform "</p>
        <h1 className="about_head_main">Mission</h1>
        <img src={target} className="blink"></img>
        <p className="about_content_main">" Our mission is to provide a user-friendly interface for college students where they can access all the major things required in their college education on a single platform "</p>
        <h1 className="start">How Project AcadHERE Started?</h1>
        <div className="box_left">
        <img src={idea} className="icon_about"/>
        <div className="content_box">
        <h1 className="contentHead1"><img src={idea} className="icon_inline"/> Idea</h1>
        <p className="content1">Our idea is to centralize all the important data related to classes, assignments etc. on a single platform so as to increase the accessibility of data by college students, and thus reducing the chances of late submission of assignments by the students. AcadHere has a proper notification system so that it will remind the students about the important assignments well before the time of submission.</p>
        </div>
        </div>
        <div className="box_right">
        <div className="content_box">
        <h1 className="contentHead1">Brainstorming <img src={brainstorming} className="icon_inline"/></h1>
        <p className="content1">Idea generation is both about quality and quantity. Before starting to create this application, we all brainstormed a lot of features that we can include in AcadHere and through many discussions we came up with certain things which we can include. The brainstorming part was full of discussions on new ideas and things we can work on, whether it was designing the UI or choosing the correct features to include in the app.</p>
        </div>
        <img src={brainstorming} className="icon_about"/>
        </div>
        <div className="box_left">
        <img src={ui} className="icon_about"/>
        <div className="content_box">
        <h1 className="contentHead1">Features and UI <img src={ui} className="icon_inline"/></h1>
        <p className="content1">Students can:
            <br/> 1. See all the assignments with their deadline shared on google classrooms and also can set a timer so as to receive a notification reminder for completing a particular assignment.
            <br/> 2. View all the important notices.
            <br/> 3. Access all the material including books and slides shared by the professors.
            <br/> 4. View details of upcoming coding contests and hackathons.
            </p>
        </div>
        </div>
        <div className="box_right">
        <div className="content_box">
        <h1 className="contentHead1"><img src={team} className="icon_inline"/> Finding a Team</h1>
        <p className="content1">A team plays a major role in deciding the future of any project and luckily we formed a perfect team of 5 friends in which each of us contributed independently in different domains. We have a balanced team consisting of a frontend developer, backend developer, android developer, content writer and a tester. Apart from this every member in our team remains keen to solve each other's doubts, which increases the efficiency of other teammates also.</p>
        </div>
        <img src={team} className="icon_about"/>
        </div>
        <div className="box_left">
        <img src={api} className="icon_about"/>
        <div className="content_box">
        <h1 className="contentHead1"><img src={api} className="icon_inline"/> Google and Custom APIs</h1>
        <p className="content1">After finalizing features, UI, and good team for the project, the main thing was on how to do things by automating almost everything rating than updating it into the code. For this, we decided to create Custom APIs by using Heroku and maintaining their shutting time. Also, we used Google Classroom API, for which we used Google OAuth v2.0 which was difficult at first to learn and use. But having a great team gives many advantages, so somehow we manage to learn and use it to load classroom API to show the results on the website. With all such backend work, we now just need to input it via admin route and it's visible on the website.</p>
        </div>
        </div>
        <div className="box_right">
        <div className="content_box">
        <h1 className="contentHead1">Finishing and Launching <img src={finish} className="icon_inline"/></h1>
        <p className="content1">The thing about finishing a project is that finishing is really only the beginning, improvements and changes will always be there. After months of hard work we finally completed this application with a motive of making students much more focussed by spending less time on exploring different applications to do the same work. It was a complete team effort which made it possible to finish this application in a very short duration.</p>
        </div>
        <img src={finish} className="icon_about"/>
        </div>
        </div>
        <ScrollUpButton />
        </>
    )
}
