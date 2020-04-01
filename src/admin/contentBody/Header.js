import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
          // <!-- Content Header (Page header) -->
    <section className="content-header">
      <h1>
        Dashboard
        <small>Control panel</small>
      </h1>
      <ol className="breadcrumb">
        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
        <li className="active">Dashboard</li>
      </ol>
    </section>
        );}
}