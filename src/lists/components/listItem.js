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
        if (this.props.selections)
        {
                for(var k in this.props.selections)
                {
                    var id = this.props.selections[k].id;
                    if (this.props.item.id == id)
                    {
                       this.state.isSelected = true;
                       break;
                    }
                }
         }
        
    }
    
    componentWillReceiveProps(nextProps)
    {
        
        var newState = {isSelected: false,hidden: false};
        var me = this;
       
            ////typeahead filter ////////////////////
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
            ///// grey out and selections ////////////////////////
            //{"alpha": 8, "beta":22}
             //console.log("listItem Selections "+JSON.stringify(nextProps.selections))  
             for(var k in nextProps.selections)
             {
                 var id = nextProps.selections[k].id;
                 if (this.props.item.id == id)
                 {
                    newState.isSelected = true;
                    break;
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
    
    onClick()
    {
         if (!this.state.isSelected && !this.state.hidden)
         {
            this.props.clickCallBack(this.props.item);
         }
    }
     
  render() {
      
    return (
      
      
        <li  onClick={this.onClick.bind(this)} className={this.computeCSS()}>{this.props.item.name}</li>
      
       
    );
  }
  
  
}