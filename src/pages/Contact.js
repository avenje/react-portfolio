import React, { Component } from 'react';
import Welcome from './../components/Welcome';
// import Project from './../components/Project';
// import AboutMe from './../components/AboutMe';
// import NavBar from './../components/NavBar';
// import Footer from './../components/Footer';
// import './App.css';

class Contact extends Component {
  render() {
    return (
      <div className="App">

          <div className="heading" id="welcome"></div>
          <Welcome />
        {/* <h2 className="heading" id="projects">PROJECTS</h2>
        <h4>More to come...</h4>
          <Project />
        <h2 className="heading" id="about"></h2>
          <AboutMe /> */}

      </div>
    );
  }
}

export default Contact;