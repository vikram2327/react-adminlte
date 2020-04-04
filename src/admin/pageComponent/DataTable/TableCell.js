import React, {Component} from 'react';

const TableCell = (props)=> {
    console.log("TableCell js")
    console.log(props.cellkeys.name)
    console.log(props.data[props.cellkeys.name]);
    // console.log(props.data)
    // const name=props.keys.name;
    // const data=props.data;
      // <td>{props.data.director}</td>

 // props.data['title']
  return (
      <td>{props.data[props.cellkeys.name]}</td>
  );
}
export default TableCell;