import React, { Component } from 'react';
import Project from './../components/Project';
// import NavBar from './../components/NavBar';
// import Footer from './../components/Footer';
// import './App.css';

class Projects extends Component {
  render() {
    return (
      <div className="App">
          {/* <NavBar /> */}
        {/* <div className="heading" id="project"></div> */}
        {/* <h4>More to come...</h4> */}
          <Project />
        {/* <h2 className="heading" id="footer">CONTACT INFO</h2>
          <Footer /> */}
      </div>
    );
  }
}

export default Projects;