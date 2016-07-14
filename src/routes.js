  import Main from './lists/components/main';
import TabsPage from './tabs/tabsPage';
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Holder from './holder'  
  
  export const  createRoutes = () => {
      
      let pathname = window.location.pathname;
     // console.log("pathname '"+pathname+"'")
      
   return (
  <Route path={pathname} component={Holder} >
    <IndexRoute component={TabsPage} />
     <Route path={pathname+"tabs"} component={Main} />   
    
  </Route> )
  

}