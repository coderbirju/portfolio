import React from 'react';
import '../global-css.css';
import { Layout } from 'antd';
const { Content } = Layout;

class About extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Content>
            <div className="App App-body">
                <h3> About ME </h3>
                <p> AVOVOJIVAIV </p>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default About;
