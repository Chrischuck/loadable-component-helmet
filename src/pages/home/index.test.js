import React from 'react';
import ReactDOM from 'react-dom';

import Home from './index';

describe('<Home />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
  });
});
