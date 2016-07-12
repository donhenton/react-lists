import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom'
import { Link } from 'react-router';

export default class NavComponent extends Component {
        
    constructor()
    {
        super();
         
          
    }
    
    componentDidMount()
    {
        
    }
    
     
  render() {
      
    return (
      
      <div className="linkContainer">
         <Link className="TopLink" to="/">Lists</Link> 
         <Link className="TopLink" to="/tabs">Tabs</Link> 
      </div>
      
       
    );
  }
  
  
}