import React, {Component} from 'react';

import DataTable from '../pageComponent/DataTable/DataTable.js';
import Data from '../pageComponent/DataTable/sampleMovieData.js';
import Form from '../pageComponent/form/Form.js';


// export default class Content extends Component {
//     render(){
const Content = (props)=> {
// Table Component
// Table const value
// 	const columns = [
// 	{
// 	name: 'Title',
// 	selector: 'title',
// 	sortable: true,
// 	},
// 	{
// 	name: 'Year',
// 	selector: 'year',
// 	sortable: true,
// 	},  {
// 	name: 'Director',
// 	selector: 'director',
// 	sortable: true,
// 	},
// 	{
// 	name: 'Actors',
// 	selector: 'actors',
// 	sortable: true,
// 	},
// 	{
// 	name: 'Duration',
// 	selector: 'duration',
// 	sortable: true,
// 	},
// 	];

// const cellkeys = [ {"name":"title"}, {"name":"year"}, {"name":"director"} ,
// 				{"name":"actors"},{"name":"runtime"}];

// // ./Table const value

//   // console.log(cellkeys);
//   // console.log(Data);
//   // console.log(props);

//   // console.log("Content js");


//     //  return (
// 	   //  <section className="content">
// 	   //  	<DataTable title="Data Table With Full Features" columns={columns} data={Data} cellkeys={cellkeys}/>
// 	  	// </section>
//     //  );}

// ./Table


// Form
const properties={
	formcolumn:2,
	method:"POST",
	action:"abc",
	buttonText:"Save",
};
	const components=[];
	components[0] = [
	{
	type:'text', //input "type" attribute
	placeholder:'Enter Text',
	componentType:'input', //html element type like input select or checkbox
	label:'Label',
	value:'input',
	name: 'Title',//input "name" attribute
	disable:false,
	sortable: true,
	},
	{
	type:'text',
	placeholder:'Enter Text',
	componentType:'input',
	label:'Label',
	value:'input',
	name: 'Year',
	disable:false,
	sortable: true,
	},
	{
	type:'text',
	placeholder:'Enter Text',
	componentType:'input',
	label:'Label',
	value:'input',
	name: 'Director',
	disable:false,
	sortable: true,
	},
	{
	type:'text',
	placeholder:'Enter Text',
	componentType:'input',
	label:'Label',
	value:'input',
	name: 'Actors', 
	disable:false,
	sortable: true,
	},
	{
	type:'text',
	placeholder:'Enter Text',
	componentType:'input',
	label:'Label',
	value:'input',
	name: 'Duration',
	disable:false,
	sortable: true,
	},
	];
	components[1]=[
	{
	type:'text', //input "type" attribute
	placeholder:'Enter Text',
	componentType:'input', //html element type like input select or checkbox
	label:'Label',
	value:'input',
	name: 'Title',//input "name" attribute
	disable:false,
	sortable: true,
	},
	{
	type:'text',
	placeholder:'Enter Text',
	componentType:'input',
	label:'Label',
	value:'input',
	name: 'Year',
	disable:false,
	sortable: true,
	},
	{
	type:'text',
	placeholder:'Enter Text',
	componentType:'input',
	label:'Label',
	value:'input',
	name: 'Directorr',
	disable:false,
	sortable: true,
	},
	{
	type:'text',
	placeholder:'Enter Text',
	componentType:'input',
	label:'Label',
	value:'input',
	name: 'Actorss', 
	disable:false,
	sortable: true,
	},
	{
	type:'text',
	placeholder:'Enter Text',
	componentType:'input',
	label:'Label',
	value:'input',
	name: 'Durationn',
	disable:false,
	sortable: true,
	},
	];


// var components2=components.slice(0,components.length/2);
// console.log(components2.length);
// ./Form
     return (
	    <section className="content">
          <Form components={components} properties={properties}/>
	  	</section>
     );}
    
export default Content;
