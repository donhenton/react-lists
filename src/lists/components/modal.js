 import React from 'react';
import { Component } from 'react';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';
 
/**
 * simple modal
 * adapted from 
 * https://github.com/tryolabs/react-examples/tree/master/modal
 * http://blog.tryolabs.com/2015/04/13/a-reusable-modal-component-in-react/
 * 
 * PROPS:
 * 
 * modalLabel:          Text for the modal defaults to 'Modal Label'
 * 
 * transitionName:      the css class prefix for the animations for 
 *                      ReactCSSTransitionGroup
 * 
 * modalClassName       enclosing css class to allow for namespacing of 
 *                      modal css classes
 * 
 * 
 * 
 */
export default class Modal extends Component {
        
    constructor()
    {
        super();
         
          
    }
    
     
    
    componentWillMount()
    {

       this.props =  {modalLabel: 'Modal Label',modalClassName: "simple-modal"};
       var isOpen = false;
       if (this.props.isOpen)
       {
           isOpen = this.props.isOpen;
       }
        this.state = {isOpen: isOpen};
  
    }
   
    
    componentWillReceiveProps(nextProps)
   {
      this.setState({isOpen: nextProps.isOpen});
   } 
    
   cancel()
   {
        this.setState({isOpen: false});
   } 
   
   open()
   {
       this.setState({isOpen: true})
   }
   
   backgroundCSS()
   {
       var bkgValue = "modal-bkgMask";
       
       if (this.state.isOpen == false)
       {
           bkgValue =  bkgValue + " modal-hidden";
       }
       
       return bkgValue;
       
       
   } 
    
    
    
  render()
   {
            
           if(this.state.isOpen)
           {
            return (
              <div className={this.props.modalClassName}>
              <div className={this.backgroundCSS()}></div>
              <ReactCSSTransitionGroup transitionName={this.props.transitionName} transitionEnterTimeout={5} transitionLeaveTimeout={5}>
              
               <div className="modal">
               
                   <div className="modalHeader"><span>{this.props.modalLabel}</span> <span onClick={this.cancel} className='btnClose'>X</span></div>
                  <div className="modalContent">
                  {this.props.children}
                  </div>
                  
                </div>  
              </ReactCSSTransitionGroup>
              </div>
            ) 
           } else {
            return <ReactCSSTransitionGroup transitionName={this.props.transitionName} transitionEnterTimeout={5} transitionLeaveTimeout={5} />
          }
         
   }
   
  
}