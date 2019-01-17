import React from 'react';
import ReactDOM from 'react-dom';

import Contact from './index';

describe('<Contact />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Contact />, div);
  });
});
