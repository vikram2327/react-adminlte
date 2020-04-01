import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import ContentWrapper from './ContentWrapper';
import ContentWrapper from './admin/contentBody/ContentWrapper';
import Header from './admin/header/Header';
import LeftSidebar from './admin/sidebar/LeftSidebar';
import Footer from './admin/footer/Footer';
import RightSidebar from './admin/sidebar/RightSidebar';
import RightSidebarControl from './admin/sidebar/RightSidebarControl';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<div>
	<Header/>
	<LeftSidebar/>
	<ContentWrapper/>

	<Footer/>
	{/* <RightSidebar/> */}
	{/* <RightSidebarControl/> */}
</div>
	// <ContentWrapper/>,
  // <React.StrictMode>
  //   // <App />
  // </React.StrictMode>,
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
