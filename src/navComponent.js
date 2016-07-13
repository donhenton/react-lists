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
         <Link className="TopLink" to="/react-lists/public_html">Tabs</Link> 
         <Link className="TopLink" to="/react-lists/public_html/tabs">Lists</Link> 
      </div>
      
       
    );
  }
  
  
}