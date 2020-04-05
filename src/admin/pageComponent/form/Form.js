import React, {Component} from 'react';
import FormGroup from './FormGroup.js';

const Form = (props)=> {

// console.log("Form JS");
console.log(props.components);
var components=props.components;
console.log(components.length);
// var elements=components.map((components)=>{
// // console.log(components);
//     return <FormGroup key={components.name} components={components} />
	
// 	// return "vk"; 
// });

var column=components.length;
var columnLength=12/column;
var form;
var elements=components.map((components)=>{
// console.log(components);
   form=components.map((components)=>{
// console.log(components);
    return <FormGroup key={components.name} components={components} columnLength={columnLength}/>
	
	// return "vk"; 
});
	              // console.log("form");
	              // console.log(form);
	              // console.log(col);
	              // console.log(colu);
   // return (<div className="col-md-"colu>{form}</div> );
return form

	// return "vk"; 
});
console.log("elements");
console.log(elements);

// console.log(props.properties.formcolumn);
// var a=props.properties.formcolumn-1;
// console.log(a);
// var col[a]=components.slice(0,components.length/props.properties.formcolumn);
// console.log(components2.length);

   return (
    <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title">Quick Example</h3>
            </div>
            {/* <!-- /.box-header --> */}
            {/* <!-- form start --> */}
            <form role="form" action={props.properties.action} method={props.properties.method} >
              <div className="box-body">
	                {elements}
	          </div>
              {/* <!-- /.box-body --> */}

              <div className="box-footer">
                <button type="submit" className="btn btn-primary">{props.properties.buttonText}</button>
              </div>
            </form>
          </div>
        )
 }
export default Form;
