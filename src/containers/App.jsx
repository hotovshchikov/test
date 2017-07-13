/*
 * Core imports
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

/*
 * Container imports
 */
import Project from 'containers/Project';
import Chat from 'containers/Chat';
import Backlog from 'containers/Backlog';
import Calendar from 'containers/Calendar';
import Board from 'containers/Board';

/*
 * Component imports
 */
import Menu from 'components/Menu/Menu';

/*
 * Router history to be passed to children
 */
const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <div>
      <Menu />
      <Switch>
        <Route exact path="/" component={Project} />
        <Route path="/chat" component={Chat} />
        <Route path="/backlog" component={Backlog} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/board" component={Board} />
        <Route render={() => <h1>PAGE NOT FOUND!</h1>} />
      </Switch>
    </div>
  </Router>
);

export default App;
