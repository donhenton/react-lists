import React from 'react';
import { Component } from 'react';
import ListSystem from './listSystem';
import Reporting from './reporting'
import SelectButton from './selectButton'
import Modal from './modal'
import postal from 'postal';

export default class DoubleList extends Component {
        
    constructor()
    {
        super();
         
         
    }
    
    componentWillMount()
    {
         
    }
  
  showModal()
  {
      
        
        this.refs.selectionModal.open();
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
                 <SelectButton  clickAction={this.showModal.bind(this)} />
                </div>
                <div className="columnLeft">
                <Reporting />
                </div>

            </div>
    
    
            <Modal ref="selectionModal"  modalLabel="Select Third Restaurant" modalClassName="comparison-modal">
            <div className="third-list">
                <ListSystem listName="gamma"/>
            </div>
            </Modal>
      
    
      </div>
    
       
      
      
       
    );
  }
  
  
}