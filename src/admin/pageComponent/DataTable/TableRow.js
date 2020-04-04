import React, {Component} from 'react';
import TableCell from './TableCell.js';

const TableRow = (props)=> {
       // console.log("TableRow js");
  // console.log(props.cellkeys);
  var t='title';


//   return (
//                 <tr>
//                   <td>Vk</td>
//                   <td>Vk</td>
//                   <td>Vk</td>
//                   <td>Vk</td>
//                   <td>Vk</td>
//                 </  tr>
// );
//   return (
//                 <tr>
//                   <td>{props.data["title"]}</td>
//                   <td>{props.data.year}</td>
//                   <td>{props.data.director}</td>
//                   <td>{props.data.actors}</td>
//                   <td>{props.data.runtime}</td>
//                 </  tr>
// );
// var x;
// var keys=props.keys;
// var row='';
//                 // for (x in keys) {
//                 //   console.log(keys[x]['name']);
//                 //   row=row+"<td>"+props.data['title']+"</td>";                                                                                                                                                                                                                                                                                                                              
//                 // }
//                   // {row}
    var a=props.cellkeys.map((cellkeys)=>{
    console.log("vk cellkeys map");
    var a=cellkeys.name;
    console.log(a);
      return <TableCell key={a} data={props.data} cellkeys={cellkeys}/>;
    });

         return (
                <tr>
                {a}
                </tr>
        );
      }
export default TableRow;