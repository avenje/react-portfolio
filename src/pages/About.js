import React, { Component } from 'react';
// import Welcome from './../components/Welcome';
// import Project from './../components/Project';
import AboutMe from './../components/AboutMe';
// import NavBar from './../components/NavBar';
// import Footer from './../components/Footer';
// import './App.css';

class About extends Component {
  render() {
    return (
      <div className="App">
          {/* <NavBar />
          <div className="heading" id="welcome"></div>
          <Welcome />
        <h2 className="heading" id="projects">PROJECTS</h2>
        <h4>More to come...</h4>
          <Project /> */}
          {/* <div className="heading" id="about"></div> */}
          <AboutMe />
        {/* <h2 className="heading" id="footer">CONTACT INFO</h2>
          <Footer /> */}
      </div>
    );
  }
}

export default About;