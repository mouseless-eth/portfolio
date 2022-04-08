import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './home';
// import EducationStory from './education-story';

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    exact: true,
    name: 'About',
    component: Web2,
  },
  {
    path: '/achievements',
    exact: true,
    name: 'Achievements',
    component: Web3,
  },
];

function Navigation() {
  return (
    <Switch>
      {routes.map((route, idx) => (
        <Route
          key={idx}
          exact={route.exact}
          path={route.path}
          render={props => <route.component {...props} />}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  );
}

export default Navigation;
