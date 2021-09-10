import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import Patients from '../pages/patients';
import PatientsCreate from '../pages/patientsCreate';
import Schedules from '../pages/schedules';


const Routes = () => {
  return (
    <Switch>
      <Route path = "/" exact component={Main} />
      <Route path = "/patients" exact component={Patients} />
      <Route path = "/patients/create" component={PatientsCreate} />
      <Route path = "/schedules" component={Schedules} />
    </Switch>
  )
}

export default Routes;