import React, { Fragment } from 'react';
import { Link } from '@reach/router';
import { Helmet } from 'react-helmet';

const Home = () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>test</title>
      <meta name="description" content="SF's finest mountain bike shop." />
    </Helmet>
    <div>
      <h1>Home  Page</h1>
      <Link to="/about">to about</Link>
    </div>
  </Fragment>
);

export default Home;
