import React from 'react';
import '../global-css.css';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import { MailOutlined, AppstoreOutlined, GithubFilled } from '@ant-design/icons';

class HeadNav extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
        <div className="App-header">
            <Menu  onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="mail" icon={<MailOutlined />}>
                    <Link to='/'> Home </Link>
                </Menu.Item>
                <Menu.Item key="about" icon={<AppstoreOutlined />}>
                    <Link to='/about'> About </Link>
                </Menu.Item>
                <Menu.Item key="git" icon={<GithubFilled />}>
                <Link to='/projects'> Projects </Link>
                </Menu.Item>
                
                <Menu.Item key="alipay">
                <a href="https://powerful-mesa-36430.herokuapp.com/" target="_self" rel="noopener noreferrer">
                    CampChamp
                </a>
                </Menu.Item>
            </Menu>
      </div>
    );
  }
}

export default HeadNav;