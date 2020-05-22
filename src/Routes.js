import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './templates/Homepage';
import About from './templates/About';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


export default function Routes() {
  return (
    <Router>
      <Menu  mode="horizontal">
            <Menu.Item  icon={<MailOutlined />}>
                noooo
            </Menu.Item>
            <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                waaay
            </Menu.Item>
        </Menu>
        {/* <Menu mode="horizontal">
          <Menu.Item>
              <Link to="/"> Home </Link>
           </Menu.Item>
           <Menu.Item>
                <Link to="/About">About</Link>
          </Menu.Item>
        </Menu> */}
            <Switch>
                <Route path="/About">
                    <About/>
                </Route>
                <Route path="/">
                    <Homepage />
                </Route>
            </Switch>
    </Router>
  );
}