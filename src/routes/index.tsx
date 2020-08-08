import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Teste01 from '../pages/teste01';
import Pendings from '../pages/InstallmentsPayment/Pendings';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path= '/pendings' component={Pendings}/> 
    <Route exact path= '/teste' component={Teste01}/>
  </Switch> 
);

export default Routes;