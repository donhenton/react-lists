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
       let pathname = window.location.pathname;
       pathname = pathname.substring(0,pathname.lastIndexOf("/")) +"/"
       console.log("pathname '"+pathname+"'")
    return (
      
      <div className="linkContainer">
         <Link className="TopLink" to={pathname}>Tabs</Link> 
         <Link className="TopLink" to={pathname+"lists"}>Lists</Link> 
      </div>
      
       
    );
  }
  
  
}