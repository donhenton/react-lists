import React from 'react';
import { Component } from 'react';
import ListSystem from './listSystem';
import Reporting from './reporting'
import SelectButton from './selectButton'
import Modal from './modal'

export default class DoubleList extends Component {
        
    constructor()
    {
        super();
         
         
    }
    
    componentWillMount()
    {
         
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
                 <SelectButton />
                </div>
                <div className="columnLeft">
                <Reporting />
                </div>

            </div>
    
    
            <Modal ref="selectionModal"   transitionName="modal-anim" modalClassName="comparison-modal" />
      
    
      </div>
    
       
      
      
       
    );
  }
  
  
}