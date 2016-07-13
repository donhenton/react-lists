import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import ItemTab from './itemTab';
import postal from 'postal';
 

export default class TabsPage extends Component {
        
    constructor()
    {
        super();
        this.tabText = ['get a job', 'get a job 2', 'get a job 3']
         
          
    }
    
    componentDidMount()
    {
        // tabs will contain the indices of existing tabs eg [0,1,2]
        this.state = {currentTabIndex: -1,tabs: []}
        let me = this;
        postal.subscribe({
        channel: "tab-system",
                topic: "remove-tab",
                callback: function (data, envelope) {

                    //data will contain the index
                    let newTabs = me.state.tabs.filter((idx) =>
                            {return (idx != data.arrayIndex)}
                            
                            )
                     
                    let newIndex = newTabs.length - 1;
                    
                    me.setState({tabs: newTabs,currentTabIndex: newTabs[newIndex]})
                   

                }
        });  
         postal.subscribe({
         channel: "tab-system",
                topic: "select-tab",
                callback: function (data, envelope) {

                    //data will contain the index
                    me.setState({currentTabIndex: data.arrayIndex})                          

                }
        });  
    }
    
    
    addTab()
    {
        let newTabs = JSON.parse(JSON.stringify(this.state.tabs));
        if (newTabs.length < this.tabText.length)
        {
            let newIdx = newTabs.length;
            newTabs.push(newIdx);
            this.setState({tabs: newTabs,currentTabIndex: newIdx})
             
        }
        
    }
    
    getAddTabCss()
    {
        let css = "add-tab";
        
        if (!(this.state) || this.state.currentTabIndex < 0)
        {
            css = css + "  add-tab-standalone";
        }
        if (this.state && (this.state.tabs.length == this.tabText.length))
        {
            css = css + " hidden";
        }
        
        
        return css;
        
    }
    
     
    renderTabs()
    {
        let renderItems = [];
        let me = this;
        if (this.state && this.state.tabs)
        {
            
            this.state.tabs.forEach((tabIdx) => {
                
                let displayText = me.tabText[tabIdx]
                let selectState = false;
                if (tabIdx === me.state.currentTabIndex)
                {
                    selectState = true;
                }
                renderItems.push(<ItemTab key={tabIdx} arrayIndex={tabIdx} selected={selectState} displayText = {displayText} />)
            })
        }
        
        return renderItems;
    }
     
     
     
  render() {
    let me = this;
    return (
       
       <section className="tabContainer">
       <div className="tabBar">
       {me.renderTabs()}
            <div className={me.getAddTabCss()}>
                <div className="add-tab-icon-wrap">
                    <div onClick={me.addTab.bind(me)} className='add-tab-icon fi-plus'></div>
                </div>
            </div>         
                    
                    
      </div>
       
       <div className="tabBody"></div>
       
       
       
       </section>
       
    );
  }
  
  
}