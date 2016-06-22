import React from 'react';
import { Component } from 'react';
import ListSystem from './listSystem';

export default class DoubleList extends Component {
        
    constructor()
    {
        super();
         
         
    }
    
     
  render() {
      console.log("in render")
    return (
      
        <div>
             <h3>Select Two Items</h3>
            <table id="comparisonContainer">
                 <tbody>
                <tr><td id="entryAlpha"><ListSystem listName="alpha"/></td>
                     <td id="vsText">VS</td>
                     <td id="entryBeta"><ListSystem listName="beta"/></td></tr>
                     
                     
                 
               <tr><td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td id="compareButtonContainer"><button>Select</button></td></tr>
       </tbody>
            </table>
            </div>
    
       
         
      
       
    );
  }
  
  
}