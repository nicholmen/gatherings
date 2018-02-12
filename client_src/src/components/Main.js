import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Gatherings from './Gatherings';
import About from './About';

const Main = () => (
  <main>
    <Switch>
      <Route exact path ='/' component={Gatherings} />
      <Route exact path ='/about' component={About} />

    </Switch>
  </main>
)

export default Main;
