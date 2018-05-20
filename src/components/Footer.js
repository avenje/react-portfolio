import React, { Component } from 'react';
import bike_bw from '../images/bike_bw.jpg';

class Footer extends Component {
   
   render() {
      return (
         <div className="Footer">
            <div className="footer-1">
               <img src= { bike_bw } className="img" alt="Sitting on bike"/>
               </div>
            <div className="footer-2">
               <p><a href="https://www.linkedin.com/in/jeremy-avenarius/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square i-hov" aria-hidden="true"/> LinkedIn </a></p>
               <p><a href="https://github.com/avenje" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/> GitHub </a></p>
               <p><a href="mailto:jeremyavenarius@gmail.com?Subject=Sent%20from%20Jeremy's%20portfolio%20page" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/> jeremyavenarius@gmail.com </a></p>
               <p><a href="https://drive.google.com/open?id=1eau5_1d_IXBq3sTSAk-RRbkmB1DDFm1F" target="_blank" rel="noopener noreferrer"><button className="button resume-button"> Resume <i className="fa fa-file-pdf-o" aria-hidden="true"/> </button></a></p>
               <br/>
               <p>This site was made using React, JavaScript, and CSS |  © 2018</p>
            </div>
         </div>
      )
   }
}

export default Footer;