import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom'
import postal from 'postal'; 

export default class TabsPage extends Component {
        
    constructor()
    {
        super();
        //this.subscription = null; 
          
    }
    
  componentWillMount()
  {
      this.state =  this.props 
      let me = this;
 
      //props
          
      //displayText: 
      //id 
      //selected: 
      
  }
  
  componentWillReceiveProps(nextProps)
  {
      this.setState(nextProps)
  }
 
    
  selectTab()
  {
     // console.log("doing a select "+this.props.arrayIndex)
      postal.publish({
                   channel: "tab-system",
                   topic: "select-tab" ,
                  data:  {id: this.props.id}
               }); 
      
  }
    
  removeTab(e)
  {
      
      e.stopPropagation();
      postal.publish({
                   channel: "tab-system",
                   topic: "remove-tab" ,
                  data:  {id: this.props.id}
               });
  }
  
  computeTabCss()
  {
      let css = "demo-tab"
      if (this.state && this.state.selected)
      {
          css = css + " active-tab"
      }
      return css;
  }
     
  render() {
    let me = this;
    return (
       
        <div onClick={me.selectTab.bind(me)} className={me.computeTabCss()}>
                <div className="demo-tab-text">
                    {this.props.displayText}  
                    <div className='tab-close'>
                        <div onClick={me.removeTab.bind(me)}className='tab-close-x fi-x'></div>
                    </div>
                </div>
        </div>
       
    );
  }
  
  
}