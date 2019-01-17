import React, { Fragment } from 'react';
import { Link } from '@reach/router';
import { Helmet } from 'react-helmet';

const About = () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>test</title>
    </Helmet>
    <div>
      <h1>About  Page</h1>
      <Link to="/contact">to contact</Link>
    </div>
  </Fragment>
);

export default About;
