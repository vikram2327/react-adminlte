import React, {Component} from 'react';
import Header from './Header';
import Content from './Content';

export default class ContentWrapper extends Component {
    render(){
        return (

  <div className="content-wrapper">
    <Header/>
    <Content/>

  </div>

        );}
    }
    
