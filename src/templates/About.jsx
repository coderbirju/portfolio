import React from 'react';
import '../global-css.css';
import HeadNav from './header';
import { Layout } from 'antd';
const { Header,Content } = Layout;

class About extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header>
            <HeadNav />
          </Header>
          <Content>
            <div className="App">
              <body className="App App-body">
                  <h3> About ME </h3>
                  <p> AVOVOJIVAIV </p>
              </body>
            </div>
          </Content>
        </Layout>
      </div>
      
    );
  }
}

export default About;
