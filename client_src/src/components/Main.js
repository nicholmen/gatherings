import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Gatherings from './Gatherings';
import About from './About';
import GatheringDetails from './GatheringDetails';
import AddGathering from './AddGathering';
import EditGathering from './EditGathering'

const Main = () => (
  <main>
    <Switch>
      <Route exact path ='/' component={Gatherings} />
      <Route exact path ='/about' component={About} />
      <Route exact path ='/gatherings/add' component={AddGathering} />
      <Route exact path ='/gatherings/edit/:id' component={EditGathering} />
      <Route exact path ='/gatherings/:id' component={GatheringDetails} />
    </Switch>
  </main>
)

export default Main;
