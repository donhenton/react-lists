import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import NavComponent from './navComponent'
import {createRoutes} from './routes'
import { Router, browserHistory } from 'react-router';
  
  
  ReactDOM.render(
 
    <Router routes={createRoutes()} history={browserHistory} />
   
  , document.querySelector('#pageContainer'));




