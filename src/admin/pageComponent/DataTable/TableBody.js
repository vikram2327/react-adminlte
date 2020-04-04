import React, {Component} from 'react';
import TableRow from './TableRow.js';

const TableBody = (props)=> {
	// console.log("tablebody js");
	// console.log(props.data);
// Static
//             return (
//                 <tbody>
//                   <TableRow/>
//                 </tbody>
// );
// var numbers = [4, 9, 16, 25];
// var x = numbers.map(Math.sqrt)

var i=0;
var z=props.data.map((data)=>{
	// console.log("vk");
	// console.log(props.data[i++]['id']);
	return <TableRow  key={props.data[i++]['id']} data={data} cellkeys={props.cellkeys}/>;
  });

   return (
                <tbody>
                	{z}
                </tbody>
);
        }
export default TableBody;
