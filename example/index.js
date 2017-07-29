import React from 'react';

import { Provider } from 'mobx-react';

import postsStore from './postsStore';

import App from './app';

const stores = { postsStore };

const Index = () =>
  <Provider {...stores}>
    <App />
  </Provider>;

export default Index;
