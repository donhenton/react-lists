import React from 'react';
import { Component } from 'react';
import ListenerBase from './selectListeners/listenerBase';
 

export default class ListItem extends ListenerBase {
        
    constructor()
    {
        super();
         
          
    }
       
  renderList()
  {
      var items = [];
      for(var k in this.state.selections)
             {
                 var id = this.state.selections[k].id;
                 var name = this.state.selections[k].name;
                 items.push(
                        <li key={id}><b>{k}:</b> {name}</li> 
                        
                        
                        )
                  
             }
             
      return items;
  }
     
  render() {
      
    return (
      
      
        <ul className="basic-list">
        {this.renderList()}
        
        
        </ul>
      
       
    );
  }
  
  
}