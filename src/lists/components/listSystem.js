import React from 'react';
        import { Component } from 'react';
        import postal from 'postal';
        import ListItem from './listItem';
        import utils from './utils';
        export default class ListSystem extends Component {

        constructor()
        {
        super();
        }


        componentWillMount()
        {

           this.state = {items: [],filterString: null,selections:{}};
                var me = this;
                postal.subscribe({
                channel: "list-system",
                        topic: "loadData",
                        callback: function (data, envelope) {

                        me.setState({items: data});
                        }
               });
               
            /**
                 
                * inbound is {listName: 'alpha', item: item }
                * state.selections will  accumulate the {listName, item} pairs
                * from each list
                * 
                * each list has a listName property set on its use
                * 
                * so state.selections  will look like {'alpha': {id: ...., 'beta': {id: ..., ..... }
                */
               
               postal.subscribe({
                channel: "list-system",
                        topic: "makeSelection",
                        callback: function (data, envelope) {
                               
                               var newSelections =  utils.clone(me.state.selections);
                               newSelections[data.listName] =   data.item;
                               me.setState({selections: newSelections});
                              // console.log("listSystem Selections "+JSON.stringify(newSelections))                             
                                
                        }
               });   
               
               
               
               
               
               
        }


        filterList(e)
        {
        var tempFilter = null;
                if (e.key == 'Backspace')
        {
        tempFilter = e.target.value;
        }
        else
        {
        tempFilter = e.target.value;
        }
        if (!tempFilter || tempFilter.length === 0)
        {
        tempFilter = null;
        }

        this.setState({filterString: tempFilter});
                // Actions.requestSelectionsBroadcast();
        }

clickCallBack(item)
        {
            
             var message = {listName: this.props.listName, item: item };
            // message[this.props.listName] =  item.id
             postal.publish({
               channel: "list-system",
               topic: "makeSelection" ,
               data:  message
            });
        }


        renderItems()
        {
                var items = [];
                var me = this;
                this.state.items.forEach(function(item){

                items.push( < ListItem filter={me.state.filterString} clickCallBack={me.clickCallBack.bind(me)} selections={me.state.selections} key = {item.id} item = {item} / > );
                });
                return items;
        }

        render() {
        var me = this;
                return (
                        <table  id = {'entry-' + this.props.entryType} className = "entryContainer">
                        <tbody>
                        <tr><td className = "entryBoxContainerBackground">
                        <div  className = "entryBoxContainer">
                        <input  id = {this.props.entryType + '-input'} onKeyUp = {this.filterList.bind(this)} className = "entry" / >
                        <span className = "search"> <i className = "fi-magnifying-glass" > </i></span>
                        </div>
                        </td></tr>
                        <tr><td>
                        <ul className = "itemList" >
                            {me.renderItems()}
                        </ul>
                        </td></tr>
                        </tbody>
                        </table>


                        );
        }

        }