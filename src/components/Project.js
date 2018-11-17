import React, { Component } from 'react';
import barista from '../images/barista.svg';
import train from '../images/train.svg';
import scrapeNews from '../images/scrapeNews.svg';
import whoIs from '../images/whoIs.svg';


class Project extends Component {
   render() {
      return (
         <div className="Projects section flex-container">
            <h2 className='heading'>Past Projects</h2>
            <div className="item">
               <img src={whoIs} className="thumb" alt="Screenshot of Who Is This Is app"/>
                  <div className="overlay">
                     <div className="text">
                        <h3>Who Is This Is</h3>
                        <p><em>A reverse phone number search app<br/> that will pull information using the Whitepages Pro api.<br/>It will return a name, address, line type, and associated people.</em></p>
                        <p>React, Node, JavaScript, API</p>
                        <p><a href="https://github.com/avenje/callerID" target="_blank" rel="noopener noreferrer">Repository(Group Project) <i className="fa fa-github" aria-hidden="true"/></a></p>
                        <p><a href="https://avenje.github.io/callerID/" target="_blank" rel="noopener noreferrer">Live Demo Site </a></p>
                     </div>
                  </div> 
            </div>
         
            <div className="item">
               <img src={barista} className="thumb" alt="Screenshot of The Barista app"/>
                  <div className="overlay">
                     <div className="text">
                        <h3>The Barista</h3>
                        <p><em>Search for the nearest coffee shop</em></p>
                        <p>JavaScript, JQuery, AJAX, APIs, SASS</p>
                        <p><a href="https://github.com/avenje/Local-Coffee-Shop-Finder" target="_blank" rel="noopener noreferrer">Repository(Forked from a Group Project) <i className="fa fa-github" aria-hidden="true"/></a></p>
                        <p><a href="https://avenje.github.io/Local-Coffee-Shop-Finder/" target="_blank" rel="noopener noreferrer">Live Demo Site </a></p>
                     </div>
                  </div> 
            </div>
            <div className="item">
               <img src={train} className="thumb" alt="Screenshot of Train Scheduler app"/>
                  <div className="overlay">
                     <div className="text">
                        <h3>Train Scheduler</h3>
                        <p><em>Fictional Train Schedule for Arriving Trains and <br/> Newly Created Trains</em></p>
                        <p>Firebase, Moment.js, JavaScript, JQuery, Bootstrap</p>
                        <p><a href="https://github.com/avenje/train_scheduler" target="_blank" rel="noopener noreferrer">Repository <i className="fa fa-github" aria-hidden="true"/></a></p>
                        <p><a href="https://avenje.github.io/train_scheduler/" target="_blank" rel="noopener noreferrer">Live Demo Site </a></p>
                     </div>
                  </div> 
            </div>
            <div className="item">
               <img src={scrapeNews} className="thumb" alt="Screenshot of Scrape News app"/>
                  <div className="overlay">
                     <div className="text">
                        <h3>Scraped Android News</h3>
                        <p><em>Android News Scraped from a News Site</em></p>
                        <p>Node, Express, MongoDB with Mongoose, JavaScript,<br/> JQuery, Handlebars, CSS, Bootstrap</p>
                        <p><a href="https://github.com/avenje/scrape-news" target="_blank" rel="noopener noreferrer">Repository <i className="fa fa-github" aria-hidden="true"/></a></p>
                        <p><a href="https://tranquil-dawn-96654.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Demo Site </a></p>
                     </div>
                  </div> 
            </div>
         </div>  
      );
   }
}

export default Project;