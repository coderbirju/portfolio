import React from 'react';
import { enquireScreen } from 'enquire-js';
import { Layout } from 'antd';
import Content3 from './Content3';
import {
  Content30DataSource,
} from '../Db/data.source';
const { Content } = Layout;


let isMobile;
enquireScreen((b) => {
  isMobile = b;
});
const { location = {} } = typeof window !== 'undefined' ? window : {};
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    
    if (location.port) {
      
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    
  }
  render() {
    const children = [
      <Content3
        id="Content3_0"
        key="Content3_0"
        dataSource={Content30DataSource}
        isMobile={this.state.isMobile}
      />
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
      {this.state.show && children}  
      </div>
    );
  }
}

export default About;
