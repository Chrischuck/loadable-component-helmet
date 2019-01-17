import React from 'react';
import { Location } from '@reach/router';

const Header = () => (
  <Location>
    {
      ({ location }) => (
        <div>
          location is
          { ` ${location.pathname}` }
        </div>
      )
    }
  </Location>
);

export default Header;
