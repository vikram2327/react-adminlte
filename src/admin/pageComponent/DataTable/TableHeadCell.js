import React, {Component} from 'react';

const TableHeadCell = (props)=> {
            // console.log("TableHead js");
  // console.log(props);
  return (
    <th>{props.columns.name}</th>             
  )
}

export default TableHeadCell;
