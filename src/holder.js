import React from 'react';
import { Component } from 'react';
import NavComponent from './navComponent'  
  
  export default class Holder extends Component {
        
  constructor()
  {
      super();
       
  }
        
  render() {
    return (
       
       
      
            <div> 
                <NavComponent />
                <div>

                        {this.props.children}
                </div>
            </div>
    
       
      
    );
  }
}