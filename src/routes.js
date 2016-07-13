  import Main from './lists/components/main';
import TabsPage from './tabs/tabsPage';
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Holder from './holder'  
  
  export const  createRoutes = () => (
  <Route path="/react-lists/public_html" component={Holder} >
    <IndexRoute component={TabsPage} />
     <Route path="/react-lists/public_html/tabs" component={Main} />   
    
  </Route> )