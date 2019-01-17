import React from 'react';
import ReactDOM from 'react-dom';

import App from './index';

describe('<App />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
