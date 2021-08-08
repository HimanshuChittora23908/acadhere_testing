import React, { useEffect, useState } from "react";
import "./App.css";
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
import logo from './images/Ripple.svg';
import Hackathon from "./Hackathon";
import ContactUs from "./ContactUs";

export default function App() {
  const [Load, setLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 2500);
  }, [])

  if (Load)
    return <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100vw", height: '100vh' }}>
      <img src={logo} alt="Logo" />
    </div>
  return (
    <>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/acadhere_testing/" exact component={Home} />
          <Route path="/acadhere_testing/home" exact component={Home} />
          <Route path="/acadhere_testing/about" exact component={About} />
          <Route path="/acadhere_testing/team" exact component={Team} />
          <Route path="/acadhere_testing/contest" exact component={Contest} />
          <Route path="/acadhere_testing/hackathon" exact component={Hackathon} />
          <Route path="/acadhere_testing/noticeboard" exact component={NoticeBoard} />
          <Route path="/acadhere_testing/resources" exact component={Resources} />
          <Route path="/acadhere_testing/classroom" exact component={Classroom} />
          <Route path={"/acadhere_testing/announcement/" + id} component={Announcement} />
          <Route path={"/acadhere_testing/coursework/" + id} component={CourseWork} />
          <Route path={"/acadhere_testing/materials/" + id} component={CourseWorkMaterials} />
          <Route path={"/acadhere_testing/contactUs"} component={ContactUs} />
          <Redirect to="/acadhere_testing/" />
        </Switch>
        <Footer />
      </div>
    </>
  );
}
