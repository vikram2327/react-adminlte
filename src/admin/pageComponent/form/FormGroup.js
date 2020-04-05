import React, {Component} from 'react';
import Label from './Label.js';

const FormGroup = (props)=> {
// console.log("FormGroup JS");
// console.log(props);
// console.log(props.components);
var components=props.components;
// var elements=components.map((components)=>{
// console.log(components);
//     return <FormGroup components={components}/>
	
// 	// return "vk"; 
// });
var a=props.columnLength;
console.log(props.columnLength);
   return (
   	<div className={"col-md-"+a}>
		<div className="form-group">
			<Label label={props.components.label}/>
			<input type={props.components.type} className="form-control" id="exampleInputEmail1" name={props.components.name} disabled={props.components.disable} placeholder={props.components.placeholder}/>
		</div>
	</div>
        )
 }
export default FormGroup;
