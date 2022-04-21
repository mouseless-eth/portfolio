import * as React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from '../pages/home';
import Web2 from '../pages/web2';
import Web3 from '../pages/web3';
import About from '../pages/about';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/web2',
    name: 'Web2 Projects',
    component: Web2,
  },
  {
    path: '/web3',
    name: 'Web3 Projects',
    component: Web3,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
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
