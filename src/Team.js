import React, { useState } from 'react'
import bg_team from "./videos/Search.mp4"
import "./Team.css"
import teamMembers from "./TeamMembers.js"

export default function Team() {
    return (
        <>
        <div className="bg_team_main">
        <div className="video_size">
        <video className='bg_video' autoPlay loop muted>
        <source src={bg_team} type='video/mp4' />
        </video>
        </div>
        <p className="bg_top_line">"Transforming the Way Students are Accessing Various Technologies and Contents"</p>
        <h1 className="team_title_main">Meet the Crew</h1>
        <h5 class="team_tagline_main"><i>"Making Difficult and Out of the Box Things Possible"</i></h5>
        <div className="team_members">
        {teamMembers ? teamMembers.map((item,ind) => 
        <div key={ind} className="card_teamMember">
        <img src={item.imgsrc} className="img_team_member" onMouseOver={e => (e.currentTarget.src = item.imghoversrc)} onMouseOut={e => (e.currentTarget.src = item.imgsrc)} />
        <h2 className="name_team">{item.name}</h2>
        <h6 className="designation">{item.designation}</h6>
        </div>
      ) : null}
        </div>
        </div>
        </>
    )
}
