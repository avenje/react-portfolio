import React, { Component } from 'react';
// import {accessId, APIkey} from '../secrets.js'

class Breakdown extends Component {
   render() {
      return (
         <div className="Projects section flex-container">
                     <h2 className='heading'>Skills Breakdown</h2>
                     
                     <div className="breakdown-item">
                        {/* <img src={whoIs} className="thumb" alt="Screenshot of Who Is This Is app"/> */}
                           {/* <div className="overlay"> */}
                              <div className="breakdown-text">
                                 <h3>Web Development</h3>
                                 <p>HTML, CSS, JavaScript, JQuery, </p>
                                 <p>React, Node, JavaScript, API</p>
                                 {/* <p><a href="https://github.com/avenje/callerID" target="_blank" rel="noopener noreferrer">Repository(Group Project) <i className="fa fa-github" aria-hidden="true"/></a></p> */}
                                 {/* <p><a href="https://avenje.github.io/callerID/" target="_blank" rel="noopener noreferrer">Live Demo Site </a></p> */}
                              </div>
                           {/* </div>  */}
                     </div>
                  
                     <div className="breakdown-item">
                        {/* <img src={barista} className="thumb" alt="Screenshot of The Barista app"/> */}
                           {/* <div className="overlay"> */}
                              <div className="breakdown-text">
                                 <h3>Graphic Design</h3>
                                 <p>Adobe Illustrator, InDesign, Photoshop, Acrobat</p>
                                 {/* <p><a href="https://github.com/avenje/Local-Coffee-Shop-Finder" target="_blank" rel="noopener noreferrer">Repository(Forked from a Group Project) <i className="fa fa-github" aria-hidden="true"/></a></p> */}
                                 {/* <p><a href="https://avenje.github.io/Local-Coffee-Shop-Finder/" target="_blank" rel="noopener noreferrer">Live Demo Site </a></p> */}
                              </div>
                           {/* </div>  */}
                     </div>

                     <div className="breakdown-item">
                        {/* <img src={train} className="thumb" alt="Screenshot of Train Scheduler app"/> */}
                           {/* <div className="overlay"> */}
                              <div className="breakdown-text">
                                 <h3>Web + Print Design</h3>
                                 <p></p>
                                 {/* <p><a href="https://github.com/avenje/train_scheduler" target="_blank" rel="noopener noreferrer">Repository <i className="fa fa-github" aria-hidden="true"/></a></p> */}
                                 {/* <p><a href="https://avenje.github.io/train_scheduler/" target="_blank" rel="noopener noreferrer">Live Demo Site </a></p> */}
                              </div>
                           {/* </div>  */}
                     </div>

                     {/* <div className="breakdown-item">
                        <div className="breakdown-text">
                           <h3>Scraped Android News</h3>
                           <p><em>Android News Scraped from a News Site</em></p>
                           <p>Node, Express, MongoDB with Mongoose, JavaScript,<br/> JQuery, Handlebars, CSS, Bootstrap</p>
                        </div>
                     </div> */}

                  </div>
      )
   }
}

export default Breakdown;