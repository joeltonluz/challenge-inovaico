import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import Patients from '../pages/patients';


const Routes = () => {
  return (
    <Switch>
      <Route path = "/" exact component={Main} />
      <Route path = "/patients" component={Patients} />
      <Route path = "schedules" />
    </Switch>
  )
}

export default Routes;