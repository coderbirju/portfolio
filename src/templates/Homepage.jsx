import React from 'react';
import '../global-css.css';
import profilePic from '../linkedin.png';
import { Layout } from 'antd';
const { Content } = Layout;

class Homepage extends React.Component {
  render (){
    return (
      <Layout>
        <div className="App App-body">
          <Content> 
              <img src={profilePic} alt="ismet" className="App-logo profile-img"></img>
                <h3> Hi I'm Arjun Raja Y </h3>
                <p> Fullstack Web Developer and Software Engineer. Welcome to my Website </p>
          </Content>
        </div>
      </Layout>
    );
  }
}

export default Homepage;