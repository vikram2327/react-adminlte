import React, {Component} from 'react';

import DataTable from '../pageComponent/DataTable/DataTable.js';
import Data from '../pageComponent/DataTable/sampleMovieData.js';


// export default class Content extends Component {
//     render(){
const Content = (props)=> {

	const columns = [
	{
	name: 'Title',
	selector: 'title',
	sortable: true,
	},
	{
	name: 'Year',
	selector: 'year',
	sortable: true,
	},  {
	name: 'Director',
	selector: 'director',
	sortable: true,
	},
	{
	name: 'Actors',
	selector: 'actors',
	sortable: true,
	},
	{
	name: 'Duration',
	selector: 'duration',
	sortable: true,
	},
	];

const cellkeys = [ {"name":"title"}, {"name":"year"}, {"name":"director"} ,
				{"name":"actors"},{"name":"runtime"}];

  // console.log("Content js");

  // console.log(cellkeys);
  // console.log(Data);
  // console.log(props);
     return (
	    <section className="content">
	    	<DataTable title="Data Table With Full Features" columns={columns} data={Data} cellkeys={cellkeys}/>
	  	</section>
     );}
    
export default Content;
