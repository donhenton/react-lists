import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom'
import DoubleList from './doubleList';
 

export default class Main extends Component {
        
    constructor()
    {
        super();
         
         
    }
    
     
  render() {
      console.log("in render")
    return (
      
      
         <div id="listContainer">
         <DoubleList />
         </div>
      
       
    );
  }
  
  
}