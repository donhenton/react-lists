import React from 'react';
import { Component } from 'react';
import postal from 'postal';
import utils from './../utils'
 

export default class ListenerBase extends Component {
        
    constructor()
    {
        super();
         
          
    }
    
    
       componentWillMount()
        {
            var me = this;
            this.state = {selections:{}};
              /**
                 
                * inbound is {listName: 'alpha', item: item }
                * state.selections will  accumulate the {listName, item} pairs
                * from each list
                * 
                * each list has a listName property set on its use
                * 
                * so state.selections  will look like {'alpha': {id: ...., 'beta': {id: ..., ..... }
                */
               
               postal.subscribe({
                channel: "list-system",
                        topic: "makeSelection",
                        callback: function (data, envelope) {
                               
                               var newSelections =  utils.clone(me.state.selections);
                               newSelections[data.listName] =   data.item;
                               me.setState({selections: newSelections});
                              // console.log("listSystem Selections "+JSON.stringify(newSelections))                             
                                
                        }
               });   
               
        
        
    }
    
 
     
  render() {
      
    return (
      
      
       <span></span>
      
       
    );
  }
  
  
}