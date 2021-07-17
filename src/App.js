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
        <Route path="/acadhere_testing/" exact component={Home} />
          <Route path="/acadhere_testing/home" exact component={Home} />
          <Route path="/acadhere_testing/about" exact component={About} />
          <Route path="/acadhere_testing/team" exact component={Team} />
          <Route path="/acadhere_testing/contest" exact component={Contest} />
          <Route path="/acadhere_testing/notes" exact component={Notes} />
          <Route path="/acadhere_testing/resources" exact component={Resources} />
          <Redirect to ="/acadhere_testing/"></Redirect>
        </Switch>
        <Footer />
    </div>
    </>
  );
}
