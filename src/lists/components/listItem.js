import React from 'react';
import { Component } from 'react';
 
 

export default class ListItem extends Component {
        
    constructor()
    {
        super();
         
          
    }
    
    componentWillMount()
    {
        this.state = {isSelected: false, hidden: false};
    }
    
    componentWillReceiveProps(nextProps)
    {
        
        var newState = {isSelected: false,hidden: false};
       
       
            if (!nextProps.filter)
            {
                //false
                newState.hidden = false;
                 
            }
            else
            {

                if (nextProps.filter && 
                        this.props.item.name.toUpperCase().trim().
                        indexOf(nextProps.filter.toUpperCase()
                        .trim()) > -1)
                {

                    newState.hidden = false;
                } else
                {
                    newState.hidden = true;
                }
            }    
       
       
       this.setState(newState);
    }
    
    computeCSS()
    {
        
        var css = "itemListItem ";
      if (this.state.isSelected)
      {
          css = css + " itemSelected";
      }
      if (this.state.hidden)
      {
          css = css + " itemHidden";
      }
      
      return css;
        
    }
    
     
  render() {
      
    return (
      
      
        <li   className={this.computeCSS()}>{this.props.item.name}</li>
      
       
    );
  }
  
  
}