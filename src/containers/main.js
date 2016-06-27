import React from 'react';
import { Router } from 'react-router';
import { history } from '../constants';
import { requireAuth } from '../utils';
import Service from '../components/pages/service-list';
import Login from '../components/pages/login';
import Layout from '../components/layouts/layout';
import '../sass/reset.scss';


const routes = {
  component: 'div',
  childRoutes: [
    {
      path: '/',
      component: Layout,
      onEnter: requireAuth,
    },
    {
      path: '/services',
      component: Service,
      onEnter: requireAuth,
    },
    {
      path: '/login/',
      component: Login,
    },
  ],
};

function Main() {
  return (
    <Router history={history} routes={routes} />
  );
}

export default Main;
