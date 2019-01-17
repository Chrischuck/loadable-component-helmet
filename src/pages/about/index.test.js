import React from 'react';
import ReactDOM from 'react-dom';

import About from './index';

describe('<About />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(<About />, div);
  });
});
