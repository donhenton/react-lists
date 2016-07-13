  import Main from './lists/components/main';
import TabsPage from './tabs/tabsPage';
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Holder from './holder'  
  
  export const  createRoutes = () => (
  <Route path="/" component={Holder} >
    <IndexRoute component={TabsPage} />
     <Route path="tabs" component={Main} />   
    
  </Route> )