import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Team from "./Team";
import Contest from "./Contest";
import NoticeBoard from "./NoticeBoard";
import Resources from "./Resources";
import Footer from "./footer.js";
import Classroom from "./Classroom";
import Announcement from "./subjects/Announcement";
import CourseWork from "./subjects/CourseWork";
import { id } from "./subjects/Announcement";
import CourseWorkMaterials from "./subjects/CourseWorkMaterials";
import Hackathon from "./Hackathon";
import ContactUs from "./ContactUs";
import FAQ from "./FAQ";
import Admin from "./Admin";
import TimeTable from "./TimeTable";

export default function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/acadhere/" exact component={Home} />
          <Route path="/acadhere/home" exact component={Home} />
          <Route path="/acadhere/about" exact component={About} />
          <Route path="/acadhere/team" exact component={Team} />
          <Route path="/acadhere/timetable" exact component={TimeTable} />
          <Route path="/acadhere/contest" exact component={Contest} />
          <Route path="/acadhere/hackathon" exact component={Hackathon} />
          <Route path="/acadhere/noticeboard" exact component={NoticeBoard} />
          <Route path="/acadhere/resources" exact component={Resources} />
          <Route path="/acadhere/classroom" exact component={Classroom} />
          <Route path={"/acadhere/announcement/" + id} component={Announcement} />
          <Route path={"/acadhere/coursework/" + id} component={CourseWork} />
          <Route path={"/acadhere/materials/" + id} component={CourseWorkMaterials} />
          <Route path={"/acadhere/contactUs"} component={ContactUs} />
          <Route path={"/acadhere/faq"} component={FAQ} />
          <Route path={"/acadhere/admin"} component={Admin} />
          <Redirect to="/acadhere/" />
        </Switch>
        <Footer />
      </div>
    </>
  );
}
