import React from 'react';
import ReactDOM from 'react-dom';

import Header from './index';

describe('<Header />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
  });
});
