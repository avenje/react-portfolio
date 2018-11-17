import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css';

const NavBar = props =>
   // <nav className='navbar navbar-default'>
   //    <div className= 'NavBar'>
   //       <div className='container-fluid'>
   //          <div className='navbar-header'>
   //          </div>
         <div>
            <ul className='NavBar'>
               <li
                  className= {
                  window.location.pathname === '/' ? 'active' : '' } >
                  <Link to='/' className='nav-item nav-name'>portfolio</Link>
               </li>
               <li className= {
                  window.location.pathname === '/about' ? 'active' : ''} >
                  <Link to='/about' className='nav-item nav-last nav-link'>About Me</Link>
               </li>
               <li className= {
                  window.location.pathname === '/contact' ? 'active' : ''} >
                  <Link to='/contact' className='nav-item nav-link'>Contact</Link>
               </li>
               <li className= {
                  window.location.pathname === '/projects' ? 'active' : ''} >
                  <Link to='/projects' className='nav-item nav-link'>Projects</Link>
               </li>
            </ul>
         </div>
   //    </div>   
   // </nav>

// class NavBar extends Component {
//    render() {
//       return (
//          <div>
//             <ul className="NavBar">
//                <li className="nav-item nav-name">portfolio</li>
//                <li className="nav-item nav-last"><a href="#footer" className="nav-link">Contact</a></li>
//                <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
//                <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
//             </ul>
//          </div>  
//       );
//    }
// }

export default NavBar;