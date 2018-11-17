import React, { Component } from 'react';
import Intro from '../components/Intro';
// import Welcome from '../components/Welcome';
// import Project from '../components/Project';
// import AboutMe from '../components/AboutMe';
import Breakdown from '../components/Breakdown';
// import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
          {/* <NavBar /> */}
          <div className="heading" id="intro"></div>
          <Intro />
          <div className="heading" id="breakdown"></div>
          <Breakdown />
        {/* <h2 className="heading" id="about"></h2>
          <AboutMe /> */}
      </div>
    );
  }
}

export default Home;