import React from 'react';
import '../global-css.css';
import profilePic from '../linkedin.png';
import HeadNav from './header';
import { Layout } from 'antd';
const { Header,Content } = Layout;

class Homepage extends React.Component {
  render (){
    return (
      <div className="App">
      <Layout>
        <Header> <HeadNav/> </Header>
        <Content>
          <body className="App App-body">
            <img src={profilePic} alt="ismet" className="App-logo profile-img"></img>
              <h3> Hi I'm Arjun Raja Y </h3>
              <p> Fullstack Web Developer and Software Engineer. Welcome to my Website </p>
          </body>
        </Content>
      </Layout>
       
        
      </div>
    );
  }
}

export default Homepage;