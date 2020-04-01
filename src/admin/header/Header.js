import React, {Component} from 'react';
import Logo from './Logo';
import Nav from './Nav';

export default class Header extends Component {
    render(){
        return (
            <header className="main-header">
            {/* <!-- Header Navbar: style can be found in header.less --> */}
            <Logo/>
            <Nav/>
            </header>
        );
    }
}