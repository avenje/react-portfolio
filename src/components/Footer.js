import React, { Component } from 'react';

class Footer extends Component {
   render() {
      return (
         <div className="Footer">
            <div className="footer-2">
               <h3>Contact</h3>
               <p><a href="https://www.linkedin.com/in/jeremy-avenarius/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square i-hov" aria-hidden="true"/> </a></p>
               <p><a href="https://github.com/avenje" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/> </a></p>
               <p><a href="mailto:jeremyavenarius@gmail.com?Subject=Sent%20from%20Jeremy's%20portfolio%20page" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/> </a></p>
               <br/>
               <a href="https://drive.google.com/open?id=1eau5_1d_IXBq3sTSAk-RRbkmB1DDFm1F" target="_blank" rel="noopener noreferrer"><button className="button resume-button">Resume <i className="fa fa-file-pdf-o" aria-hidden="true"/> </button></a>
            </div>
         </div>
      )
   }
}

export default Footer;