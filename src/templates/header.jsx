import React from 'react';
import '../global-css.css';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

class Header extends React.Component {
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
                    <Link to="/"> Home </Link>
                </Menu.Item>
                <Menu.Item key="app" icon={<AppstoreOutlined />}>
                    <Link to="/About"> About </Link>
                </Menu.Item>
                <Menu.Item key="app" icon={<AppstoreOutlined />}>
                    <Link to="/About"> About </Link>
                </Menu.Item>
                
                <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
                </a>
                </Menu.Item>
            </Menu>
      </div>
    );
  }
}

export default Header;