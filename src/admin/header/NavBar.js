import React, {Component} from 'react';
import Logo from './Logo';
import Nav from './NavBar';
import Message from './Message';
import Task from './Task';
import Notification from './Notification';
import User from './User';

export default class Header extends Component {
    render(){
        return (
                <ul className="nav navbar-nav">
                  {/* <!-- Messages: style can be found in dropdown.less--> */}
                  <Message/>
                  {/* <!-- Notifications: style can be found in dropdown.less --> */}
                  <Notification/>
                  {/* <!-- Tasks: style can be found in dropdown.less --> */}
                  <Task/>
                  {/* <!-- User Account: style can be found in dropdown.less --> */}
                  <User/>
                  {/* <!-- Control Sidebar Toggle Button --> */}
                  <li>
                    <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                  </li>
                </ul>
              );}
      }
