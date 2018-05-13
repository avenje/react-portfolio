import React, { Component } from 'react';
// import {accessId, APIkey} from '../secrets.js'

class Welcome extends Component {
   render() {
      return (
         <div className="Welcome section">
            <h1 className="welcome-intro"><strong>Jeremy Avenarius</strong> is seeking out an opportunity to be a Web Developer in Denver, CO.</h1>
            <br/>
            <br/>
            <a href="https://www.linkedin.com/in/jeremy-avenarius/" target="_blank" alt="LinkedIn link" rel="noopener noreferrer"><i className="fa fa-linkedin-square i-hov" aria-hidden="true"/></a>
            <a href="https://github.com/avenje" target="_blank" alt="Github link" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/></a>
            <a href="mailto:jeremyavenarius@gmail.com?Subject=Sent%20from%20Jeremy's%20portfolio%20page" target="_top" alt="GMail link"><i className="fa fa-envelope i-hov" aria-hidden="true"/></a>
            <br/>
            <a href="https://drive.google.com/open?id=1eau5_1d_IXBq3sTSAk-RRbkmB1DDFm1F" target="_blank" alt="Resume link" rel="noopener noreferrer"><button className="button resume-button">Resume <i className="fa fa-file-pdf-o" aria-hidden="true"/></button></a>

         </div>
      );
   }
}

export default Welcome;