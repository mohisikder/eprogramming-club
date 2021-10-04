import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import './Trainer.css';

const Trainer = (props) => {
   console.log(props);
   return (
      <div>
         <Navigation/>
         <div>
            <h3>Trainer</h3>
            <h2>Colt Steele</h2>
            <h4>Developer and Bootcamp Instructor</h4>
            <p>Hi! I'm Colt. I'm a developer with a serious love for teaching. I've spent the last few years teaching people to program at 2 different immersive bootcamps where I've helped hundreds of people become web developers and change their lives. My graduates work at companies like Google, Salesforce, and Square.</p>
            <br />
            <p>Most recently, I led Galvanize's SF's 6 month immersive program as Lead Instructor and Curriculum Director. After graduating from my class, 94% of my students went on to receive full-time developer roles. I also worked at Udacity as a Senior Course Developer on the web development team where I got to reach thousands of students daily.</p>
         </div>
         <Footer/>
      </div>
   );
};

export default Trainer;