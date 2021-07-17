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
          <Redirect to ="/"></Redirect>
        </Switch>
        <Footer />
    </div>
    </>
  );
}
