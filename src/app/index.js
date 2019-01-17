import './index.css';

import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import loadable from '@loadable/component';

const Header = loadable(() => import('../components/header'));

const NotFound = loadable(() => import('../pages/notFound'));
const Home = loadable(() => import('../pages/home'));
const About = loadable(() => import('../pages/about'));
const Contact = loadable(() => import('../pages/contact'));

const App = () => (
  <Fragment>
    <Header fallback={<div>loading...</div>} />
    <Router>
      <NotFound default fallback={<div>loading...</div>} />
      <Home path="/" fallback={<div>loading...</div>} />
      <About path="/about" fallback={<div>loading...</div>} />
      <Contact path="/contact" fallback={<div>loading...</div>} />
    </Router>
  </Fragment>
);

export default App;
