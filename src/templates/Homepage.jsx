import React from 'react';
import '../global-css.css';
import profilePic from '../linkedin.png'

function Homepage() {
  return (
    <div className="App">
      <body className="App App-body">
        <img src={profilePic} alt="ismet" className="profile-img"></img>
          <h3> Hi I'm Arjun Raja Y </h3>
          <p> Fullstack Web Developer and Software Engineer. Welcome to my Website </p>
      </body>
    </div>
  );
}

export default Homepage;
