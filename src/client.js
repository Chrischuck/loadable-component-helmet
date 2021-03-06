import React from 'react';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';
import App from './app';


loadableReady(() => {
  const root = document.getElementById('root');
  hydrate(<App />, root);
});

if (module.hot) {
  module.hot.accept();
}
