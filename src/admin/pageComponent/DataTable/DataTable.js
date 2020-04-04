import React, {Component} from 'react';
import Table from './Table.js';


const DataTable = (props)=> {
  console.log("DataTable js");
  // console.log(props);
  // console.log(props.data);
  console.log(props.cellkeys);
  
            return (
                    <div className="box">
                      <div className="box-header">
                        <h3 className="box-title">{props.title}</h3>
                      </div>
                      {/* <!-- /.box-header --> */}
                      <div className="box-body">
                        <Table data={props.data} columns={props.columns} cellkeys={props.cellkeys} />
                      </div>
                      {/* <!-- /.box-body --> */}
                    </div>

)
}

export default DataTable;
