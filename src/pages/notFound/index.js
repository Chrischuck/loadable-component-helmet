import React, { Fragment } from 'react';
import { Link } from '@reach/router';
import { Helmet } from 'react-helmet';

const NotFound = () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>test</title>
      <meta name="description" content="SF's finest mountain bike shop." />
    </Helmet>
    <div>
      <h1>Not found</h1>
      <Link to="/">to Home</Link>
    </div>
  </Fragment>
);

export default NotFound;
