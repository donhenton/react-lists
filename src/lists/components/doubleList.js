import React from 'react';
import { Component } from 'react';
import ListSystem from './listSystem';
import Reporting from './reporting'


export default class DoubleList extends Component {
        
    constructor()
    {
        super();
         
         
    }
    
    
  
     
  render() {
       
    return (
      
        <div>
             <h3>Select Two Items</h3>
             
             <hr/>
            <table id="comparisonContainer">
                 <tbody>
                    <tr><td id="entryAlpha"><ListSystem listName="alpha"/></td>
                         <td id="vsText">VS</td>
                         <td id="entryBeta"><ListSystem listName="beta"/></td></tr>



                   <tr><td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td id="compareButtonContainer"></td></tr>
                </tbody>
            </table>
    
            <div>
             
                <div className="columnRight">
                 <button className="btn btn-primary pull-right">Select</button>
                </div>
                <div className="columnLeft">
                <Reporting />
                </div>

                </div>
           </div>
    
       
         
      
       
    );
  }
  
  
}