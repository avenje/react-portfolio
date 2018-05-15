import React, { Component } from 'react';
import barista from '../images/barista.svg';
import train from '../images/train.svg';
import scrapeNews from '../images/scrapeNews.svg';
// import friendFinder from '../images/friendFinder.svg';

class Projects extends Component {
   render() {
      return (
         <div className="Projects section flex-container">
            <div className="item">
               <img src={barista} className="thumb" alt="Screenshot of The Barista app"/>
               <div className="overlay">
                  <div className="text">
                     <h3>The Barista</h3>
                     <p><em>Search for the nearest coffee shop and <br/> find out their tip ratio</em></p>
                     <p>JavaScript, JQuery, AJAX, APIs, CSS, SASS</p>
                     <p><a href="https://github.com/aaronwey/project1" target="_blank" rel="noopener noreferrer">Repository(Group Project) <i className="fa fa-github" aria-hidden="true"/></a></p>
                     <p><a href="https://ccrs2006.github.io/barista/" target="_blank" rel="noopener noreferrer">Live Demo Site </a></p>
                  </div>
               </div> 
            </div>
            <div className="item">
               <img src={train} className="thumb" alt="Screenshot of Train Scheduler app"/>
               <div className="overlay">
                  <div className="text">
                     <h3>Train Scheduler</h3>
                     <p><em>Fictional Train Schedule for Arriving Trains and <br/> Newly Created Trains</em></p>
                     <p>Firebase, Moment.js, JavaScript, JQuery, CSS, Bootstrap</p>
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
                     <p>Node.js, Express, MongoDB with Mongoose, JavaScript,<br/> JQuery, Handlebars, CSS, Bootstrap</p>
                     <p><a href="https://github.com/avenje/scrape-news" target="_blank" rel="noopener noreferrer">Repository <i className="fa fa-github" aria-hidden="true"/></a></p>
                     <p><a href="https://tranquil-dawn-96654.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Demo Site </a></p>
                  </div>
               </div> 
            </div>
         </div>  
      );
   }
}

export default Projects;