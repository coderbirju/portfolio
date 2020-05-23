import React from 'react';
import '../global-css.css';
import Header from './header';

class About extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <body className="App App-body">
            <h3> About ME </h3>
            <p> AVOVOJIVAIV </p>
        </body>
      </div>
    );
  }
}

export default About;
