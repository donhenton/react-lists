import React from 'react';
import { Component } from 'react';
import ListenerBase from './selectListeners/listenerBase';
 

export default class SelectButton extends ListenerBase {
        
    constructor()
    {
        super();
         
          
    }
       
   renderCSS()
   {
       let css = "btn btn-primary pull-right hidden";
       var keyCount = Object.keys(this.state.selections).length;
        
       if (keyCount > 1)
       {
           css = "btn btn-primary pull-right";
       }
        
       return css;
   }
   
  clickAction()
  {
      
      this.props.clickAction();
      
  }
     
  render() {
      
    return (
      
      
        <button onClick={this.clickAction.bind(this)}   className={this.renderCSS()}>Add Third Restaurant</button>
      
       
    );
  }
  
  
}