import React, { Component } from 'react';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <Welcome />
        <h2 className="heading" id="projects">PROJECTS</h2>
        <h4>More to come...</h4>
          <Projects />
        <h2 className="heading" id="about">ABOUT ME</h2>
          <About />
        <h2 className="heading" id="footer">CONTACT INFO</h2>
          <Footer />
      </div>
    );
  }
}

export default App;