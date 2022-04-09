import * as React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/home';
import Web2 from '../pages/web2';
import Web3 from '../pages/web3';
// import EducationStory from './education-story';

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: Home,
  },
  {
    path: '/web2',
    exact: true,
    name: 'About',
    component: Web2,
  },
  {
    path: '/web3',
    exact: true,
    name: 'Achievements',
    component: Web3,
  },
];

function Navigation() {
  return (
    <Routes>
      {routes.map((route, idx) => (
        <Route
          key={idx}
          exact={route.exact}
          path={route.path}
          render={(props) => <route.component {...props} />}
        />
      ))}
      <Route path="/" />
    </Routes>
  );
}

export default Navigation;
