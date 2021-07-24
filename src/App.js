import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Team from "./Team";
import Contest from "./Contest";
import Notes from "./Notes";
import Resources from "./Resources";
import Footer from "./footer.js";
import Classroom from "./Classroom";
import Announcement from "./subjects/Announcement";
import CourseWork from "./subjects/CourseWork";
import {id} from "./subjects/Announcement";
import CourseWorkMaterials from "./subjects/CourseWorkMaterials";

export default function App() {
  return (
    <>
    <div className="App">
        <Navbar />
        <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/team" exact component={Team} />
          <Route path="/contest" exact component={Contest} />
          <Route path="/notes" exact component={Notes} />
          <Route path="/resources" exact component={Resources} />
          <Route path="/classroom" exact component={Classroom} />
          <Route path={"/announcement/" + id} component={Announcement} />
          <Route path={"/coursework/" + id} component={CourseWork} />
          <Route path={"/materials/" + id} component={CourseWorkMaterials} />
          <Redirect to="/"/>
        </Switch>
        <Footer />
    </div>
    </>
  );
}
