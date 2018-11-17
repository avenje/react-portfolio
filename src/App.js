import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
// import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import AboutMe from "./components/AboutMe";
// import './App.css';

const App = () =>
<Router>
  <div>
    <NavBar />
    {/* <Welcome /> */}
    {/* <Wrapper> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Projects} />
    {/* </Wrapper> */}
    <Footer />
  </div>
</Router>;

// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <Route exact= {true} path='/' render={ () => (
//             <div className='App'>
//               <Home />
//             </div>
//           )}/>
//           <Route exact= {true} path='/about' render={ () => (
//             <div className='App'>
//               <About />
//             </div>  
//           )}/>
//           <Route exact= {true} path='/contact' render={ () => (
//             <div className='App'>
//               <Contact />
//               </div>
//           )}/>
//           <Route exact={true} path='/projects' render={ () => (
//             <div className='App'>
//               <Projects />
//               </div>
//           )}/>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

export default App;