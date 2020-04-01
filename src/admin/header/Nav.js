import React, {Component} from 'react';
import NavBar from './NavBar';

export default class Logo extends Component {
    render(){
        return (
<nav className="navbar navbar-static-top">
              {/* <!-- Sidebar toggle button--> */}
              <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                <span className="sr-only">Toggle navigation</span>
              </a>
        
              <div className="navbar-custom-menu">
                <NavBar/>
              </div>
            </nav>
            );
    }
}