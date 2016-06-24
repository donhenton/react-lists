import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom'
import DoubleList from './doubleList';
import DataService from './../services/dataService';

export default class Main extends Component {
        
    constructor()
    {
        super();
         this.dataService = new DataService();
          
    }
    
    componentDidMount()
    {
        
        
        this.dataService.initializeData();
    }
    
     
  render() {
      
    return (
      
      
         <div id="listContainer">
         <DoubleList />
         </div>
      
       
    );
  }
  
  
}