import * as React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from '../pages/home';
import Web2 from '../pages/web2';
import Web3 from '../pages/web3';
// import EducationStory from './education-story';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/web2',
    name: 'About',
    component: Web2,
  },
  {
    path: '/web3',
    name: 'Achievements',
    component: Web3,
  },
];

function Navigation() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.toString()}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
}

export default Navigation;
