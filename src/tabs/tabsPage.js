import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import ItemTab from './itemTab';
import postal from 'postal';
 

export default class TabsPage extends Component {
        
    constructor()
    {
        super();
        
         
          
    }
    
    componentDidMount()
    {
        // tabs will contain the indices of existing tabs eg [0,1,2]
        this.state = {currentTab: [],tabs: []}
        this.state.tabs = [
            {text: 'get a job 0',id: 1,added: false, selected: false}, 
            {text: 'get a job 1',id: 2,added: false, selected: false},
            {text: 'get a job 2',id: 3,added: false, selected: false},  ]
        
        let me = this;
        postal.subscribe({
        channel: "tab-system",
                topic: "remove-tab",
                callback: function (data, envelope) {

                  let newTabs =    me.state.tabs.map((tab) => {
                         
                         if (tab.id == data.id)
                         {
                             tab.added = false;
                              
                         }
                         tab.selected = false;
                         return tab;
                         
                     });
                 let lastIdx = -1;
                 for (var i=newTabs.length-1; i> -1; i--)
                 {
                     if (newTabs[i].added == true && newTabs[i].selected == false)
                     {
                         newTabs[i].selected = true;
                         break;
                     }
                 }
                 
                 
                  
                 me.setState({tabs: newTabs})
                   

                }
        });  
         postal.subscribe({
         channel: "tab-system",
                topic: "select-tab",
                callback: function (data, envelope) {
                          

                  let newTabs =    me.state.tabs.map((tab) => {
                    tab.selected = false;     
                    if (tab.id == data.id)
                    {
                        tab.selected = true;

                    }
                    
                    return tab;
                         
                     });
                
                  me.setState({tabs: newTabs})



                }
        });  
    }
    
    
    addTab()
    {
         let mytabs = JSON.parse(JSON.stringify(this.state.tabs));
         for(var i=0 ;i< mytabs.length;i++)
         {
              mytabs[i].selected = false;
            
             
         }
         for(var i=0 ;i< mytabs.length;i++)
         {
             
             if (mytabs[i].added === false)
             {
                 mytabs[i].added = true;
                 mytabs[i].selected = true;
                 break;
             }
             
         }
         this.setState({tabs: mytabs});
        
    }
    
    countTabs()
    {
       let ct  =
       this.state.tabs.filter((tab) =>
               {
                return tab.added;
       })
        
       return ct.length;
    }
    
    getAddTabCss()
    {
        let css = "add-tab add-tab-standalone ";
        
         if ((this.state) &&  (this.countTabs() >0))
         {
             css =   "add-tab ";
         }
         if (this.state && (this.countTabs() == this.state.tabs.length))
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
            this.state.tabs.map((tab) => {
                if (tab.added)
                {
                    renderItems.push(<ItemTab displayText={tab.text} id={tab.id} key={tab.id} selected={tab.selected} /> )
                }
                
            })
        }
        
        return renderItems;
    }
     
   getBodyText()
   {
       let text = null;
       if (this.state)
       {
           
           let selected = this.state.tabs.filter((tab) => {
               
               return tab.selected;
               
               
           })
           
           if (selected && selected.length == 1)
           {
               text = selected[0].text
           }
       }
       
       
       return text;
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
       
       <div className="tabBody">
       <div className="tabBody-inner">{me.getBodyText()}</div>
                    
       </div>
       
            
       
       </section>
       
    );
  }
  
  
}