import React, {Component} from 'react';
import TableHead from './TableHead.js';
import TableBody from './TableBody.js';
import TableFooter from './TableFooter.js';
import TablePagination from './TablePagination.js';
                // <TablePagination/>


const Table = (props)=> {
    // console.log("Table js");
  // console.log(props);

            return (
              <table id="example1" className="table table-bordered table-striped">
                <TableHead columns={props.columns}/>
                <TableBody data={props.data} cellkeys={props.cellkeys}/>
                <TableFooter/>
              </table>
)
}

export default Table;
