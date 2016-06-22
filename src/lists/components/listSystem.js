import React from 'react';
        import { Component } from 'react';
        import postal from 'postal';
        import ListItem from './listItem';
        export default class ListSystem extends Component {

        constructor()
        {
        super();
        }


        componentWillMount()
        {

        this.state = {items: [],filterString: null};
                var me = this;
                postal.subscribe({
                channel: "list-system",
                        topic: "loadData",
                        callback: function (data, envelope) {

                        me.setState({items: data});
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




        renderItems()
        {
        var items = [];
                var me = this;
                this.state.items.forEach(function(item){

                items.push( < ListItem filter={me.state.filterString} key = {item.id} item = {item} / > );
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