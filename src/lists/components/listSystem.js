import React from 'react';
import { Component } from 'react';



export default class Main extends Component {
        
    constructor()
    {
        super();
         
         
    }
    
    renderItems()
    {
        return <div>fred</div>
    }
     
  render() {
     var me = this;
    return (
      
      <table  id={'entry-'+this.props.entryType} className="entryContainer">
                <tbody>
                 <tr><td className="entryBoxContainerBackground">
                  <div  className="entryBoxContainer">
                    <input  className="entry" />
                    <span className="search"><i className="fi-magnifying-glass"></i></span>
                  </div>
                </td></tr>
                 <tr><td>
                <ul className="itemList">
                 
                    {me.renderItems()}
                 
                 
                </ul>
               </td></tr>
         </tbody>
                </table>
      
       
    );
  }
  
  }