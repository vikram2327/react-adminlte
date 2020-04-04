import React, {Component} from 'react';
import TableHeadCell from './TableHeadCell.js';


const TableHead = (props)=> {
            // console.log("TableHead js");
  // console.log(props);
//     // return (
//     //             <thead>
//     //             <tr>
//     //               <th>Rendering engine</th>
//     //               <th>Browser</th>
//     //               <th>Platform(s)</th>
//     //               <th>Engine version</th>
//     //               <th>CSS grade</th>
//     //             </tr>
//     //             </thead>
             
// )

var i=0;
    var a=props.columns.map((columns)=>{
// console.log("vk cellkeys map");
// var a=cellkeys.name;
// console.log(columns);
// console.log(props.data['title']);
// console.log(props.data[console.log(JSON.stringify(a))]);
// console.log(props.data[(JSON.stringify(a))]);
        return <TableHeadCell key={columns.name}  columns={columns}/>;
        // return <TableCell data={props.data} keys={keys}/>;
      });
  // return(<thead><TableHeadCell/></thead>);
  return(<thead><tr>{a}</tr></thead>);
}

export default TableHead;
