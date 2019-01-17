import React, { Fragment } from 'react';
import { Link } from '@reach/router';
import { Helmet } from 'react-helmet';

const Contact = () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>test</title>
      <meta name="description" content="How to reach us." />
    </Helmet>
    <div>
      <h1>Contact  Page</h1>
      <Link to="/">to home</Link>
    </div>
  </Fragment>
);

export default Contact;
