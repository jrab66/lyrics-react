import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import IndexMenu from './containers/Index/Index';
import MainContainerv2 from './containers/MainContainerv2/MainContainerv2';
import TaskContainer from './containers/TaskContainer/TaskContainer';
import Container404 from './containers/Container404/Container404'
import Lyrics from './containers/LyricsFind/LyricsFind'

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <IndexMenu/>
          </Route>
          <Route exact path="/test">
            <Lyrics/>
          </Route>
          <Route exact path="/tareas">
            <MainContainerv2/>
          </Route>
          <Route path="/create">
            <TaskContainer/>
          </Route>
          <Route path="*">
            <Container404 />
          </Route>
      </Switch>
  </Router>
  );
}

export default App;
