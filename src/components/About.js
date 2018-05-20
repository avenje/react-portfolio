import React, { Component } from 'react';

class About extends Component {
   render() {
      return (
         <div className="About section">
            <h1 className="about-intro">How I Got Here</h1>
            <p className="about-item">I grew up in the <a href="https://en.wikipedia.org/wiki/Dubuque,_Iowa" target="_blank" rel="noopener noreferrer">midwest</a> and moved to Denver in 2007, which was during my first <a href="https://en.wikipedia.org/wiki/Saturn_return" target="_blank" rel="noopener noreferrer">Saturn return</a>, to seek out a change in my life.  I wasn't quite sure what direction to go.  I have been at the same job since moving to Denver, working as a Graphic Specialist at a print shop.  I eventually wanted to expand my graphic skills from print to web design, so in late 2013, I took some free online coding classes in my down time on HTML, CSS, and JavaScript.  I discovered that I could spend all day learning to code and before I knew it, the day would be almost over and I wasn't ready to stop.  That was the moment I decided to find out how to make this my next career.  But I couldn't afford to quit working to go back to school full time.  The timing wasn't right yet.</p>

            <p className="about-item">A few more years passed.  During that time, I got married to my beautiful, smart, and loving wife, went through job advancements, had seen loved ones go through health scares, and said goodbye to two great family dogs.  After that montage, I was finally in a position to give it a shot.  Thanks to the encouragement of my wife.</p>

            <p className="about-item">Before I could jump into it head first, I had to be sure I could do it.  In early 2017, I attended a Try Coding weekend which covered the front and back end at a local coding school, and my mind was blown about how much more there is to learn.  Being myself, I had to be absolutely sure this was the right direction for me before commiting to the big change.  The same coding school offered a 6-week evening class, Second Shift Front End Foundations.  After completion, I was certain I wanted to do this.</p>

            <p className="about-item">The biggest hurdle that was preventing me from pursuing this career change was of course, money.  There was no way I could stop working and go back to school full time while paying the bills.  Eventually I found a full time program that had night classes.  This allowed me to keep working during the days and make everything possible.  I signed up as soon as I found out about it and before I knew it, I was finally on my way.</p>

            <p className="about-item">When I'm not at my day job or practicing code, I'm usually at home relaxing with my wife.  We love our downtime.  I enjoy going to punk and rock shows, traveling (most recently, Italy), doing yard work, staying up late, and sleeping in on the weekends.  I was really into skating, biking, and snowboarding but have since had to slow down.  I played hockey since I was nine years old and had to take off a couple of years due to life.  I look forward to getting back to stopping pucks again once I have more free time.</p>  

            {/* <p className="about-item">I am currently a Production Manager for a large printing company in Denver for almost 10 1/2 years and I have been in the printing industry for about 17 years. I am currently looking for a job as a Jr. Web Developer or a Jr. Web Designer.</p>
            <p className="about-item">During my extensive time in my current industry, I have gained solid experience working with Adobe Illustrator, Photoshop, InDesign, and Acrobat. Along with being the Production Manager and head Graphic Specialist at our location, I have great troubleshooting skills when it comes to repairing machines and solving problems.</p>
            <p className="about-item">I have recently completed a Web Development program at the University of Denver that taught us the MERN stack, and am hoping to find a job in the industry using my new skills.  I am willing to start at the bottom and working my way to a top position again</p> */}
         
         </div>
      );
   }
}

export default About;