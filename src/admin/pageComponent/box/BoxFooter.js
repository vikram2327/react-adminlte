import React, {Component} from 'react';

const BoxFooter = (props)=> {

   return (
          <div className="box-footer">
            <button type="submit" className="btn btn-primary">{props.properties.buttonText}</button>
          </div>
        )
 }
export default BoxFooter;
